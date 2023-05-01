import { legacy_createStore as createStore } from "redux";

const initialState = {
    portfolios: [],
    portfolio: {}
}

function rootReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "portfolios/fetchSuccess":
            return {
                ...state,
                portfolios: payload
            }
        default:
            return state
    }
}

const store = createStore(rootReducer);

export default store;