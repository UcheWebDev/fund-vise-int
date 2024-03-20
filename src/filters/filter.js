
const formatNumberFilter = (number) => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(0) + 'm';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'k';
    } else {
        return number + '';
    }
};

const formatContent = (content) => {
    return content.replace('/\n/g', '<p>')
}

export {
    formatNumberFilter,
    formatContent
}
