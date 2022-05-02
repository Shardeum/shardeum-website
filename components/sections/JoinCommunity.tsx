import { Box, Container, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import {
  IconDiscord,
  IconExternal,
  IconGithub,
  IconSeeMore,
  IconTelegram,
  IconTwitter,
} from "@shm/Icons";
import { COMMUNITY_URL, GITHUB_URL, TELEGRAM_URL, TWITTER_URL } from "../../constants/links";

const socialLinks = [
  { Icon: IconDiscord, title: "Discord", href: COMMUNITY_URL },
  { Icon: IconTwitter, title: "Twitter", href: TWITTER_URL },
  { Icon: IconGithub, title: "Github", href: GITHUB_URL },
  { Icon: IconTelegram, title: "Telegram", href: TELEGRAM_URL },
  { Icon: IconSeeMore, title: "See more", href: COMMUNITY_URL },
];

const JoinCommunity = () => {
  return (
    <Flex bg="brand.grey-90" as="section">
      <Container maxW="container.xl" mx="auto" pt="16" pb="28">
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <VStack spacing="6">
            <Text
              as="h2"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
              fontWeight="bold"
              color="brand.white"
            >
              Join the Community
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text fontSize={{ base: "md", lg: "base" }} textAlign="left" color="brand.grey-40">
                Shardeum is a global community. Anyone can join us in the journey to onboard
                billions of people into Web 3. Don&apos;t know how to code? Or not sure where to
                start? Don&apos;t worry. You can start by contributing as a content creator,
                community manager, language translator, developer and you name it
              </Text>
            </Box>
          </VStack>
          <Flex justifyContent="flex-end">
            <VStack w={{ base: "md", lg: "96" }} mx={{ base: "auto", lg: "0" }}>
              {socialLinks.map((link) => (
                <Link href={link.href} passHref key={link.title}>
                  <HStack
                    as="a"
                    rel="noopener noreferrer"
                    target="_blank"
                    w="full"
                    key={link.title}
                    py="5"
                    _hover={{ opacity: 0.8 }}
                    borderBottom="1px"
                    borderColor="brand.grey-80"
                    justifyContent="space-between"
                  >
                    <HStack spacing="4">
                      <link.Icon />
                      <Text
                        color="brand.white"
                        fontSize="base"
                        fontWeight="normal"
                        w="full"
                        _hover={{ color: "brand.grey-40" }}
                      >
                        {link.title}
                      </Text>
                    </HStack>
                    <IconExternal />
                  </HStack>
                </Link>
              ))}
            </VStack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default JoinCommunity;
