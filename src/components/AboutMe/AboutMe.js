import React from 'react';
import { Box, Image, Text, Anchor, Heading, Paragraph } from 'grommet';

const AboutMe = ({ aboutMeRef }) => {
  return (
    <Box
      ref={aboutMeRef}
      direction='row'
      pad='small'
      wrap={true}
      margin={{ top: 'large' }}
    >
      <Box align='center' flex={{ grow: 1 }} style={{ minWidth: '40%' }}>
        <Image src={process.env.PUBLIC_URL + '/MEPIC.png'} width={'60%'} />
      </Box>
      <Box flex={{ grow: 1 }} pad='medium'>
        <Heading size={'xlarge'} margin='none'>
          Hi Folks,
        </Heading>
        <Paragraph style={{ lineHeight: '30px', maxWidth: '650px' }}>
          I'm{' '}
          <Text color='#ff0065' weight={'bold'} size='xlarge'>
            Gaurav Agarwal
          </Text>{' '}
          - Engineer, having more than 7 years of experience in IT
          industry, currently engaged with{' '}
          <Anchor href='https://pattern.com' target='_blank'>
            Pattern®</Anchor>
          .<br />
          I'm a fullstack MERN developer along with leadership and mentoring
          quality, working on a broader set of technologies including front-end
          & back-end.
          <br />
          I enjoy accepting challenges, b'coz challenges are what makes life
          interesting. Overcoming them is what makes life meaningful.
          <br />
          I also love the logic and structure of coding and always strive to
          write elegant, efficient code and fortune to work on cutting edge
          technology.
          <br />
          Music, travelling, trekking, clubbing and photography is what I'm
          enthusiastic about.
        </Paragraph>
        <Box
          background={{ light: 'light-1', dark: 'dark-1' }}
          height='100px'
          justify='center'
          align='center'
          alignContent='around'
          round='medium'
        >
          <Paragraph style={{ padding: '10px', maxWidth: '800px' }}>
            <Anchor
              href='https://gaurav220994.github.io/portfolio/Gaurav-Agarwal-Resume.pdf'
              target='_blank'
            >
              Download my resume
            </Anchor>{' '}
            for more details.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export { AboutMe };
