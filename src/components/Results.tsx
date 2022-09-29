import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import './Results.css'

type Props = {
    query: string
}

const Results:React.FC<Props> = ({query}) => {
  return (
    <div className='results-container'>
         {query && <p className='results-for-text'>Results for... </p>}
         <button className='results-button'>
         <XMarkIcon  className='button-icon'/>
            <p className='button-query'>{query} </p>

         </button>
         
    </div>
  )
}

export default Results