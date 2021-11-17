import React from 'react'
import x from '../vignette-Arcane-LoL-Vi.jpg'

const Compone = () => {
    return (
        <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src="vi-arcane-725x337.jpg" alt=""/>
          <br />
          <img src={x} alt="" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    )
}

export default Compone
