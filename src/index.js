import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"

import ExpenseDashboardPage from "./pages/ExpenseDashboardPage"

import "normalize.css"
import "./styles/styles.scss"

const AddExpensePage = () => <div>This is from add expense page</div>
const EditExpensePage = () => <div>This is from edit expense page</div>
const HelpPage = () => <div>This is from help page</div>
const NotFoundPage = () => (
    <div>
        404 = <Link to="/">Go Home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName="isActive">
            Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="isActive">
            Add Expense
        </NavLink>
        <NavLink to="/edit" activeClassName="isActive">
            Edit Expense
        </NavLink>
        <NavLink to="/help" activeClassName="isActive">
            Help
        </NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("root"))
