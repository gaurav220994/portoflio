import React, { useState } from 'react';
import {
  Main,
  Box,
  Button,
  Grommet,
  Heading,
  Text,
  Paragraph,
  TextInput,
  Image,
  Stack,
  Diagram,
  InfiniteScroll,
  Header,
  ResponsiveContext,
} from 'grommet';
import { Navigation, Banner, AboutMe, Skills, Experience } from './components';
import { Search, Menu } from 'grommet-icons';
import { theme } from './theme';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <Main as='main' fill='horizontal' flex='grow' overflow='auto'>
        {/* Navigation */}
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Banner */}
        <Banner />

        {/* About Me */}
        <AboutMe />

        {/* About Me */}
        <Skills />

        {/* Experience */}
        <Experience />

        
      </Main>
    </Grommet>
  );
};

export default App;
