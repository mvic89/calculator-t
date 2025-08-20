interface KeyboardProps {
  onClick: (value: string) => void;
}

const digitButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];
const operatorButtons = ['/', '*', '-', '+', '=', 'C', '←'];

const Keyboard = ({ onClick }: KeyboardProps) => {
  return (
    <div>

      {digitButtons.map((digit, index) => (
        <button
          key={`digit-${digit}-${index}`}
          data-testid="keyboard-button"
          onClick={() => onClick(digit)}
        >
          {digit}
        </button>
      ))}

      {operatorButtons.map((op, index) => (
        <button
          key={`operator-${op}-${index}`}
          data-testid="operator-button"
          onClick={() => onClick(op)}
        >
          {op}
        </button>
      ))}
    </div>
  );
};
export default Keyboard