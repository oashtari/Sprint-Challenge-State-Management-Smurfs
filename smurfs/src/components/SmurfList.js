import React from 'react';

import { connect } from 'react-redux';

import { getSmurfs } from '../actions';


const smurfsList = props => {

    return (
        <>
            <h2>SMURFS GO HERE:</h2>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.smurfs.map(smurf => (
                        <>
                            <div>{smurf.name}</div>
                            <div>{smurf.age}</div>
                            <div>{smurf.height}</div>
                        </>
                    ))
                )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(smurfsList)


