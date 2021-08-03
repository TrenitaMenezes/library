import { createContext, useState } from 'react';

const FavContext = createContext({
	favorites:[],
	totalFavBooks:0,
	addFavBook:(favoriteBook) => {},
	removeFavBook: (bookId) => {},
	itemIsFav: (bookId) =>{},
	
});
export default FavContext;
export function FavContextProvider(props){
	const [userFavorites, setUserFavorites] = useState([]);
	
	function addFavHandler(favoriteBook){
		setUserFavorites((previousUserFavs) => {
			return previousUserFavs.concat(favoriteBook);
		});
	}
	
	function removeFavHandler(bookId){
		setUserFavorites((previousUserFavs) => {
			return previousUserFavs.filter(book => book.id !== bookId );
		});
	}

	function itemIsFavHandler(bookId){
		return userFavorites.some(books => books.id === bookId);
	}

	const context = {
		favorites: userFavorites,
		totalFavBooks: userFavorites.length,
		addFavBook: addFavHandler,
		removeFavBook: removeFavHandler,
		itemIsFav: itemIsFavHandler
	};

	return (<FavContext.Provider value={context}>
		{props.children}
		</FavContext.Provider>);
};

