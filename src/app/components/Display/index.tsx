interface DisplayProps {
  input: string,
  result: string;
}

const Display = ({input, result}: DisplayProps) => {
  return (
    <div data-testid="displayscreen">
      <h3>{input}</h3>
      <h2>{result}</h2>
    </div>
  )
}

export default Display