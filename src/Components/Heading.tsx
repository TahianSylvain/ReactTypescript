type HeadingProps = {
    children?: string,
}

export const Heading = (props: HeadingProps) => {
    return <div className="gift">
        <h2 className="status_page">{props.children}</h2>
    </div>
}