import React from 'react';
import styles from './MonsterDetail.css';
import PropTypes from 'prop-types';
import { useMonster } from '../../hooks/motw';


const MonsterDetail = ({ match }) => {
  const { selectedMonster } = useMonster(match.params.name);
  console.log(selectedMonster, 'selected Monster');

  return (
    <div className={styles.MonsterDetail}>
      <h1>{selectedMonster.name}</h1>
      <img src={selectedMonster.image}/>
      <ul>
        <li>Description: {selectedMonster.description}</li>
        <li>Status: {selectedMonster.status}</li>
        <li>Portrayed By: {selectedMonster.portrayedby}</li>
      </ul>
    </div>
  );
};

MonsterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default MonsterDetail;
