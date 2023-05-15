type DateFormat = `${string}.${string}.${string}`

const convertToUnix = (date: string) =>
    Math.floor(new Date(date).getTime() / 1000)

const genDateRange = (
    start: DateFormat,
    end: DateFormat
): {
    unixRandomStart: number
    unixRandomEnd: number
} => {
    const startUnix = convertToUnix(start)
    const endUnix = convertToUnix(end)
    const randomStart =
        startUnix + Math.floor(Math.random() * (endUnix - startUnix))

    const randomEnd =
        endUnix - Math.floor(Math.random() * (endUnix - randomStart))

    return {
        unixRandomStart: randomStart,
        unixRandomEnd: randomEnd,
    }
}

export { genDateRange }
