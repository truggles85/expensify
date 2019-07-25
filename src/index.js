import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import ExpenseDashboardPage from "./pages/ExpenseDashboardPage"

import "normalize.css"
import "./styles/styles.scss"

const AddExpensePage = () => <div>This is from add expense page</div>
const EditExpensePage = () => <div>This is from edit expense page</div>
const HelpPage = () => <div>This is from help page</div>

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("root"))
