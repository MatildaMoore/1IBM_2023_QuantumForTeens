import { createBoard } from '@wixc3/react-board';
import QuantumComputer from '../../../components/quantum-computer/QuantumComputer';

export default createBoard({
    name: 'QuantumComputer',
    Board: () => <QuantumComputer />,
    isSnippet: true,
});
