import Card from './component/card';

import React from 'react'

function Home() {
  return (
    <>
    <div className='text-center'>
      <h1 className='text-4xl font-bold mt-10'>Assignment 4 Of Next.js</h1>
      <span>(Mentors: Sir Asharib Ali & Sir Naeem Hussain)</span>
      <p className='text-3xl font-medium mt-5'><span className='text-cyan-500 text-4xl font-bold'>Topic:</span> Props</p>
      </div>
       
       <div className='mt-12'>
      <div className='h-35 max-w-sm border-2 border-black m-3 p-3 float-left ml-20'>
        <Card name='Kinza' roll_no={1} city='Karachi' center='Governor House Karachi' day='Monday-2:00pm-5:00pm'></Card>
      </div>

      <div className='h-35 max-w-sm border-2 border-black m-3 p-3 float-left'>
        <Card name='Laiba' roll_no={2} city='Karachi' center='Governor House Karachi' day='Monday-2:00pm-5:00pm'></Card>
        </div>

      <div className='h-35 max-w-sm border-2 border-black m-3 p-3 float-left'>
        <Card name='Zara' roll_no={3} city='Karachi' center='Governor House Karachi' day='Thursday-2:00pm-5:00pm'></Card>
      </div>
      </div>
    </>
  )
}

export default Home
