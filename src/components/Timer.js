import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    const { minutes, seconds } = props

    this.state = {
      isRunning: false,
      minutesLeft: minutes,
      secondsLeft: seconds,
    }
  }

  componentDidUpdate(prevProps) {
    const { minutes, seconds } = this.props
    if (minutes !== prevProps.minutes || seconds !== prevProps.seconds) {
      this.setState({
        minutesLeft: minutes,
        secondsLeft: seconds,
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onPlay = () => {
    this.timer = setInterval(() => {
      const { minutesLeft, secondsLeft } = this.state
      if (secondsLeft < 1 && minutesLeft > 0) {
        this.setState((prevState) => ({
          minutesLeft: prevState.minutesLeft - 1,
          secondsLeft: 59,
        }))
      } else if (secondsLeft === 0 && minutesLeft < 1) {
        clearInterval(this.timer)
        this.setState({ isRunning: false })
      } else {
        this.setState((prevState) => ({
          secondsLeft: prevState.secondsLeft - 1,
        }))
      }
    }, 1000)
    this.setState({ isRunning: true })
  }

  onPause = () => {
    clearInterval(this.timer)
    this.setState({ isRunning: false })
  }

  render() {
    const { isRunning, minutesLeft, secondsLeft } = this.state
    return (
      <span className='description'>
        <button type='button' aria-label='Play' className='icon icon-play' onClick={this.onPlay} disabled={isRunning} />
        <button
          type='button'
          aria-label='Pause'
          className='icon icon-pause'
          onClick={this.onPause}
          disabled={!isRunning}
        />
        {secondsLeft < 10 ? ` ${minutesLeft}:0${secondsLeft}` : ` ${minutesLeft}:${secondsLeft}`}
      </span>
    )
  }
}
