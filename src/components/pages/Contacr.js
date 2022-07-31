import { useState } from "react"
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';


init('8Dg8wfRY3NL2Rw6t0');

function Contact(){

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [emailsent,setEmailsent]=useState(false)

    const submit=()=>{
        if(name&&email&&message){
            
            const serviceId = 'service_v2ra4nw';
            const templateId = 'template_7k21sf6';
            const userId = '8Dg8wfRY3NL2Rw6t0';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

            setName("")
            setEmail("")
            setMessage("")
            setEmailsent(true)
        }
        else{
            alert("please fill in all the fields")
        }
    }
    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    //service_v2ra4nw
    //template_7k21sf6
    //GP0CtsXc5Zp8IggDElGXg

    return <div className="main">
        <div className="contact-form">
            <input type="text" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/>
            <input type="text" placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)}/>
            <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)}/>
            <button className="btnc" onClick={submit}>Send message</button>
            <span className={emailsent?'visible':null}>Thank you for your message</span>
        </div>
    </div>
}

export default Contact