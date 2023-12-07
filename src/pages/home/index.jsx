import React, { useContext, useEffect, useState } from 'react'
import { WishListContext } from '../../context/Wishlist'

function Home() {
  const { wish, setWish, addWishList, checkWishList, checkWishCount ,decreaseCount} = useContext(WishListContext)
  const [data, setData] = useState("")

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then(res => res.json())
      .then(items => setData(items))
  }, [])

  return (
    <>
      <h1>Welcome to Home Page</h1>
      {data && data.map(x =>
        <ul key={x.id}>
          <li>{x.id}</li>
          <li>{x.name}</li>
          <li>
            {checkWishList(x)
              ? <div>
                <button onClick={() => addWishList(x)}>+</button>
                <span>{checkWishCount(x)}</span>
                <button onClick={() => decreaseCount(x)}>-</button>
              </div>
              : <button onClick={() => addWishList(x)}>Add to Wishlist</button>
            }
          </li>
        </ul>
      )}
    </>
  )
}

export default Home