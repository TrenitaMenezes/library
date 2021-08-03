import Card from '../UI/Card';
import classes from './NewBookForm.module.css'
import { useRef } from 'react';

function NewBookForm(props){
	const titleInputRef = useRef();
	const descriptionInputRef = useRef();
	const authorInputRef = useRef();
	const imageInputRef = useRef();

	function submitHandler(event){
		event.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;
		const enteredAuthorName = authorInputRef.current.value;
		const enteredImageUrl = imageInputRef.current.value;

		const bookData = {
			title: enteredTitle,
			image: enteredImageUrl,
			author: enteredAuthorName,
			description: enteredDescription
		};

		console.log(bookData);
		props.onAddNewBook(bookData);
	}


	return(
		<div className={classes.addMargin}>
		<Card >
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Book Title</label>
					<input  type='text' required id='title' ref={titleInputRef}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea  type='text' required id='description' rows='5' ref={descriptionInputRef}></textarea>
				</div>
				<div className={classes.control}>
					<label htmlFor='author'>Author</label>
					<input  type='text' required id='author' ref={authorInputRef}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Cover Image (URL ONLY)</label>
					<input  type='url' required id='image' ref={imageInputRef}></input>
				</div>
				<div className={classes.actions}>
					<button>Add Book</button>
				</div>
			</form>
		</Card>
	</div>
	);
}

export default NewBookForm;