import React from 'react';
import $ from 'jquery';
import BearsList froms './Bearslist';

var ViewBearsContainer = React.createClass({
  getInitialState: function () {
    return(
      {
        bears: null
      }
    )
  },
  componentWillMount: function () {
    this.getBearsFromServer();
  },
  getBearsFromServer: function () {
    var self = this;
    $.ajax({
      url: '/api/bears',
      method: 'Get'
    }).done(function (data) {
      console.log(data);
      self.setState({bears: data});
    })
  },
  deleteBearHandler: function (id) {
    $.ajax({
      url: '/api/bears' + id,
      method: 'Delete'
    }).done(function (data) {
      console.log("deleted bear");
    });
  },
  updateBearHandler: function (id) {
    this.props.setActiveComp("activeID", id);
    this.props.setActiveComp("activeID", id);
  }

  render () {
    return (
      <div>
        <h1>This is where we view the Bears</h1>
      </div>
    )
  }
})
export default ViewBearsContainer;
