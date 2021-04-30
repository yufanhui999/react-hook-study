import React, { Component } from 'react';

function withControlledState(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
      this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange(e) {
      console.log(e.target.value)
      this.setState({
        value: e.target.value
      })
    }

    render() {
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      }

      return (
        <WrappedComponent 
          {...this.props}
          {...newProps}
        />
      )
    }
  }
}


class SimpleControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 这个组件就称为了 无状态组件，状态由高阶组件维护。
  render() { 
    return (
      <input name="simple" {...this.props.controlledProps}/>
     );
  }
}
 
export default withControlledState(SimpleControlledComponent);