import React, { Component } from 'react';

import { Container, Form, SubmitButton } from './styles';
import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import Api from '../../services/Api'

export default class main extends Component {
  state = {
    user: '',
    profileUser: [],
  }

  handleInputUser = event => {
    this.setState({
      user: event.target.value
    })
  }

  handleProfileUser = async event => {
    event.preventDefault()

    const { user, profileUser } = this.state

    const response = await Api.get(`/${user}`)

    const data = {
      login: response.data.login,
      avatar: response.data.avatar_url,
      name: response.data.name,
      location: response.data.location,
      bio: response.data.bio,
      repos: response.data.public_repos,
      follow: response.data.followers
    }

    this.setState({
      profileUser: [ ...profileUser, data ],
      user: '',
    })

    console.log(this.state.profileUser);
    
  }


  render(){
    return (
      <Container>
          <h1>
          <AiFillGithub/> Github Portifolio</h1>
          <p>Github Profile Viewer</p>
              <Form onSubmit={this.handleProfileUser}>
                  <input 
                    type='text' 
                    placeholder='Github Login'
                    value={this.state.user}
                    onChange={this.handleInputUser}
                  />
                  {/* <Link> */}
                    <SubmitButton >
                        <AiOutlineSearch/>
                    </SubmitButton>
                  {/* </Link> */}
              </Form>
      </Container>
    );
  }
}
