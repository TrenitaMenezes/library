import { useContext } from "react";
import FavContext from "../store/favorite-context";
import BookList from "../components/books/BookList";
import {ContentWriter} from "istanbul-lib-report";
function FavoriteBookPage(){
	const favoriteCtx = useContext(FavContext);
	let content;

	if(favoriteCtx.totalFavBooks === 0){
		content = <p> You got no fav book yet! Start adding some?</p>
	} else{
		content = <BookList books={favoriteCtx.favorites}/>
	}
	
	return (
		<section>
			<h1> My Favorite Books </h1>
			{content}
		</section>
		);
}

export default FavoriteBookPage;