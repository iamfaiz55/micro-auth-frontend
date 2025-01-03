

  import React from 'react'
  
  const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
    return <>
     <div role="alert">
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button type='button'  onClick={resetErrorBoundary}>Try again</button>
    </div>
    </>
  }
  
  export default ErrorFallback