import React from 'react'
import Animations from '@/app/components/animations'

 function loading() {
  return (
    <div className='w-full h-full'>
      <Animations ClassName='w-full h-full' source='/animations/loading.json' />
    </div>
  )
}

export default loading
