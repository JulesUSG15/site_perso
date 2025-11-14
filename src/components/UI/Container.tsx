import React, { ReactNode } from 'react'
import './Container.css'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg'
}) => {
  return (
    <div className={`container container-${size} ${className}`}>
      {children}
    </div>
  )
}

export default Container

