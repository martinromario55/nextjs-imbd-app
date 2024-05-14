import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image
        className="h-52"
        src={'/loading.svg'}
        alt="loading..."
        width={100}
        height={100}
      />
    </div>
  )
}

export default loading
