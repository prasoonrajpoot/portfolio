import React from 'react'
import {AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';

function LeftPart(){
  return (
    <div className='bg-stone-900  flex flex-col space-y-10'>
      <div className='text-7xl'>Hi 👋</div>
      <div>Let's connect</div>
      <div>Have an Idea, an Opportunity or a Project </div>
       <div> feel free to reach out to me</div>
      <a target= "_blank" href="mailto: prasoonrajpoot@gmail.com">
        <div className='flex items-center justify-center'>
          <AiOutlineMail/>
          <p>prasoonrajpoot03</p>
        </div>
      </a>

      <a target= "_blank" href="tel:9571093648">
        <div className='flex items-center justify-center'>
          <BsTelephone/>
          <p>9571093648</p>
        </div>
      </a>
     
      <a target= "_blank" href = "https://www.linkedin.com/in/prasoonrajpoot/">
        <div className='flex items-center justify-center'>
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