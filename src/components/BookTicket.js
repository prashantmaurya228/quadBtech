import React from 'react'
import { useRef } from 'react'
import './BookTicket.css'

const BookTicket = ({ info }) => {
    const nameref = useRef();
    const emailref = useRef();
    const phoneref = useRef();
    function handleSubmit() {
        let name = nameref.innerText
        let email = emailref.innerText
        let phone = phoneref.innerText
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
    }

    return (
        <div className='book'>
            <div className='ticket'>
                <h1>BOOK Ticket</h1>
                <p>Movie Name</p>:{info.name}<br />
                <p>TIME</p>:{info.schedule.time}<br />
                <p>days:</p>{
                    info.schedule.days.map((item) => {
                        return <p>{item} ,</p>
                    })
                }
            </div>
            <div className='form'>
                <h2>Fill Details</h2>
                Name<input type='text' placeholder='Name' ref={nameref} />
                Phone No:<input type='text' placeholder='Phone' ref={emailref} />
                Email:<input type='text' placeholder='Email' ref={phoneref} />
                <button onClick={handleSubmit}>Submit</button>
            </div>



        </div>
    )
}

export default BookTicket