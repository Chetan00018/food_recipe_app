import React from 'react'

const Model = ({children,onClose}) => {
  return (
 <>
    <div className='backdrop' onClick={onClose} ></div>
      <dialog className='modal' open>
    {children}
      </dialog>
      
 </>
  )
}

export default Model
