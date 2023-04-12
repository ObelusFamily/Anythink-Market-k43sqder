import React from "react";
import logo from "../../imgs/logo.png";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import styled from 'styled-components'

const Banner = () => {
  const BannerStyle = styled.div`
  text-align: center;
  padding: 1.5rem ;
  color: white;
  background-color: ${props => props.theme.dark};
`;

  return (
    // <div className="banner text-white">
    // <div className="container p-4 text-center">
    <ThemeProvider theme={theme}>
      <BannerStyle>
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
  
        </BannerStyle>
      </ThemeProvider>
  );
};

export default Banner;
