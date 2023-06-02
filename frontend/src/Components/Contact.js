import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
    const[email,setEmail]=useState('')
    const[subject,setSubject]=useState('')
    const[text,setText]=useState('')
    const handClick=()=>{
        axios.post('http://localhost:7000/api/sendmail',{
            email:email,
            subject:subject,
            text:text
        }).then((res)=>{
            if (res.data.status==='seuccess'){
                setEmail('')
                setSubject('')
                setText('')
                Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your email has been saved',
  showConfirmButton: false,
  timer: 3000
})
            }
        })
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
      <input type="text" onChange={(e)=>setSubject(e.target.value)} value={subject} />
      <input type="text" onChange={(e)=>setText(e.target.value)}value={text} />
      <button  onClick={()=>handClick() } >Enregister</button>
    </div>
  )
}

export default Contact
