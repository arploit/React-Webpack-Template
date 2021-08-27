import { render } from 'react-dom';
import App from './App';

const elect = {
	A: 1,
	B: 2,
	C: 3,
};

const elect2 = {
	...elect,
	E: 5,
};

render(<App />, document.getElementById('root'));
console.log(elect, elect2);
