import React from 'react'
import { Link } from 'react-router-dom'
import './SingalShow.css'
// import Summary from './Summary'
const SingleShow = ({ info }) => {
    const sum = info.show.summary;
    const summary = sum.replace(/<(.|\n)*?>/g, '');
    const detail = {
        summary: summary,
        info: info
    }
    return (
        <div className='singalShow'>
            <img src={info.show.image.medium} alt="Show-poster" />
            <h1>{info.show.name}</h1>
            Rating:<h2>{info.show.rating.average}</h2>
            status:<h2>{info.show.status}</h2>
            <Link to="/Summary" state={info}>Show More</Link>
        </div >
    )
}

export default SingleShow