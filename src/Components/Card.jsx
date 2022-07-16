import React from "react";
import "./../pages/Card.css"

export default class Card extends React.Component {

	render() {
		let name = this.props.data.copy.title.it;
		let image = this.props.data.images[0];
		let address = this.props.data.address;
		let price = this.props.data.pricing.monthlyStandardPrice;
		price = price? price+' €' : 'Prezzo non disponibile.';

		let m2 = this.props.data.mq_appartment;
		let availability;


		return (
			<div className="wrap">

				<div className="title">
					<div className="label">Titolo</div>
					<div className="value">{name}</div>
				</div>

				<div>
					<img alt="" src={image}></img>
				</div>

				<div className="price">
					<div className="label">Prezzo</div>
					<div className="value">{price}</div>
				</div>

				<div className="address">
					<div className="label">Indirizzo</div>
					<div className="value">{address}</div>
				</div>

				<div className="m2">
					<div className="label">Metri Quadri</div>
					<div className="value">{m2}</div>
				</div>

				<div className="availability">
					<div className="label">Disponibilità</div>
					<div className="value">{availability}</div>
				</div>
				
			</div>
		);
	}
}