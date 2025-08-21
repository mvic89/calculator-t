'use client'
import { useState } from "react";
import BackButton from "./components/BackButton";
import Button from "./components/Button";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evaluated = eval(input);
        setResult(String(evaluated));
      } catch {
        setResult('Error');
      }
    } else if (value === '←') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <>
    <h1>Calculator</h1>
    <BackButton onBackspace={handleBackspace}/>
    {/* <Button label={'+'} onClick={() => {}}/> */}
    <Display input={input} result={result}/>
    <Keyboard onClick={handleButtonClick}/>
    </>
  );
}
