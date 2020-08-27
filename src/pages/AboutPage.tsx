import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>Это простой список задач. Нужен он для того чтобы контролировать и не забывать дела, которые нужно сделать за день.</p>
      <button className="btn" onClick={() => history.push('/')}>На главную</button>
    </>
  )
}