import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import { Main, Grommet } from 'grommet';
import {
  AboutMe,
  Banner,
  Certifications,
  Experience,
  Navigation,
  Recognition,
  Skills,
  Footer,
} from './components';
import { theme } from './theme';
import ReactGa from 'react-ga4';
const App = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const recognitionRef = useRef(null);

  const checkDayTime = () => {
    var format = 'hh:mm:ss';
    // var time = moment() gives you current time. no format required.
    var time = moment(),
      eveningTime = moment('18:00:00', format),
      morningTime = moment('06:00:00', format);

    if (time.isBetween(eveningTime, morningTime)) {
      return true;
    } else {
      return false;
    }
  };
  let val = false;
  const local = localStorage.getItem('darkMode');
  if (local === undefined || local === null) {
    val = !checkDayTime();
  } else {
    val = local === "true";
  }
  const [darkMode, setDarkMode] = useState(val);

  const updateDarkMode = () => {
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    ReactGa.initialize('G-9F1ZS472FQ');
    ReactGa.send('pageview');
  }, []);

  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <Main as='main' fill='horizontal' flex='grow' overflow='auto'>
        {/* Navigation */}
        <Navigation
          homeRef={homeRef}
          aboutMeRef={aboutMeRef}
          skillsRef={skillsRef}
          recognitionRef={recognitionRef}
          darkMode={darkMode}
          setDarkMode={updateDarkMode}
        />

        {/* Banner */}
        <Banner homeRef={homeRef} />

        {/* About Me */}
        <AboutMe aboutMeRef={aboutMeRef} />

        {/* Skills */}
        <Skills skillsRef={skillsRef} />

        {/* Recognition */}
        <Recognition recognitionRef={recognitionRef} />

        {/* Experience */}
        <Experience />

        {/* Certifications */}
        <Certifications />

        <Footer />
      </Main>
    </Grommet>
  );
};

export default App;
