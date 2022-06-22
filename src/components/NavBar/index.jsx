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
      w="400px"
      top={0}
      backgroundColor="white"
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
