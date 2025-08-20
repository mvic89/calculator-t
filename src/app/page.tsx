'use client'
import Image from "next/image";
import BackButton from "./components/BackButton";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
    <BackButton/>
    <Button label={'+'} onClick={() => {}}/>
    </>
  );
}
