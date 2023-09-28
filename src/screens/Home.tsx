import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack } from 'native-base'
import { useState } from 'react'

export function Home() {
  const [groupSelected, setGroupSelected] = useState('Dorsal')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group
          onPress={() => setGroupSelected('Dorsal')}
          name="Dorsal"
          isActive={groupSelected === 'Dorsal'}
        />
        <Group
          onPress={() => setGroupSelected('Ombro')}
          name="Ombro"
          isActive={groupSelected === 'Ombro'}
        />
      </HStack>
    </VStack>
  )
}
