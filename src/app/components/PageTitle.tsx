'use client';
// use this always

import { useEffect } from "react";
// component recieve a title prop as a string (unique on each page)
export default function PageTitle({ title }: { title: string }) {
    // trigger this effect and update the page title every time the title prop value changes
    // we need  to use Effect Hook as layout only loads once
    useEffect(() => {
        document.title = `${title} - COMP2112 Blog`;
    }, [title]);

    // React components must have a return statement EVEN if they don't render any JSX to browser
    return null;
}