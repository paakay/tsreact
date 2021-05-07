/**
 * Set up Interface to define what props Child expects to receive
 */
interface ChildProps {
  color: string
  onClick: () => void
}

/**
 * Downside of Option 1: TypeScript does not understand that we are defining a React Component
 *
 * Note that all React Components can optionally provide these properties
 * 1. propTypes
 * 2. displayName
 * 3. defaultProps
 * 4. contextProps
 *
 * TypeScript doesn't know that we're making a React Component, so it thinks that "Child" will not have these propeties
 */

// Option 1
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <h1>Prop for this component is {color}</h1>
      <h2>2 Big Checks by TypeScript</h2>

      <ol>
        <li>
          Are we providing the correct props to Child when we show it in Parent?
        </li>
        <li>Are we using the correctly named + typed props in Child?</li>
      </ol>

      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  )
}

// Option 2
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  )
}
