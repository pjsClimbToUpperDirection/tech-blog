const initialState = {
    value: undefined // 초기 랜더링 시 1로 초기화되도록 구현
};
interface postFormat {
    post_id: number,
    writer: string,
    title: string,
    content: string,
    created_date: string,
    updated_date: string
}
interface ActionOfPostListStatusSetting {
    type: 'set/postListStatusStore',
    payload: postFormat[]
}

function PostListStatusReducer(state = initialState, action: ActionOfPostListStatusSetting) {
    switch (action.type) {
        // 'set/postListStatusStore' 이란 action 발생 시 value 갱신
        case 'set/postListStatusStore':
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}

export default PostListStatusReducer;
