import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const UseErrorBoundary: React.FC<{ children: any }> = (props) => {
  return (
    <ErrorBoundary fallback={<div>系统异常 ...</div>}>
      {props.children}
    </ErrorBoundary>
  )
}

export default UseErrorBoundary
