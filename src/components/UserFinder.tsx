import React from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

interface UserFinderState {
  filteredUsers: Array<{ id: string; name: string }>;
  searchTerm: string;
}

class UserFinder extends React.Component<any, UserFinderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  static contextType = UsersContext;
  context!: React.ContextType<typeof UsersContext>;

  componentDidMount(): void {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(
    prevProps: any,
    prevState: Readonly<UserFinderState>,
    snapshot?: any
  ): void {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => {
          return user.name.includes(this.state.searchTerm);
        }),
      });
    }
  }

  searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.currentTarget.value });
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default UserFinder;
