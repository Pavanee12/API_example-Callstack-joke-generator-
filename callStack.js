// const multiply = (x,y) =>x*y;

// const square = x => multiply(x,x);

// const isRightTriangle =(a,b,c) => (
//     square(a) + square(b) === square(c)
// )

// fetch("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("resolved!!",res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
//    return fetch("https://swapi.dev/api/people/2/")
// })
// .then((ress)=>{
//     console.log(ress,"done2");
//     return ress.json();
// })
// .then((data)=>{
//     console.log("hers your data 2",data);
// })
// .catch((ee)=>{
//     console.log("error in 2",e);
// })
// .catch((e2)=>{
//     console.log("error in 2",e);
// })
// .catch((err)=>{
//     console.log("oops not found!",err);
// })
// .catch((e)=>{
//     console.log("error!!",e);
// })


//Now using ASYNC function

// const loadStarWarsPeople = async() => 
// {
//     try{
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);


//     const res1 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res1.json();
//     console.log(data2);
//     }
//     catch (e) {
//         console.log("invalid password",e);
//     }
// }
// loadStarWarsPeople();


//USING AXIOS

// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log(res,"you done it");
// })
// .catch((e)=>{
//     console.log("eree",e);
// })


// using async
//  const getStarWarsPerson =async (id)=>
//  {
//     try
//     {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data) ;
//     }

//     catch(e)
//     {
//         console.log("error",e);
//     }
//  }
//  getStarWarsPerson(23);

   
  
  const jokes = document.querySelector('#jokes');
  const button =document.querySelector('button');
  
  const addNewJoke = async()=>{
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
  }

  const getDadJoke= async ()=> {

 
 try  { const config = { headers:{ Accept:'application/json' } }
  const res = await axios.get('https://icanhazdadjoke.com/',config)
  return res.data.joke;
 }
 catch(e)
 {
    return 'no jokes available'
 }
  }
  
  button.addEventListener('click',addNewJoke);





















