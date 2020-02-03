import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    width: 600px;
    margin: 100px auto;
    border-radius: 4px;
    padding: 30px;  
    -webkit-box-shadow: 5px 6px 11px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 6px 11px 1px rgba(0,0,0,0.75);
    box-shadow: 5px 6px 11px 1px rgba(0,0,0,0.75);

    h1{
        font-size: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    
        svg{
            margin-right: 10px
        }
    }

    p{
        font-size: 15px;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
`

export const Form = styled.form`
    margin-top: 35px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #eee;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 16px
    }


`

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`

    background: #F9B5AC;
    border: 0;
    padding: 10px 12px;
    margin-left: 10px;
    border-radius: 4px;


        svg{
        font-size: 20px;
        color: #fff;
        display: flex;
        flex-direction: row;
    }
`