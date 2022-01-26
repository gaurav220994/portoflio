import React from 'react';
import { Box, Chart, Card, Heading, CardBody, Text } from 'grommet';

const LabelledChart = ({ color, label, value,level }) => (
  <Box flex={false} basis='xsmall' align='center' gap='small'>
    <Chart
      bounds={[
        [0, 2],
        [0, 400],
      ]}
      type='bar'
      values={[{ value: [1, value] }]}
      color={color}
      round
      size={{ height: 'medium', width: 'xsmall' }}
    />
    <Box align='center'>
      <Text>{label}</Text>
      <Text weight='bold'>{level}</Text>
    </Box>
  </Box>
);

const LabelledCharts = () => (
  <Box pad='large' direction='row' gap='medium'>
    <LabelledChart label='Node' value={300} level={'5'} color='accent-1'/>
    <LabelledChart label='React' value={200} level={'4'} color='accent-2' />
    <LabelledChart label='Mongo' value={98.2} level={'4'} color='accent-3' />
    <LabelledChart label='GrapQL' value={98.2} level={'4'} color='accent-4' />
    <LabelledChart label='Typescript' value={98.2} level={'4'} color='neutral-1' />
    <LabelledChart label='Express' value={98.2} level={'4'} color='neutral-2' />
    <LabelledChart label='Jquery' value={98.2} level={'4'} color='neutral-3' />
  </Box>
);
const Skills = ({ darkMode, setDarkMode }) => {
  return (
    <Box height='large' align='center'>
        <Heading pad='medium'>Skills</Heading>
      <Card width='large'>
        <CardBody pad='medium'>
          <LabelledCharts/>
        </CardBody>
      </Card>
    </Box>
  );
};

export { Skills };
