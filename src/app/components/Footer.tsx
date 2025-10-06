import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()}</p>
            <Link href="/contact">Contact Us</Link>
            <Link href="https://github.com/Tara-Fortis/my-app" target="_new">View Source</Link>
        </footer>
    )
}