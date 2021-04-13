import Nav from '../components/Nav';
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return(
        <div classname={styles.container}>
            <Nav/>
            <main classname={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout