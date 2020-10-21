import React from 'react';
import { View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <>
        <MemoList></MemoList>
        <CircleButton>＋</CircleButton>
      </>
    );
  }
}

export default MemoListScreen;