import React from 'react'
import "../picture/picture.css"

function Picture() {
  return (
    <div className='picture'>
      <img className='pic-img' src="https://images.unsplash.com/photo-1676587268919-16d3beb6680e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eXQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />

      <div className='info'>
        <div className='pic-cats'>
        <span className='pic-cat'>music</span>
        <span className='pic-cat'>life</span>
        </div>
        <span className='pic-title'>Lorem ipsum dolor init or variant</span>
        <hr />
        <span className='pic-date'>1 hour</span>
      </div>
      <p className='pic-description'>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut consectetur, facere totam error possimus asperiores, deleniti blanditiis debitis, temporibus distinctio iste nobis a repellendus non delectus doloremque fugiat! Impedit.
       Odit rerum suscipit debitis cumque aliquam vel, minus nihil quidem voluptatem ut voluptas aut possimus deserunt molestias ab, consequuntur officia perspiciatis dolores laudantium nam. Autem minima optio temporibus hic reprehenderit!
      </p>
    </div>
  )
}

export default Picture
