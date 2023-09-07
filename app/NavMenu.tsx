import AuthCheck from "@/components/AuthCheck";
import { SignInbutton, SignOutButton } from "@/components/buttons";
import { ThemeToggle } from "@/components/themetoggle";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";


export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href={'/dashboard'}>
            <Image
                src="/logo.svg"
                alt="logo"
                width={216}
                height={30}
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <ThemeToggle />
                </li>
                <li>
                    <Link href={'/theme'}>Theme</Link>
                </li>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>about</Link>
                </li>
                <li>
                    <Link href={'/blog'}>blog</Link>
                </li>
                <li>
                    <Link href={'/users'}>users</Link>
                </li>
                <li>
                    <SignInbutton />
                </li>

                <li>
                    <AuthCheck>
                        <SignOutButton />
                    </AuthCheck>
                </li>


            </ul>
        </nav>
    );
}