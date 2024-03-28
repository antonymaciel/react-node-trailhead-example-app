import React, { Component } from 'react'
import { Input } from '@salesforce/design-system-react';
import blueImage from '../assets/blueImage.jpg';
import SelectorDropdown from './SelectorDropdown'
import DynamicMenu from './DynamicMenu'

const addMenuItems = [
  {name: 'Trail'},
  {name: 'Badge'},
  {name: 'Standalone Badge'},
  {name: 'Import Content'}
]

class EditTrials extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAddDynamicMenu : false,
      imageURL : props.trail.imageURL === "" ? blueImage : props.trail.imageURL,
      title: props.trail.name,
      description: props.trail.type,
    }
  }



  showAddDynamicMenu = () => {
    this.setState({showAddDynamicMenu: !this.state.showAddDynamicMenu})
  }

  onChangeImage = (imageURL) => {
    this.setState({imageURL})
    this.props.editTrail({ ...this.props.trail, imageURL})
  }

  renderMenu = () => (
    <div>
        <h2 className="labelURLImage" >Paste a badge URL here</h2>
        <Input
          className="inputURLImage"
					assistiveText={{ label: 'My label' }}
					id="assistiveLabel-id"
					placeholder='Enter badge URL'
          onChange={(event) => this.onChangeImage(event.target.value )}
				/>
    </div>
  )

  handleChangeTitle = (event) => {
    const title =  event.target.value;
    this.setState({title: event.target.value});
    this.props.editTrail({ ...this.props.trail, "name" : title })
  }

  handleChangeDescription = (event) => {
    const description =  event.target.value;
    this.setState({description: event.target.value});
    this.props.editTrail({ ...this.props.trail, "type" : description})
  }

  renderTrialData = () => (
    <div>
      <div className="trialTextTitle">
        <span>TRIAL</span>
      </div>
      <div className="trialDataInput" >
        <div onClick={() => this.showAddDynamicMenu()}>
          <span className={"slds-avatar slds-avatar_circle " + (this.props.trail.imageURL === "" ? "circle_border" : "circle" ) }>
            <img src={this.state.imageURL} />
          </span>
        </div>
        { this.state.showAddDynamicMenu &&
          <DynamicMenu nubbinPosition='left' containerClass='editTrailMenu' onCloseMenu={() => this.showAddDynamicMenu() }>
            {this.renderMenu()}
          </DynamicMenu>
        }
        <div className='inputsSectionData'>
          <input
            id="inputTrialTitle"
            className='inputTrialTitle'
            placeholder='Enter Trial Title'
            onChange={(event) => this.handleChangeTitle(event)}
            value={this.state.title}
          />
          <input
            id="inputTrialDescription"
            className='inputTrialDescription'
            placeholder='Enter Trial Description'
            onChange={(event) => this.handleChangeDescription(event)}
            value={this.state.description}
          />
        </div>
      </div>
    </div>
  )


  renderButtons = () => (
    <div>
      <button className="slds-button slds-button_success trailButtons">...</button>
      <button className="slds-button slds-button_success trailButtons">Export</button>
      <button className="slds-button slds-button_success trailButtons">Preview</button>
    </div>
  )

  renderOptions = () => (
    <div className="EditTrialOptions" >
        {this.renderDropDown('Public/Internal', false, this.props.optionsPublic)}
        {this.renderDropDown('Level', false, this.props.optionsLevel)}
        {this.renderDropDown('Product', true, this.props.optionsProducts)}
        {this.renderDropDown('Role', true, this.props.optionsRoles)}
        {this.renderDropDown('Tag', true, this.props.optionsTags)}
    </div>
  )

  renderDropDown = (category, add, options) => (
    <SelectorDropdown category={category} enableAdd={add} options={options} />
  )


  render() {
    return (
      <div>
        <div className='editTrials'>
          <div className='editHeaderSection1'>
            <div>
              {this.renderTrialData()}
            </div>
            <div>
              {this.renderButtons()}
            </div>
          </div>
          <div>
            {this.renderOptions()}
          </div>
        </div>
        <div className="addModuleButtonContainer" >
          <button className="slds-button slds-button_neutral addModuleButton">+ Add a Module</button>
        </div>
      </div>
    );
  }

}


export default EditTrials
