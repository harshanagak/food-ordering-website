import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should Search Res List with {pizza}", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchButton = screen.getByRole("button", { name: "Search" })

    const searchInput = screen.getByTestId("searchInput")

    // console.log(searchInput);

    fireEvent.change(searchInput, { target: { value: "pizza" } })

    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(2);

    expect(searchButton).toBeInTheDocument();
})

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", {
        name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(7);
});