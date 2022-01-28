import React, { useEffect, useState } from 'react';
import { Main, Grommet, Footer, Text, Box } from 'grommet';
import {
  AboutMe,
  Banner,
  Certifications,
  Experience,
  Navigation,
  Recognition,
  Skills,
} from './components';
import { theme } from './theme';
import ReactGa from 'react-ga4';
const App = () => {
  const val = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(val);

  const updateDarkMode = () => {
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    ReactGa.initialize('G-9F1ZS472FQ');
    ReactGa.send('pageview');
  }, []);

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

        {/* Recognition */}
        <Recognition />

        {/* Experience */}
        <Experience />

        {/* Certifications */}
        <Certifications />

        <Footer
          align='center'
          // style={{ position: 'fixed', bottom: 0, width: '100%' }}
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
