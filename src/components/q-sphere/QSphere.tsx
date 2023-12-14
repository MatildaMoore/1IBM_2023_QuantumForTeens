import { HelpButton, ClickableLogo } from 'components';
import logo from 'assets/react.svg';
import styles from './QSphere.module.scss';


function QSphere() {

    return (
        <div className={styles.App}>
            <header>
                <div>
                    <HelpButton onClick={() => alert('Help logo clicked!')} />
                </div>
            </header>
            <p>Q-Sphere</p>
            <a href="/">Home Page</a>
            <div className={styles.card}>
                <div>
                    <ClickableLogo logoSrc={logo} onClick={() => alert('1st logo clicked!')}/>
                </div>
            </div>
        </div>
    );
}

export default QSphere;