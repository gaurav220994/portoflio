import React, { useReducer, useEffect } from 'react';

import { Box, Diagram, Stack, Text, Heading } from 'grommet';
import { Code } from 'grommet-icons';

const data = [
  {
    carat: 1,
    name: 'Successive Technology',
    from: 'July 2020',
    to: 'Present',
    designation: 'Senior Software Engineer | Blockchain | Node.js | React',
  },
  {
    carat: 2,
    name: 'Zotalab',
    from: 'March 2020',
    to: 'July 2020',
    designation: 'Senior Software Engineer | Blockchain | Node.js | React',
  },
  {
    carat: 3,
    name: 'Harbinger Group',
    from: 'January 2017',
    to: 'March 2020',
    designation: 'Senior Software Engineer | Blockchain | Node.js | React',
  },
];
const connection = (fromTarget, toTarget, { ...rest } = {}) => ({
  fromTarget,
  toTarget,
  anchor: 'vertical',
  color: { light: 'accent-4', dark: 'neutral-4' },
  thickness: 'xsmall',
  round: true,
  type: 'curved',
  ...rest,
});

const DiamondContainer = ({ from, to, designation, align, id, name }) => (
  <Box
    align={align || 'center'}
    alignSelf='center'
    direction='row'
    gap='medium'
    key={id}
  >
    <Code
      id={id}
      size='xlarge'
      color={{ light: `accent-${id}`, dark: `neutral-${id}` }}
    />
    <Box align={'left'}>
      <Text
        size='large'
        weight='bold'
        color={{ dark: 'status-warning', light: 'neutral-3' }}
      >
        {name}
      </Text>
      {from && to && (
        <Text
          pad='large'
          size='small'
          color={{ dark: 'light-4', light: 'dark-3' }}
        >
          {from} - {to}
        </Text>
      )}
      {designation && <Text size='small'>{designation} </Text>}
    </Box>
  </Box>
);

const Container = ({ node, index }) => (
  <DiamondContainer
    carat={node.carat}
    from={node.from}
    to={node.to}
    designation={node.designation}
    id={index}
    key={node.name}
    name={node.name}
    textSize='small'
  />
);

const Experience = () => {
  const reducer = (draw) => !draw;
  const [draw, toogleDraw] = useReducer(reducer, true);
  useEffect(() => {
    const timer = setInterval(() => {
      toogleDraw();
    }, 2000);
    return () => clearInterval(timer);
  }, [toogleDraw]);

  const connections = [];

  if (draw) {
    connections.push(connection('3', '2', { anchor: 'vertical' }));
    connections.push(connection('2', '1', { anchor: 'vertical' }));
  }

  return (
    <Box align='center' pad='large' id='experience'>
      <Heading pad='large'>Experience</Heading>
      <Stack>
        <Box direction='column' gap='xlarge'>
          {[1, 2, 3].map((id) => (
            <Container key={id} node={data[id - 1]} index={id} />
          ))}
        </Box>
        <Diagram
          animation={{ type: 'draw', duration: 3000, size: 'xlarge' }}
          connections={connections}
        />
      </Stack>
    </Box>
  );
};
export { Experience };
