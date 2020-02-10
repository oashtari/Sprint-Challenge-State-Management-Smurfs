import React, { useState } from 'react';

import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

// import { Button, Input, FormGroup, Label, Col } from "reactstrap";

const NewSmurfForm = props => {

    const [form, setForm] = useState({ name: '', age: '', height: '' });

    const handleChange = e => {
        // setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = e => {
        // e.preventDefault();
        // props.addSmurf(form);
        // setForm({ name: '', age: '', height: '' });
    }


    const getDemSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    };

    return (
        <>
            {props.isFetchingSmurfs ? (
                <h2>Let's see some smurfs</h2>
            ) : (
                    <button color="primary" onClick={getDemSmurfs}>Fetch those Smurfs</button>
                )}

            <form onSubmit={handleSubmit}>
                <input name='name' placeholder="enter Name" onChange={handleChange} value={form.name}></input>
                <input name='age' placeholder="enter Age" onChange={handleChange} value={form.age}></input>
                <input name='height' placeholder="enter Height" onChange={handleChange} value={form.height}></input>
                <button type="submit">add new Smurf</button>



            </form>
        </>
    )
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetchingSmurfs: state.isFetchingSmurfs
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(NewSmurfForm)










