import React from 'react';
import { Box, Image } from 'grommet';
const Banner = ({ homeRef }) => {
  return (
    <Box ref={homeRef} height='large'>
      <Image fit='cover' src='JavaScript.jpeg' />
    </Box>
  );
};

export { Banner };
