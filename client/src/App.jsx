import { useEffect } from 'react'


function App() {
  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div>
      <h1>Check the console for a list of movies!</h1>;
    </div>
  )
} 
export default App