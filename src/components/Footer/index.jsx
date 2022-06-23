import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" maxW="400px" w="full" p={5} textAlign="center">
      <Text>@ {new Date().getFullYear()} - Rizqi K</Text>
    </Box>
  );
};

export default Footer;
