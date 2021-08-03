import { Link } from "react-router-dom";
import { useContext } from "react";
import FavContext from "../../store/favorite-context";
import classes from './MainNavigation.module.css';
import  {Navbar, Nav, Container} from "react-bootstrap";

function MainNavigation(props){

	const favoriteCtx = useContext(FavContext);

	return (
	/* 	<header className={classes.header}>
			<div className={classes.logo}>Happy Readers</div>
			<nav>
				<ul>
					<li><Link to='/'>All Books</Link></li>
					<li><Link to='/add-book'>Add New Book</Link></li>
					<li><Link to='/favorites'>My Favorite Books<span className={classes.badge}>{favoriteCtx.totalFavBooks}</span></Link></li>
				</ul>
			</nav>
		</header>  */

		<Navbar  className={classes.header} expand="sm" sticky="top" collapseOnSelect>
			<Container>
				<Navbar.Brand href="/" className={classes.logo}>Happy Readers</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav style={{padding:'1em'}} className={classes.navStyles}>
						
						{/* <ul>
							<li><Link to='/'>All Books</Link></li>
							<li><Link to='/add-book'>Add New Book</Link></li>
							<li><Link to='/favorites'>My Favorite Books<span className={classes.badge}>{favoriteCtx.totalFavBooks}</span></Link></li>
						</ul> */}
						<Nav.Link href="/"><Link to='/'>All Books</Link></Nav.Link>
						<Nav.Link ><Link to='/add-book'>Add New Book</Link></Nav.Link> 
						<Nav.Link ><Link to='/favorites'>My Favorite Books<span className={classes.badge}>{favoriteCtx.totalFavBooks}</span></Link></Nav.Link>  
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MainNavigation;