interface ButtonProp {
  label: string,
  onClick: () => void;
}


const Button = ({label, onClick}: ButtonProp) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button