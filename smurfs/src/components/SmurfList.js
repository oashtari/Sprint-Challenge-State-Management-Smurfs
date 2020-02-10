import React from 'react';

import { connect } from 'react-redux';

import { getSmurfs } from '../actions';


const smurfsList = props => {

    return (
        <>
            <h2>SMURFS GO HERE</h2>

            {/* {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.siliconValley.map(episode => (
                        <>
                            <div>{episode.name}</div>
                            <div>{episode.airdate}</div>
                        </>
                    ))
                )} */}
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(smurfsList)


