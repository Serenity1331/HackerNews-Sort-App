import React from 'react'
import './row.styles.css'

function Row( {data} ) {

    const date = new Date(data.time * 1000).toLocaleString();

    return (
        <tr onClick={() => window.open(`https://news.ycombinator.com/item?id=${data.id}`)}>
            <td className="date">{ date }</td>
            <td className="title">
                <div>
                    { data.title }
                </div>
            </td>
            <td className="domain">{ data.domain }</td>
        </tr>
    )
}

export default Row
