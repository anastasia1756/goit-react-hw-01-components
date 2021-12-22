import PropTypes from 'prop-types';

export const Stats = ({ data: { label, percentage } }) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
