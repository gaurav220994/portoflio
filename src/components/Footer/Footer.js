import React from 'react';
import { Tip, Box } from 'grommet';
import {
  LinkedinOption,
  FacebookOption,
  Github,
  Instagram,
  MailOption,
} from 'grommet-icons';
const Footer = () => {
  return (
    <Box
      pad='small'
      direction='row'
      gap='medium'
      background={{ dark: 'dark-1', light: 'light-1' }}
      justify='center'
      style={{position:'fixed', bottom:0, width:"100%"}}
    >
      <Tip content='Connect with me on Linkedin'>
        <LinkedinOption
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open('https://www.linkedin.com/in/gv-agarwal94', '_blank')
          }
        />
      </Tip>
      <Tip content='Collaborate with me on Github'>
        <Github
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open('https://github.com/gaurav220994', '_blank')
          }
        />
      </Tip>
      <Tip content='Contact me on: gv.agarwal94@gmail.com'>
        <MailOption
          style={{ cursor: 'pointer' }}
          onClick={() => window.open('mailto:gv.agarwal94@gmail.com', '_blank')}
        />
      </Tip>
      <Tip content='Like me on Facebook'>
      <FacebookOption
        style={{ cursor: 'pointer' }}
        onClick={() =>
          window.open('https://www.facebook.com/gaurav.agarwal143', '_blank')
        }
      />
      </Tip>
      <Tip content='Follow me on Instagram'>
      <Instagram
        style={{ cursor: 'pointer' }}
        onClick={() =>
          window.open('https://www.instagram.com/gv.agarwal94', '_blank')
        }
      />
      </Tip>
    </Box>
  );
};

export { Footer };
