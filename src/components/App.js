import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
// import { Stats } from './Statistics/Stats';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      {/* <Statistics title="Upload stats" stats={data} />; */}
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
