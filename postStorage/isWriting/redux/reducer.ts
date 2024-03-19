const initialState = {
    value: {
        title: "",
        content: ""
    }
};
interface writingStatusSetting {
    type: 'set/writingStatus',
    payload: {
        title: string,
        content: string
    }
}

function writingStatusReducer(state = initialState, action: writingStatusSetting) {
    switch (action.type) {
        case 'set/writingStatus':
            return {
                ...state,
                post: action.payload
            };
        default:
            return state;
    }
}

export default writingStatusReducer;
