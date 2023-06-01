import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import BookTicket from './BookTicket';
import './Summary.css'
const Summary = () => {
    const location = useLocation();
    let info = location.state.show;
    let data = location.state.show.summary;
    let summary = data.replace(/<(.|\n)*?>/g, '');
    //data = data.info
    const [hide, setHide] = useState(false);
    console.log(data)
    return (
        <div className='summary'>
            <h1>Summary</h1>
            <h1>{info.name}</h1>
            Language:<h3>{info.language}</h3>
            <h2>
                {summary}
            </h2>
            <button onClick={() => setHide(true)}>Book Ticket</button>
            {hide && <BookTicket info={info} />}
        </div>
    )
}

export default Summary