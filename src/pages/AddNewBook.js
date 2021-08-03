import NewBookForm from "../components/books/NewBookForm";
import { useHistory } from "react-router-dom";

function AddNewBookPage(){

	const history = useHistory();

	function addNewBookHandler(bookData){
		//or use axios
		fetch('https://library-61909-default-rtdb.firebaseio.com/books.json', {
			method: 'POST',
			body: JSON.stringify(bookData),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(() =>{
			 history.replace('/');
		}) ;

	}

	return (
		<section>
			<h1>Add New Book</h1>
			<NewBookForm onAddNewBook={addNewBookHandler}/>
		</section>
	);
}

export default AddNewBookPage;