import React from 'react'
import './Contact.css'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { AiOutlineSend } from 'react-icons/ai'


export default function Contact() {
    const sendEmail = (e) => {
        console.log(e)
    }
    return (
        <>
            <Header />
            <div className="cantact-body">
                <form action="#" onSubmit={sendEmail}>
                    <h4 className="cantact-body-title">Contact</h4>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />

                    <TextField id="outlined-basic" label="Email" variant="outlined" />

                    <TextField
                        id="outlined-multiline-static"
                        label="Message  :"
                        multiline
                        rows={4}
                        className="cantact-body-texarea"
                    />

                    <Button variant="contained" className="cantact-body-btn" endIcon={<AiOutlineSend />}>
                        Send
                    </Button>
                </form>
            </div>

            <Footer />

        </>

    )
}
