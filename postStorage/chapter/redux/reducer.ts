const initialState = {
    value: 0 // 초기 랜더링 시 1로 초기화되도록 구현
};
interface ActionOfChapterStatusSetting {
    type: 'set/lastChapterStatusStore',
    payload: number
}

function LastChapterStatusStoreReducer(state = initialState, action: ActionOfChapterStatusSetting) {
    switch (action.type) {
        // 'set/lastChapterStatusStore' 이란 action 발생 시 value 갱신
        case 'set/lastChapterStatusStore':
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}

export default LastChapterStatusStoreReducer;
