import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const LOAD_SMURFS = 'LOAD_SMURFS';
export const NO_SMURFS_ERROR = 'NO_SMURFS_ERROR';

export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ADDED_SUCCESS = 'SMURF_ADDED_SUCCESS';
export const SMURF_ADD_ERROR = 'SMURF_ADD_ERROR';


export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });

    setTimeout(() => {
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log(res);
                dispatch({ type: LOAD_SMURFS, payload: res.data })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: NO_SMURFS_ERROR, payload: "no smurfs for you" })
            })
    }, 2000)
}

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF });

    setTimeout(() => {
        axios
            .post(`http://localhost:3333/smurfs`, smurf)
            .then(res => {
                console.log(res);
                dispatch({ type: SMURF_ADDED_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: SMURF_ADD_ERROR, payload: "couldn't add your smurf" })
            })
    }, 1000)
}