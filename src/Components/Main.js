import { useState } from 'react'
import { StyledMain } from '../Styles/Main.styles'
import { StyledMeal } from '../Styles/Meal.styles'

const Main = ({className}) => {

    const API = ''

    const [ calories, setCalories ] = useState("")
    const [ meals, setMeals ] = useState([])
    const [ totalCalories, setTotalCalories] = useState("")
    const updateCalories = (e) => {
        let calories = e.target.value
        setCalories(calories)
    }

    const generateMeals = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${API}&timeFrame=day&targetCalories=${calories}`)
        const data = await res.json()
        let mealsObject = Object.fromEntries(Object.entries(data))
        let mealsObjectArray = Object.entries(mealsObject)
        let mealsArray = [...mealsObjectArray[0][1]]
        let totalDailyCalories = mealsObjectArray[1][1]['calories']
        setMeals(mealsArray)
        setTotalCalories(totalDailyCalories)
    }


    return (
       <main className={className}>
            <form onSubmit={generateMeals}>
                <div className="form-text">
                    <span className="text text--dark text--small">Calorie Goal For Today (a minimum of 1200 calories)</span>
                </div>
                <label htmlFor="calorieInput">Calories</label>
                <input className="text" onChange={updateCalories} value={calories} type="number" id="calorieInput" min="1200" placeholder="1800" />
                 <button className="text text--light">Generate Meals</button>
            </form>

            <section>

                <div className="total-cals">
                    {
                        !totalCalories ? '' : <span className="text">Total Calories: {totalCalories}<span className="text text--small"> kcal</span></span>
                    }
                </div>

                <div className="meal-container">
                {
                    meals.map((meal, index) => {
                        const { id, title, sourceUrl } = meal
                        return <StyledMeal key={index} id={id} title={title} link={sourceUrl} />
                    })
                }
                </div>
            </section>

       </main>
    )
}

export default Main
