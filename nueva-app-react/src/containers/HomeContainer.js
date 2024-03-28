import React, { Component } from 'react'
import { connect } from 'react-redux';
import HomeTrials from '../components/Home.js'
import Header from '../components/Header'
import { fetchTrails, addTrail } from '../actions/trails'
import { login } from '../actions/user'

class HomeTrialsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0,
    }
    this.onLink = this.onLink.bind(this)
  }


  componentWillMount() {
    if (this.props.trails.length === 0) {
      this.props.fetchTrails()
    }
    if (!this.props.user.logged) {
      this.props.login('Willard Wagner', 'password')
    }
  }

  onChangeTab = (tabIndex) => {
    this.setState( {selectedTab: tabIndex} )
  }

  onLink= (path) => (
      this.props.history.push(
      {
        pathname: '/' + path,
        search: '',
        state: { detail: 'nada' }
      }
    )
  )

  render() {
    return (
      <div>
        <Header
          onLink={(path) => this.onLink(path)}
          tabs={true}
          selectedTab={this.state.selectedTab}
          onChangeTab={(tabIndex) => this.onChangeTab(tabIndex)}
          imageURL={this.props.user.img}
          userName={this.props.user.user}
        />
        { this.state.selectedTab === 0 ?
          <HomeTrials
            trails={this.props.trails}
            onLink={(path) => this.onLink(path)}
            addTrail={(newTrail) => this.props.addTrail(newTrail)}
          />
        :
          <h6>Releases</h6>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  trails: state.trails,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchTrails: () => dispatch(fetchTrails()),
  addTrail: (trail) => dispatch(addTrail(trail)),
  login: (user, pass) => dispatch(login(user, pass)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeTrialsContainer);
