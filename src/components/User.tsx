import React from 'react';
import classes from './User.module.css';

interface UserProps {
  name: string;
}

class User extends React.Component<UserProps> {
  componentWillUnmount(): void {
    console.log('User component will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
