import React, { useContext } from 'react';
import { Box, Image, Text, ResponsiveContext } from 'grommet';
const Banner = ({ homeRef }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box background={{ light: 'light-1', dark: 'dark-1' }}>
      <Box
        ref={homeRef}
        height='large'
        width='100%'
        background='url(JS.png)'
        // direction='row'
        align='center'
        justify='center'
      >
        <Box
          pad={{ left: size, right: size }}
        >
          <Image
          width={['small'].includes(size) ? '100%' : '60%'}
          alignSelf='center'
          fit='cover' src='Asset15x2x.png' />
        </Box>
        {/* <Image fit='cover' src='JavaScript.jpeg' /> */}
      </Box>
    </Box>
  );
};

export { Banner };
