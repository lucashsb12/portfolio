import './styles.css';

export const Trabalhos = () =>{
	return(
		<div id="trabalhos" className="container-trabalhos">
			<div className="trabalhos__titulos">
				<h2 className="trabalhos__titulo">Artes</h2>
				<h2 className="trabalhos__titulo">Sistemas</h2>
				<h2 className="trabalhos__titulo">Sites</h2>
			</div>

			<div className="container-cards">
				<div className="trabalhos__card"></div>
				<div className="trabalhos__card"></div>
				<div className="trabalhos__card"></div>
				<div className="trabalhos__card"></div>
			</div>
		</div>
	);
}
