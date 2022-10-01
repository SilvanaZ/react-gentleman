import React from 'react';

const ListMagic = () => {

	const [ arreglo, setArreglo ] = useState();
	const addList = () => {
		constinitialArreglo = [
			{
				nombre: 'Namian',
				apellido: 'Fenande',
			},
			{
				nombre: 'Silvana',
				apellido: 'NeFenande'
			}
		];
	}
	

	return (
		<>
			<button onClick={() => addList}>Apreta para ver una lista</button>
			{
				arreglo.map(e =>
					<li key={index}>
						Nombre:{e.nombre},
						Apellido:{e.apellido}
					</li>)
			}
		</>
	);
};

export default ListMagic;
