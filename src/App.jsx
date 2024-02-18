import { useState } from 'react';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';
import './styles.css';
import styles from './App.module.css';

const posts =[
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/SahRB.png',
          name: 'Sabrina Barros',
          role: 'Software Developer'
      },
      content: [
          {type: 'paragraph', content: ' Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
          {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
          {type: 'paragraph', content:  'O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content:  'jane.design/doctorcare'},
              
      ],
      publishedAt: new Date('2024-02-02 20:00:00')
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg',
          name: 'Maria Joana',
          role: 'Software Developer'
      },
      content: [
          {type: 'paragraph', content: ' Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
          {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
          {type: 'paragraph', content:  'O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content:  'jane.design/doctorcare'},
              
      ],
      publishedAt: new Date('2024-02-02 20:00:00')
  },
];

function App() {
  

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
         <Sidebar/>
         <main>
          {posts.map(post=>{
            return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
          
        
         </main>
        
          
      </div>
    </div>
   
  )
}

export default App
