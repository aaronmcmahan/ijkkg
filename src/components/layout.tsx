import React from 'react'

interface LayoutProps {
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Layout
