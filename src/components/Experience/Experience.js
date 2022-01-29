import React, { useReducer, useEffect, useContext } from 'react';

import { Box, Diagram, Stack, Text, Heading, ResponsiveContext } from 'grommet';
import { StatusGoodSmall } from 'grommet-icons';

const data = [
  {
    carat: 1,
    name: 'Successive Technology',
    from: 'July 2020',
    to: 'Present',
    designation: 'Lead Technology ',
    description: '| Node | React | Graphql | Mongo | Typescript',
  },
  {
    carat: 2,
    name: 'Zotalab',
    from: 'March 2020',
    to: 'July 2020',
    designation: 'Senior Software Engineer',
    description: ' | Blockchain | Node.js | React | Mongo',
  },
  {
    carat: 3,
    name: 'Harbinger Group',
    from: 'January 2017',
    to: 'March 2020',
    designation: 'Senior Software Engineer',
    description: ' | Blockchain | Node.js | React | Mongo',
  },
];
const connection = (fromTarget, toTarget, { ...rest } = {}) => ({
  fromTarget,
  toTarget,
  anchor: 'vertical',
  color: { light: 'accent-4', dark: 'neutral-4' },
  thickness: 'xxsmall',
  round: true,
  type: 'curved',
  ...rest,
});

const DiamondContainer = ({ from, to, designation, description, id, name }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      align={'start'}
      alignSelf='start'
      direction='row'
      gap='medium'
      key={id}
    >
      <StatusGoodSmall
        id={id}
        size='small'
        color={{ light: `dark-${id}`, dark: `light-${id}` }}
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
        {designation && (
          <Text size='small'>
            <span style={{ fontWeight: 'bold' }}>{designation} </span>
            {size !== 'small' && <span> {description} </span>}
          </Text>
        )}
      </Box>
    </Box>
  );
};

const Container = ({ node, index }) => (
  <DiamondContainer
    carat={node.carat}
    from={node.from}
    to={node.to}
    designation={node.designation}
    description={node.description}
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
    <>
      <Heading
        size={'xlarge'}
        alignSelf='center'
        style={{ marginBottom: '0px' }}
      >
        Experience
      </Heading>
      <hr width='50px' />
      <Box align='center' pad='large'>
        <Stack style={{ marginTop: '10px' }}>
          <Box direction='column' gap='xlarge'>
            {[1, 2, 3].map((id) => (
              <Container key={id} node={data[id - 1]} index={id} />
            ))}
          </Box>
          <Diagram
            animation={{ type: 'draw', duration: 3000, size: 'small' }}
            connections={connections}
          />
        </Stack>
      </Box>
    </>
  );
};
export { Experience };
