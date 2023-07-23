import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';


it("should render a Add Count button", () => {
    // arrange act
    render(<App />)

    // assert
    const addCountButton = screen.getByText("Add Count")

    expect(addCountButton).toBeInTheDocument()

})

it("should render a count display", () => {
    // arrange act
    render(<App />)

    // assert
    const countDisplay = screen.getByText("Count is 0")

    expect(countDisplay).toBeInTheDocument()
})

it("should increment count when button is clicked", () => {
    // arrange
    render(<App />)

    // act
    const addCountButton = screen.getByText("Add Count")
    fireEvent.click(addCountButton)
    fireEvent.click(addCountButton)

    // assert
    const countDisplay = screen.getByText("Count is 2")
    expect(countDisplay).toBeInTheDocument()
})