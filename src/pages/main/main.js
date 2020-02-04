import React, { Component } from 'react';

import { Container, Form, SubmitButton } from './styles';
import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai'

import { Link } from 'react-router-dom'

// import Api from '../../services/Api'

export default class main extends Component {
  state = {
    user: '',
  }

  handleInputUser = event => {
    this.setState({
      user: event.target.value
    })
  }

  render(){
    return (
      <Container>
          <h1>
          <AiFillGithub/> Github Portifolio</h1>
          <p>Github Profile Viewer</p>
              <Form>
                  <input 
                    type='text' 
                    placeholder='Github Login'
                    value={this.state.user}
                    onChange={this.handleInputUser}
                  />
                  <Link to={`/profile/${encodeURIComponent(this.state.user)}`}>
                    <SubmitButton >
                        <AiOutlineSearch/>
                    </SubmitButton>
                  </Link>
              </Form>
      </Container>
    );
  }
}
