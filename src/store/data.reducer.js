import {GET_DATA} from "../store/data.action";

const initialState = {
    information: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
}

export default dataReducer;