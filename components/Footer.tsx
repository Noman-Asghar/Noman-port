import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

function Footer() {
  return (
  <section className='w-full pt-20 pb-10' id='contact'>
    <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img
         src="/footer-grid.svg"
          alt="grid"
          className='w-full h-full opacity-50'
           />
    </div>

<div className='flex flex-col items-center'>
<h1 className='text-3xl text-bold'>Ready to <span className='text-purple'>your</span>digital presence to next level?</h1>
<p className='text-white-200 text-center md:mt-10 mt-5' >Reach out me today and let's discuss how can i help you achieve your goals</p>
<a href="mailto:nomankk226@gmail.com">
    <MagicButton
    title="Let's get in touch"
    icon={<FaLocationArrow />}
    position='right'
    />
</a>
</div>
<div>
    <p className='my-4 text-center'>CopyRight © 2024 Noman Asghar</p>
</div>
  </section>
  )
};

export default Footer;
