interface DisplayProps {
  input: string,
  result: string;
}

const Display = ({input, result}: DisplayProps) => {
  return (
    <div>
      <p>{input}</p>
      <h2>{result}</h2>
    </div>
  )
}

export default Display