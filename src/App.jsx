import { useState } from 'react';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import './styles.css';
import styles from './App.module.css';


function App() {
  

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
         <Sidebar/>
          <main> Post</main>
      </div>
    </div>
   
  )
}

export default App
