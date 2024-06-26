import Results from '@/components/Results'

const API_KEY = process.env.API_KEY

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending'
  // tmdb api
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  )
  const data = await response.json()
  if (!response.ok) {
    console.log(error)
    throw new Error('Something went wrong while fetching movies')
  }
  // console.log(data)
  const results = data.results
  return (
    <div>
      <Results results={results} />
    </div>
  )
}

export default Home
