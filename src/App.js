import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/Global'

import api from './services/api'

import { Wrapper, Form, Button, ResultContainer, User, Repositories, ErrorMessage } from './styles'

function App() {

  const [userInfo, setUserInfo] = useState({})
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [repositories, setRepositories] = useState([])
  const [responseError, setResponseError] = useState('')

  async function LoadData() {

    const response = await api.get(`/${username}/repos`)
    const { data } = response

    if (data.length === 0) {
      setResponseError('Nada Encontrado')
      setRepositories([])
      return
    }

    setRepositories(data)
    setResponseError('')
  }

  useEffect(() => {
    if (repositories.length !== 0) {
      const { owner: { login, avatar_url, html_url: url } } = repositories[0]

      setUserInfo({
        login,
        avatar_url,
        url
      })
    }

  }, [repositories])


  function InputHandler({ target: { value } }) {
    setUsernameError('')
    setUsername(value)
  }

  function SendHandler() {

    if (!ValuesTest())
      return

    
    LoadData()
    setTimeout(() => { setUsername('') }, 100)

    }

    function ValuesTest() {
      let pass = true
      if (username === '') {
        setUsernameError('Digite um username')
        pass = false
      }  
      return pass
    }

    return (
      <>
        <GlobalStyles />
        <Wrapper>

          <Form>
            <h2>Busca de Repositórios</h2>
            <p>{usernameError}</p>
            <input value={username} placeholder={'username'} onChange={InputHandler} />
            <Button type="button" onClick={SendHandler}>Buscar</Button>
          </Form>

          {
            responseError !== '' && (
              <>
                <ErrorMessage>
                  <h3>{responseError}</h3>
                  <p> 😢 </p>
                </ErrorMessage>
              </>
            )
          }

          {
            repositories.length !== 0 && (
              <ResultContainer>
                <User >
                  <img src={userInfo.avatar_url} alt="avatar" title={userInfo.login} />
                  <div>
                    <h4 onClick={() => { window.open(userInfo.url) }}> {userInfo.login} </h4>

                  </div>
                </User>
                <Repositories>
                  <ul>
                    {repositories.map((repositorie) => (
                      <li key={repositorie.id} onClick={() => { window.open(repositorie.html_url) }}>
                        <h3>{repositorie.name}</h3>
                        <p>{repositorie.description}</p>
                      </li>
                    ))}
                  </ul>
                </Repositories>
              </ResultContainer>
            )
          }

        </Wrapper>
      </>
    );
  }

  export default App
