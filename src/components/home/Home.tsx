import { HelpButton, ClickableLogo } from 'components';
import logo from 'assets/react.svg';
import styles from './Home.module.scss';


function Home() {
    return (
        <div className={styles.body}>   
            <div className={styles.header_div}>           
                <HelpButton onClick={() => alert('Help logo clicked!')} />
            </div>
            <h1 className={styles.title}>Quantum Learning</h1>
            <div className={styles.body_div}> 
                <button className={styles.logo}> Quantum Computer</button>
                <button className={styles.logo}>Games</button>
                <button className={styles.logo}>Q-Sphere</button>
            </div>
        </div>
    );
}

export default Home;