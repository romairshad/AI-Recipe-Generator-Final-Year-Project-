import React from 'react'

const Search = ({value,data,handleForm,onChange}) => {
  return (
    <div className='container mt-3'>
      <form  onSubmit={handleForm}>
        <div className='d-md-flex align-items-center justify-content-center'>
        <h3 className='mx-2 text-warning'>Search Recipe Here</h3>
        <div className='input-group w-50'>
        <input className='form-control' value={value} placeholder='Search Recipe' onChange={onChange}  />
        <button className='btn btn-warning' type="submit" disabled={data}>Search</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Search
