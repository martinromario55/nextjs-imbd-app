'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBox = () => {
  const [Search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(Search)
    router.push(`/search/${Search}`)
  }

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={Search}
        onChange={e => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!Search}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox
