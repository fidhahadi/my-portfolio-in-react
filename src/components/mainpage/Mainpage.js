import React from 'react'
import './Mainpage.css';
import { HStack, Box } from '@chakra-ui/react'

function Mainpage() {
  return (
    <>
    <div className='container-mainpage'>
      <h2>Mainpage</h2>
      <HStack spacing='24px'>
  <Box w='350px' h='600px' bg='white'>
    <h1>hello</h1>
  </Box>
  <Box w='350px' h='600px' bg='white'>
    <h1>hello</h1>
  </Box>
  <Box w='350px' h='600px' bg='white'>
    <h1>hello</h1>
  </Box>
  <Box w='350px' h='600px' bg='white'>
    <h1>hello</h1>
  </Box>
</HStack>
    </div>
    </>
  )
}

export default Mainpage