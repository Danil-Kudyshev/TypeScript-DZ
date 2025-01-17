interface resData {
    limit: number
    skip:number,
    total: number,
    users: {}[];
}

function isResData(data:any): data is resData {
    return Array.isArray(data.users) 
        && typeof data.limit === 'number'
        && typeof data.skip === 'number'
        && typeof data.total === 'number'
}

async function getData(http: string = 'https://dummyjson.com/users'):Promise<unknown> {
    try {
        const res = await fetch(http)
        if (!res.ok) {
            throw new Error('Ошибка' + ' ' + res.status)
        }
        const resJson = await res.json()
        if (isResData(resJson)) {
            console.log(resJson);
            return resJson 
        }
    } catch(e) {
        if (e instanceof Error) {
            throw new Error(e.message)
        }
    }
}
getData();


