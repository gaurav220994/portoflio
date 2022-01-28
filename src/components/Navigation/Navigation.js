import React from 'react';
import { Box, Button, Header } from 'grommet';
import { Home, User, Launch, Briefcase, Moon, Sun } from 'grommet-icons';
import {Link} from 'react-scroll'

const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <Box
      align='center'
      pad='medium'
      style={{ position: 'fixed', width: '100%',zIndex:999 }}
      background={{dark: 'dark-1', light:'light-1'}}
    >
      <Header>
        <Button
          secondary
          href='#home'
          icon={<Home color={{ light: 'black', dark: 'white' }} />}
          color={{ light: 'black', dark: 'white' }}
          hoverIndicator
        />
        <Button
          secondary
          href='#aboutMe'
          icon={<User color={{ light: 'black', dark: 'white' }} />}
          color={{ light: 'black', dark: 'white' }}
          hoverIndicator
        />
        <Button
          secondary
          href='#skills'
          icon={<Launch color={{ light: 'black', dark: 'white' }} />}
          hoverIndicator
        />
        <Button
          secondary
          href='#experience'
          icon={<Briefcase color={{ light: 'black', dark: 'white' }} />}
          color={{ light: 'black', dark: 'white' }}
          hoverIndicator
        />
        <Button
          secondary
          icon={darkMode ? <Sun color={{ light: 'black', dark: 'white' }} /> : <Moon color={{ light: 'black', dark: 'white' }} />}
          color={{ light: 'black', dark: 'white' }}
          onClick={() => setDarkMode(!darkMode)}
          hoverIndicator
        />
      </Header>
    </Box>
  );
};

export { Navigation };
