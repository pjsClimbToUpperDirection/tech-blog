import writingStatusReducer from '../redux/reducer'
import {configureStore} from "@reduxjs/toolkit";

const writingStatusStore = configureStore({ // createStore 대신 사용이 권장됨
    reducer: writingStatusReducer
});

export default writingStatusStore;