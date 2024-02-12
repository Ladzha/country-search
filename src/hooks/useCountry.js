import { useState, useEffect, useCallback} from 'react';
import axios from 'axios';

export default function useCountry() {

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = useCallback(async()=>{
      try {
        setError('')
        setLoading(true)
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,capital')
        setCountries(response.data)
        setLoading(false)

      } catch (err) {
        const error = err
        setLoading(false)
        setError(error.message)    
      }
  }, [])

  useEffect(()=>{
    fetchData()
  }, [fetchData])

  return { countries, loading, error }
}