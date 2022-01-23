// todo: move to a separate config file
// const api = "https://reactnd-books-api.udacity.com"

const headers = {
    'Accept': 'application/json',
    // 'Authorization': token
}

export const getAll = async () => {
    const res = await fetch('/car', { headers })
    return res.json();
}

export const getCar = async (id) => {
    const res = await fetch(`/car/${id}`, { headers })
    return res.json();
}
