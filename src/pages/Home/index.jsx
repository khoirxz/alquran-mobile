import React, { useEffect, useState } from "react";
import { chakra, Box, Text, Progress, GridItem, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ContentSection } from "../../components";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const respond = await axios.get("https://equran.id/api/surat");
      const result = respond.data;

      setData(result);
    };

    getData();
  }, [setData]);

  return (
    <ContentSection titlePage="Daftar Surah">
      <Box as="ul" py={3}>
        {!data.length ? (
          <Progress size="xs" colorScheme="whatsapp" isIndeterminate />
        ) : (
          data.map((item) => (
            <chakra.li
              as={Link}
              to={`/surah/${item.nomor}`}
              display="grid"
              key={item.nomor}
              gridTemplateColumns="50px 1fr 100px"
              my={2}
              py={3}
              px={2}
              border="1px"
              borderColor="green.200"
              borderRadius={5}
              _hover={{
                borderColor: "green.500",
              }}
            >
              <GridItem>
                <Flex
                  backgroundColor="green.500"
                  m="8px"
                  w={35}
                  h={35}
                  borderRadius="full"
                  alignItems="center"
                  flexDir="row"
                  justifyContent="center"
                  color="white"
                  _hover={{
                    bg: "#e8e8e8",
                    color: "#000",
                  }}
                >
                  <Text textAlign="center">{item.nomor}</Text>
                </Flex>
              </GridItem>
              <GridItem px={2}>
                <Text fontWeight={700} fontSize="18px">
                  {item.nama_latin}
                </Text>
                <Text fontSize="13px" fontWeight="300">
                  {item.arti}
                </Text>
              </GridItem>
              <GridItem textAlign="center">
                <Text lang="ar" fontSize="20px">
                  {item.nama}
                </Text>
                <Text fontSize="13px" fontWeight="300">
                  {item.tempat_turun}
                </Text>
              </GridItem>
            </chakra.li>
          ))
        )}
      </Box>
    </ContentSection>
  );
};

export default Home;
