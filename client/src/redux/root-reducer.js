import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { employeeReducer } from "./reducers/EmployeeReducer";


export const rootReducer = combineReducers({
    authReducer,
    employeeReducer
})