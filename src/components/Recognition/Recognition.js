import React, { useMemo } from 'react';
import { Box, Text, Heading, ResponsiveContext } from 'grommet';
import { Achievement } from 'grommet-icons';

const Recognition = ({ darkMode }) => {
  const size = React.useContext(ResponsiveContext);

  const awards = useMemo(
    () => [
      {
        name: 'Award Name',
        company: 'Company Name',
      },
      {
        name: 'Award Name',
        company: 'Company Name',
      },
      {
        name: 'Award Name',
        company: 'Company Name',
      },
      {
        name: 'Award Name',
        company: 'Company Name',
      },
      
    ],
    [],
  );
  return (
    <>
      <Heading size={'xlarge'} alignSelf='center'>{'Recognition'}</Heading>
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
          <Box direction='column' gap='medium' align='center' pad={{bottom:'10px'}}>
            <Heading>{el.name}</Heading>
            <Achievement size='large' />
            <Text>{el.company}</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export { Recognition };
