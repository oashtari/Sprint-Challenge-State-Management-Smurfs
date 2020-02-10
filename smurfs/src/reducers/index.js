import { GET_SMURFS, LOAD_SMURFS, NO_SMURFS_ERROR } from '../actions';

const initialState = {
    smurfs: [
        {
            name: '',
            age: 0,
            height: '',
            id: 0
        }
    ],
    isFetchingSmurfs: false,
    error: ''


};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                isFetchingSmurfs: true,
                smurfs: []
            }
        case LOAD_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingSmurfs: false
            }
        case NO_SMURFS_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetchingSmurfs: false
            }
        default:
            return state;
    }
}


