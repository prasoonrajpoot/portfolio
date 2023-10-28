import React from 'react'
import {AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';

function LeftPart(){
  return (
    <div className='bg-stone-900  flex flex-col space-y-10 p-10 min-w-[45%] justify-center'>
      <div className='text-7xl items-center flex justify-center'>Hi 👋</div>
      <div className="text-center">Let's connect,</div>
      <div className="text-center">Have an Idea, an Opportunity or a Project?</div>
       <div className="text-center"> Feel free to reach out to me</div>
      <a target= "_blank" href="mailto: prasoonrajpoot@gmail.com">
        <div className='flex items-center justify-center space-x-4 text-xl'>
          <AiOutlineMail />
          <p>prasoonrajpoot03</p>
        </div>
      </a>

      <a target= "_blank" href="tel:9571093648">
        <div className='flex items-center justify-center  space-x-4 text-xl '>
          <BsTelephone />
          <p>9571093648</p>
        </div>
      </a>
     
      <a target= "_blank" href = "https://www.linkedin.com/in/prasoonrajpoot/">
        <div className='flex items-center justify-center  space-x-4 text-xl'>
          <AiOutlineLinkedin/>
          <p>prasoonrajpoot</p>
        </div>
      </a>

    </div>
  )
}

function RightPart(){
  return (
    <div className=''>
      <form action="">
        <input type="text" placeholder='John Snow'/>
        <br />
        <input type="email" name="" id=""  placeholder='bastard@winterfell.com'/>
        <br />
        <textarea cols="30" rows="10" placeholder='Send Your Raven Here'></textarea>
        <br />
        <button>Send Raven</button>
      </form>
    </div>
  )
}

function Contact() {
  return (
    <div id = "contact" className= "mt-10 lg:flex justify-around">
      <LeftPart/>
      <RightPart/> 
    </div>
  )
}

export default Contact