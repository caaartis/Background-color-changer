const btn= document.querySelector('.btn-click');

const colors=["green","red","pink","blue","purple","orange"];

btn.addEventListener('click',function(){
//  alert("God Bitch")
const rando=Math.floor(Math.random()*colors.length);
    
    document.querySelector('.container').style.backgroundColor=colors[rando];
})