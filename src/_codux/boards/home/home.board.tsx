import { createBoard } from '@wixc3/react-board';
import Home from '../../../components/Home/Home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    isSnippet: true,
});
