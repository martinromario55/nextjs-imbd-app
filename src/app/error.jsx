'use client'
import React, { useEffect } from 'react'

const error = ({ error, reset }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong.</h1>
      <button onClick={() => reset()} className="hover:text-amber-600">
        Try again
      </button>
    </div>
  )
}

export default error
