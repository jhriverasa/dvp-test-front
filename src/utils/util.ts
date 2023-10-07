const formatStringValues = (value: string | null) => {
    if (value === "" || value === null) {
        return "N/A"
    } else {
        return value
    }
}

export { formatStringValues }