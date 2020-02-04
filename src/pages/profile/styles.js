import  styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 600px;
    margin: 100px auto;
    border-radius: 4px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;  
    -webkit-box-shadow: 5px 6px 11px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 6px 11px 1px rgba(0,0,0,0.75);
    box-shadow: 5px 6px 11px 1px rgba(0,0,0,0.75);

    
    a{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        text-decoration: none;
        color: #000;
    }

    img{
        width: 120px;
        border-radius: 50%;
        margin-bottom: 20px;
        border: 3px solid #F9B5AC;
    }

    h1{
        font-size: 25px;
    }

`;

export const SecondContainer = styled.div`

  p{
    width: 400px;
    margin-top: 20px;
    text-align: center;

    svg{
        margin-right: 5px;
    }
  }

`

export const LastContainer = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;

    p{
        display: flex;
        align-items: center;
        margin: 10px;

        svg{
            margin-left: 10px;
        }
    }

`

export const BackButton = styled.button`
    padding: 10px;
    background: #F9B5AC;
    border: none;
    outline: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
`
