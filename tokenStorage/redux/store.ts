import TokenReducer from '../redux/reducer'
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({ // createStore 대신 사용이 권장됨
    reducer: TokenReducer
});

export default store;
