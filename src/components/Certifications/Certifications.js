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
      color: #ff4040;
    }
  `;
  const awards = useMemo(
    () => [
      {
        name: 'Graph Developer',
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
      <Heading margin={{ top: '40px', bottom:'0px' }} size={'xlarge'} alignSelf='center'>
        {'Certifications'}
      </Heading>
      <hr width="50px"/>
      <Box
        id='certification'
        direction='row'
        gap={size}
        margin='0px 40px 50px 40px'
        alignSelf='center'
        align='stretch'
        wrap={true}
      >
        {awards.map((el, index) => (
          <Box
            direction='column'
            gap='medium'
            align='center'
            key={`R_${index}`}
            pad={{ bottom: '40px' }}
            flex={{ grow: 1 }}
          >
            <Header
              onClick={() => window.open(el.url, '_blank')}
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
