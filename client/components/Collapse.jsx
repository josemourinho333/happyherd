import React from 'react'

const Collapse = ({question, children}) => {
  return (
    <div className="my-1 collapse w-1/2 collapse-plus border border-base-300 bg-base-100 rounded-xl">
      <input type="checkbox" /> 
      <div className="collapse-title text-xl font-medium">
        {question}
      </div>
      <div className="collapse-content"> 
        {children}
      </div>
    </div>
  )
}

export default Collapse;