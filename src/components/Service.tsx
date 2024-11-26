import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useAnimation, Variants } from "framer-motion"; 

interface ServicesProps {
    setIsRender : React.Dispatch<React.SetStateAction<boolean>>;
    tokenExInVariants : Variants;
    isRender : boolean;
    language : string;
}

const Services : FC<ServicesProps> = ({isRender, setIsRender}) => {
    const serviceTopAnimation = useAnimation();
    const serviceBottomAnimation = useAnimation();
    
    useEffect(() => {
        setIsRender(true); //컴포넌트가 렌더링 될 때 발생하는 시간 차를 감지 하기 위함
    },[])

    useEffect(() => {
        const targetElement = document.querySelector('#serviceTop');
        const targetBottomElement = document.querySelector('#serviceBottom');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                for(let i=0; i<entries.length; i++) {
                    const entry = entries[0];
                    console.log(entry.target);
                    if(entry.target === targetElement) {
                        if(entry.isIntersecting) {
                            serviceTopAnimation.start("visible");
                            console.log("serviceTop visible")
                        }
                    }
                    
                    if(entry.target === targetBottomElement) {
                        if(entry.isIntersecting) {
                            serviceBottomAnimation.start("visible");
                            console.log("serviceBottom visible")
                        }
                    }
                }
            },
            {threshold : 0.1}
        );
        //entries추가
        if(targetElement) {
            console.log("Observing Service Top Element");
            observer.observe(targetElement);
        }
        if(targetBottomElement) {
            console.log("Observing Service Bottom Element");
            observer.observe(targetBottomElement);
        }
        
        return () => {
            if (targetElement) observer.unobserve(targetElement);
            if (targetBottomElement) observer.unobserve(targetBottomElement);
        } //이 코드가 있으면 내려갈 때 1번 올라올 때 1번 29번 줄이 출력
          //return 함수가 없을 때 내려갈 때 3번 올라올 때 3번 29번 줄이 출력
          //정확한 상태 감지하려면 정리함수 사용해주는 것을 권장
    },[isRender])
    
        return (  
        <>
         <Flex
            w="100%"
            minH="100vh"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
          <Flex textAlign="center" p={10} justifyContent="center" alignItems="center" maxW="1200px">
            <Flex h="680px" gap={2} alignItems="center" justifyContent="center" flexDir="column">
              <Flex
                flexDir="column"
                gap={8}
                mx="auto"
              >
                <Text fontSize="24px" fontWeight="bold" color="white">
                  Getting Started
                </Text>
                <Box textAlign="center" bg="gray.700" borderRadius="md" p={2} border="2px solid transparent" _hover={{borderColor: "white", cursor: "pointer"}} >
                  <Text
                    bg="#FFD700"
                    color="black"
                    fontSize="18px"
                    fontWeight="bold"
                    borderRadius="full"
                    display="inline-block"
                    px={4}
                    py={2}
                    mb={2}
                  >
                    01
                  </Text>
                  <Text fontSize="20px" fontWeight="bold" mb={1}>
                    Choose your wallet
                  </Text>
                  <Text color="white" mb={2} >
                    A wallet is necessary for people wanting to use, trade, or hold EarthPepe. You can pick a wallet.
                  </Text>
                </Box>
                <Box textAlign="center" bg="gray.700" borderRadius="md" p={2} border="2px solid transparent" _hover={{borderColor: "white", cursor: "pointer"}} >
                  <Text
                    bg="#FFD700"
                    color="black"
                    fontSize="18px"
                    fontWeight="bold"
                    borderRadius="full"
                    display="inline-block"
                    px={4}
                    py={2}
                    mb={2}
                  >
                    02
                  </Text>
                  <Text fontSize="20px" fontWeight="bold" mb={1}>
                    Configure your wallet
                  </Text>
                  <Text color="white" mb={2}>
                    After downloading, configure your wallet according to our guide.
                  </Text>
                  <Button 
                  bg="#FFD700"
                  as="a" //down
                  href="/documents/guide.pdf" //down
                  download="guide.pdf" // 다운로드 속성 추가
                  >Guide</Button>
                </Box>
                <Box textAlign="center" bg="gray.700" borderRadius="md" p={2} border="2px solid transparent" _hover={{borderColor: "white", cursor: "pointer"}}>
                  <Text
                    bg="#FFD700"
                    color="black"
                    fontSize="18px"
                    fontWeight="bold"
                    borderRadius="full"
                    display="inline-block"
                    px={4}
                    py={2}
                    mb={2}
                  >
                    03
                  </Text>
                  <Text fontSize="20px" fontWeight="bold" mb={1}>
                    Get some EPEPE
                  </Text>
                  <Text color="white" mb={2}>
                    There’s lots of ways to get your hands on some EPEPE
                  </Text>
                </Box>
              </Flex>
              <Flex w={["90%","90%","90%","0","0","0","0"]} h="50%" justifyContent="center" mt={6}>
                <Img w="80%" h="100%" src="images/lambopepe.png"/>
              </Flex>
            </Flex>
              <Flex w={["0","0","0","80%","80%","80%","80%"]} h="50%" justifyContent="center">
                <Img w="80%" h="100%" src="images/lambopepe.png"/>
              </Flex>
          </Flex>
        </Flex> 
        </>
    )
}

export default Services;