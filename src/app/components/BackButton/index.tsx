interface BackSpaceProp{
  onBackspace: () => void;
}

const BackButton = ({onBackspace}: BackSpaceProp) => {
  return (
    <>
      <button onClick={onBackspace}>BackSpace</button>
    </>
  )
}

export default BackButton