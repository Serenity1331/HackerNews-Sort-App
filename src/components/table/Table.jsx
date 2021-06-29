import React, { useMemo } from 'react'
import Row from '../row/Row'
import PageNum from '../page-num/PageNum';
import './table.styles.css'

function createPageNumbers(maxPages, current, setCurrentPage) {

    let arr = [];

    for (let i = 1; i <= maxPages; i++) {
        arr.push(<PageNum number={i} key={i} current={current} setCurrentPage={setCurrentPage} />)
    }

    return arr;
}

function Table( {data, sortConfig, requestSort, currentPage, setCurrentPage} ) {

    const newsMaxPages = 10;
    const sortedData = useMemo(() => {

        let sortedElems = [...data];
        sortedElems.sort((a, b) => {

            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
            return 0;
            
        })

        return sortedElems;

    }, [data, sortConfig])

    return (
        <>
            <table className="customTable">
                <thead>
                    <tr>
                        <th className="header-time" onClick={ () => requestSort('time') }>
                            <span>Time</span>
                        </th>
                        <th onClick={ () => requestSort('title') }>
                            <span>Title</span>
                        </th>
                        <th onClick={ () => requestSort('domain') }>
                            <span>Domain</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    { sortedData.map(elem => <Row data={ elem } key={ elem.id } />) }
                </tbody>
            </table>

            <div className="page-list">
                { createPageNumbers(newsMaxPages, currentPage, setCurrentPage) }
            </div>

            <button className="sort-by-time" onClick={ () => requestSort('time') }>Sort By Time</button>
        </>
    )
}

export default Table
