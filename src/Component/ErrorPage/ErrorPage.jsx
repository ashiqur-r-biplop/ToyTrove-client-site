import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './ErrorPage.css'
import errorImage from '../../assets/Image/error/error-image.png'

const ErrorPage = () => {
  const { error } = useRouteError()
  return (
    <section className='container mx-auto'>
      <div className='err-container'>
        <div className='text-center flex flex-col justify-center items-center h-full w-full'>
          <div className='w-1/2 mx-auto'>
            <img className='w-full' src={errorImage} alt="" />
          </div>
          <div className=''>
          <p className='text-2xl font-semibold md:text-3xl text-[#910000] mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='bg-[#32c770] px-4 py-3 rounded-full text-white'>
            Back to homepage
          </Link>
        </div>
          </div>
      </div>
    </section>
  )
}

export default ErrorPage