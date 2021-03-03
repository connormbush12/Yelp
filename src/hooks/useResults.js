import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params : {
                    length: 50,
                    term: searchTerm,
                    location: 'dallas'
                }
            })
            setResults(response.data.businesses)
        } catch {
        setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}