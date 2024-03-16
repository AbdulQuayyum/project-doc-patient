import React from "react"

const Background = ({ children }) => {
  return (
    <>
      <div className="transition-all duration-1000 min-h-screen dark:bg-[#121212]">
        {children}
      </div>
    </>
  )
}

export default Background
