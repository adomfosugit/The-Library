'use client'
import CountUp from '@/components/CountUp';
import SpotlightCard from '@/components/SpotlightCard'
import React from 'react'

type Props = {
  title: string;
  subtitle: string;
  countdown: number;
}

const StatusCard = ({ title, subtitle, countdown }: Props) => {
  return (
    <SpotlightCard
      className="
        bg-white 
        backdrop-blur-xl 
        border border-white/30 
        rounded-2xl 
        shadow-xl 
        
      "
      
    >
      <div className="relative z-10 ">
        <h3 className="text-2xl font-bold mb-3 text-nowrap flex items-baseline gap-1">
          <CountUp 
            from={0} 
            to={countdown} 
            separator="," 
            direction="up" 
            duration={1} 
            className="count-up-text text-sky-600" 
          />
          <span className="text-sky-600">+</span>
          <span className="text-sky-600">{title}</span>
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </SpotlightCard>
  )
}

export default StatusCard;