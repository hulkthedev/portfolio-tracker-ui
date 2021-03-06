import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <input className={styles.input} placeholder="Search..." />
            <Link href="/">
                <a>Overview</a>
            </Link>
            <Link href="/analytics">
                <a>Analytics</a>
            </Link>
            <Link href="/account">
                <a>Settings</a>
            </Link>
        </div>
    );
}