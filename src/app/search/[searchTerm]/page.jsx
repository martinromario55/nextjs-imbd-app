import Results from '@/components/Results'
import React from 'react'

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm
  // search movie api
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
    { next: { revalidate: 10000 } }
  )
  const data = await response.json()
  const results = data.results

  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found!</h1>}
      {results && <Results results={results} />}
    </div>
  )
}

export default SearchPage
