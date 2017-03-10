import React from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';

var PostBearForm = function (props) {
  return (
    <div>
      <form>
        <FormControl type= "text" placeholder="name" value={props.bear.name} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="species" value={props.bear.species} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="age" value={props.bear.age} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="weight" value={props.bear.weight} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="attitude" value={props.bear.attitude} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="location" value={props.bear.location} onChangeHandler={(event) => props.onChangeHandler}/>

  )
}
export default PostBearForm;
