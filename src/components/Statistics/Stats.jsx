import PropTypes from 'prop-types';
import { Items } from './Statistic.styled';

export const Stats = ({ data: { label, percentage } }) => {
  return (
    <Items>
      <span>{label}</span>
      <span>{percentage}%</span>
    </Items>
  );
};

Stats.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
