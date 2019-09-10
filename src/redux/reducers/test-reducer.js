const SET_COUNT = 'APP/TEST/TEST_REDUCER/SET_COUNT';
const SET_FLAG = 'APP/TEST/TEST_REDUCER/SET_FLAG';

export const setCountAC = (count) => ({type: SET_COUNT, count});
export const setFlagAC = (flag) => ({type: SET_FLAG, flag});


const initialState = {
    count: 1,
    flag: false
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNT: {
            return {...state, count: state.count + 1}
        }
        case SET_FLAG: {
            return {...state, flag: !state.flag}
        }

        default:
            return {...state}
    }
};

export default testReducer