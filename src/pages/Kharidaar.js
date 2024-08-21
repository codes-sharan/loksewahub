import React from 'react'
import FadeIn from '../animation/FadeIn'
import SlideIn from '../animation/SlideIn'
import Bounce from '../animation/Bounce'
import ButtonAnimation from '../animation/ButtonAnimation'
import SpinCssKeyFrames from '../animation/SpinCssKeyFrames'
import FadeInSpring from '../animation/FadeInSpring'
import SlideInFramerMotion from '../animation/SlideInFramerMotion'


function Kharidaar() {
  return (
    <div>
      <h3> Welcome to Kharidaar loksewa preparation. </h3>



      <FadeIn/>

      <SlideIn/>

      <Bounce/>

      <ButtonAnimation/>
      <br/> <br/>
      <SpinCssKeyFrames/>

      <div> <FadeInSpring/> </div>
      <br/>
      <div> <SlideInFramerMotion/> </div>

    </div>
  )
}

export default Kharidaar
