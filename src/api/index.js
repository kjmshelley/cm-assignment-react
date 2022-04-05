const BASE_URL = "http://localhost:3000";

export async function get(path, handler) {
    try {
        const response = await fetch(`${BASE_URL}${path}`);
        const data = await response.json();
        const results = handler ? handler(data) : data;
        return [response.status, results];
    } catch (ex) {
        return [500, null];
    }
}
