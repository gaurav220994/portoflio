import React, { useMemo } from 'react';
import { Box, Text, Heading, ResponsiveContext } from 'grommet';
import { Certificate } from 'grommet-icons';
import styled from 'styled-components';
const Certifications = ({ darkMode }) => {
  const size = React.useContext(ResponsiveContext);
  const Header = styled(Heading)`
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #FF4040;
    }
  `;
  const awards = useMemo(
    () => [
      {
        name: 'Graph Developer - Associate',
        url: 'https://odyssey.apollographql.com/certifications/8a7a6666-7b57-4f10-85c6-068979923705',
        company: 'Apollo',
      },
      {
        name: 'M001: MongoDB Basics',
        url: 'https://university.mongodb.com/course_completion/5c898cb0-28d7-4818-94d4-86d050d1f330',
        company: 'MongoDB University',
      },
      {
        name: 'Certified Ethereum Expert',
        url: 'https://www.credential.net/12610184',
        company: 'Blockchain Council',
      },
    ],
    [],
  );
  return (
    <>
      <Heading size={'xlarge'} alignSelf='center'>
        {'Certifications'}
      </Heading>
      <Box
        id='certification'
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
            <Header
              onClick={() => window.open(el.url, "_blank")}
              color={{ dark: 'accent-4', light: 'neutral-4' }}
            >
              {el.name}
            </Header>
            <Certificate size='large' />
            <Text weight='bold'>{el.company}</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export { Certifications };
