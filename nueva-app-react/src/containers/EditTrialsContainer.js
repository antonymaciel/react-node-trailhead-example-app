import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditTrials from '../components/EditTrials.js'
import Header from '../components/Header'
import { editTrail } from '../actions/trails'
import { fetchOptions } from '../actions/options'
import { login } from '../actions/user'

class EditTrialsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.options.length === 0) {
      this.props.fetchOptions()
    }
    if (!this.props.user.logged) {
      this.props.login('Willard Wagner', 'password')
    }
  }

  render() {
    const options = this.props.options;
    return (
      <div>
        <Header
          tabs={false}
          title='Trailmaker'
          imageURL={this.props.user.img}
          userName={this.props.user.user}
        />
        <EditTrials
          optionsPublic={options.length > 0 ? options[0] : []}
          optionsLevel={options.length > 0 ? options[1] : []}
          optionsProducts={options.length > 0 ? options[2] : []}
          optionsRoles={options.length > 0 ? options[3] : []}
          optionsTags={options.length > 0 ? options[4] : []}
          editTrail={ (trail) => this.props.editTrail(trail) }
          trail={this.props.trail}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trail: state.trails.length > 0 ? state.trails[state.trails.length - 1] :       {
          name: '',
          type: '',
          release: '',
          imageURL: ''
        },
  options: state.options,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchOptions: () => dispatch(fetchOptions()),
  editTrail: (trail) => dispatch(editTrail(trail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrialsContainer);
