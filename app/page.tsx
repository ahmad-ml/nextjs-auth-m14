import Link from 'next/link';
import styles from './page.module.css';


export default function Home() {
  return (
    <main className={styles.main}>
     <div>
        <h1>Ahmad Ostad assignment 13</h1>
        <Link href={'/api/json'}>
        <p>Here is my sample json response</p>
        </Link>
        <Link href={'/api/content'}>
        <p>Here is my sample content response</p>
        </Link>
     </div>
    </main>
  )
}

