import React from 'react'
import './pageNum.styles.css'

function PageNum({ number, current, setCurrentPage }) {
    return (
        <div>
            <button className={`page-num ${number === current ? `current-page` : ''}`}
                    onClick={ () => setCurrentPage(number) } >
                        { number }
            </button>
        </div>
    )
}

export default PageNum
