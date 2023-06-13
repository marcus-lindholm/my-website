import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Sandbox() {
    
    let num = 0;

    for(let i = 0; i < 5; i++) {
        num += 1;
    }
    
    return(
    <main className={styles.main}>
        <p>HEJ Tjena {num}</p>
    </main>
    )
}

export default Sandbox