
interface ErrorProps{
  error: string;
}

const Error = ( {error} :ErrorProps) => {
  return (
    <h2 style={{'color': 'red'}}>{error}</h2>
  )
}

export default Error