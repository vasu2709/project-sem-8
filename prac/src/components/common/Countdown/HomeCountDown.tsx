"use client"
import React, { useState, useEffect } from "react"
import CountElement from "./CountElement"

interface CountdownProps {
  targetDate?: string
}

const HomeCountDown: React.FC<CountdownProps> = ({
  targetDate = "2024-01-23",
}) => {
  const calculateTimeRemaining = () => {
    const targetTime = new Date(targetDate).getTime()
    const currentTime = new Date().getTime()
    const timeRemaining = targetTime - currentTime

    if (timeRemaining <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      }
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    }
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex  gap-2 items-center ">
      <CountElement id1="homebanner" id2="homebanner" time="Days">
        <p className="">{timeRemaining.days}</p>
      </CountElement>
      <span >:</span>

      <CountElement id1="homebanner" id2="homebanner" time="Hours">
        <p className="">{timeRemaining.hours}</p>
      </CountElement>
      <span >:</span>

      <CountElement id1="homebanner" id2="homebanner" time="Mins">
        <p className="">{timeRemaining.minutes}</p>
      </CountElement>
      <span>:</span>

      <CountElement id1="homebanner" id2="homebanner" time="Secs">
        <p className="">{timeRemaining.seconds}</p>
      </CountElement>
    </div>
  )
}

export default HomeCountDown
