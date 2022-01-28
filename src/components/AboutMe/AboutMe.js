import React from 'react';
import {
  Box,
  Card,
  Image,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Paragraph,
} from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';

const AboutMe = ({ darkMode, setDarkMode }) => {
  return (
    <Box id="aboutMe" direction='row' pad='medium'>
      <Box pad='small' align='center' width='50%'>
        <Card width='large'>
          <CardBody align='center' background="dark-1" pad='medium'>
      <Image src='me.png' fit='cover' width="40%" />
            
          </CardBody>
          {/* <CardFooter pad={{ horizontal: 'small' }}>
            <Button icon={<Favorite color='red' />} hoverIndicator />
          </CardFooter> */}
        </Card>
      </Box>
      <Box pad='medium' align='left' width='50%'>
        <Heading margin='none'>Gaurav Agarwal</Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </Box>
    </Box>
  );
};

export { AboutMe };
