// import React from 'react';
import './App.css';
import CardList from './components/task1/CardList/CardList';
import cards from './components/task1/data/cards';

function App() {
  return (
    <>
      {/* шапка */}
      <header className='header'>
        <h1>Домашнее задание Композиция компонентов</h1>
        <h2>Задачи расположены последовательно в столбик</h2>
      </header>
      
      {/* Компонент задачи №1 */}
      <CardList id="cards" items={cards}/>

      {/* Компонент задачи №2 */}
      {/* < /> */}

      {/* Компонент задачи №3 */}
      {/* < /> */}
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
