import Image from 'next/image'
import React from 'react'

interface ChartImageProps {
  birthTime: string
  className?: string
}

// Utility function to generate the chart URL
const generateChartUrl = (birthTime: string): string => {
  const time = new Date(birthTime).getTime()
  const timeId = 1e4 * time + 621355968e9 // Convert birth time to the required format
  return `https://cdn.jovianarchive.com/RaveChartGenerator.php?Time=${timeId}`
}

const ChartImage: React.FC<ChartImageProps> = ({ birthTime, className }) => {
  const chartUrl = birthTime ? generateChartUrl(birthTime) : null

  if (!chartUrl) {
    return null // Return null if chartUrl is not generated
  }

  return (
    <Image
      src={chartUrl}
      width={727}
      height={488}
      alt="Human Design Chart"
      className={className || 'aspect-auto rounded-xl object-cover'}
    />
  )
}

export default ChartImage
