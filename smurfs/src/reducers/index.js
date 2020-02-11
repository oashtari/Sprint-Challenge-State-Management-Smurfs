import { GET_SMURFS, LOAD_SMURFS, NO_SMURFS_ERROR, ADD_SMURF, SMURF_ADDED_SUCCESS, SMURF_ADD_ERROR } from '../actions';

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
    error: '',
    isPostingSmurf: false,



};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {

        //FETCHING SMURFS
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

        // ADDING SMURFS
        case ADD_SMURF:
            return {
                ...state,
                isPostingSmurf: true,
                smurfs: []
            }
        case SMURF_ADDED_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPostingSmurf: false
            }
        case SMURF_ADD_ERROR:
            return {
                ...state,
                error: action.payload,
                isPostingSmurf: false
            }
        default:
            return state;
    }
}


