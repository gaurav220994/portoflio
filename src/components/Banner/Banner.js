import React, { useContext } from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';
const Banner = ({ homeRef }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box margin={{ top: '50px' }}>
      <Box
        ref={homeRef}
        height='medium'
        width='100%'
        align='center'
        justify='center'
      >
        <Box pad={{ left: size, right: size }}>
          <Image
            width={['small'].includes(size) ? '100%' : '100%'}
            alignSelf='center'
            fit='cover'
            src='name.png'
          />
        </Box>
      </Box>
    </Box>
  );
};

export { Banner };
