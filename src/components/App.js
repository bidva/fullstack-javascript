import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import ContestList from './ContestList';
class App extends React.Component {
  state = {
    pageHeader: 'naming Contests',
    contests: this.props.data
  };

  render(){
    return(
      <div className="App">
        <Header message={this.state.pageHeader}/>
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

App.propTypes = {
  contests: PropTypes.array
};

export default App;
