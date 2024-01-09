import { HelpButton, ClickableLogo } from 'components';
import logo from 'assets/react.svg';
import styles from './Home.module.scss';
import { ClickableButton } from 'components/clickable-button/ClickableButton';


function Home() {
    return (
        <div className={styles.body}>   
            <div className={styles.header_div}>           
                <HelpButton onClick={() => alert('Help logo clicked!')} />
            </div>
            <h1 className={styles.title}>Quantum Learning</h1>
            <div className={styles.body_div}> 
                <ClickableButton className={styles.logo} dest="/quantum-computer" text="Quantum Computer" />
                <ClickableButton className={styles.logo} dest="/" text="Games" />
                <ClickableButton className={styles.logo} dest="/q-sphere" text="Q-Sphere" />
            </div>
        </div>
    );
}

export default Home;