import React from 'react';
import { Box, Button, Header } from 'grommet';
import { Home, User, Launch, Briefcase, Moon, Sun } from 'grommet-icons';

import { BoxBackground } from '../../color';
const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <Box
      align='center'
      pad='medium'
      style={{ position: 'fixed', width: '100%',zIndex:999 }}
      background={{ ...BoxBackground }}
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
          icon={darkMode ? <Moon color={{ light: 'black', dark: 'white' }} /> : <Sun color={{ light: 'black', dark: 'white' }} />}
          color={{ light: 'black', dark: 'white' }}
          onClick={() => setDarkMode(!darkMode)}
          hoverIndicator
        />
      </Header>
    </Box>
  );
};

export { Navigation };
