
// type for apk && interface for npm.libs
type GreetProps = {
    name?: string 
    isLoggedIn: boolean
    messageCount?: {
        id: number
        mail: string
    }[] // array of string
}

export const Greet = (props: GreetProps) => {
    return <div>
        { props.isLoggedIn ?
            <h2>Hello {props.name}! You have 
                {props.messageCount?.length} mess to read.
                <ul>
                    {props.messageCount?.map(
                        (item) => <li key={item.id}>{item.mail}</li>)
                    }
                </ul>
            </h2> : 
            <h2>
                U seem to be Anonymous till now?
            </h2>
        }
    </div>
}
