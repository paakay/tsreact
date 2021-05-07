import { Child } from './Child'
import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={() => console.log("You cliecked me!")} />
      <ChildAsFC color="red" onClick={() => console.log("You cliecked me!")} />
    </div>
  )
}

export default Parent