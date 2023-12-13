import { useState } from 'react';
import styles from './App.module.scss';
import HelpButton from './components/help-button/HelpButton';
import { ClickableLogo } from './components/clickable-logo/ClickableLogo';
import logo from './assets/react.svg';

function App() {
    const [count, setCount] = useState(0);

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
            </div></div>
    );
}

export default App;
