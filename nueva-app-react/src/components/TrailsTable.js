import React from 'react'
import { Button } from '@salesforce/design-system-react';
import dropDownArrow from '../assets/drop_down_arrow.png';
import DynamicMenu from './DynamicMenu'


const trailMenuItems = [
  {name: 'Edit' },
  {name: 'Preview'},
  {name: 'Export to Version Control'}
]

class TrailsTable extends React.Component {
  constructor(props){
    super(props);

    const showTrailDynamicMenu = [];
    this.state = {
      showTrailDynamicMenu,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trails !== nextProps.trails ) {
      const showTrailDynamicMenu = [];
      nextProps.trails.map( (trail, index) => {
          showTrailDynamicMenu[index] = false
        }
      )
      this.setState({ showTrailDynamicMenu })
    }
  }

  showTrailDynamicMenu = (index) => {
    const showTrailDynamicMenu = [ ...this.state.showTrailDynamicMenu];
    showTrailDynamicMenu[index]= !showTrailDynamicMenu[index];
    this.setState({ showTrailDynamicMenu })
  }

  render() {
    return (
      <table className="slds-table slds-table_bordered slds-table_cell-buffer">
        <thead>
          <tr className="slds-text-title_caps">
            <th scope="col">
              <div className="slds-truncate rowTable" title="Name">Name</div>
            </th>
            <th scope="col">
              <div className="slds-truncate rowTable" title="Type">Type</div>
            </th>
            <th scope="col">
              <div className="slds-truncate rowTable" title="Release">Release</div>
            </th>
            <th scope="col">
              <div className="slds-truncate rowTable" title="Stage"/>
            </th>
          </tr>
        </thead>
        <tbody>
          { this.props.trails.length > 0 && this.props.trails.map( (trail, index) =>
            <tr>
              <th scope="row" data-label="Opportunity Name">
                <div className="slds-truncate rowTable" title={trail.name}>
                  <span className="slds-avatar slds-avatar_circle trailImage">
                    <img src={trail.imageURL}  alt="user" />
                  </span>
                  {trail.name}
                </div>
              </th>
              <td data-label="Account Name">
                <div className="slds-truncate rowTable" title={trail.type}>{trail.type}</div>
              </td>
              <td data-label="Close Date">
                <div className="slds-truncate rowTable" title={trail.release}>{trail.release}</div>
              </td>
              <td data-label="Prospecting">
                <div className="simpleDropDownbutton">
                  <Button onClick={() => this.showTrailDynamicMenu(index)}  className="DropDownbuttonDimensions">
                    <img src={dropDownArrow} />
                  </Button>
                </div>
                { this.state.showTrailDynamicMenu[index] &&
                  <DynamicMenu
                    nubbinPosition='right'
                    containerClass='TrailMenu'
                    items={trailMenuItems}
                    onCloseMenu= { () => this.showTrailDynamicMenu(index) }
                  />
                }
              </td>
            </tr>
          ) }
        </tbody>
      </table>
    )
  }
}

export default TrailsTable
