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
// import Icons from 'grommet-icons';
import { Search, Menu } from 'grommet-icons';
import { theme } from './theme';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <Main
        pad='medium'
        as='main'
        fill='horizontal'
        flex='grow'
        overflow='auto'
        background={{ dark: 'light-2', light: 'dark-2' }}
      >
        <Box align='center' pad='medium'>
          <Header>
            <Button secondary label='Home' hoverIndicator />
            <Button secondary label='Skills' hoverIndicator />
            <Button secondary label='About Me' hoverIndicator />
            <Button
              secondary
              label={darkMode ? 'Light' : 'Dark'}
              onClick={() => setDarkMode(!darkMode)}
              hoverIndicator
            />
          </Header>
        </Box>
        <Box height='medium'>
          <Image
            fit='cover'
            src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
          />
        </Box>
        <Stack guidingChild={1}>
          <Diagram
            connections={[
              {
                fromTarget: '1',
                toTarget: '2',
                thickness: 'xsmall',
                color: 'accent-2',
              },
              {
                fromTarget: '2',
                toTarget: '3',
                thickness: 'xsmall',
                color: 'accent-2',
                type: 'rectilinear',
              },
              {
                fromTarget: '3',
                toTarget: '4',
                thickness: 'xsmall',
                color: 'accent-2',
                type: 'rectilinear',
              },
            ]}
          />
          <Box direction='column'>
            <Box direction='row'>
              <Box
                id='1'
                basis='xsmall'
                hoverIndicator={{
                  background: {
                    dark: '#111111',
                    light: '#FFFFFF',
                  },
                }}
                animation={{
                  type: ['fadeIn', 'slideDown'],
                  delay: 0,
                  duration: 1000,
                  size: 'xsmall',
                }}
                margin='small'
                pad='medium'
                round={'small'}
                background={{
                  dark: '#111111',
                  light: '#FFFFFF',
                }}
              />
              <Paragraph color='white'>company1</Paragraph>
            </Box>
            <Box direction='row'>
              <Box
                id='2'
                animation={{
                  type: 'fadeIn',
                  delay: 0,
                  duration: 1000,
                  size: 'xsmall',
                }}
                margin='small'
                pad='medium'
                round={'small'}
                background='light-4'
              />
              <Paragraph color='white'>Company2</Paragraph>
            </Box>
            <Box direction='row'>
              <Box
                id='3'
                animation={{
                  type: 'fadeIn',
                  delay: 0,
                  duration: 1000,
                  size: 'xsmall',
                }}
                margin='small'
                pad='medium'
                round={'small'}
                background='light-4'
              />
            </Box>
            <Box direction='row'>
              <Box
                id='4'
                animation={{
                  type: 'fadeIn',
                  delay: 0,
                  duration: 1000,
                  size: 'xsmall',
                }}
                margin='small'
                pad='medium'
                round={'small'}
                background='light-4'
              />
            </Box>
          </Box>
        </Stack>
      </Main>
    </Grommet>
  );
};

export default App;
