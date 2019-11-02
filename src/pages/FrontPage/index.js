import React from 'react';
import Header from '../../components/Header'
import Timeline from '../../components/Timeline'
import Profile from '../../assets/profile.jpg'

const posts = [
    {
      id: 1,
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
        }
      ]
    },
    {
      id: 2
      // Restante dos dados de um novo post
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