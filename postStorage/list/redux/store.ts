import PostListStatusReducer from '../redux/reducer'
import {configureStore} from "@reduxjs/toolkit";

const PostListStatusStore = configureStore({ // createStore 대신 사용이 권장됨
    reducer: PostListStatusReducer
});

export default PostListStatusStore;