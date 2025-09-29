'use client';

import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState<string>('');
   
    const [message, setMessage] = useState<string>('');
    const [confirmation, setConfirmation] = useState<string>('');
   
    // watch name input and and update state var as input value changes
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    // watch message input and update state var as input value changes
    function handleMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMessage(event.target.value);
    }

    // show confrimation when button clicked
    const handleSubmit = () => {
        setConfirmation(`Your name: ${name} - Your message: ${message}`);
    }
    return (
        <main>
            <h1>Contact Information</h1>
            <p>Contact us at XXX-XXX-XXXX or send us a message below</p>
            <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
            <p>Your name is: {name}</p>
            <input type="text" placeholder="Your message" value={message} onChange={handleMessageChange} />
            <p>Your message is: {message}</p>
            <button onClick={handleSubmit}>Submit</button>
            <p>{confirmation}</p>
        </main>
    );
}
