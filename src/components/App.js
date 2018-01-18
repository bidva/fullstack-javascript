import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import ContestList from './ContestList';

const pushState = (obj, url) =>{
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    pageHeader: 'naming Contests',
    contests: this.props.data
  };

  fetchContest = (contestId) =>{
    pushState(
      { currentContestId: contestId},
      `/contest/${contestId}`);
  }
  render(){
    return(
      <div className="App">
        <Header message={this.state.pageHeader}/>
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array
};

export default App;
