import React from 'react'

const FormFields = ({ labelName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSupriseMe && (
          <button onClick={handleSupriseMe} className='bg-[#ECECF1] font-semibold text-xs py-1 px-2 rounded-[5px] text-black hover:bg-[#4649ff] hover:text-white'>
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type = {type} 
        id = {name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 rounder-lg text-gray-900text-sm focus:ring-[#4649ff] focus:border-[#4649ff] focus:outline-none p-3 block w-full '
      />
    </div>
  )
}

export default FormFields