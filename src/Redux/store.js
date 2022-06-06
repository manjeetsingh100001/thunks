import {createStore,applyMiddleware} from "redux";
import { loginReducer } from "./app/reducer";

import thunk from "redux-thunk";

  export const store = createStore(loginReducer,
    applyMiddleware(thunk))
    // console.log("state",store.getState())

// export default store;