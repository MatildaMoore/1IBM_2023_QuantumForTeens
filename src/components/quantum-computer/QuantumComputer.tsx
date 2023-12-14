import { HelpButton } from 'components';
import styles from './QuantumComputer.module.scss';


function QuantumComputer() {

    return (
        <div className={styles.App}>
            <div>
                <HelpButton onClick={() => alert('Help logo clicked!')} />
            </div>
            <div className={styles.card}>
                <a href="/">Home</a>
                <h1>Quantum Computer Visualizer</h1>
            </div>
        </div>
    );
}

export default QuantumComputer;