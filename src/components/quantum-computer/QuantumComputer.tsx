import { HelpButton } from 'components';
import styles from './QuantumComputer.module.scss';


function QuantumComputer() {

    return (
        <div className={styles.App}>
            <header>
                <div>
                    <HelpButton onClick={() => alert('Help logo clicked!')} />
                </div>
            </header>

            <div className={styles.card}>
                <div>
                    <p>Quantum Computer Page</p>
                </div>
                <a href="/">Home</a>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </div>
    );
}

export default QuantumComputer;