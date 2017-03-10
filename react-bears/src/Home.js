import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Bears App</h1>
          <Button bsStyle="primary" onClick={()=> this.props.setActiveComp('activeComp', 'viewAll')}>View All Bears</Button>
          <Button bsStyle="primary" onClick={()=> this.props.setActiveComp('activeComp', 'postNew')}>Add Bears</Button>
        </Jumbotron>
      </div>
    );
  }
});
export default Home;
