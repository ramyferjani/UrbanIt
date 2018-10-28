import React from 'react';
import { Icon } from 'native-base';

import { getRankIcon } from '../../helpers/rank';

class RankIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Icon type='MaterialCommunityIcons' name={getRankIcon(this.props.elo)}/>
    );
  }
}

export default RankIcon