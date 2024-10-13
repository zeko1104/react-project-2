import React from 'react'

const AddProduct = ({setIsOpen}) => {
  return (
    <div className='text-center'>
        <button onClick={()=> setIsOpen(true)} className='bg-orange-500 text-white h-10 w-40 rounded-xl '>Add New Product</button>
    </div>
  )
}

export default AddProduct