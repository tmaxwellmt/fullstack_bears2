import React from 'react';
import Home from './Home';
import ViewBearsContainer from './ViewBearsContainer';
import ViewPostContainer from './PostBearsContainer';
import ViewEditContainer from './EditBearsContainer';
import Jumbotron from 'react-bootstrap';

var BearsApp = React.createClass({
  getInitialState: function () {
    return (
      {
        activeComp: 'home',
        activeID: null
      }
    )
  },
setActiveComp: function (field, val) {
  var newData = {};
  newData[field] = val;
  this.setState(newData);
},
renderProperComp: function () {
  if(this.state.activeComp === 'home') {
    return (<Home setActiveComp={this.setActiveComp} />);
  } else if (this.setActiveComp === 'viewAll') {
    return (<viewBearsContainer setActiveComp={this.setActiveComp} />);
  } else if (this.setActiveComp === 'postNew') {
    return (<viewBearsContainer setActiveComp={this.setActiveComp} />);
  } else if (this.setActiveComp === 'edit') {
    return (<viewBearsContainer setActiveComp={this.setActiveComp} />);
  }
},
render: function () {
  return (
    <div>
      {this.renderProperComp()}
    </div>
  )
}
});

export default BearsApp;
