import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  chakra,
  Box,
  Text,
  Flex,
  Button,
  Heading,
  Divider,
  useDisclosure,
  Progress,
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { BsInfo } from "react-icons/bs";

import { ContentSection } from "../../components";
import ModalSection from "../../components/ModalSection";

const Surah = () => {
  const [surah, setSurah] = useState([]);
  const { nomor } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getSurah = async () => {
      const respons = await axios.get(`https://equran.id/api/surat/${nomor}`);
      const result = respons.data;

      setSurah(result);
    };

    getSurah();
  }, [setSurah, nomor]);

  return surah?.status === 404 ? (
    <ContentSection titlePage=":(">
      <Text>{surah.message}</Text>
    </ContentSection>
  ) : (
    <ContentSection titlePage={surah.nama_latin}>
      <Box py={3}>
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          my={5}
          fontFamily="Uthmanic"
        >
          {surah.nama}
        </Heading>

        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="13px" fontWeight="300">
                {surah.tempat_turun}
              </Text>
              <Text fontSize="13px" fontWeight="300">
                {surah.jumlah_ayat}
              </Text>
            </Box>
            <Box>
              <Button leftIcon={<BsInfo />} onClick={onOpen} size="xs">
                info
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box my={5}>
          {!surah?.ayat?.length ? (
            <Progress colorScheme="whatsapp" isIndeterminate />
          ) : (
            <chakra.ul listStyleType="none">
              {surah?.ayat.map((item) => (
                <chakra.li my={10} key={item.id}>
                  <Box display="flex" py={2} justifyContent="space-between">
                    <Box>
                      {item.surah}:{item.nomor}
                    </Box>
                    <Box w="full">
                      <Box textAlign="right" my={4}>
                        <Box>
                          <Text
                            lang="ar"
                            fontWeight="600"
                            fontSize="32px"
                            fontFamily="Uthmanic"
                          >
                            {item.ar}
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            as="p"
                            fontSize="15px"
                            color="blackAlpha.700"
                            dangerouslySetInnerHTML={{ __html: item.tr }}
                          />
                        </Box>
                      </Box>
                      <Box ml={1}>
                        <Text textAlign="left" fontSize="16px">
                          {item.idn}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                </chakra.li>
              ))}
            </chakra.ul>
          )}
        </Box>
      </Box>

      <Flex justifyContent="space-between">
        {surah?.surat_sebelumnya === false ? (
          <Button disabled>Prev</Button>
        ) : (
          <Button
            colorScheme="whatsapp"
            as={Link}
            to={`/surah/${surah?.surat_sebelumnya?.nomor}`}
          >
            Prev
          </Button>
        )}

        {surah?.surat_selanjutnya === false ? (
          <Button disabled>Next</Button>
        ) : (
          <Button
            colorScheme="whatsapp"
            as={Link}
            to={`/surah/${surah?.surat_selanjutnya?.nomor}`}
          >
            Next
          </Button>
        )}
      </Flex>

      <ModalSection
        isOpen={isOpen}
        onClose={onClose}
        title={surah.nama_latin}
        desc={surah.deskripsi}
      />
    </ContentSection>
  );
};

export default Surah;
