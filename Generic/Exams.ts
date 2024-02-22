const last=<T>(arr:T[]): T => arr[arr.length-1] // this will return last elemnt of the array

// T is a type variable
// since all of the values in our array are numbers, T becomes number
const l = last([1,2,3])
console.log(l) // output will be 3

// since all of the values in our array are strings, T becomes string
const l2 = last(['a','b','c']) // string array
console.log(l2) // will be "c"

// when we use interface, T becomes a union type(number | string |boolean)
const l3 = last([1,'a',true])
console.log(l3) // will be "true"

// if i am saying number then has to be number
// const l4 =last<number<(['a',2,'true']) // it will give an error

// union
const l5 =last<number |string>(['a',2,'b']);

// create a union array
const makeArr = <X,Y>(x:X, y:Y) =>[x,y]
const arr1 = makeArr(5,6)
console.log(arr1) // [5,6]
const arr2 = makeArr('a','b')
console.log(arr2) // ['a','b']
const arr3 = makeArr('a',6)
console.log(arr3) // ['a',6]


// create a tuple
const makeTuple =<X,Y >(x:X, y:Y) :[X,Y] => [x,y]
const tuple1 = makeTuple(5,6)
console.log(tuple1)// [5,6]
const tuple2 = makeTuple('a','b')
console.log(tuple2)// ['a','b']
const tuple3 = makeTuple<string, number>('a',6)
console.log(tuple3)// ['a',6]


// deafult types:
const makeTupleWithDefaultType = <T,Y=number>(t:T, y:Y) : [T,Y] => [t,y]
const tuple4 = makeTupleWithDefaultType<string>('string',5)

const makeFullName =(obj:{firstName:string, lastName:string}) =>{
    return{
        ...obj,
        fullName : obj.firstName + " " + obj.lastName

    }
}
// i can not add "age:31", in this fullName makeFullName({firstName:'Umit', lastName:'Mester', age:31})
// i will get an error
const fullName = makeFullName({firstName:'Umit', lastName:'Mester'})
console.log(fullName) // {firstName:"Umit", lastName:'Mester', fullName:'Umit Mester'}

// inorder to add another property, i need to have generic "T"
// FOR THIS EXAMPLE, as long as "firstname and lastname " are exist as string ,others can be ant Type
const makeFullNameWithGenerics = <T extends {firstName:string, lastName:string}>(obj:T) =>{
    return{
        ...obj,
        fullName : obj.firstName + " " + obj.lastName

    }
}
const fullName2 = makeFullNameWithGenerics({firstName:'Umit', lastName:'Mester' , age:31 , city:'Ordu'})
console.log(fullName2 )// {firstName:"Umit", lastName:'Mester', fullName:'Umit Mester', age:31,city: 'Ordu'}


// Interface
interface Tab<T>{
    id:string,
    position: number,
    data :T
}

const tab1 : Tab<string>={
    id:'1',
    position:1,
    data:'hello'
}
console.log(tab1)
const tab2 : Tab<number>={
    id:'2',
    position:2,
    data:2
}
console.log(tab2)
const tab3: Tab<object>={
    id:'2',
    position:3,
    data:{
        name:'Umit'
    }
}
console.log(tab3)