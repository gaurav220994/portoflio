import React, { useContext } from 'react';
import { Box, Image, Heading, Paragraph, ResponsiveContext } from 'grommet';

const AboutMe = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      id='aboutMe'
      direction={size === 'small' ? 'column' : 'row'}
      pad='medium'
    >
      <Box pad='small' alignSelf='center' align='center' width={size === 'small' ? '100%' : '50%'}>
        <Image src='me.png' width={'40%'} />
      </Box>
      <Box
        pad='medium'
        alignSelf='center'
        align='center'
        width={size === 'small' ? '100%' : '50%'}
      >
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
