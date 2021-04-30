import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() { 
    return ( 
      <div>
        {this.props.data}
      </div>
     );
  }
}

// HOC高阶组件
// 自我感觉像是提供了 mix,然后通过 props 的方式 注入数据。
// 其实高阶组件的主要功能救赎封装并分离组件的通用逻辑，让通用逻辑在组件之间更好地被服用。
// 高阶组件的这种实现方式 本质上是装饰者设计模式。
function withPersistentData(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.someMethod = this.someMethod.bind(this)
      this.state ={
        data: '22'
      }
    }

    componentDidMount() {
      console.log(this.wrappedInstance)
    }

    someMethod() {
      console.log(this.wrappedInstance)
      // this.wrappedInstance.someMethodInWrapperdComponent()
    }

    componentWillMount() {
      let data = localStorage.getItem('data')
      this.setState({data})
    }

    render() {
      return (
        <WrappedComponent 
          data={this.state.data}
          ref={(instance) => this.wrappedInstance = instance}
          {...this.props}
        ></WrappedComponent>
      )
    }
  }
}

const MyComponentWithPersistentData = withPersistentData(MyComponent)
 
export default MyComponentWithPersistentData;