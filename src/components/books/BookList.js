import BookItem from './BookItem';
import classes from './BookList.module.css'

function BookList(props){
	return (
		<ul id="bookListCard" className={classes.list}>
			{props.books.map( x => 
				<BookItem 
					key = {x.id} 
					id = {x.id} 
					image = {x.image} 
					title = {x.title}
					description = {x.description} 
					author = {x.author}
					/>
				)
			}
		</ul>
	);
}

export default BookList;