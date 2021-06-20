import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
           <img
           className="header__logo"
           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>        
                <div className="header__searchInput"type="text"/>
                <div 
                className="header__search">
                    <input
                    className="header__searchInput"
                    type="text"/>
                    <SearchIcon
                    className="header__searchIcon"/>
                    
                </div>
                <div className='header_nav'>
                    <div className="header__option">
                    <span
                    className="header__optionLineOne">Hello Guest</span>   
                    
                    </div>
                    <div className="header__option">
                    <span
                    className="">SignIn</span>   
                    </div>

                    <div className="header__option">
                    <span
                    className="header__optionLineTwo">Returns</span>   
                    </div>

                     <div className="header__option">
                    <span
                    className="header__optionLineTwo">Your prime</span>   
                    
                    </div>
                    <div className="header__optionBasket">
                        <ShoppingBasket/>

                        <span className="header__optionlineTwo header__basketCount">0</span>
                    </div>

        </div>
        </div>
    )
}

export default Header
