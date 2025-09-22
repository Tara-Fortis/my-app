'use client';


import { useState } from "react";

export default function Home() {
  // create a state var to track # of button clicks
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    // increment the count var by 1 each click
    setCount(count + 1);
  }
  return (
    // every React component must have 1 return to send the JSX to the DOM
    <main>
      <h1>COMP2012 Class Site</h1>
      <p>This site is built with Next.js</p>
      <section>
        <button onClick={handleClick}>Click Me</button>
        <p>You clicked the button {count} times.</p>
      </section>
    </main>
  )
}