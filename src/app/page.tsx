"use client";

import { useState, useEffect } from 'react'
import Hours from './components/Hours';

export default function Home() {
  
  const [hour, setHour] = useState(new Date())

  useEffect(() => {
    const Interval = setInterval(() => {
      setHour(new Date())
    }, 1000)

    return () => clearInterval(Interval)
  }, [])

  function TwoDigitFormat(num: number) {
    return num.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false})
  }
  
  interface ITimeProps {
    name: string;
    value: string;
  }

  interface ITime {
    hours: ITimeProps;
    minutes: ITimeProps;
    seconds: ITimeProps;
  }

  const time: ITime = {
    hours: {
      name: "Horas",
      value: TwoDigitFormat(hour.getHours()),
    },
    minutes: {
      name: "Minutos",
      value: TwoDigitFormat(hour.getMinutes()),
    },
    seconds: {
      name: "Segundos",
      value: TwoDigitFormat(hour.getSeconds())
    }
  }

  return (
    <main className='from-orange-400 to-orange-300 text-white'>
      <section>
        <Hours name={time.hours.name} num={time.hours.value} />
        <Hours name={time.minutes.name} num={time.minutes.value} />
        <Hours name={time.seconds.name} num={time.seconds.value} />
      </section>
    </main>
  )
}
