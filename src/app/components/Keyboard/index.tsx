interface KeyboardProps {
  onClick: (value: string) => void;
}

const digitButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];
const operatorButtons = ['/', '*', '-', '+', '=', 'C', '←'];

const Keyboard = ({ onClick }: KeyboardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {digitButtons.map((digit, index) => (
        <button
          key={`digit-${digit}-${index}`}
          data-testid="keyboard-button"
          onClick={() => onClick(digit)}
          className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-lg font-semibold py-4 rounded shadow text-center"
        >
          {digit}
        </button>
      ))}
      {operatorButtons.map((op, index) => (
        <button
          key={`operator-${op}-${index}`}
          data-testid="operator-button"
          onClick={() => onClick(op)}
          className="bg-amber-300 hover:bg-amber-400 active:bg-amber-500 text-lg font-semibold py-4 rounded shadow text-center"
        >
          {op}
        </button>
      ))}
    </div>
  );
};
export default Keyboard