import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const LOAD_SMURFS = 'LOAD_SMURFS';
export const NO_SMURFS_ERROR = 'NO_SMURFS_ERROR';


export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });

    setTimeout(() => {
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log(res);
                // dispatch({ type: LOAD_SMURFS, payload: res.data._embedded.episodes })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: NO_SMURFS_ERROR, payload: "no smurfs for you" })
            })
    }, 500)
}




// export const getJobs = () => dispatch => {
//     dispatch({ type: GET_JOBS });

//     setTimeout(() => {
//         axios
//             .get(`https://jobs.github.com/positions.json?search=python`)
//             .then(res => {
//                 console.log(res.data);
//                 dispatch({ type: LOAD_JOBS, payload: res.data });
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch({ type: SHOW_ERROR, payload: "damn API is not working" });
//             });
//     }, 1000);
// };

