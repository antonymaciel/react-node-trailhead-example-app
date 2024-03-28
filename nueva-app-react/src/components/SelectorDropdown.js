import React from 'react';
import createReactClass from 'create-react-class';
import {
  Button,
  DropdownTrigger,
  Dropdown,
  IconSettings } from '@salesforce/design-system-react';
import newIcon from '../assets/new.png';
import dropDownArrow from '../assets/drop_down_arrow.png';


class SelectorDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    }
    this.selectOption = this.selectOption.bind(this)
  }

  selectOption(selected){
    this.setState({selected})
  }

	render () {
    const label=  this.props.options && this.props.options.length > 0 ? this.props.options[this.state.selected].label : "";
		return (
        <div className='EditTrailOption' >
          <h1 className='OptionTrailTitle' >{this.props.category}{this.props.enableAdd ? 's': ''}</h1>
  				<Dropdown
  					tabIndex="-1"
  					align="left"
  					options={this.props.options ? this.props.options  : [] }
            onSelect = {(option, index) => this.selectOption(index.optionIndex)}
  				>
  					<DropdownTrigger>
  						<Button
  							className="dropdownbutton"
  							label={label}
  						>
                <div className="iconDropDown">
                  <img src={dropDownArrow} />
                </div>
              </Button>
  					</DropdownTrigger>
  				</Dropdown>
          { this.props.enableAdd &&
            <div className="addTrial">
              <img src={newIcon} className="addIcon" />
              <p>Add {this.props.category}</p>
            </div>
          }
        </div>
		);
	}
}

export default SelectorDropdown
