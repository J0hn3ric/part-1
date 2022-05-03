import './App.css';
import { useState } from 'react';

const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const StatisticLine = (props) =>{
  return(
    <td>{props.text}</td>
  )
}

const Statistics = (props) => {
  if(props.object.all === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text = {'good'}/>
            <StatisticLine text = {props.object.good} />
          </tr>
          <tr>
            <StatisticLine text = {'neutral'}/>
            <StatisticLine text = {props.object.neutral}/>
          </tr>
          <tr>
            <StatisticLine text = {'bad'}/>
            <StatisticLine text = {props.object.bad}/>
          </tr>
          <tr>
            <StatisticLine text = {'all'}/>
            <StatisticLine text = {props.object.all}/>
          </tr>
          <tr>
           <StatisticLine text = {'average'}/>
            <StatisticLine text = {props.object.average}/>
          </tr>
          <tr>
            <StatisticLine text = {'positive'}/>
            <StatisticLine text = {props.object.positive + '%'}/>
          
          </tr>
        </tbody>
      </table>
    </div>
  )
}


function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  })

  const handleGood = () => {
    const newFeedback = {
      ...feedbacks,
      good: feedbacks.good + 1,
      all: feedbacks.all + 1,
      average: ((feedbacks.good+1)-feedbacks.bad)/(1+feedbacks.all),
      positive: ((feedbacks.good+1)*100)/(1+feedbacks.all)
    }
    setFeedbacks(newFeedback)

  }

  const handleBad = () => {
    const newFeedback = {
      ...feedbacks,
      bad: feedbacks.bad + 1,
      all: feedbacks.all + 1,
      average: (feedbacks.good-(1+feedbacks.bad))/(1+feedbacks.all),
      positive: (feedbacks.good*100)/(1+feedbacks.all)
    }
    setFeedbacks(newFeedback)
  }

  const handleNeutral = () => {
    const newFeedback = {
      ...feedbacks,
      neutral: feedbacks.neutral + 1,
      all: feedbacks.all + 1,
      average: (feedbacks.good-feedbacks.bad)/(1+feedbacks.all),
      positive: (feedbacks.good*100)/(1+feedbacks.all)
    }
    setFeedbacks(newFeedback)
  }

  const handleReset = () => {
    const newFeedback = {
      good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
    }
    setFeedbacks(newFeedback)
  }

  return (
    <div >
      <Header name = {"give feedback"} />

      <Button name = {'good'} onClick = {handleGood} />
      <Button name = {'neutral'} onClick = {handleNeutral} />
      <Button name = {'bad'} onClick = {handleBad} />

    <div><Button name = {'reset'} onClick = {handleReset}/> </div>

      <Header name = {'Statistics'} />

      <Statistics object = {feedbacks} />
    </div>
  );
}

export default App;
