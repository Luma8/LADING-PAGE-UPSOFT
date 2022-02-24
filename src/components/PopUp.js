import React from 'react'
import styled from 'styled-components'

export default function PopUp(props) {
    return (props.trigger) ? (
        <Pop>
            <Up>
                <Buttonup onClick={() => props.setTrigger(false)} className='close-btn'>
                    X
                </Buttonup>
                {props.children}
            </Up>
        </Pop>
    ) : "";
}

const Pop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;
    color: black !important;
`
const Up = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: #fff;
    border-radius: 5px;
    border-bottom: 4px solid gray;
    border-left: 0.1px solid gray;

`
const Buttonup = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    border: 1px solid gray;
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 5px;
        &:hover{
            background-color: white;
            color: black;

        }
`