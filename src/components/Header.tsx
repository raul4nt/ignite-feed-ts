import styles from './Header.module.css';
//CSS modules possui um hash único
import igniteLogo from '../assets/ignite-logo.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}
