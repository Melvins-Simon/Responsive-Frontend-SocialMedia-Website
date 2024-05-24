alert(`This Website is still under construction some features may not be available.`);
const sideBar = document.querySelectorAll('.js-sideA');
const messagesA = document.querySelectorAll('.message1');
const searchMess = document.getElementById('inputSearchMess');
const themes = document.querySelector('.js-theme');
const closeTheme = document.querySelector('.close');
const requests = document.querySelector('.js-request')
const navTitle = document.querySelectorAll('.js-title');
const jsPri = document.querySelector('.js-pri');
const logout = document.querySelectorAll('.loggingOut');

//TOggle Sidebar



sideBar.forEach((items) =>{
  const classA = items.classList;
  items.addEventListener('click', (e) =>{  
    removeActive()
    classA.add('active');

   if(classA.contains('notificationsp')){    
    document.querySelector('.notifications-popup').style.display="block";
    document.querySelector('.middle').classList.add('index');
    document.querySelector('.counterN').style.display="none";
  }
  else{
    document.querySelector('.notifications-popup').style.display="none";
   
   }

   if(classA.contains('messA')){
     document.querySelector('.counterM').style.display='none';
     removeTitleActive();
     document.querySelector('.friends').classList.add('friendView');
     document.querySelector('.js-pri').classList.add('activeG');
    document.querySelector('.messages').style.boxShadow='0px 0px 20px var(--color-primary)';
    setTimeout(() =>{
    document.querySelector('.messages').style.boxShadow='none';
    },2500);
    
   };


  });  
})

// Removing current element with active class
function removeActive(){
  return (sideBar.forEach(items =>{
    items.classList.remove('active');
  }));
}



// SEARCH MESAAGES BY NAMES

searchMess.addEventListener('keyup',()=>{
  const inval = searchMess.value.toLowerCase();

  messagesA.forEach(indMessage=>{
    let names = indMessage.querySelector('h3').textContent.toLocaleLowerCase();
  if(names.indexOf(inval) != -1){
    indMessage.style.display='flex';
  }
  else{
      indMessage.style.display='none';
    }
  });

});




// REQUST POPUP
requests.addEventListener('click',()=>{
  document.querySelector('.friends').classList.remove('friendView');
});
jsPri.addEventListener('click',()=>{
  document.querySelector('.friends').classList.add('friendView');
});

navTitle.forEach((title)=>{
   title.addEventListener('click',()=>{
    removeTitleActive();
    title.classList.add('activeG');
  });
});

function removeTitleActive(){
  return (navTitle.forEach(title=>{
    title.classList.remove('activeG');
  }));

}

// LOGGING OUT &&  CreatingPost
logout.forEach(out=>{
 out.addEventListener('click', ()=>{
  alert(`Sorry! This Website is still under construction some functionalities may not be available.`);
}); 
});

// Customizing Theme

// THEME VARIABLES
// font-size
const fontSizes = document.querySelectorAll('.size-slider span');

  // primary color
const fontColors = document.querySelectorAll('.pri-color span')
let root = document.querySelector(':root');

// Background color
const bacColors = document.querySelectorAll('.bac-color a')




const fontActive = document.querySelectorAll('.fnt');

themes.addEventListener('click', () =>{
  document.querySelector('.themes').style.display='flex';
  themes.classList.remove('active');
});

closeTheme.addEventListener('click',()=>{
  document.querySelector('.themes').style.display='none';
});


fontActive.forEach((fnt)=>{
  fnt.addEventListener('click',()=>{  
    removeFS();  
    fnt.classList.add('fontActive');

  })
});

// remove active font size

function removeFS(){
  return(fontActive.forEach(fs=>{
    fs.classList.remove('fontActive');
  }));
}

// CHANGING FONT SIZE

fontSizes.forEach((sizes) =>{
   let sizeF = '';
   sizes.addEventListener('click', ()=>{
      if(sizes.classList.contains('font-size1')){
        sizeF = '10px'
      }
      else if(sizes.classList.contains("font-size2")){
        sizeF = '13px';
      }
      else if(sizes.classList.contains("font-size3")){
        sizeF = '16px';
      }
      else if(sizes.classList.contains("font-size4")){
        sizeF = '19px';
      }
      else if(sizes.classList.contains("font-size5")){
        sizeF = '22px';
      }
      else if(sizes.classList.contains("font-size6")){
        sizeF = '25px';
      }

      document.querySelector('html').style.fontSize=sizeF;
   });
});


//  PRIMARY FONT COLORS

fontColors.forEach(colors =>{
 
  colors.addEventListener('click',() =>{
    if(colors.classList.contains('font-color1')){
      root.style.setProperty('--color-primary','hsl(252,75%,60%)')
    }
    else if(colors.classList.contains('font-color2')){
      root.style.setProperty('--color-primary','hsl(46, 96%, 65%)')
    }
    else if(colors.classList.contains('font-color3')){
      root.style.setProperty('--color-primary','hsl(0, 96%, 65%)')
    }
    else if(colors.classList.contains('font-color4')){
      root.style.setProperty('--color-primary','hsl(120,95%,65%)')
    }
    else if(colors.classList.contains('font-color5')){
      root.style.setProperty('--color-primary','hsl(197, 96%, 65%)')
    }
  });
});

// BACKGROUND COLORS

bacColors.forEach((bacColor) =>{
  bacColor.addEventListener('click',()=>{
    if(bacColor.classList.contains('bac1')){
      root.style.setProperty('--color-black','hsl(252,30%,100%)');
      root.style.setProperty('--color-dark','hsl(252,30%,95%)');
      document.querySelector('body').style.color='black';
    }
    else if(bacColor.classList.contains('bac2')){
      root.style.setProperty('--color-black','hsl(252,30%,10%)');
      root.style.setProperty('--color-dark','hsl(252,30%,17%)');
      document.querySelector('body').style.color='white';
    }
    else if(bacColor.classList.contains('bac3')){
      root.style.setProperty('--color-dark','hsl(252,30%,10%)');    
      root.style.setProperty('--color-black','hsl(252,30%,10%)');   
      document.querySelector('body').style.color='white';
    }
  });
});