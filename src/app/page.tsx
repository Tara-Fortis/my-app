import Image from "next/image";

export default function Home() {
  return (
    // every React component must have 1 return to send the JSX to the DOM
    <main className="p-10">
      <h1 className="text-3xl">COMP2012 Class Site</h1>
      <p>This site is built with Next.js</p>
    </main>
  )
}