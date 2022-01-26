import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { BoxBackground } from './color';
export const theme = deepMerge(grommet, {
  name: 'my theme',
  rounding: 12,
  spacing: 24,
  defaultMode: 'light',
  global: {
    colors: {
      brand: {
        dark: '#7700cc',
        light: '#6600cc',
      },
      background: {
        dark: '#111111',
        light: '#FFFFFF',
      },
      'background-back': {
        dark: '#111111',
        light: '#EEEEEE',
      },
      'background-front': {
        dark: '#222222',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111',
      },
      box: {
        ...BoxBackground,
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666',
      },
      border: {
        dark: '#444444',
        light: '#CCCCCC',
      },
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
    },
    font: {
      family: 'Helvetica',
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
    control: {
      border: {
        radius: '12px',
      },
    },
    drop: {
      border: {
        radius: '12px',
      },
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '4px',
      large: '12px',
      xlarge: '24px',
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '6px',
          medium: '12px',
          large: '24px',
          xlarge: '48px',
        },
        size: {
          xxsmall: '24px',
          xsmall: '48px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          full: '100%',
        },
      },
      medium: {
        value: 1536,
      },
      large: {},
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '3px',
      xsmall: '6px',
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
      responsiveBreakpoint: 'small',
    },
    input: {
      padding: '12px',
      weight: 600,
    },
    spacing: '24px',
    size: {
      xxsmall: '48px',
      xsmall: '96px',
      small: '192px',
      medium: '384px',
      large: '768px',
      xlarge: '1152px',
      xxlarge: '1536px',
      full: '100%',
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  tip: {
    content: {
      background: {
        color: 'background',
      },
      elevation: 'none',
      round: false,
    },
  },
  button: {
    border: {
      width: '2px',
      radius: '12px',
    },
    padding: {
      vertical: '4px',
      horizontal: '22px',
    },
  },
  checkBox: {
    check: {
      radius: '12px',
    },
    toggle: {
      radius: '12px',
      size: '48px',
    },
    size: '24px',
  },
  radioButton: {
    size: '24px',
    check: {
      radius: '12px',
    },
  },
  formField: {
    border: {
      color: 'border',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical',
        },
      },
      position: 'inner',
      side: 'bottom',
    },
    content: {
      pad: 'small',
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: 'medium',
      },
    },
    error: {
      color: 'status-critical',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    help: {
      color: 'dark-3',
      margin: {
        start: 'small',
      },
    },
    info: {
      color: 'text-xweak',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    margin: {
      bottom: 'small',
    },
    round: '12px',
  },
  calendar: {
    small: {
      fontSize: '17.2px',
      lineHeight: 1.375,
      daySize: '27.43px',
    },
    medium: {
      fontSize: '18px',
      lineHeight: 1.45,
      daySize: '54.86px',
    },
    large: {
      fontSize: '20.4px',
      lineHeight: 1.11,
      daySize: '109.71px',
    },
  },
  clock: {
    analog: {
      hour: {
        width: '8px',
        size: '24px',
      },
      minute: {
        width: '4px',
        size: '12px',
      },
      second: {
        width: '3px',
        size: '9px',
      },
      size: {
        small: '72px',
        medium: '96px',
        large: '144px',
        xlarge: '216px',
        huge: '288px',
      },
    },
    digital: {
      text: {
        xsmall: {
          size: '16.4px',
          height: 1.5,
        },
        small: {
          size: '17.2px',
          height: 1.43,
        },
        medium: {
          size: '18px',
          height: 1.375,
        },
        large: {
          size: '18.8px',
          height: 1.167,
        },
        xlarge: {
          size: '19.6px',
          height: 1.1875,
        },
        xxlarge: {
          size: '21.2px',
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      1: {
        small: {
          size: '21px',
          height: '27px',
          maxWidth: '509px',
        },
        medium: {
          size: '24px',
          height: '30px',
          maxWidth: '586px',
        },
        large: {
          size: '31px',
          height: '37px',
          maxWidth: '739px',
        },
        xlarge: {
          size: '37px',
          height: '43px',
          maxWidth: '893px',
        },
      },
      2: {
        small: {
          size: '20px',
          height: '26px',
          maxWidth: '490px',
        },
        medium: {
          size: '23px',
          height: '29px',
          maxWidth: '547px',
        },
        large: {
          size: '25px',
          height: '31px',
          maxWidth: '605px',
        },
        xlarge: {
          size: '28px',
          height: '34px',
          maxWidth: '662px',
        },
      },
      3: {
        small: {
          size: '20px',
          height: '26px',
          maxWidth: '470px',
        },
        medium: {
          size: '21px',
          height: '27px',
          maxWidth: '509px',
        },
        large: {
          size: '23px',
          height: '29px',
          maxWidth: '547px',
        },
        xlarge: {
          size: '24px',
          height: '30px',
          maxWidth: '586px',
        },
      },
      4: {
        small: {
          size: '19px',
          height: '25px',
          maxWidth: '451px',
        },
        medium: {
          size: '20px',
          height: '26px',
          maxWidth: '470px',
        },
        large: {
          size: '20px',
          height: '26px',
          maxWidth: '490px',
        },
        xlarge: {
          size: '21px',
          height: '27px',
          maxWidth: '509px',
        },
      },
      5: {
        small: {
          size: '18px',
          height: '24px',
          maxWidth: '422px',
        },
        medium: {
          size: '18px',
          height: '24px',
          maxWidth: '422px',
        },
        large: {
          size: '18px',
          height: '24px',
          maxWidth: '422px',
        },
        xlarge: {
          size: '18px',
          height: '24px',
          maxWidth: '422px',
        },
      },
      6: {
        small: {
          size: '17px',
          height: '23px',
          maxWidth: '413px',
        },
        medium: {
          size: '17px',
          height: '23px',
          maxWidth: '413px',
        },
        large: {
          size: '17px',
          height: '23px',
          maxWidth: '413px',
        },
        xlarge: {
          size: '17px',
          height: '23px',
          maxWidth: '413px',
        },
      },
    },
  },
  paragraph: {
    small: {
      size: '18px',
      height: '24px',
      maxWidth: '422px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '19px',
      height: '25px',
      maxWidth: '451px',
    },
    xlarge: {
      size: '20px',
      height: '26px',
      maxWidth: '470px',
    },
    xxlarge: {
      size: '21px',
      height: '27px',
      maxWidth: '509px',
    },
  },
  text: {
    xsmall: {
      size: '17px',
      height: '23px',
      maxWidth: '413px',
    },
    small: {
      size: '18px',
      height: '24px',
      maxWidth: '422px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '19px',
      height: '25px',
      maxWidth: '451px',
    },
    xlarge: {
      size: '20px',
      height: '26px',
      maxWidth: '470px',
    },
    xxlarge: {
      size: '21px',
      height: '27px',
      maxWidth: '509px',
    },
  },
  scale: 0.2,
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF',
    },
  },
});
