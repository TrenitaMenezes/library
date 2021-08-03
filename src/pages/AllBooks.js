import BookList from "../components/books/BookList";
import { useState, useEffect } from "react";

/* const DUMMY_DATA = [
	{
		id: 'm1',
		title: 'The Secret',
		image:'https://images-na.ssl-images-amazon.com/images/I/81MArWaiw1L.jpg',
		author: 'Rhonda Byrne',
		description:'The Secret is a self - help book regarding the power of positive thinking by Rhonda Byrne.',
  	},
	{
		id: 'm2',
		title: 'Rich Dad Poor Dad',
		image:'https://images-na.ssl-images-amazon.com/images/I/61M1eEsuSML.jpg',
		author: 'Robert T. Kiyosaki',
		description:'The #1 Personal Finance book of all time, Robert Kiyosaki shares the story of his two dads.',
	},
	{
		id: 'm3',
		title: 'A Tale of Two Cities',
		image:'https://images-na.ssl-images-amazon.com/images/I/813Yv-lescL.jpg',
		author: 'Charles Dickens',
		description:'This one might not last for so long, but hey, printers never work anyways, right?',
	},
	{
		id: 'm4',
		title: 'The Lord of the Rings',
		image:'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg',
		author: 'J. R. R. Tolkien',
		description:'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil.',
	},
	{
		id: 'm5',
		title: 'Think and Grow Rich',
		image:'https://www.naphill.org/wp-content/uploads/Screen-Shot-2018-08-02-at-4.32.50-PM.png',
		author: 'Napoleon Hill',
		description:'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
	},
	{
		id: 'm6',
		title: 'The Hobbit',
		image:'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
		author: 'J. R. R. Tolkien',
		description:'A great modern classic and the prelude to THE LORD OF THE RINGS',
	}
];
 */
function AllBooksPage(){

	const [isLoading, setIsLoading] = useState(true);
	const [loadedBooks, setLoadedBooks] = useState([]);

 	useEffect(() => {
		setIsLoading(true);
		//default is GET in firebase
		
		 fetch('https://library-61909-default-rtdb.firebaseio.com/books.json',{
			method: 'GET',
			headers:{
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Request-Method': 'GET'
			}
			})
			.then((response) =>{
				return response.json();
				})
				.then((data) => {
					const books = [];
					for (const key in data){
						const book  = {
							id: key,
							...data[key]
						};

						books.push(book);
					}
					setIsLoading(false);
					setLoadedBooks(books);
				});
			
			},[]);
	 
	if(isLoading){
		return <section>
			<p>Loading .. </p>
		</section>
	}

	return (
		<section>
			<BookList books={loadedBooks} /> 
			{/* <BookList books={DUMMY_DATA}/>  */}
		</section>
		);
}

export default AllBooksPage;