import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { HiDotsHorizontal, HiChevronLeft } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const path = useLocation();
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      p={5}
      position="fixed"
      maxW="400px"
      w="full"
      backgroundColor="white"
      top="0"
      left="50%"
      transform="translateX(-50%)"
    >
      {path.pathname === "/" ? (
        <div></div>
      ) : (
        <Box as={Link} to="/">
          <HiChevronLeft size={22} />
        </Box>
      )}
      <Text as="h1">Al-Qur'an Mobile</Text>
      <HiDotsHorizontal size={22} />
    </Flex>
  );
};

export default NavBar;
