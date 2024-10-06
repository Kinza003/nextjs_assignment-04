import React from 'react'

interface Tcard {
    name: string;
    roll_no: number;
    city: string;
    center: string;
    day: string;
}

function Card(props: Tcard) {
  return (
    <>
      <p><span className='font-semibold text-sky-600'>Name:</span> {props.name}</p>
      <p><span className='font-semibold text-sky-600'>Roll No.:</span> {props.roll_no}</p>
      <p><span className='font-semibold text-sky-600'>City:</span> {props.city}</p>
      <p><span className='font-semibold text-sky-600'>Center:</span> {props.center}</p>
      <p><span className='font-semibold text-sky-600'>Day/Slot:</span> {props.day}</p>
    </>
  )
}

export default Card
