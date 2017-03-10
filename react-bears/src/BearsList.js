import React from 'react';
import { Table, Button } from 'react-bootstrap';

var BearsList = React.createClass({
  render () {
    var bears = this.props.bears.map(function (item) {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.species}</td>
          <td>{item.age}</td>
          <td>{item.weight}</td>
          <td>{item.location}</td>
          <td>{item.attitude}</td>
          <td><Button bsStyle="primary" onClick={()=> this.props.deleteBearHandler(item._id)}>Delete</Button></td>
          <td><Button bsStyle="primary" onClick={()=> this.props.updateBearHandler(item._id)}>Update</Button></td>
        </tr>);
    })
    return (
      <div>
        <h1>Table of Bears</h1>
        <Table hover>
          <thead>
            <tr>
              <th><strong>Name</strong></th>
              <th><strong>Species</strong></th>
              <th><strong>Age</strong></th>
              <th><strong>Weight</strong></th>
              <th><strong>Attitude</strong></th>
              <th><strong>Action</strong></th>
              </tr>
          </thead>
          <tbody>
            {bears}
          </tbody>
        </Table>
      </div>
    )
  }
})
export default BearsList;
