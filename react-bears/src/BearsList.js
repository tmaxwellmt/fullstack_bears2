import React from 'react';
import { Table } from 'react-bootstrap';

var BearsList = React.createClass({
  render () {
    this.props.bears.map(function (item) {
      return (<tr><td>item.name</td><td>item.species</td><td>item.age</td><td>item.weight</td><td>item.location</td><td>item.attitude</td></tr>)
    })
    return (
      <Table hover>
        <thead>
        </thead>
      </Table>
    )
  }
})
export default Bearslist;
