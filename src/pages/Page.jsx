import React from "react";
import "./../App.css";
import data from "./../data/DovevivoroomLess.json";
import Card from "./../Components/Card";
import "./Card.css"
import { Link } from "react-router-dom";

export default class Page extends React.Component {

	state = {
	};


	checkNextPage() {
		let nextRooms = this.getPage(parseInt(this.props.page)+1);
		if(nextRooms.length > 0) {
			return true;
		}
		return false;
	}
	
	getPage(page) {
		let houses = data.properties;
		let rooms = [];

		for(let index in houses) {
			let bedrooms = houses[index].bedrooms;
			
			for(let bedroom in bedrooms) {
				bedrooms[bedroom]['address'] = houses[index].location.country + " " + houses[index].location.city + " " + houses[index].location.address + " " + houses[index].location.street_number;
			}

			rooms = rooms.concat(bedrooms)
		}

		let pagedRooms = [];
		let roomsPerPage = 10;
		let minIndex = (page - 1) * roomsPerPage;
		let maxIndex = (roomsPerPage * page) - 1;

		for(let i = minIndex; i <= maxIndex; i++) {
			if(!rooms[i]) break;
			pagedRooms.push(rooms[i]);
		}

		return pagedRooms;
	}

	render() {
				
		return (
			<div className="component-app">
			{this.getPage(this.props.page).map((cycle, index) => {
				return (
				<div className="container" key={index}>
					<Card data={cycle} />
				</div>
						);
					})
				}
				<div className="buttons">
					{this.props.page > 1 ? <Link className="button prev" to={'/'+(parseInt(this.props.page)-1)}>Prev</Link> : null}
					{this.checkNextPage() ? <Link className="button next" to={'/'+(parseInt(this.props.page)+1)}>Next</Link> : null}
				</div>
			</div>
		);
	}
}