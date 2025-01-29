type Key = string|number|boolean
type Backet = [string|number|boolean, string|number|boolean][][]

class Maps {
    #backet: Backet = [
        [],[],[],[],[]
    ] 

    constructor() {

    }

    hashMap(key:Key):number {
        if (typeof key === 'string') {
            return key.length % this.#backet.length
        } else if(typeof key === 'number') {
            return key % this.#backet.length
        } else {
            return 1
        }
    }
    
    set(key:Key, value:Key) {
        const id = this.hashMap(key)
        const repeatedKey = this.#backet[id].findIndex(el => el[0] === key)
        if(repeatedKey !== -1) {
            return this
        }
        this.#backet[id].push([key, value])
        return this
    }
    delete(key:Key) {
        const id = this.hashMap(key)
        const idDeleteKey = this.#backet[id].findIndex(el => el[0] === key)
        if(idDeleteKey === -1) {
            return this
        }
        this.#backet[id].splice(idDeleteKey,1)
        return this
    }
    get(key:Key) {
        const id = this.hashMap(key)
        const idGetKey = this.#backet[id].findIndex(el => el[0] === key)
        if(idGetKey === -1) {
            return
        }
        return this.#backet[id][idGetKey]
    }
    clear() {
        const clearBacket = this.#backet.map(el => el=[])
        this.#backet = clearBacket;
    }
}

