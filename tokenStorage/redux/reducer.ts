const initialState = {
    value: ''
};
interface ActionOfTokenSetting {
    type: 'set/accessToken',
    payload: string
}

function TokenReducer(state = initialState, action: ActionOfTokenSetting) {
    switch (action.type) {
        // set/accessToken 이란 action 발생 시 value 갱신
        case 'set/accessToken':
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}

export default TokenReducer;
