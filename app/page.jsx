import Image from 'next/image'
import styles from './page.module.css'
import Message from './components/render/page'

export default function Home() {
  return (
    <>
    <h2>Pop-up</h2>
    <button onClick={''}>Exisbir Pop-up de ERRO</button>
    <button onClick={''}>Exisbir Pop-up de Sucesso</button>
    <Message></Message>
    </>
  )
}
