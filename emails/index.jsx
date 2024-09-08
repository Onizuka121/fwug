import React from "react";
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

function getRandomNumberFromList() {
  const numbers = [29, 25, 26, 22, 35, 34];
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("La lista deve essere un array non vuoto.");
  }
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

export default function FWUGEmailTemplate() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        />
        <style>
          {`
            @media only screen and (max-width: 600px) {
              .container {
                width: 100% !important;
                padding: 10px !important;
              }
              .heading {
                font-size: 28px !important;
              }
              .text {
                font-size: 18px !important;
                line-height: 24px !important;
              }
              .button {
                font-size: 18px !important;
                width: 80% !important;
                padding: 10px !important;
              }
              .image {
                width: 100% !important;
                height: auto !important;
              }
              .ctaSection {
                margin-top: 20px !important;
                margin-bottom: 20px !important;
              }
              .logo {
                width: 100% !important;
                height: auto !important;
                max-width: 600px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>
        Welcome to the $FWUG Fam! Your journey to meme coin stardom begins!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src="https://www.fwug.org/images/image30.jpg"
              width="600"
              height="300"
              alt="$FWUG Logo"
              style={logo}
            />
          </Section>
          <Heading style={h1}>Welcome to the $FWUG Fam!</Heading>
          <Text style={text}>Ribbit ribbit, new $FWUG fam member! 🐸🎉</Text>
          <Text style={text}>
            We're toadally excited to have you join our pond of meme coin
            enthusiasts. You've just taken your first hop into the wild world of
            $FWUG!
          </Text>
          <Section style={imageSection}>
            <Img
              src={`https://www.fwug.org/images/image${getRandomNumberFromList()}.jpg`}
              width="500"
              height="auto"
              alt="$FWUG Welcome Meme"
              style={memeImage}
            />
          </Section>
          <Text style={text}>
            As a new member of our lily pad, here's what you can expect:
          </Text>
          <ul style={list}>
            <li>Ribbeting updates on $FWUG's latest leaps and bounds</li>
            <li>Exclusive memes that'll make you croak with laughter</li>
            <li>Tips on how to make the most of your $FWUG investment</li>
            <li>
              Invitations to virtual pond meetings with fellow $FWUG hodlers
            </li>
          </ul>
          <Text style={text}>
            Ready to dive deeper into the $FWUG pond? Hop on over to our trading
            platform and start your meme coin adventure!
          </Text>

          <Section style={ctaSection}>
            <Link
              href="https://pump.fun/5ENMsAru7reMkWJJd78cGThBtjVVKVbWJBhabrA8pump"
              style={button}
            >
              Start Trading $FWUG Now!
            </Link>
          </Section>
          <Section style={ctaSection}>
            <Link
              href="https://pump.fun/5ENMsAru7reMkWJJd78cGThBtjVVKVbWJBhabrA8pump"
              style={button}
            >
              Explore PumpFun
            </Link>
          </Section>
          <Section style={ctaSection}>
            <Link href="https://t.me/therealfwug" style={button}>
              Join to Telegram
            </Link>
          </Section>

          <Text style={text}>
            Remember: In the world of $FWUG, every day is Wednesday, my dudes!
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            © 2023 $FWUG Coin. All rights reserved.
            <br />
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "black",
  fontFamily:
    '"Bungee", "Chakra Petch", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "100%",
  maxWidth: "580px",
};

const logoContainer = {
  marginBottom: "24px",
};

const logo = {
  margin: "0 auto",
  borderRadius: "15px",
  maxWidth: "100%",
  height: "auto",
};

const h1 = {
  color: "#F8E197",
  fontFamily: '"Chakra Petch", sans-serif',
  fontSize: "35px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "30px 0",
};

const text = {
  color: "#65B1E0",
  fontFamily: '"Chakra Petch", sans-serif',
  fontSize: "20px",
  lineHeight: "26px",
};

const list = {
  ...text,
  paddingLeft: "26px",
};

const imageSection = {
  marginBottom: "30px",
};

const memeImage = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  margin: "0 auto",
};

const ctaSection = {
  textAlign: "center",
  marginTop: "32px",
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#F8E197",
  borderRadius: "10px",
  color: "black",
  fontFamily: '"Chakra Petch", sans-serif',
  fontSize: "20px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "60%",
  margin: "0 auto",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
