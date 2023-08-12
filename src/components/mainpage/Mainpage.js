import React from 'react'
import './Mainpage.css';
import {ButtonGroup, Button} from '@chakra-ui/react'
import CV from "./Fidha_Rafeeque_N_Resume.pdf";

function Mainpage() {
  return (
    <div className='container-mainpage'>
      <div className='sub-container-mainpage'>
      <p className='text-6xl'>Hi, I am Fidha Rafeeque N</p><br />
      <p className='text-5xl'>I am a Full Stack Developer</p><br />
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