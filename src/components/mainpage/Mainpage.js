import React from 'react'
import './Mainpage.css';
import {ButtonGroup, Button} from '@chakra-ui/react'
import CV from "./Fidha_Rafeeque_N_Resume.pdf";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

function Mainpage() {

  //create ref element
  const el = useRef(null);

  useEffect(()=> {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Full Stack Developer", "Application Developer"],
      startDelay: 200,
      typeSpeed: 150,
      backSpeed: 60,
      backDelay: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,

    })
  })

  return (
    <div className='container-mainpage'>
      <div className='sub-container-mainpage'>
      <p className='text-6xl'>Hi, I am Fidha Rafeeque N</p><br />
      <p className='text-5xl'>I am a <span ref={el}></span>
      </p><br />
      

      <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Hire Me
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              <a href={CV} download="Fidha_Rafeeque_resume">Download CV</a>
            </Button>
          </ButtonGroup>
          
    </div>
  </div>
  );
}

export default Mainpage