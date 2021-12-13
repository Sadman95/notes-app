import { Box } from '@mui/system';
import * as React from 'react';

interface IFooterProps {
}

const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '2% 0'
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
      <Box sx={footerStyle}>
          <small>Copyright 2022 &copy; all rights reserved</small>
      </Box>
  );
};

export default Footer;
