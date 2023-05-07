export function LongTxt({bookDescription, length = 100}) {
    console.log("length:", length)
    const shortenedDescription = bookDescription.substr(0, length)
    console.log("description:", bookDescription)
    console.log("Shortened:", shortenedDescription)
}