'use client'
import Image from "next/image";
import BackButton from "./components/BackButton";
import Button from "./components/Button";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

export default function Home() {
  return (
    <>
    <BackButton/>
    <Button label={'+'} onClick={() => {}}/>
    <Display/>
    <Keyboard/>
    </>
  );
}
