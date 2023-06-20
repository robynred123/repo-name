import React from "react";
import { extendTheme } from "@chakra-ui/react";

const black = "#03001C";
const purple = "#301E67";
const blue = "#5B8FB9";
const green = "#6bffc1"; //"#B6EADA";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: black,
      },
    }),
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  colors: {
    dark: {
      purple,
      green,
      blue,
      black,
    },
  },
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
      bg: "#9747FF",
    },
  },
});

export default theme;
