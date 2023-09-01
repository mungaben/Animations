



"use client"


import { Button } from '@/components/ui/button'
import React from 'react'

import {
    experimental_useFormStatus as useFormState,
} from 'react-dom'

const POstButton = () => {
    const {pending} = useFormState();
  return (
    <>
      <Button  type="submit">
        {
            pending ? 'Adding data....' : 'Add Data'
        }
      </Button>
    </>
  )
}

export default POstButton
