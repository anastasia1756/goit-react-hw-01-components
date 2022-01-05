import { Stats } from './Stats';
import data from '../json/data.json';
import PropTypes from 'prop-types';
import { Statistic, Title, List } from './Statistic.styled';

export const Statistics = () => {
  return (
    <Statistic>
      {Title && <Title>Upload stats</Title>}

      <List>
        {data.map(data => (
          <Stats key={data.id} data={data} />
        ))}
      </List>
    </Statistic>
  );
};

Statistics.propTypes = {
  children: PropTypes.string,
};
