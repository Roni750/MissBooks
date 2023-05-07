const { useState } = React

export function LongTxt({bookDescription, length = 100}) {
    const shortenedDescription = bookDescription.substr(0, length)
    const [displayFull, setDisplayFull] = useState(false)
    const description = displayFull ? bookDescription : shortenedDescription

    return (
        <React.Fragment>
            <p>{description}{!displayFull && bookDescription.length > length && <span className="pointer-mouse" onClick={() => setDisplayFull(true)}>...</span>}</p>
        </React.Fragment>
    )
}
