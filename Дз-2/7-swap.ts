const obj:Record<string,number> = {
    a:1,
    b:2
}

type Obj = Record<string, number>
type ReverseObj = Record<number,string>

function reverse<T extends Obj>(obj:T): ReverseObj{
    const res:ReverseObj = {}
    Object.entries(obj).forEach((el,i) => {
        res[el[1]] = el[0]
    })
    return res
}
