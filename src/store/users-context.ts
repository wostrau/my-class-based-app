import React from 'react';

interface UsersContextValue {
  users: Array<{ id: string; name: string }>;
}

const UsersContext = React.createContext<UsersContextValue>({
  users: [],
});

export default UsersContext;
