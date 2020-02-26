import React, { Component } from 'react';
import axios from 'axios';
import PostForm from './PostForm';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {//Method for Fetching axios data from server..
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data
        })
      })
      .catch(error => console.log(error))
  }


  render() {//Render Method...

    let { posts } = this.state;

    if (posts.length === 0) {
      return <h1 className="display-1 text-center">Loading...</h1>

    } else {
      return (
        <div className="container">
          <h1 className="display-4 text-center">AXIOS Data Fetching (POST/GET)</h1>
          <PostForm />
          <br />
          <hr />

          <ul className="list-group">
            <h2>Get Data From AXIOS</h2>
            {posts.map(values => {
              return <li key={values.id} className="list-group-item">{values.title}</li>
            })}
          </ul>
        </div>
      )
    }

  }
}

export default App;
