import { useState } from 'react'

// Step 1.10: Button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// Step 1.10: StatisticLine component for displaying a single statistic
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Step 1.8: Statistics component
const Statistics = ({ good, neutral, bad }) => {
  // Step 1.7: Calculate statistics
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  // Step 1.9: Show statistics only when feedback exists
  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  // Step 1.11: Display statistics in HTML table
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={positive.toFixed(1) + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // Step 1.6: State for each feedback type
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Handler functions for button clicks
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App