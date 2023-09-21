'use client'
import styles from "./PopUp.module.css"
const PopUp =({message, typeColor}) => {
    let color = '';
    if(typeColor === 'sucesso'){
        color = styles.sucesso;
    } else{
        color = styles.erro
    }

    return(
        <div className={color}>
            <p>{message}</p>
        </div>
    )
}
export default PopUp