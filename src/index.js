import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import ExpenseDashboardPage from "./pages/ExpenseDashboardPage"

import "normalize.css"
import "./styles/styles.scss"

const AddExpensePage = () => <div>This is from add expense page</div>
const EditExpensePage = () => <div>This is from edit expense page</div>
const HelpPage = () => <div>This is from help page</div>
const NotFoundPage = () => <div>404</div>

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("root"))
