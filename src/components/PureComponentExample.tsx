import React, { PureComponent } from 'react';

interface Props {
  message: string;
}

class PureComponentExample extends PureComponent<Props> {
  render() {
    console.log('Rendering: ', this.props.message);
    return (
      <div>
        <h2>PureComponent Example</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default PureComponentExample;
