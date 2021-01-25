import * as React from 'react'

class Hello extends React.Component {
  render() {
    return <div>
      <h1>Hello React</h1>
    </div>
  }

  sayHello() {
    console.log('Hello from Hello Component');
  }
}

export default Hello
