import { VStack, Image, Text, Center } from 'native-base'

import BackgroundImg from '@assets/background.png'
import LogoSVG from '@assets/logo.svg'

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSVG />
        <Text color="gray.100" fontSize="sm">
          Treine a sua mente e o seu corpo
        </Text>
      </Center>
    </VStack>
  )
}
