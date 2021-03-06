import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.

 
 I'll let you do this part on your own. 

 
 Just remember, `how do I `connect` my components to redux?`
 
 
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    if (this.props.isFetching) {
      return <h1>Loading smurfs...</h1>;
    }
    return (
      <div className="App">
        <SmurfForm />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
