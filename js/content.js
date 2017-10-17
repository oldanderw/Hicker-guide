// Step 1: Get Website Content - (DATA)
window.onload = function() {
  init();
}

function init () {
  var len = 150;


  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
  // Step 2: Replacing Copy
  // var element = document.querySelectorAll('#blog article');
  let {blogPost, location, event, hikers, about, copyright} =  JSON.parse(xhr.responseText);
  // const json = JSON.parse(xhr.responseText);
  // const {blogPost, location, event, hikers} = json;

 //post.add(`text`)
 //post.commit(#tag)
 //post.push


  // function post(){
  //   this.text = "";
  //   this.query = "";
  // };
  //
  // post.prototype.add = function(input, length = 0) {
  //    if(lenth == 0){
  //      this.text += input;
  //    }else{
  //      this.text = input.text.substring(0,length);
  //    }
  //
  // };
  // post.prototype.clear = function() {
  //   this.text = "";
  // };
  // post.prototype.commit = function(tag) {
  //   this.query = document.querySelector(tag);
  // };
  // post.prototype.push = function() {
  //   this.query.innerHTML = this.text;
  //   console.log(this.query + "was used" );
  // };

  class Post {
    constructor() {
      this.text = "";
      this.query = "";
      this.length = 0;
    }
    add(input, length = 0){
      if(lenth == 0){
        this.text += input;
      }else{
        this.text = input.text.substring(0,length);
      }
    clear() {
      this.text = "";
    }
    commit(tag){
      this.query = document.querySelectorAll(tag);
    }
    push(){
      this.query.innerHTML = this.text;
      console.log(this.query + "was used" );
    }
  }
}
  var posts = '';
  var element;
   if (xhr.status === 200) {
    if(document.querySelector('#cta') != null ){
      let posts = new Post();
      posts.add(`<article>`);
      posts.commit(`#cta`);
      posts.push();
       posts = '<article>';
       posts += `<h1>${location[0].city},   ${location[0].state}</h1>`;
       posts += `<h2>${location[0].title}</h2>`;
       posts += `<p>${location[0].text}</p>`
       posts += `</article>`;
       posts += `<ul class="Pagination">`;
       posts += `<li><a href="">previous</a></li>`;
       posts += `<li><a href="">1</a></li>`;
       posts += `<li><a href="">2</a></li>`;
       posts += `<li><a href="">3</a></li>`;
       posts += `<li><a href="">next</a></li>`;
       posts += `</ul>`;
       element = document.querySelector('#cta');
       element.innerHTML = posts;
       posts = '';
       console.log("querySelector('#cta') was used");
    }
    if(document.querySelector('#blog') != null){
      posts = '<h1>Latest Adventures</h1>';
      for (i = 0; i <  blogPost.length; i++) {
         posts += '<article>';
         posts += `<img src="${ blogPost[i].imageURL}" alt="">`;
         posts += '<h2>' +  blogPost[i].title + '</h2>';
         posts += '<h3>' +  blogPost[i].subtitle + '</h3>';
         var blogtext =  blogPost[i].text.substring(0,len);
         posts += `<p>${blogtext}...</p>`;
         posts += '<p><a href="">Read More</a></p>';
         posts += '</article>';
      }
        element = document.querySelector('#blog');
      //  posts += '<p><a href="#"> Load more Adventures</a></p>';
      element.innerHTML = posts;
      posts = '';
      console.log("querySelector('#blog') was used");
    }
    if(document.querySelector('footer section ul') != null){
     for (var i = 0; i < 3; i++) {
       posts += '<li>';
       posts += '<a href="#">';
       posts += `<h2>${new Date( event[i].date).getDate()+1}</h2>`;
       posts += `<h3>${ event[i].title}</h3>`;
       posts += `<p>${ event[i].text}</p>`
       posts += "</a>"
       posts += "</li>"
     }
     element = document.querySelector(' footer section ul');
     element.innerHTML = posts;
     posts = '';
     console.log("querySelector('footer section ul') was used");
    }
    if(document.querySelector('section ol') != null){
     for (var i = 0; i < 3; i++) {
       posts += `<li>`;
       posts += `<img src="${hikers[i].imageURL}" alt="profile picture">`
       posts += `<h2>${hikers[i].lastname + "," +  hikers[i].firstname}</h2>`;
       posts += `<p>${hikers[i].city}, ${ hikers[i].state} </p>`;
       posts += `</li>`;
     }
     element = document.querySelector('section ol');
     element.innerHTML = posts;
     posts = '';
     console.log("querySelector('section ol') was used");
    }
    if(document.querySelector('#about') != null){
      posts += '<h1>About</h1>'
      posts += `<h2>${ about.title}</h2>`
      posts += `<p>${ about.text}</p>`
      element = document.querySelector('#about');
      element.innerHTML = posts;
      posts = '';}
    if(document.querySelector('#copyright')){
      posts += `${ copyright}<a href="#"> Privacy</a>
        <a href="#">terms</a> <a href="#">newletters</a>`
      element = document.querySelector('#copyright');
      element.innerHTML = posts;
      posts = ''
      console.log("document.querySelector('#copyright') was used");
    }
    if(document.querySelector('#event') != null){
      posts += `<h1>Events</h1>`;
      for (var i = 0; i < 3; i++) {
        posts += `<article>`;
        posts += `<img src="DWS1_portfilo/${ event[i].imageURL}" alt="event picture"`;
        posts += `<h2>happening on ${event[i].date}</h2>`;
        posts += `<h2>${event[i].title}</h2>`;
        posts += `<p>${ event[i].location}, ${event[i].state}</p>`;
        posts += `<p>${ event[i].text}</p>`;
        posts += `<h2>attending</h2>`;
        posts += `<ul><li>${ hikers[0].firstname + " " + hikers[0].lastname}</li><li>${hikers[1].firstname + " " + hikers[1].lastname}</li><li>${hikers[2].firstname + " " + hikers[2].lastname}</li></ul>`;
        posts += `<p>are you attending this event?</p>`;
        posts += `<p><button name ="yes">Yes</button><button name="Maybe">Maybe</button><button name="No">No</button></p>`;
        posts += `<p><a href="#">More information</a></p>`;
        posts += `</article>`;
      }
      posts += `<p><a href="#">More events</a></p>`;
      element = document.querySelector('#event')
      element.innerHTML = posts;
      posts = '';
      console.log("document.querySelector('#event') was used")
    }
    if(document.querySelector('table') != null){
      posts +=`<tr>`;
      for (var i = 0; i < 4; i++) {
        posts += `<td>${ location[i].city}, ${ location[i].state}</td>`;
      }
      posts +=`</tr>`;
      posts +=`<tr>`;
      for (var i = 0; i < 4; i++) {
        posts += `<td>${ location[i].text}</td>`;
      }
      posts +=`</tr>`;
      element = document.querySelector('table');
      element.innerHTML = posts;
      posts = '';
      console.log("document.querySelector('table') was used")
    }
   }
 }// ends onload
  xhr.open('GET', 'js/data.json', true);
  xhr.send(null);

 function minChar(event) {
  var target = event.target;
  var error = target.nextElementSibling;

  if(target.value.length < 8){
    error.style.display = 'block';
    error.innerHTML = '*this must be 8 char or more';
  }else{
     error.style.display = 'none'; //removes error message
     error.innerHTML = '';
  }

}
var Fullname = document.querySelector('#Fname');
var feedback = document.querySelector('#feedback');
Fullname.addEventListener('blur',minChar);
feedback.addEventListener('blur',minChar);


}// ends init()
