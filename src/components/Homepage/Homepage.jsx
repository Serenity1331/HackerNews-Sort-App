import React, {useReducer, useEffect, useState} from 'react'
import axios from 'axios'
import './homepage.styles.css'
import Table from '../table/Table'

const initialState = {
    loading: true,
    error: '',
    data: {}
}

const reducer = (state, action) => {

    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: '',
            }
        
        case 'FETCH_ERROR': 
            return {
                loading: false,
                data: {},
                error: 'Something went wrong',
            }

        default:
            return state
    }
}

function Homepage() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [sortConfig, setSortConfig] = useState({ key:'', direction: 'ascending'});
    const [currentPage, setCurrentPage] = useState(1);
    
    const url = `https://api.hnpwa.com/v0/news/${currentPage}.json`;
    
    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    useEffect(() => {
        axios
            .get(url)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
        }, [url])

    return (
        <div className="container-main">
            { state.loading ? 'Loading' : <Table data={state.data} 
                                                 sortConfig={sortConfig}
                                                 setSortConfig={setSortConfig}
                                                 requestSort={requestSort}
                                                 currentPage={currentPage}
                                                 setCurrentPage={setCurrentPage}
                                                 /> }
            { state.error ? state.error : null }
        </div>
    )
}

export default Homepage
