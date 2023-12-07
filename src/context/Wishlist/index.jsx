import React, { createContext, useContext, useState } from 'react'

export const WishListContext = createContext()

function WishListProvider({ children }) {
    const [wish, setWish] = useState([])


    function addWishList(p) {
        const itemIndex = wish.findIndex(x=>x.id === p.id)
        if (itemIndex === -1) {
            setWish([...wish,{...p,count:1}])
            return
        }
        wish[itemIndex].count++
        setWish([...wish])
    }
    function checkWishList(p) {
        return wish.find(x=>x.id === p.id) !==undefined
    }
    function checkWishCount(p) {
        return wish.find(x=>x.id === p.id).count   
    }
    function decreaseCount(p) {
        const itemIndex = wish.findIndex(x=>x.id === p.id)
        if (wish[itemIndex].count === 1) {
            setWish(wish.filter(x=>x.id !== p.id))
            return
        }
        wish[itemIndex].count--
        setWish([...wish])
    }
    const data = { wish, setWish ,addWishList ,checkWishList ,checkWishCount,decreaseCount }
    return (
        <>
            <WishListContext.Provider value={data}>
                {children}
            </WishListContext.Provider>
        </>
    )
}

export default WishListProvider
