import Agent from '@/components/Agent'
import { getCurrentuUer } from '@/lib/actions/auth.action'
import React from 'react'

const Page = async () => {

  const user = await getCurrentuUer();

  return (
    <>
        <h3>Interview Generation</h3>
        
        <Agent userName={user?.name} userId={user?.id} type="generate"/>
    </>
  )
}

export default Page
