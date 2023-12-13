import { HelpButton, ClickableLogo } from 'components';
import logo from 'assets/react.svg';
import styles from './Home.module.scss';


function Home() {

    return (
        <div className={styles.App}>
            <header>
                <div>
                    <HelpButton onClick={() => alert('Help logo clicked!')} />
                </div>
            </header>

            <div className={styles.card}>
                <div>
                    <ClickableLogo logoSrc={logo} onClick={() => alert('1st logo clicked!')}/>
                    <ClickableLogo logoSrc={logo} onClick={() => alert('2nd logo clicked!')}/>
                    <ClickableLogo logoSrc={logo} onClick={() => alert('3rd logo clicked!')}/>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </div>
    );
}

export default Home;