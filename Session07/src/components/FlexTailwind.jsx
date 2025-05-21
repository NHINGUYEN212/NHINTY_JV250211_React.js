import React from 'react'

export default function FlexTailwind() {
  return (
    <div>
        <div className='w-full border border-gray-300 flex gap-4 rounded-md mb-10'>
            <button className='text-white bg-blue-500 px-4 py-3'>01</button>
            <button className='text-white bg-blue-500 px-4 py-3'>02</button>
            <button className='text-white bg-blue-500 px-4 py-3'>03</button>
        </div>
        <div className='w-full border border-gray-300 flex justify-end gap-4 rounded-md mb-10'>
            <button className='text-white bg-blue-500 px-4 py-3'>01</button>
            <button className='text-white bg-blue-500 px-4 py-3'>02</button>
            <button className='text-white bg-blue-500 px-4 py-3'>03</button>
        </div>
        <div className='w-full border border-gray-300 flex justify-center gap-4 rounded-md mb-10'>
            <button className='text-white bg-blue-500 px-4 py-3'>01</button>
            <button className='text-white bg-blue-500 px-4 py-3'>02</button>
            <button className='text-white bg-blue-500 px-4 py-3'>03</button>
        </div>
        <div className='w-full border border-gray-300 flex justify-between gap-4 rounded-md mb-10'>
            <button className='text-white bg-blue-500 px-4 py-3'>01</button>
            <button className='text-white bg-blue-500 px-4 py-3'>02</button>
            <button className='text-white bg-blue-500 px-4 py-3'>03</button>
        </div>
        <div className='w-full border border-gray-300 flex gap-4 justify-around rounded-md mb-10'>
            <button className='text-white bg-blue-500 px-4 py-3'>01</button>
            <button className='text-white bg-blue-500 px-4 py-3'>02</button>
            <button className='text-white bg-blue-500 px-4 py-3'>03</button>
        </div>
        <div className='w-full border border-gray-300 flex justify-evenly gap-4 rounded-md mb-10'>
            <button className='text-white bg-blue-500 px-4 py-3'>01</button>
            <button className='text-white bg-blue-500 px-4 py-3'>02</button>
            <button className='text-white bg-blue-500 px-4 py-3'>03</button>
        </div>
    </div>
  )
}
