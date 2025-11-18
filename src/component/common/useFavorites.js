import React, { useEffect } from 'react'

const useFavorites = () => {
    const [favorites, setFavorites] = useState([])
    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem(favorites)) || []
        setFavorites(saved)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useFavorites
