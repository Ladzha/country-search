import { useState, useEffect, useCallback} from 'react';
import { ICountry } from '../models';
import axios from 'axios';

export default function useCountry() {

  const [countries, setCountries] = useState<ICountry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = useCallback(async()=>{
      try {
        setError('')
        setLoading(true)
        const response = await axios.get<ICountry[]>
        ('https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,capital')
        setCountries(response.data)
        setLoading(false)

      } catch (err: unknown) {
        const error = err as AxiosError
        setLoading(false)
        setError(error.message)    
      }
  }, [])

  useEffect(()=>{
    fetchData()
  }, [fetchData])

  return { countries, loading, error }
}