import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron } from 'reactstrap';
import styled, { css } from 'styled-components'


const CardMaker = () => {
    const [pictures, setPictures] = useState([]);
    const [text, setText] = useState([])
  
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then((res) => {
            console.log('Res from useEffect of Picture', res)
            setPictures(res.data.url)
            setText(res.data.explanation)
        })
        .catch((err) => {
            console.log('Error occured in useEffect of Picture', err)
        })
    }, [pictures])


    
   
    return (
      <div className="CardMaker">
        <Jumbotron>
          
          <img alt='nasa' width="320" height="240" src={pictures}></img>
          <h1 date={text}>Picture of The Day!</h1>
          <P>
          
            <P1>
            <h2>Explanation</h2>
          <p class="p1">{text}
          </p>
          </P1>
         
          </P>
          </Jumbotron>
          
          
        <p>
          it works 
        </p>
        <Button color="primary" size="lg" block>anotha one</Button>
        <Button primary color="danger">anotha one</Button>
      </div>
    );
  }
 
  const P = styled.p`
    display: flex;
    
    `
    const P1 = styled.p`
    color: green;
    border: 3px solid pink
    
    `
  


const Button  = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: black;
border: 2px solid black;

${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};
`



  export default CardMaker;
  