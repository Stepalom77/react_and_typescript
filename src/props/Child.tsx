interface ChildProps {
    color:string;
    onClick: () => void
    children?: React.ReactNode
}
//Define Function without telling React that it is a Functional Component
/*export const Child = ({color, onClick}:ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}> Click me</button>
        </div>
}*/

//This way we tell React that this is a React Functional Component with Props
export const Child:React.FC<ChildProps> = ({color, onClick, children}) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}> Click me</button>
        </div>
}
