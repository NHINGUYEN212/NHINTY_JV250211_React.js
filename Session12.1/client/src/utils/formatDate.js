export const formatDate = (date) => {
    const today = new Date(date);

    let day = today.getDate();
    if (+day < 10) {
        day = `0${day}`;
    }

    let month = today.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }

    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
};
