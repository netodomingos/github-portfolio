import React, { Component } from 'react';

import api from '../../services/Api';

import { Container, SecondContainer, LastContainer, BackButton } from './styles';

import { MdLocationOn, MdPerson } from 'react-icons/md'
import { TiDocument } from 'react-icons/ti'

import { Link } from 'react-router-dom'

export default class profile extends Component{
  state = {
    profile: {}
  }

  async componentDidMount(){
    const { match } = this.props

    const profileName = decodeURIComponent(match.params.user)

    const response = await api.get(`/${profileName}`)

    const data = {
      login: response.data.login,
      url: response.data.html_url,
      avatar: response.data.avatar_url,
      name: response.data.name,
      location: response.data.location,
      bio: response.data.bio,
      repos: response.data.public_repos,
      followers: response.data.followers
    }
    
    this.setState({
      profile: {...data}
    })
    console.log(this.state.profile);
    
  }

  render(){ 
    const { login, url, avatar, name, location, bio, repos, followers } = this.state.profile
    return (
      <Container>
        <a href={url}>{login}</a>
        <img src={avatar} alt='avatar'/>
        <h1>{name}</h1>
        <SecondContainer>
          <p>{bio}</p>
          <p>
            <MdLocationOn />
            {location}
          </p>
        </SecondContainer>
        <LastContainer>
            <p>
              <TiDocument/>
              { repos } Repositories
            </p>
            <p>
              <MdPerson/>
              { followers } Followers
            </p>
        </LastContainer>
        <Link to='/'>
          <BackButton>
            Voltar para o menu
          </BackButton>
        </Link>
      </Container>
    );
  }
}
