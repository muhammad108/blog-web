import React from 'react'
import "../single/single.css"
import Sidebar from '../../component/sidebar/Sidebar'
import Singlepost from '../../component/singlepost/Singlepost'

function Single() {
  return (
    <div className='single'>
      <Singlepost/>
      <Sidebar/>
    </div>
  )
}

export default Single
