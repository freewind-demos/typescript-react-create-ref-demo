import * as React from 'react'
import Hello from "./hello";
import {RefObject} from "react";

class App extends React.Component {

  private readonly helloRef: RefObject<Hello>;

  constructor(props: any) {
    super(props)
    this.helloRef = React.createRef();
  }

  componentDidUpdate(): void {
    this.helloRef.current!.sayHello();
  }

  render() {
    return <div>
      <Hello ref={this.helloRef}/>
    </div>
  }

}

export default App
