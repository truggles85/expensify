import React from "react"
import { NavLink } from "react-router-dom"

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

export default Header
