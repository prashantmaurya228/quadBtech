import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import SingleShow from './SingleShow';
import './Allshows.css';

const Allshows = () => {
    const [info, setInfo] = useState([]);
    //API call
    const url = `https://api.tvmaze.com/search/shows?q=all`
    useEffect(() => {
        axios.get(url).then((response) => {
            setInfo(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <div className='shows'>
            {
                info.map(item => {
                    return <SingleShow key={item.show.id} info={item} />
                })
            }
        </div>
    )
}

export default Allshows