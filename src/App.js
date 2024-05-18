import React, { useMemo, useState } from 'react'

import "./App.css"

const App = () => {

  const [weight,setWeight]=useState(80);
  const [height,setHeight]=useState(180);

  function onWeightChange(e){
    setWeight(e.target.value)
  }

  function onHeightChange(e){
    setHeight(e.target.value)
  }

  const output=useMemo(()=>{
    let calculateHeight = height/100;
    let bmi = (weight/(calculateHeight*calculateHeight)).toFixed(1);

    return bmi;

  },[weight,height])

  const bodyType = useMemo(() => {
    if (output < 18.5) {
      return 'Underweight (Eat More)';
    } else if (output >= 18.5 && output < 24.9) {
      return 'Normal weight';
    } else if (output >= 25 && output < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese (Do Workout)';
    }
  }, [output]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight : {weight} kg</p>
        <input className='input-slider'
          type='range'
          step="1" 
          min="30"
          max="120"
          onChange={onWeightChange}></input>
        <p className='slider-output'>Height : {height} cm</p>
        <input className='input-slider'
          type='range'
          min="140"
          max="220"
          onChange={onHeightChange}>

        </input>
      </div>
      <div className='output-section'>
        <p>Your BMI is :</p>
        <p className='output'>{output}</p>
      </div>
      <div className='body-type'>
        <h2 className='is-what'>You Are : {bodyType} </h2>
      </div>

      <h4> by- Taha Aheras</h4>

    </main>
  )
}

export default App