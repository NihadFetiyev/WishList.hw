import React, { useContext } from 'react'
import "./index.css"
import { WishListContext } from '../context/Wishlist'

function Navbar() {
    const { wish, setWish, addWishList } = useContext(WishListContext)
    return (
        <>
            <nav>
                <div className="basket">
                    <h2>Wishlist</h2>
                    <button>{wish.length}</button>
                </div>
                <div className="wishlist">
                    {wish.length === 0 ?
                        <h3>Empty List</h3>
                        : <>{wish.map(x =>
                            <ul>
                                <li>{x.name}</li>
                                <li>{x.count}</li>
                            </ul>
                        )}
                        </>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar