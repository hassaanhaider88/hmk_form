import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Commponents/Form'

function App() {
const handleSubmit=(FormData)=>{
  console.log(FormData);
}
const BtnStyle={
  fontWeight:'800',
  background:"black",
  padding:'10px',
  borderRadius:'20px',
color:'white' ,
width:'100%'

}
const FormStyle={
  // background:'gray',
  // padding:'10px'
}
  return (
    <>
    <div className='w-full flex justify-center items-center min-h-[100vh] bg-[#afa9a9]'>
              <Form handleSubmit={handleSubmit} FormStyle={FormStyle} BtnStyle={BtnStyle}/>
    </div>          
    </>
  )
}

export default App
