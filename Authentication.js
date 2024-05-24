alert('This site is still under construction some features may not work properly.');
const login = document.getElementById('login');
const signIn = document.querySelector('.js-login-index');
const regForm = document.querySelector('.js-reg-form');
const loginForm = document.querySelector('.js-log-form');
const toIndex = document.querySelectorAll('.js-index');

login.addEventListener('click',()=>{
window.setTimeout(()=>{
  document.body.style=`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
 background: radial-gradient(circle,transparent,hsla(252, 100%, 14%, 0.911) ),url(images/colorBac.jpeg);
 background-size:100% 100%;
 background-repeat: no-repeat;
background-position: center;
color: hsl(0, 0%, 95%);

`;
document.querySelector('.container').style.display='none';
document.querySelector('.loginContainer').classList.remove('view');
},500);

});
// VIEW REGISTRATION CONTAINER

regForm.addEventListener('click',()=>{
  window.setTimeout(()=>{
    document.querySelector('.loginContainer').classList.add('view');
  document.querySelector('.registrationContainer').classList.remove('view');
  },500);

});
// BACK TO LOGIN FORM
loginForm.addEventListener('click',()=>{
 window.setTimeout(()=>{
  document.querySelector('.registrationContainer').classList.add('view');
  document.querySelector('.loginContainer').classList.remove('view');
 },500);
  

});


// SHOW MAIN PAGE AFTER REGISTRATION OR LOGIN
toIndex.forEach(elem =>{
  elem.addEventListener('click',()=>{
    window.location.href = 'main.html';
  });
  elem.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
      console.log(event.key);
      window.location.href = 'main.html';
    }
  })

});