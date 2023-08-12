import React from 'react'
import './AboutMe.css'
import { Card, StackDivider, Box, CardHeader, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, SimpleGrid, VStack} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faCalendar, faMapLocation } from '@fortawesome/free-solid-svg-icons'


function AboutMe() {
  return (
    <div className='container-aboutme'>
      <h1 className='text-5xl text-left'>About Me</h1>
      <SimpleGrid spacing={7} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
      <Card maxW='sm' backgroundColor={'black'}>
        <CardBody>
          <Image
            src='https://media.licdn.com/dms/image/C5603AQFrxOlmlqbOjg/profile-displayphoto-shrink_800_800/0/1662710083995?e=1697068800&v=beta&t=NMtOz0gZu1N2zhP4ug3i2DnsuBeKWcIwSuVDwMHuHv0'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md' color={'white'}>Fidha Rafeeque N</Heading>
              <Text color={'white'}>
                Full Stack Developer | Tech Enthusiast | MERN stack | ReactJS | Tailwind CSS
              </Text>
                    {/* <Text color='blue.600' fontSize='2xl'>
                      $450
                    </Text> */}
          </Stack>
        </CardBody>
  <Divider />
        <CardFooter>
          
        </CardFooter>
    </Card>
        <Card backgroundColor={'black'}>
          <CardHeader>
            <Heading size='md' color={'white'}> Personal Info </Heading>
          </CardHeader>
          <CardBody>
            <VStack align={'flex-start'}>
          <FontAwesomeIcon color='red' icon={faPhone} />
          <Text color={'white'}>
            +918081937750</Text><br/>
          <FontAwesomeIcon color='green' icon={faEnvelope} />
          <Text color={'white'}>
            fidharafeequen@gmail.com
          </Text><br/>
          <FontAwesomeIcon color='blue' icon={faMapLocation} />
          <Text color={'white'}>
            Sharjah, UAE
          </Text><br/>
          <FontAwesomeIcon color='brown' icon={faCalendar}/>
          <Text color={'white'}>
            31st July 1995
          </Text>
          </VStack>
          </CardBody>
          <CardFooter>
            {/* <Button colorScheme='blue'>View here</Button> */}
          </CardFooter>
        </Card>
        <Card backgroundColor={'black'}>
          <CardHeader>
            <Heading size='md' color={'white'}> Services</Heading>
          </CardHeader>
          <CardBody>
          <Stack divider={<StackDivider/>} spacing='4'>
            <Box><br />
              <Heading size='xs' textTransform='uppercase' color={'white'}>
                 Web Development
              </Heading>
              <Text pt='2' fontSize='sm' color={'white'}>
                Full Stack Developer focusing on MERN stack.
              </Text>
            </Box><br />
            <Box>
              <Heading size='xs' textTransform='uppercase' color={'white'}>
                Mobile App Development
              </Heading>
              <Text pt='2' fontSize='sm'color={'white'}>
                Developing user friendly mobile apps using React Native.
              </Text>
            </Box><br />
            <Box>
             <Heading size='xs' textTransform='uppercase' color={'white'}>
                Management
            </Heading>
            <Text pt='2' fontSize='sm' color={'white'}>
             Team and client management.
            </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
            {/* <Button colorScheme='blue'>View here</Button> */}
        </CardFooter>
      </Card>
    </SimpleGrid>
    
    </div>
  )
}

export default AboutMe