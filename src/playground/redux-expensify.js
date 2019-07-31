import React from "react"
import { createStore, combineReducers } from "redux"

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

//EXPENSES REDUCER
const expensesReducer = (state = [], action) => {
    switch (action.type) {
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

console.log(store.getState())

const ReduxExpensify = () => {
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
