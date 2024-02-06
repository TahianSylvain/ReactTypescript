import { Heading } from './Heading';
type StatusProps = {
    status?: 'loading'|'error'|'success',
}

export const Status = (props: StatusProps) => {
    let message
    switch (props.status) {
        case 'loading':
            message = "loading..."
            break;
        case 'success':
            message = "success..."
            break;
        case 'error':
            message = "error..."
            break;
        default:
            break;
    }

    return <div className="gift">
        <Heading>Hey, you!</Heading>
        <h2 className="status_page">{message}</h2>
    </div>
}