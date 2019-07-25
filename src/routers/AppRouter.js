import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import ExpenseDashboardPage from "../pages/ExpenseDashboardPage"
import CreateExpensePage from "../pages/CreateExpensePage"
import EditExpensePage from "../pages/EditExpensePage"
import HelpPage from "../pages/HelpPage"
import NotFoundPage from "../pages/NotFoundPage"
import Header from "../components/Header"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage} />
                <Route path="/create" component={CreateExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
