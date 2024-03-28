import React, { Component } from 'react'
import welcome from '../assets/welcome.png';
import DynamicMenu from './DynamicMenu'
import TrailsTable from './TrailsTable'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAddDynamicMenu : false,
    }
  }

  showAddDynamicMenu = () => {
    this.setState({showAddDynamicMenu: !this.state.showAddDynamicMenu})
  }

  onAddTrail = () => {
    this.props.addTrail(
      {
        name: '',
        type: '',
        release: '',
        imageURL: ''
      }
    );
    this.props.onLink('trails');
  }

  render () {
    const addMenuItems = [
      {name: 'Trail', onClick: () => this.onAddTrail() },
      {name: 'Badge'},
      {name: 'Standalone Badge'},
      {name: 'Import Content'}
    ]
    return(
      <div className='home'>
        <div className="title" >
          <h5 className='titleText' >WELCOME WILLARD</h5>
          <h2 className='subTitleText'>Keep on building!</h2>
        </div>
        <img src={welcome} className='welcome' />
        <div className='trails'>
          <div className='headerTrails' >
            <h2 className='titleTrails' >Created</h2>
            <div className='addSection'>
              <button
                onClick={() => this.showAddDynamicMenu()}
                className="slds-button slds-button_brand addButton"
              >
                Add
              </button>
              { this.state.showAddDynamicMenu &&
                <DynamicMenu
                  nubbinPosition='right'
                  containerClass='addTrailMenu'
                  items={addMenuItems}
                  onCloseMenu={() => this.showAddDynamicMenu()}
                />
              }
            </div>
          </div>
          <TrailsTable trails={this.props.trails}/>
        </div>
      </div>
    )
  }

}


export default Home;
