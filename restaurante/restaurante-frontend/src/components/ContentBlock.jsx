import React from 'react'

function ContentBlock({children, ...props}) {
  return (
    <div className="flex flex-col my-16 mx-36 justify-start gap-8 items-start">
        {children}
    </div>
  )
}

export default ContentBlock


