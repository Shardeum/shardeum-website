import { Box, Flex, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";
import { useRouter } from "next/router";

const Carrers: NextPage = () => {
  const router = useRouter();

  const { t: pageTranslation } = useTranslation(["page-careers"]);
  const { t: commonTranslation } = useTranslation(["common"]);
  return (
    <>
      <NextSeo
        title={"Shardeum Careers | Help us build Shardeum!"}
        description="Shardeum is the world’s first layer 1 blockchain that truly solves scalability trilemma. It is an EVM based smart contract network that scales linearly with low gas fees forever with an aim to onboard billions of daily users and numerous DApps to Web 3"
        canonical="https://shardeum.org/careers/"
        additionalMetaTags={[
          {
            property: "keywords",
            content: "shardeum,blockchain,layer1 blockchain,evm compatible blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/Shardeum.png",
          },
        ]}
        openGraph={{
          title: "Shardeum Careers | Help us build Shardeum!",
          type: "website",
          url: "https://shardeum.org/careers/",

          description:
            "Shardeum is the world's first EVM based L1 blockchain that truly solves scalability trilemma with linear scaling and low gas fees forever",
          images: [
            {
              url: "https://shardeum.org/Shardeum.png",
              alt: "Shardeum Image",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />

      {/* Hero section */}
      {!router.query.gh_jid && (
        <Hero
          heading="Help us build Shardeum!"
          description="Join the team of enthusiastic people who are striving to solve blockchain's biggest problems"
        />
      )}
      <Flex bg="brand.white" as="section">
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "20" }}
          px={{ base: 6, xl: 0 }}
        >
          <div id="grnhse_app"></div>
          <Script src="https://boards.greenhouse.io/embed/job_board/js?for=shardeumfoundation" />
        </Container>
      </Flex>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-careers"])),
      // Will be passed to the page component as props
    },
  };
}

export default Carrers;