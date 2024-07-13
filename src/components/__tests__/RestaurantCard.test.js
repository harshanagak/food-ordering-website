import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/RestaurantCardMock.json"

it("should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Chinese Wok")

    expect(name).toBeInTheDocument();
})

it("should render RestaurantCard component with promoted Label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    render(<RestaurantCardPromoted resData={MOCK_DATA} />)

    const name = screen.getByText("Promoted")

    expect(name).toBeInTheDocument();
})