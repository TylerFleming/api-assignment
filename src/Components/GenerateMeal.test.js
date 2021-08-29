import { render, fireEvent, screen, queryByTitle, getByTitle, queryByTestId } from "@testing-library/react";
import { StyledMain } from "../Styles/Main.styles"
import { StyledMeal } from "../Styles/Meal.styles"

it('generates the meal plan', async () => {
    const { queryByTitle } = render(<StyledMain/>)
    const { queryByTestId } = render(<StyledMeal/>)
    const button = queryByTitle('generateMealButton')
    const input = queryByTitle('calorieInput')
    const meal = queryByTestId('meal')
    
    fireEvent.change(input, { target: {value: '2000'} })
    fireEvent.click(button)
    await expect(meal).toBeInTheDocument()

})