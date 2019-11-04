import React from 'react';
import Header from '../../components/Header'
import Timeline from '../../components/Timeline'
import './style.css'

const posts = [
    {
      id: 1,
      author: {
        name: "Julio Alcantara",
        avatar: '../../assets/profile.jpg'
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: 'avatar'
          },
          content: "Conteúdo do comentário"
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Julio Alcantara",
        avatar: 'avatar'
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: 'avatar'
          },
          content: "Conteúdo do comentário"
        },
        {
          id: 2,
          author: {
            name: "Diego Fernandes",
            avatar: 'avatar'
          },
          content: "Conteúdo do comentário"
        },
        {
          id: 3,
          author: {
            name: "Diego Fernandes",
            avatar: 'avatar'
          },
          content: "Conteúdo do comentário- Sera que dessa vez vai dar certo a formatacao desse negocio???"
        }


      ]
    }
  ];

function Page(){
  return (
    <>
        <Header/>
        <Timeline posts={posts} />
    </>
  )
}

export default Page;