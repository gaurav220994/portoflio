import React, { useContext } from 'react';
import {
  Box,
  Chart,
  Meter,
  Card,
  Heading,
  CardBody,
  Text,
  Tag,
  ResponsiveContext,
} from 'grommet';

const data = [
  { label: 'NodeJS', value: 50, color: 'accent-1' },
  { label: 'React', value: 40, color: 'accent-2' },
  { label: 'Mongo', value: 40, color: 'accent-3' },
  { label: 'GraphQL', value: 40, color: 'accent-4' },
  { label: 'Typescript', value: 35, color: 'neutral-1' },
  { label: 'Express', value: 40, color: 'neutral-3' },
];
const skills = [
  'Javascript',
  'MERN',
  'NodeJS',
  'React',
  'GraphQL',
  'Typescript',
  'MongoDB',
  'Mysql',
  'Express',
  'Jest',
  'Enzyme',
  'Meteor',
  'Blockchain',
  'Ethereum',
  'Hyperledger',
  'Stripe',
  'Git',
  'VS Code',
  'Azure',
  'AWS',
  'Heroku',
  'Serverless',
  'Godaddy',
  'Wordpress',
  'Microservices',
  'Design Patterns',
  'Architecture',
  'DevOps',
  'JQuery',
  'HTML',
  'Gromeet',
  'Bootstrap',
  'Material UI',
  'Semantic UI',
  'Leadership',
  'Mentor',
  'Trainer',
];
const LabelledChartVertical = ({ color, label, value }) => (
  <Box flex={false} gap='large' basis='xsmall' direction='row-reverse'>
    <Meter
      values={[
        {
          value,
          color,
        },
      ]}
      round
      max='50'
      size={'medium'}
    />
    <Box align='center'>
      <Text>{label}</Text>
    </Box>
  </Box>
);

const LabelledChartHorizontal = ({ color, label, value }) => (
  <Box flex={false} basis='xsmall' align='center' gap='small'>
    <Chart
      bounds={[
        [0, 2],
        [0, 50],
      ]}
      type='bar'
      values={[{ value: [1, value] }]}
      color={color}
      round
      size={{ height: 'medium', width: 'xsmall' }}
    />
    <Box align='center'>
      <Text>{label}</Text>
    </Box>
  </Box>
);

const LabelledCharts = () => (
  <Box pad='medium' direction='column' gap='medium'>
    {data.map(({ label, value, color }, index) => (
      <LabelledChartVertical
        key={`LabelledChartVertical_${index}`}
        label={label}
        value={value}
        color={color}
      />
    ))}
  </Box>
);
const LabelledChartsHorizontal = () => (
  <Box pad='medium' direction='row' gap='medium'>
    {data.map(({ label, value, color }, index) => (
      <LabelledChartHorizontal
        key={`LabelledChartHorizontal_${index}`}
        label={label}
        value={value}
        color={color}
      />
    ))}
  </Box>
);
const Skills = ({skillsRef}) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box ref={skillsRef}>
      <Heading
        margin={{ top: '40px', bottom: '0px' }}
        size={'xlarge'}
        alignSelf='center'
      >
        Skills
      </Heading>
      <hr width='50px' />
      <Box
        direction='row'
        pad='small'
        justify='around'
        align='start'
        alignContent='center'
        wrap={true}
        margin={{ top: 'large' }}
      >
        <Box align='center' flex={{ grow: 1 }}>
          <Card background={{ light: 'light-1', dark: 'dark-1' }} pad='small'>
            <CardBody>
              {size === 'small' ? (
                <LabelledCharts />
              ) : (
                <LabelledChartsHorizontal />
              )}
            </CardBody>
          </Card>
        </Box>
        <Box width='40%' flex={{ grow: 1 }}>
          <Box
            direction='row'
            justify='center'
            align='start'
            alignContent='between'
            wrap={true}
            margin={{ top: 'large' }}
          >
            {skills.map((el, index) => (
              <Tag
                background='light-1'
                key={`Tag_${index}`}
                margin='5px'
                value={el}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Skills };
