import React from 'react';
import $ from 'jquery';
import PostBearForm from './PostBearForm';

var PostBearsContainer = React.createClass({
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
  onChangeHandler: function (feild, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
  },
  onSubmitHandler: function () {
    var self = this;
    $.ajax({
      url: './api/bears',
      method: 'POST',
      data: this.state
    }).done(function (data) {
      console.log(data);
      self.props.setActiveComp('activeComp', 'viewAll');
    });
  },
    render (){
      return (
      <div>
        <PostBearForm onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
      </div>
    )
  }
})
export default PostBearsContainer;
