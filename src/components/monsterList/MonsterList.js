import React from 'react';
import styles from './MonsterList.css';
import { useMonsters } from '../../hooks/motw';
import { Link } from 'react-router-dom';

const MonsterList = () => {
  const { monsterArray, page, handlePageChange } = useMonsters();

  return (
    <div className={styles.MonsterList}>
      <div className='page'>
        <button value='prev' onClick={({ target }) => handlePageChange(target.value)}>Prev</button>
        <span> Page {page} </span>
        <button value='next' onClick={({ target }) => handlePageChange(target.value)}>Next</button>
      </div>
      <ul>
        { monsterArray.length ?
          monsterArray.map(({ name, image }) => {
            return <li key={name} >
              <Link to={`/characters/${name}`} >
                <h2>{name}</h2>
                <img src={image}/>
              </Link>
            </li>;}) : null
        }
      </ul>

    </div>
  );
};

export default MonsterList;
