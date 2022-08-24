import React from 'react'
import CartIcon from '../Cart/CartIcon.js'

import clasess from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <button className={clasess.button}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={clasess.badge}>
        3
      </span>
    </button>
  )
}

export default HeaderCartButton