import { Fragment } from "react"
import style from "./header.module.css"
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton"

const Header = props => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>Food App</h1>
        <div style={{paddingRight: '15%'}}>
          <HeaderCartButton />
        </div>
      </header>
      <div className={style['main-image']}>
        <img src={mealsImg} alt='tes123' />
      </div>
    </Fragment>
  )
}

export default Header