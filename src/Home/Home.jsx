import React, { Component } from 'react';
import './Home.css'

import Title from '../Title/Title';
import Todo from '../Todo/Todo';

class Home extends Component {
  render() { 
    return (
      <div className="home">
        <Title>Adicionar item</Title>
        <Todo/>
      </div>
    );
  }
}
 
export default Home;