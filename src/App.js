import React, { useState } from 'react';
import { Main, Grommet, Footer, Text, Box } from 'grommet';
import { Navigation, Banner, AboutMe, Skills, Experience } from './components';
import { theme } from './theme';

const App = () => {
  const val = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(val);

  const updateDarkMode = () => {
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <Main as='main' fill='horizontal' flex='grow' overflow='auto'>
        {/* Navigation */}
        <Navigation darkMode={darkMode} setDarkMode={updateDarkMode} />

        {/* Banner */}
        <Banner />

        {/* About Me */}
        <AboutMe />

        {/* About Me */}
        <Skills />

        {/* Experience */}
        <Experience />
        <Footer
          align='center'
          style={{ position: 'fixed', bottom: 0, width: '100%' }}
          background={{
            dark: '#111111',
            light: '#FFFFFF',
          }}
          pad='small'
        >
          <Text margin={{ left: '50%' }}>Copyright</Text>
        </Footer>
      </Main>
    </Grommet>
  );
};

export default App;
