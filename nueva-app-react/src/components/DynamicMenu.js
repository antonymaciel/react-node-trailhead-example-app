import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class DynamicMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
   document.removeEventListener('click', this.handleClick, false);
 }

 handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.onCloseMenu();
    }
  }

 render () {
    const classNubbin = 'slds-nubbin_top-' + this.props.nubbinPosition; // right/left
    const containerClass = this.props.containerClass;
    return (
      <section
        className={"slds-popover " + classNubbin + " slds-dynamic-menu " + containerClass}
        role="dialog" aria-label="My Favourites"
        aria-describedby="dialog-body-id-4"
      >
        <ul>
          { this.props.children ?
              <li>
                <div className="slds-p-vertical_xx-small slds-size_1-of-1">
                  { this.props.children }
                </div>
              </li>
              :
              this.props.items.map( (item, index) =>
              <li>
                <button onClick={() => item.onClick && item.onClick()} className="slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1">
                  <div className="itemDynamicMenu">
                    {item.name}
                  </div>
                </button>
              </li>
          ) }
          </ul>
      </section>
    )
    }
  }

export default DynamicMenu
