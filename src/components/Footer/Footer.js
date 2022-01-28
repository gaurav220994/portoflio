import React from 'react';
import { Text, Box } from 'grommet';
import {
  LinkedinOption,
  FacebookOption,
  Github,
  Instagram,
  MailOption,
} from 'grommet-icons';
const Footer = () => {
  return (
    <Box align='center' pad='small' direction='row'>
      <Box align='end' pad='small' width={'55%'}>
        <Text>Cheers!</Text>
      </Box>
      <Box pad='small' width={'45%'}>
        <Box direction='row-reverse' pad='small' gap='small'>
          <Instagram />
          <FacebookOption />
          <MailOption />
          <Github />
          <LinkedinOption />
        </Box>
      </Box>
    </Box>
  );
};

export { Footer };
