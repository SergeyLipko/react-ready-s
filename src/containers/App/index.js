import React from 'react';
import { connect } from 'react-redux';
import { basicAction, loadData } from '../../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.updateLocalData('hey ho');
    this.props.loadDataFromServer();
  }

  render() {
    console.log(this.props.state);

    return (
      <div>
        Application
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  updateLocalData: data => dispatch(basicAction(data)),
  loadDataFromServer: () => dispatch(loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);