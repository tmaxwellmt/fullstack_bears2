import React from 'react';
import $ from 'jquery';
import PostBearForm from './EditBearForm';

var EditBearsContainer = React.createClass({
  getInitialState: function () {
    return (
      {
        name: null;
        species: null;
        age: null;
        location: null;
        attitude: null;
        weight: null;
      }
    );
  },
  componentWillMount: function () {
    getBearsFromServer();
  },
  getBearsFromServer: function () {
    $.ajax({
      url: '/api/bears/' + this.props.bear,
      method: 'GET',
      data: this.state
    }).done(function (data) {
      self.setState(data);
    });
  },
  onChangeHandler: function (feild, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
  },
  onSubmitHandler: function () {
    var self = this;
    $.ajax({
      url: './api/bears' + this.props.bear,
      method: 'PUT',
      data: this.state
    }).done(function (data) {
      console.log(data);
      self.props.setActiveComp('activeComp', 'viewAll');
    });
  },
var EditBearsContainer = React.createClass({
  render () {
    return (
      <div>
        <EditBearsContainer bear={this.state} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
      </div>
    )
  }
})
export default EditBearsContainer;
