import fetch from "node-fetch";

async function getData(){
    let posts = null;
    let fetchPromise = await fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json());
    /*fetchPromise.then((data)=>{
        const posts = data;
        console.log(posts[0]);
    });*/
    console.log(fetchPromise);

}

getData();
