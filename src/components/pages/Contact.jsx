import React from 'react';
import { LinkedIn } from '../../assets/contact_logos/LinkedIn';
import { Github } from '../../assets/contact_logos/github';




const Contact = () => {
  return (
    <div>
      <div className='text-white flex flex-col items-center text-[2rem] pt-[2rem]'>
        <p>You can find me on:</p>
        <div className='pt-[4rem] flex flex-row gap-5 '>
          <div className='items-center'>
            <Github/><a href="https://github.com/tomasgcosta"/>
          </div>
          
          <div className='flex items-center'>
            <LinkedIn /> <a href="https://www.linkedin.com/in/tomasgoncalo/"/>
          </div>
          
        </div>


      </div>

    </div>
  );
};

export default Contact;
