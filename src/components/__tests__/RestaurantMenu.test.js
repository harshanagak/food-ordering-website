import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenuData.json"
import { act } from "react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("should load RestaurantMenu component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    })
    const recommendedCard = screen.getByText(/Recommended/);
    fireEvent.click(recommendedCard);
    const foodItems = screen.getAllByTestId("foodItems")
    expect(foodItems.length).toBe(13);

    const addBtn = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtn[0]);
    
    expect(screen.getByText("Cart ( 1 items )")).toBeInTheDocument();
    
    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart ( 2 items )")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cart ( 2 items )"))

    expect(screen.getAllByTestId("foodItems").length).toBe(15);
    
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }))
    
    expect(screen.getAllByTestId("foodItems").length).toBe(13);

    expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();

})