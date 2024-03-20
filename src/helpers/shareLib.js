const sharePost = async (title, text) => {
    if (!navigator.share) return 'cannot use share on this device'
    try {
        const shared = await navigator.share({
            title: title,
            text: text
        })
        return shared
    } catch (error) {
        return new Error(error)
    }
}

export {
    sharePost
}