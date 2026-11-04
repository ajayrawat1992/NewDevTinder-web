import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  const status = isRouteErrorResponse(error) ? error.status : 500
  const message = isRouteErrorResponse(error) ? error.statusText || error.data?.message: 'An unexpected error occurred.'

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-bold">{status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
      <p >{message || 'The page you requested could not be found.'}</p>
      <Link to="/" className="btn btn-primary p-2"> Go to home </Link>
    </main>
  )
}

export default ErrorPage
