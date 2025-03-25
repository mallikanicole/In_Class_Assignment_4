//data.field.image[0].url

import{getPosts}from'./api.js';
async function displayPosts() {
    const container=document.getElementById('postContainer');
    try{
        const posts=await getPosts();
        posts.slice(0,5).forEach(post=>{
            const div=document.createElement('div');
            div.innerHTML=`<h3>${post.title}</h3><p>${post.body}</p>`;
            container.appendChild(div);
        });
    } catch(err){
        container.innerHTML=`<p style="color:red;">Failed to load posts:${err.message}</p>`;
    }
}
displayPosts();