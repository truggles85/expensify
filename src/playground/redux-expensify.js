import React from "react"
import { createStore, combineReducers } from "redux"
import uuid from "uuid"

const ReduxExpensify = () => {
    // ADD_EXPENSE
    const addExpense = ({
        description = "",
        note = "",
        amount = 0,
        createdAt = 0,
    } = {}) => ({
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt,
        },
    })

    // REMOVE_EXPENSE
    const removeExpense = ({ id } = {}) => ({
        type: "REMOVE_EXPENSE",
        id,
    })
    // EDIT_EXPENSE
    // SET_TEXT_FILTER
    // SORT_BY_DATE
    // SORT_BY_AMOUNT
    // SET_START_DATE
    // SET_END_DATE

    //EXPENSES REDUCER
    const expensesReducer = (state = [], action) => {
        switch (action.type) {
            case "ADD_EXPENSE":
                return [...state, action.expense]
            case "REMOVE_EXPENSE":
                return state.filter(({ id }) => id !== action.id)
            default:
                return state
        }
    }

    //FILTERS REDUCER
    const filtersReducerDefaultState = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    }

    const filtersReducer = (state = filtersReducerDefaultState, action) => {
        switch (action.type) {
            default:
                return state
        }
    }

    //STORE
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        })
    )

    store.subscribe(() => {
        console.log(store.getState())
    })

    const expenseOne = store.dispatch(
        addExpense({
            description: "Rent",
            amount: 100,
        })
    )
    const expenseTwo = store.dispatch(
        addExpense({
            description: "Coffee",
            amount: 300,
        })
    )

    store.dispatch(removeExpense({ id: expenseOne.expense.id }))

    const demoState = {
        expenses: [
            {
                id: "random string of characters",
                description: "January Rent",
                note: "This was the final payment for that address",
                amount: 54500,
                createdAt: 0,
            },
        ],
        filters: {
            text: "rent",
            sortBy: "amount", //date or amount
            startDate: undefined,
            endDate: undefined,
        },
    }

    return <div>ReduxExpensify component</div>
}

export default ReduxExpensify
