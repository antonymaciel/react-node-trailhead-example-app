import React, { Component } from 'react'

class Tabs extends Component {
  constructor(props){
    super(props)
  }

  selectTab = (index) => {
    this.props.onChangeTab(index)
  }


  render() {
    return (
      <div className='tabs'>
        <div className="slds-tabs_default">
          <ul className="slds-tabs_default__nav" role="tablist">
            <li
              className={"slds-tabs_default__item " + (this.props.selectedTab === 0 ? "slds-is-active" : "")}
              title="Item One"
              role="presentation"
            >
                <a className="slds-tabs_default__link" onClick={() => this.selectTab(0)} role="tab" tabindex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">
                  Content
                </a>
            </li>
            <li
              className={"slds-tabs_default__item " + (this.props.selectedTab === 1 ? "slds-is-active" : "")}
              title="Item Two"
              role="presentation"
            >
              <a className="slds-tabs_default__link" onClick={() => this.selectTab(1)} role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">
                Releases
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Tabs
