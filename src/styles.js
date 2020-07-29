import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100vh;
    padding: 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.div`

padding: 12px;
width: 250px;
background-color: #D4D8D8;
border-radius: 8px;
height: 150px;

  h2{
    font-size: 18px;
    margin-bottom: 12px;
    color: #1D2020;
  }
  input{
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 8px;
    border: transparent;

  }

  p{
    color: #C43408;
    position: absolute;
    font-size: 12px;
    margin-top: -3px;
  }

  box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09);


`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: -3px;
  background-color: #7FB800;
  border: 0px solid transparent;
  border-radius: 8px;
  transition: background 0.1s;
  color: #1D2020;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;


  &:hover{
    background-color: #628F00;
  }
  &:active{
    background-color: #F4F5F5;

  }

`

export const ErrorMessage = styled.div`

padding: 13px;
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 65%;
  border-radius: 8px;
  background-color: #D4D8D8;
  color: #1D2020;
  height: 130px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  h3{
    margin-top: 15px;
  }

  p{
    margin-top: 5px;
    font-size: 44px;
  }

`
export const ResultContainer = styled.div`
  margin-top: 42px;
  width: 85%;
  border-radius: 8px;
  background-color: #D4D8D8;
  
  overflow-y: scroll;

`

export const User = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;

  img{
    width: 65px;
    height: 65px;
    border-radius: 8px;
  }

  div{
    margin: 8px;

    h4{
              color: #1D2020;
      cursor: pointer;

    }
    p{
      color: #1D2020;
      margin-top: 5px;
      transition: color 0.1s;

      &:hover{
        color: #F4F5F5;
  }
    }
  }

`

export const Repositories = styled.div`

padding: 16px;
background-color: #D4D8D8;
  ul{
    
    background-color: #D4D8D8;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    list-style: none;


    }
    li{
      height: 105px;
      background-color: #D4D8D8;
      padding: 16px;
      border-radius: 8px;
      transition: background 0.1s;


      cursor: pointer;
      
      h3{
        color: #1D2020;
      }

      p{
        color: #1D2020;
      }
      &:hover{
        background-color: #F4F5F5;
        color: #1D2020;
      }

      &:active{
        background-color: #fff;

      }
  }

`
