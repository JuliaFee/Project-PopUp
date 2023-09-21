import React from 'react'
import style from './page.module.css'

function Message() {
  return (
    <>
    <div className={style.error}>Error</div>
    <div className={style.success}>Sucesso</div>
    </>
  )
}

export default Message