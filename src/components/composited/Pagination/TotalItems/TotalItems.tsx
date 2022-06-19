import React from 'react'

const TotalItems: React.FunctionComponent<{
  total: number
}> = ({ total }) => {
  return <div>{`Total Items: ${total}`}</div>
}

export default TotalItems
