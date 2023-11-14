import './index.css';

import user from '../json/user.json';
import { Profile } from './profile/profile';
import data from '../json/data.json';
import { Statistics } from './statistics/statistics';
import friends from '../json/friends.json';
import { FriendList } from './friends/friends';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
