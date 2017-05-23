// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Appear,
  Slide,
  Image,
  Layout,
  Fill,
  Spectacle
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  uniLogo: require("../assets/university-logo.png"),
  overwhelmed: require("../assets/overwhelmed.gif"),
  rangleLogo: require("../assets/rangle-logo.svg"),
  typingMagic: require("../assets/typing-magic.gif"),
  frontEndLibraries: require("../assets/front-end-libraries.png"),
  githubLogo: require("../assets/github-logo.png"),
  mediumLogo: require("../assets/medium-logo.png"),
  unclePhilDancing: require("../assets/uncle-phil-dancing.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#3498db",
  tertiary: "#3498db",
  quartenary: "#bdc3c7"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transitionDuration={500} theme={theme}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Bundling JavaScript assets for HTTP/2
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Things I've learned
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="secondary">
            <Image src={images.uniLogo} margin="-70px auto 0px" height="500"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.overwhelmed} margin="-70px auto 0px" height="400"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.rangleLogo} margin="-70px auto 0px" height="70"/>
          </Slide>
          
          {/**/}
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Things I've learned
            </Heading>

            <Appear>
              <Heading size={5} fit caps lineHeight={1} textColor="secondary">
                (and I'm still learning btw)
              </Heading>
            </Appear>
          </Slide>
          {/**/}

          {/**/}
            <Slide transition={["slide"]} bgColor="secondary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                It's not a race
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgImage={images.frontEndLibraries.replace("/", "")} textColor="secondary">
            </Slide>
          {/**/}

          {/**/}
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              There's more to it
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" textColor="primary">

            <Heading textColor="secondary" caps fit>Web development</Heading>

            <Layout>
              <Appear>
                  <Fill>
                    <Heading size={4} caps textColor="primary" bgColor="secondary" margin={10}>
                      UX
                    </Heading>
                  </Fill>
              </Appear>
            </Layout>

            <Layout>
              <Appear>
                <Fill>
                  <Heading size={4} caps textColor="primary" bgColor="secondary" margin={10}>
                    Graphic Design
                  </Heading>
                </Fill>
              </Appear>
            </Layout>

            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" bgColor="secondary" margin={10}>
                  Front End
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="primary" bgColor="secondary" margin={10}>
                  Back End
                </Heading>
              </Fill>
            </Layout>

            <Layout>
              <Appear>
                <Fill>
                  <Heading size={4} caps textColor="primary" bgColor="secondary" margin={10}>
                    DevOps
                  </Heading>
                </Fill>
              </Appear>
            </Layout>

          </Slide>
          {/**/}

          {/**/}
            <Slide transition={["slide"]} bgColor="secondary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                Find something you enjoy
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
              <Image src={images.unclePhilDancing} margin="-70px auto 0px" height="400"/>
            </Slide>
          {/**/}

          {/**/}
            <Slide transition={["slide"]} bgColor="secondary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                Put it out there
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
              <Layout>
                <Appear>
                  <Image src={images.githubLogo} margin="-70px auto 0px" height="200"/>
                </Appear>
                <Appear>
                  <Image src={images.mediumLogo} margin="-70px auto 0px" height="200"/>
                </Appear>
              </Layout>
            </Slide>
          {/**/}

          {/**/}
            <Slide transition={["slide"]} bgColor="secondary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                There's no such thing
              </Heading>
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                as a stupid question
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                You don't want to be the most
              </Heading>
              <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                experienced in your team
              </Heading>
            </Slide>
          {/**/}

          {/**/}
            <Slide transition={["slide"]} bgColor="secondary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                Practice, practice and practice
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
              <Image src={images.typingMagic} margin="-70px auto 0px" height="400"/>
            </Slide>
          {/**/}

        </Deck>
      </Spectacle>
    );
  }
}
