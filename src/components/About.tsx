import { Flex, Grid, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion"; 

interface AboutProps {
    isRender : boolean;
    tokenExInVariants : Variants;
    language : string;
}

const About : FC<AboutProps> = ({isRender, tokenExInVariants}) => {

    const aboutMidAnimation = useAnimation();

    useEffect(() => {
        const targetElement = document.querySelector('#aboutMid');
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if(entry.target === targetElement) {
                    if(entry.isIntersecting) {
                        aboutMidAnimation.start("visible");
                    }
                }
            },
            {threshold: 0.0}
        )
        if(!targetElement) return;
        observer.observe(targetElement);

        return () => {
            observer.unobserve(targetElement);
        }
    },[isRender])

    return (
        <>
        <Flex
            w="100%"
            minH="70vh"
            color="white"
            pt={32}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={16}>
                About LAMBOP
            </Text>
            <motion.div
            initial="hidden"
            animate={aboutMidAnimation}
            variants={tokenExInVariants}
            >
                <Grid templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)']} w={["330px","330px","780px","1000px","1000px","1000px","1000px"]} mx="auto" id="aboutMid" gap="20px">
                    <Flex justifyContent="center">
                        <Img w="80%" src="images/lambopepebottom.png"/>
                    </Flex>
                    <Flex flexDir="column" justifyContent="center" alignItems="center">
                        <Text fontSize="18px">The management and trading of meme coins have revolutionized the digital financial system, with meme-driven blockchain innovation pushing the boundaries of creativity and technology. Among these, the LamboPepe project (LAMBOP Token) stands out as a bold and humorous contender. Featuring Pepe the Frog armed like a true action hero, LamboPepe combines the edgy thrill of mischief with a dash of comedic flair, aiming to dominate the meme coin ecosystem.

                        </Text>
                        {/* <Button
                            w={["140px","140px","140px","140px","140px","220px","220px"]}
                            h={["36px","36px","36px","36px","36px","52px","52px"]}
                            fontSize={["16px","16px","16px","16px","16px","22px","22px"]} 
                            mt={8}
                            bgGradient="linear(to-r, #ff3b8f, #ff9a3b)" 
                            color="#333333"
                            borderRadius="24px"
                            overflow="hidden"
                            _hover= {{
                                backgroundColor : "#0C0E27",
                                _before : {
                                    transform : "translateX(100%)",
                                },
                            }}
                            _before={{
                                content : "''",
                                position : "absolute",
                                top : "0",
                                left : "0",
                                width : "100%",
                                height : "100%",
                                background : "rgba(255, 255, 255, 0.3)",
                                transition : "transform 0.5s ease",
                                transform : "translateX(0%)",
                            }}
                            >Let's Start</Button> */}
                    </Flex>
                </Grid>
            </motion.div>
        </Flex>
        </>
        
    )
}

export default About;