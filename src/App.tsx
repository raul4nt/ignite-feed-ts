// JSX = JavaScript + XML (HTML)
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
  id: 1,
  author: {
    avatarUrl: 'http://github.com/raul4nt.png',
    name: 'Raul Silveira',
    role: 'Student @Rocketseat'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋' },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: 'jane.design/doctorcare' },
  ],
  publishedAt: new Date('2024-10-14 11:32:00'),
},
{
  id: 2,
  author: {
    avatarUrl: 'http://github.com/Lucas-Gades.png',
    name: 'Lucas Gades',
    role: 'Estagiário de TI'
  },
  content: [
    { type: 'paragraph', content: 'Boa tarde pessoal! Todos bem?' },
    { type: 'paragraph', content: 'Mais alguém empolgado com a NLW? :v' },
  ],
  publishedAt: new Date('2024-10-13 15:51:00'),
},
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />  
          <main>
            {posts.map(post => {
              return (<Post 
                key={post.id}
                post={post}
              />
            )
            })}
          </main>
      </div> 
    </div>
  )
}

// sempre que for feito uma iteração dentro do React, usaremos o Map
// o forEach nao pode ser usado pois nao tem retorno, ja o map tem