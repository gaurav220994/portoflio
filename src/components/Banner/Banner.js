import React from 'react';
import { Box, Image } from 'grommet';
const Banner = ({ darkMode, setDarkMode }) => {
  return (
    <Box id="home" height='large'>
      <Image fit='cover' src='JavaScript.jpeg' />
    </Box>
  );
};

export { Banner };
