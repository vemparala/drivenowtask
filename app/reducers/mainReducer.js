const initialState = {
    data: []
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {

    case 'FETCH_DATA':
        return Object.assign({}, state, action.payload);
   
    default:
        return state;
    }
};

export default mainReducer;
