const API_URL = 'http://api.exchangeratesapi.io/'
const API_KEY = '52dd5a4e71e4d1e95ad215dbfaedcad9';

/**
 *  Кешируем запросы в localStore, чтобы экономить лимит API
 */
export const fetchApiWithCache = async (method: string, params?: Record<string, string>) => {
    const queryString = new URLSearchParams(params).toString()
    const lsKey = 'api_cache_' + method + queryString
    const cachedResult = localStorage.getItem(lsKey)

    if (cachedResult) {
        return JSON.parse(cachedResult)
    }

    try {
        const response = await fetch(`${API_URL}/v1/${method}?access_key=${API_KEY}&${queryString}`)
        const data = await response.json()

        if (!data.error) {
            localStorage.setItem(lsKey, JSON.stringify(data))
        }

        return data

    } catch (e) {
        console.log(e);
    }
}