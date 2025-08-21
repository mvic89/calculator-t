interface DisplayProps {
  input: string,
  result: string;
}

const Display = ({input, result}: DisplayProps) => {
  return (
    <div data-testid="displayscreen" className="bg-gray-100 p-4 rounded text-right space-y-1 h-20 flex flex-col justify-center">
      <h3 className="text-sm text-gray-500 break-all">{input}</h3>
      <h2 className="text-2xl font-bold break-all">{result}</h2>
    </div>
  )
}

export default Display