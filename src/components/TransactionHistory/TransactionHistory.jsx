import transactions from '../json/transactions.json';
import PropTypes from 'prop-types';
import { Container, Table, Head, Data, List } from './Transaction.styled';

export const TransactionHistory = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Head>Type</Head>
            <Head>Amount</Head>
            <Head>Currency</Head>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <List key={id}>
              <Data>{type}</Data>
              <Data>{amount}</Data>
              <Data>{currency}</Data>
            </List>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
