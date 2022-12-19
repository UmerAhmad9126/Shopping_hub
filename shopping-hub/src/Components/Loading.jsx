import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <Stack>
        <Skeleton height='100px' />
        <Skeleton height='100px' />
        <Skeleton height='100px' />
      </Stack>
    </div>
  )
}

export default Loading