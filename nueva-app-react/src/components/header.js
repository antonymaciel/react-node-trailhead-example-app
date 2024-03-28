import React, { Component } from 'react'
import DynamicMenu from './DynamicMenu'
import Tabs from './Tabs'
import logo from '../assets/traiheadLogo.svg';
import user from '../assets/user2.jpg';

const headerMenuItems = [
  {name: 'Trailhead'},
  {name: 'Log out'}
]

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      showProfileDynamicMenu : false
    }
  }

  showProfileDynamicMenu = () => {
    this.setState({showProfileDynamicMenu: !this.state.showProfileDynamicMenu})
  }



  render() {
    return (
      <div className='header' >
        <div className='top' >
          <div className='left'>
            <img src={logo} className='logo' />
            { this.props.title &&
                <h6 className="headerTitle">{this.props.title}</h6>
            }
            { this.props.tabs &&
              <Tabs onChangeTab={this.props.onChangeTab} selectedTab={this.props.selectedTab}/>
            }
          </div>
          <div className="ProfileContainer" onClick={() => this.showProfileDynamicMenu()}>
            <p className="UserName">
              { this.props.userName }
            </p>
            <span className="slds-avatar slds-avatar_circle">
              <img src={this.props.imageURL}  alt="user" />
            </span>
            { this.state.showProfileDynamicMenu &&
              <DynamicMenu
                nubbinPosition='right'
                containerClass='ProfileMenu'
                items={headerMenuItems}
                onCloseMenu={() => this.showProfileDynamicMenu() }
              />
            }
          </div>
        </div>

      </div>
    );
  }

}

//
// <Tabs id="tabs-example-default" onSelect={(selected) => alert(selected) } variant='default' className="tabsPosition">
//   <TabsPanel label="Content"/>
//   <TabsPanel label="Releases"/>
// </Tabs>

export default Header
