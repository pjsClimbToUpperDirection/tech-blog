import PageNumReducer from '../redux/reducer'
import {configureStore} from "@reduxjs/toolkit";

const LastChapterStatusStore = configureStore({ // createStore 대신 사용이 권장됨
    reducer: PageNumReducer
});

export default LastChapterStatusStore;