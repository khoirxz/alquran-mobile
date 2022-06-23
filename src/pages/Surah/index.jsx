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
import { useParams } from "react-router-dom";
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
        <Heading as="h1" size="xl" textAlign="center" my={5}>
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
                    <Box>
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
                      <Box>
                        <Text fontSize="16px">{item.idn}</Text>
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
