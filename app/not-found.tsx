import React from 'react'
import Animations from './components/animations'
import Link from 'next/link'

function NotFound() {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100 text-center">
       <Animations source='/animations/Lonely404.json' ClassName='w-100 '/>
      <p className="text-xl text-gray-600 mb-8">
        Sorry, this page isn't available.
      </p>
 
    <Link href={'/'}>
      <p className="px-6 py-3 bg-emerald-400 text-white rounded-lg hover:bg-emerald-600 transition-colors">
        Go Home
      </p>
    </Link>
    </div>
  )
}

export default NotFound




