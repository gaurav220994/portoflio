import React from 'react';
import { Box, Image } from 'grommet';
const Banner = ({ darkMode, setDarkMode }) => {
  return (
    <Box height='large'>
      <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
    </Box>
  );
};

export { Banner };
