// import Card from '../UI/Card';
import classes from './BookItem.module.css';
import {Card, CardImg, Button, CardGroup, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import { useContext, useEffect, useState, } from 'react';
import FavContext from '../../store/favorite-context';
import FirebaseService from '../../store/FirebaseService';
 
function BookItem(props){

	const favoriteCtx = useContext(FavContext);
	const bookIsFav = favoriteCtx.itemIsFav(props.id);
	

	function toggleFavStatusHandler(){
		if(bookIsFav){
			favoriteCtx.removeFavBook(props.id);
		} else {
			favoriteCtx.addFavBook({
				id: props.id,
				title: props.title,
				image: props.image,
				author: props.author,
				description: props.description
			});
		}
	}

/* 	function DeleteBookHandler(key){
	
		
		 fetch('https://library-61909-default-rtdb.firebaseio.com/books/-MfpD8PnqlFaYy2crlmi',{
			method: 'Delete',
			headers:{
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Request-Method': 'DELETE'
			}
			})
			.then((response) =>{
				console.log("Book Deleted");
				});
			
	
	} */


	return(
		<li>
			<CardGroup className={classes.cardGroupStyles}>
				<Card className={classes.cardStyles}>
					<Card.Img variant="top" src={props.image} alt={props.title} style={{height: '400px'}}/>
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>{props.description}</Card.Text> 
						<Card.Text><i><b>-{props.author}</b></i></Card.Text>
						<button variant="primary" className={classes.addfavbutton}
							onClick={toggleFavStatusHandler}>{bookIsFav ? 'Remove from Favorites' : 'Add to Favorites'}</button>
						{/* <button className={classes.removefavbutton} onClick={DeleteBookHandler}>Delete</button> */}
						</Card.Body>
				</Card>
			</CardGroup>	
		</li>
	);
}

export default BookItem;

