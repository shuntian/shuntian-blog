import React from 'react';
import PropTypes from 'prop-types';
import blogAPI from './api';

const propTypes = {

};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      content: ''
    };
  }

  componentDidMount() {
    blogAPI.listBlogs().then(res => {
      this.setState({
        isLoaded: true,
        content: res.data
      });
    }).catch((err) => {
      this.setState({
        isLoaded: false,
        content: 'Loading error...'
      })
    })
  }

  render() {
    const { isLoaded, content } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    }
    return (
      <div>{content}</div>
    );
  }
}

App.propTypes = propTypes;

export default App;
