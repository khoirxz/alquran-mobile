import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const ContentSection = ({ titlePage, children }) => {
  return (
    <Box my="5rem">
      <Text color="blackAlpha.600" as="h2">
        {titlePage}
      </Text>
      <Divider />

      {children}
    </Box>
  );
};

export default ContentSection;
