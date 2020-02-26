import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

export default class PostForm extends Component {//Component...

    state = {///State...,
        title: '',
        body: '',
        userId: '1211',
        isSubmited: false,
        error: false
    }

    changeHandler = (event) => {//Change Handler Method...
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (e) => {//Submit Method...
        //Not To Reloading the page...  
        e.preventDefault()

        //AXIOS post data with fake request with form submite..
        axios.post(`${BASE_URL}/posts`, {
            title: this.state.title,
            body: this.state.body,
            userId: this.state.userId
        })
            .then(res => {
                this.setState({
                    isSubmited: true,
                    error: false
                })
                console.log(res)//Also Can See res.data to Collect just response>data...
            })
            .catch(error => {
                this.setState({
                    isSubmited: false,
                    error: true
                })
                console.log(error)
            })
    }


    render() {//Rendering Method...
        return (
            <form onSubmit={this.submitHandler}>
                <h2>POST Data to AXIOS</h2>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder='Type Your Title'
                        className='form-control'
                        name='title'
                        value={this.state.title}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">Write Bio</label>
                    <textarea
                        name='body'
                        cols="20"
                        rows="10"
                        className='form-control'
                        placeholder='Type Your Bio Here'
                        value={this.state.body}
                        onChange={this.changeHandler}
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Submit</button>

                {this.state.isSubmited && <h1 className="display-4">Form Submited Successfully!</h1>}
                {this.state.error && <h1 className='display-4'>Error Occured!!!</h1>}
            </form>
        )
    }
}
