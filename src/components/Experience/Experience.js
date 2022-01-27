import React, { useReducer, useEffect } from 'react';

import { Box, Diagram, Stack, Text } from 'grommet';
import { Diamond } from 'grommet-icons';

const data = [
  {
    carat: 1,
    color: 'whiteGold',
    cut: 'oval',
    name: 'Company 1',
  },
  {
    carat: 2,
    color: 'Platium',
    cut: 'Erald',
    name: 'Company 2',
  },
  {
    carat: 3,
    color: 'white',
    cut: 'pear',
    name: 'Company 3',
  },
];
const connection = (fromTarget, toTarget, { ...rest } = {}) => ({
  fromTarget,
  toTarget,
  anchor: 'vertical',
  color: {light:'accent-4',dark:'neutral-4'},
  thickness: 'xsmall',
  round: true,
  type: 'curved',
  ...rest,
});

const DiamondContainer = ({ carat, color, cut, align, id, name, textSize }) => (
  <Box
    align={align || 'center'}
    alignSelf='center'
    direction='row'
    gap='medium'
    key={id}
  >
    <Diamond id={id} size='xlarge' color={{light:`accent-${id}`,dark: `neutral-${id}`}} />
    <Box align={align}>
      <Text size='medium' weight='bold'>
        {name}
      </Text>
      {carat && <Text size={textSize}> Carat: {carat} </Text>}
      {color && <Text size={textSize}> Color: {color} </Text>}
      {cut && <Text size={textSize}> Cut: {cut} </Text>}
    </Box>
  </Box>
);

const Container = ({ node, index }) => (
  <DiamondContainer
    carat={node.carat}
    color={node.color}
    cut={node.cut}
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
    connections.push(connection('1', '2', { anchor: 'vertical' }));
    connections.push(connection('2', '3', { anchor: 'vertical' }));
  }

  return (
    <Box align='center' pad='large' id="experience">
      <Stack>
        <Box direction='column' gap='xlarge'>
          {[1, 2, 3].map((id) => (
            <Container key={id} node={data[id - 1]} index={id} />
          ))}
        </Box>
        <Diagram
          animation={{ type: 'draw', duration: 3000, size:'xlarge' }}
          connections={connections}
        />
      </Stack>
    </Box>
  );
};
export { Experience };
