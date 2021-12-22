import { Stats } from './Stats';
import data from '../../data.json';
import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      {data.map(data => (
        <Stats key={data.id} data={data} />
      ))}
    </section>
  );
};

Statistics.propTypes = {
  children: PropTypes.string,
};
