



import React from 'react'
type RootLayoutProps = {
    children: React.ReactNode
}
const layout:React.FC<RootLayoutProps> = ( {children}) => {
  return (
    <div>{ children}</div>
  )
}

export default layout