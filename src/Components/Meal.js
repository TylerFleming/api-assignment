import { StyledMeal } from "../Styles/Meal.styles"

export const Meal = ({className, id, link, title}) => {
    return (
        <div className={`${className} meal`}>
            <a className="meal__link" target="_blank" href={link} rel="noreferrer">
                <img src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} alt={title} className="meal__img" />
                <div className="meal__info">
                    <div className="text text--small text--light meal__info__title">
                        {title}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Meal
