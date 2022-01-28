import React, { useMemo } from 'react';
import { Box, Text, Heading, ResponsiveContext } from 'grommet';
import { Achievement } from 'grommet-icons';

const Recognition = ({ darkMode }) => {
  const size = React.useContext(ResponsiveContext);

  const awards = useMemo(
    () => [
      {
        name: '3 Cheers Award',
        company: 'Successive Technology',
      },
      {
        name: 'Distinguished Contributer (2018)',
        company: 'Harbinger Group',
      },
      {
        name: 'Distinguished Contributer (2019)',
        company: 'Harbinger Group',
      },
    ],
    [],
  );
  return (
    <>
      <Heading size={'xlarge'} alignSelf='center'>
        {'Recognition'}
      </Heading>
      <Box
        id='recognition'
        direction='row'
        gap={size}
        pad='40px'
        alignSelf='center'
        align='stretch'
        wrap={true}
      >
        {awards.map((el) => (
          <Box
            direction='column'
            gap='medium'
            align='center'
            pad={{ bottom: '10px' }}
          >
            <Heading color={{ dark: 'dark-6', light: 'dark-2' }}>
              {el.name}
            </Heading>
            <Achievement color='accent-4' size='large' />
            <Text weight='bold'>{el.company}</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export { Recognition };
