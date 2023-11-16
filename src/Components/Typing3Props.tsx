// type for apk && interface for npm.libs
type GreetProps = {
    name?: string 
}

export const Greet = (props: GreetProps) => {
    return <div>
        <h2>Hello {props.name}!</h2>
    </div>
}
