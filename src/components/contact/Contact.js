import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className='container-contact'>
      <div className='sub-container flex'>
        <div>
          <div>
            <a href="#" class="block max-w-sm p-6 bg-black border border-gray-200 rounded-lg shadow hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">Phone</h5>
                <p class="font-normal text-gray-400 dark:text-gray-400">+971 542132241 <br/>+91 9497643886</p>
            </a>
          </div> <br />
          <div>
            <a href="#" class="block max-w-sm p-6 bg-black border border-gray-200 rounded-lg shadow hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">Email</h5>
                <p class="font-normal text-gray-400 dark:text-gray-400">fidharafeequen@gmail.com</p>
            </a>
          </div><br />
          <div>
            <a href="#" class="block max-w-sm p-6 bg-black-100 border border-gray-200 rounded-lg shadow hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">Location</h5>
                <p class="font-normal text-gray-400 dark:text-gray-400">Al Nahda <br /></p>
            </a>
          </div>
        </div>

        <div className='sub-container'>
          forms
        </div>
      </div>
      </div>
  )
}

export default Contact