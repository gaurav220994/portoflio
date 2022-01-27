import React from 'react';
import { Box, Button, Header } from 'grommet';
import { BoxBackground } from '../../color';
const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <Box
      align='center'
      pad='medium'
      style={{ position: 'fixed', width: '100%' }}
      background={{ ...BoxBackground }}
    >
      <Header>
        <Button secondary href="#home" label='Home' hoverIndicator />
        <Button secondary href="#aboutMe" label='About Me' hoverIndicator />
        <Button secondary href="#skills" label='Skills' hoverIndicator />
        <Button secondary href="#experience" label='Experience' hoverIndicator />
        <Button
          secondary
          label={darkMode ? 'Light' : 'Dark'}
          onClick={() => setDarkMode(!darkMode)}
          hoverIndicator
        />
      </Header>
    </Box>
  );
};

export { Navigation };
