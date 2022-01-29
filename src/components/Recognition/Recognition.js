import React, { useMemo } from 'react';
import { Box, Text, Heading, ResponsiveContext } from 'grommet';
import { Achievement } from 'grommet-icons';

const Recognition = ({ recognitionRef }) => {
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
    <Box id='experience' ref={recognitionRef}>
      <Heading size={'xlarge'} alignSelf='center' margin={{top:'large', bottom: '0px'}}>
        {'Recognition'}
      </Heading>
      <hr width="50px"/>
      <Box
        direction='row'
        gap={size}
        pad='40px 20px 0px 20px'
        alignSelf='center'
        wrap={true}
      >
        {awards.map((el, index) => (
          <Box
            direction='column'
            gap='medium'
            alignContent='between'
            align='center'
            key={`R_${index}`}
            pad={{ bottom: '40px' }}
            flex={{ grow: 1 }}
          >
            <Text
              weight='bold'
              size='large'
              color={{ dark: 'dark-6', light: 'dark-2' }}
            >
              {el.name}
            </Text>
            <Achievement
              color={{ light: '#B87333', dark: 'accent-4' }}
              size='large'
            />
            <Text weight='bold' color={{ light: '#B87333', dark: 'accent-4' }}>
              {el.company}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { Recognition };
