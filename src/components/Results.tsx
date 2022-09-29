import React from 'react'

type Props = {
    query: string
}

const Results:React.FC<Props> = ({query}) => {
  return (
    <div>
         {query && <p>Results for {query}...</p>}
    </div>
  )
}

export default Results