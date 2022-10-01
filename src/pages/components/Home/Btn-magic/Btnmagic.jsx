import React from 'react';

const Btnmagic = () => {
	const [ a, setA ] = useState(1);
	const handleClick = () => {
		alert('por aca esta pasando la magia')
		setA(a * 10)
	}
	useEffect(() => {
		setA(10);

		return () => {
			{
				console.log('el valor de a es:', a);
			}
		}
	}, [ a ])
	return (
		<>
			<h1>{a}</h1>
			<button onClick={() => handleClick}>Apreta para ver la magia</button>
		</>
	);
};

export default Btnmagic;
