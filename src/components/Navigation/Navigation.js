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
        <Button secondary label='Home' hoverIndicator />
        <Button secondary label='About Me' hoverIndicator />
        <Button secondary label='Skills' hoverIndicator />
        <Button secondary label='Experience' hoverIndicator />
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
