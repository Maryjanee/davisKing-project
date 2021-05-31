import React, {useState, useRef, useEffect} from 'react';
import { ImageBackground } from "../Header/HeaderElements";
import bmdImage from '../../assets/bmdCount.jpg';
import {ButtonLink} from '../Header/HeaderElements';
import {CountDownContentContainer, CountDownHeading,
   CountDownSubText,CountDownTimer, 
   TimerCounter, TimerCount, TimerCountText  } from '../CountDownTimer/countDownElements'

const Countdown = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
   const [timerSeconds, setTimerSeconds] = useState('00');

   let interval = useRef();
   const startTimer = () => {
     const countDownDate = new Date('September 30, 2021 00:00:00').getTime();

     interval= setInterval(()=>{
       const now = new Date().getTime();
       const distance = countDownDate - now;

       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor(distance  %(1000 * 60 * 60 * 24)/ (1000 * 60 * 60 * 24));
       const minutes = Math.floor(distance  %(1000 * 60 * 60 * 24)/ (1000 * 60 ));
       const seconds = Math.floor(distance  %(1000 * 60 )/ 1000 );

       if(distance < 0){
         clearInterval(interval.current)
       }else{
           setTimerDays(days);
           setTimerHours(hours);
           setTimerMinutes(minutes);
           setTimerSeconds(seconds);
         }
       }, 1000)
   }

   useEffect(() => {
     startTimer();
     return () => {
      clearInterval(interval.current)
     }
   })
  return (
    <>
    <ImageBackground bgImg={bmdImage}>
      <CountDownContentContainer>
        <CountDownHeading>
          Brighten My day Album
        </CountDownHeading>
        <CountDownSubText>
          Launches in
        </CountDownSubText>
        <CountDownTimer>
          <TimerCounter>
            <TimerCount>{timerDays}</TimerCount>
            <TimerCountText>Days</TimerCountText>
          </TimerCounter>
          <TimerCounter>
            <TimerCount>{timerHours}</TimerCount>
            <TimerCountText>Days</TimerCountText>
          </TimerCounter>
          <TimerCounter>
            <TimerCount>{timerMinutes}</TimerCount>
            <TimerCountText>Days</TimerCountText>
          </TimerCounter>
          <TimerCounter>
            <TimerCount>{timerSeconds}</TimerCount>
            <TimerCountText>Days</TimerCountText>
          </TimerCounter>
        </CountDownTimer>
        <ButtonLink>
          View Tracks
        </ButtonLink>

      </CountDownContentContainer>
      
    </ImageBackground>
      
    </>
  )
}

export default Countdown;