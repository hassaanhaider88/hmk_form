import React, { useState } from 'react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsDisplay, BsFillEyeFill } from "react-icons/bs";

const Form = ({ FormStyle={background:'gray',padding:'10px'}, IsNeedConfirmPass=true, IsNeedMessage=true, handleSubmit, BtnStyle }) => {
  const [NameVal, setNameVal] = useState('');
  const [ShowNameError, setShowNameError] = useState('')
  const [EmailVal, setEmailVal] = useState('');
  const [ShowEmailError, setShowEmailError] = useState('');
  const [PasswordVal, setPasswordVal] = useState('');
  const [ShowPasswordError, setShowPasswordError] = useState('')
  const [ConformPasswordVal, setConformPasswordVal] = useState('');
  const [ShowConfirmPasswordError, setShowConfirmPasswordError] = useState('')
  const [MessageVal, setMessageVal] = useState('')
  const [ShowMessageLength, setMessageLength] = useState();
  const [IsPassword, setIsPassword] = useState(true);
  const [IsConfirmPass, setIsConfirmPass] = useState(true);
  const [BtnText, setBtnText] = useState("Send");
  const [BtnDisplay, setBtnDisplay] = useState(false)

  const FormData = {
    name: NameVal,
    Password: PasswordVal,
    ConfirmPass: ConformPasswordVal,
    Message: MessageVal
  }

  const handleSubmitInFormComp = (e, FormData) => {
    e.preventDefault();
    if (NameVal.length < 9) {
      setShowNameError('Please Enter Atlest 9 characters!!');
      setBtnText('Error');
      setTimeout(() => {
      setBtnText('Send')
      }, 900)
    } else {
      setShowNameError('');
    }
    if ((PasswordVal !== ConformPasswordVal)){
      setShowConfirmPasswordError('Password Must Be Match!!');
    } else {
      setShowConfirmPasswordError('');
    }
if((NameVal.length > 9) && (PasswordVal.length > 4) && (PasswordVal === ConformPasswordVal)){
  setBtnText('Sending....');
  handleSubmit(FormData)
  setTimeout(() => {
    setBtnText('Sended');
    setBtnDisplay(true)
  }, 500)
}else{
  alert('All Feilds Required......')
  setBtnText('SomeThing Wrong!')
}
  }

  
return (
    <div style={FormStyle}>
      <h1 className=' mb-2 text-5xl text-center w-[80vw] font-bold'>Form Contact</h1>
      <form action="" onSubmit={(e) => handleSubmitInFormComp(e, FormData)}>
        <label className='block py-1 font-[600] text-xl' htmlFor="Name">Name</label>
        <input value={NameVal} onChange={(e) => { if (e.target.value.length >= 9) { setShowNameError('') }; setNameVal(e.target.value) }} className='py-2  my-1 pl-2 text-md outline-none rounded-[10px] w-full' type="text" placeholder='Name...' />
        <span className='Error font-semibold duration-200 relative text-red-700'>{ShowNameError}</span>

        <label className='block py-1 font-[600] text-xl' htmlFor="Name">Email</label>
        <input value={EmailVal} onChange={(e) => { setEmailVal(e.target.value) }} className='py-2  my-1 pl-2 text-md outline-none rounded-[10px] w-full' type="email" placeholder='Email...' />
        <span className='Error font-semibold duration-200 text-red-700'>{ShowEmailError}</span>

        <label className='block py-1 font-[600] text-xl' htmlFor="Name">Password</label>
        <div className='relative'>
          <input value={PasswordVal} onChange={(e) => { setPasswordVal(e.target.value) }} className='py-2  my-1 pl-2 text-md outline-none rounded-[10px] w-full' type={IsPassword ? "password" : "text"} placeholder='Password' />
          <span onClick={() => setIsPassword(!IsPassword)} className='absolute text-xl right-7 top-4 cursor-pointer'>{IsPassword ? <BsFillEyeFill /> : <AiFillEyeInvisible />}</span>
        </div>
        <span className='Error font-semibold duration-200 text-red-700'>{ShowPasswordError}</span>
        <div>{
          IsNeedConfirmPass ? <>
            <label className='block py-1 font-[600] text-xl' htmlFor="Name">Confirm Password</label>
            <div className='relative'>
              <input value={ConformPasswordVal} onChange={(e) => {
                setConformPasswordVal(e.target.value)
              }} className='py-2  my-1 pl-2 text-md outline-none rounded-[10px] w-full' type={IsConfirmPass ? "password" : "text"} placeholder='Confirm Password...' />
              <span onClick={() => setIsConfirmPass(!IsConfirmPass)} className='absolute text-xl right-7 top-4 cursor-pointer'>{IsConfirmPass ? <BsFillEyeFill /> : <AiFillEyeInvisible />}</span>
            </div>
            <span className='Error font-semibold duration-200 text-red-700'>{ShowConfirmPasswordError}</span></> : ""
        }
        </div>
        <div>{
          IsNeedMessage ? <>
            <label className='block py-1 font-[600] text-xl' htmlFor="Name">Message</label>
            <div className='relative pb-5'>
              <textarea rows={4} value={MessageVal} onChange={(e) => { setMessageLength(e.target.value.length); setMessageVal(e.target.value) }} className='py-2  my-1 pl-2 text-md outline-none rounded-[10px] w-full' type="text" placeholder='Message...' ></textarea>
              <span className='Error ml-[80%] absolute font-semibold -bottom-1  right-1 duration-200 text-gray-600'>{MessageVal ? 150 - parseInt(ShowMessageLength) + ' Characters Left' : "Write SomeThing..."} </span>
            </div>
          </> : ""
        }

        </div>
        <button disabled={BtnDisplay} className={`flex duration-500 my-3 w-full
         ${BtnDisplay ? "cursor-not-allowed" : "cursor-pointer hover:scale-x-95"} justify-center items-center`}>
          <div style={BtnStyle}>{BtnText}</div>
        </button>
      </form>
    </div>
  )
}
