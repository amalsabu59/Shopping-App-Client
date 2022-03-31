import React from 'react'
import { useLocation } from 'react-router-dom'

const location = useLocation()

const Success = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>Successfull</div>
  )
}

export default Success