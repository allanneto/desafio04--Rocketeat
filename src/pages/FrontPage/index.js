import React from 'react';
import Header from '../../components/Header'
import Timeline from '../../components/Timeline'

const posts = [
    {
      id: 1,
      author: {
        name: "Julio Alcantara",
        avatar: "http://url-da-imagem.com/imagem.jpg"
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: "http://url-da-imagem.com/imagem.jpg"
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
        <Timeline key={index} posts={posts} />
    </>
  )
}

export default Page;