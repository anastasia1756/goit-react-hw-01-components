export const TransactionHistory = ({
  items: { id, type, amount, currency },
}) => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
//надо map
