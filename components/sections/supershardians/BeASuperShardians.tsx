import { Box, Button, Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { COMMUNITY_URL } from "constants/links";

type BeASuperShardianProps = {
  title: string;
  description: string;
};
const BeASuperShardian = ({ title, description }: BeASuperShardianProps) => {
  return (
    <Flex bg="brand.grey-5">
      <Container maxW="container.xl" mx="auto" bg="brand.blue" mb={12}>
        <VStack alignItems={"flex-start"} spacing={2} p={10}>
          <Box
            lineHeight="normal"
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight="bold"
            color="brand.grey-5"
          >
            {title}
          </Box>
          <Box maxW={{ base: "md", md: "full" }} pb={5}>
            <Box
              fontSize={{ base: "md", lg: "lg" }}
              textAlign={{ base: "left", md: "left" }}
              color="brand.grey-10"
            >
              {description}
            </Box>
          </Box>
          <Button
            size="lg"
            as="a"
            bg="brand.grey-5"
            color="brand.grey-90"
            target="_blank"
            href={COMMUNITY_URL}
          >
            Start Here
          </Button>
        </VStack>
      </Container>
    </Flex>
  );
};
export default BeASuperShardian;
