'use client';

import { useState } from "react";
import PageTitle from "./components/PageTitle";
import { useCounter } from "./context/GlobalContext";

export default function Home() {
  // create a state var to track # of button clicks
  const [count, setCount] = useState<number>(0);

  // global counter bar from context
  const { increment } = useCounter();

  const handleClick = () => {
    // increment the count var by 1 each click
    setCount(count + 1);

    // call global increment method to increase global counter var by 1 (updates footer)
    increment();

    // option: use sesson storage instead of context
    // option: use session storage instead of context
    sessionStorage.setItem("counter", count.toString());
  }

  // every React component must have 1 return to send the JSX to the DOM
  return (
    <main>
      <PageTitle title="Home" />
      <h1>COMP2012 Class Site</h1>
      <p>This site is built with Next.js</p>
      <section>
        <button onClick={handleClick}>Click Me</button>
        <p>You clicked the button {count} times.</p>
      </section>
    </main>
  )
}

//vercel-blog-api-eta.vercel.app/app/api/v1/posts