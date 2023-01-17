const dateFormater = Intl.DateTimeFormat("en-us", {
    dateStyle: "medium",
    timeStyle: "short",
});

const formatter = (time) => {
    if (time) {
        const d = new Date(time);
        return dateFormater.format(d);
    }
    return "";
};

export default formatter