import React from 'react';
import { Container } from 'components/Container';
import MUIContainer from '@material-ui/core/Container';
import MUITypography from '@material-ui/core/Typography';
import MUIBox from '@material-ui/core/Box';

export default {
  title: 'Hero banner',
};

export const centered = () => (
  <MUIContainer maxWidth="lg">
    <MUIBox mx="auto" maxWidth="md" bgcolor="#ccc" mb={4} mt={10}>
      <MUITypography variant="h1" align="center">
          Choose out of 240+ pre-built websites.
      </MUITypography>
    </MUIBox>
    <MUIBox mx="auto" maxWidth="md" mb={10}>
      <MUITypography variant="h2" align="center">
        Beautiful design. Purposeful approach. Marketable content.
      </MUITypography>
    </MUIBox>
  </MUIContainer>
);
