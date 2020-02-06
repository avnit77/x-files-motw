import { useEffect, useState } from 'react';
import { getMonsters, getMonster } from '../services/api';

export const useMonsters = () => {
  const [monsterArray, setMonsterArray] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMonsters(page)
      .then(monsters => setMonsterArray(monsters.results));
  }, [page]);

  const handlePageChange = (direction) => {
    if(direction === 'prev' && page !== 1){
      setPage(page - 1);
      return;
    }
    else if(direction === 'next') {
      setPage(page + 1);
      return;
    }
    else return;
  };

  return { monsterArray, page, handlePageChange };
};

export const useMonster = name => {
  const [selectedMonster, setSelectedMonster] = useState({});

  useEffect(() => {
    getMonster(name)
      .then(monster => setSelectedMonster(monster[0]));
  }, [name]);

  return { selectedMonster };
};
