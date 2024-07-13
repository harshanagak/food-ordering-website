import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Header from "../Header"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it("should render the Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument()
})