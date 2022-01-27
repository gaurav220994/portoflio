import React from 'react';
import { Box, Chart, Meter, Card, Heading, CardBody, Text } from 'grommet';

const LabelledChart = ({ color, label, value, level }) => (
  <Box flex={false} gap="large" basis='xsmall' direction='row-reverse'>
    <Meter
      values={[
        {
          value,
          label: 'sixty',
          highlight: true,
          color,
        },
      ]}
      round
      max="50"
      size={'medium'}
      aria-label='meter'
    />
    <Box align='center'>
      <Text>{label}</Text>
    </Box>
  </Box>
);

const LabelledCharts = () => (
  <Box pad='medium' direction='column' gap='medium'>
    <LabelledChart label='Node' value={50} level={'5'} color='accent-1' />
    <LabelledChart label='React' value={40} level={'4'} color='accent-2' />
    <LabelledChart label='Mongo' value={40} level={'4'} color='accent-3' />
    <LabelledChart label='GrapQL' value={40} level={'4'} color='accent-4' />
    <LabelledChart
      label='Typescript'
      value={40}
      level={'4'}
      color='neutral-1'
    />
    <LabelledChart label='Express' value={40} level={'4'} color='neutral-2' />
    <LabelledChart label='Jquery' value={40} level={'4'} color='neutral-3' />
  </Box>
);
const Skills = () => {
  return (
    <Box id='skills' align='center'>
      <Heading pad='large'>Skills</Heading>
      <Card>
        <CardBody>
          <LabelledCharts />
        </CardBody>
      </Card>
    </Box>
  );
};

export { Skills };
