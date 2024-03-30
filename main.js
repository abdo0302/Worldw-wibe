            //search_bar
let serch_bar=document.querySelector(".serch_bar");
let serch=document.querySelector("#serch");

let t=false

serch.onclick=function(){
    if(t==false){
        serch_bar.style.display= "flex";
        serch.className="fa-solid fa-xmark";
        t=true;
    }else{
        t=false;
        serch_bar.style.display= "none";
        serch.className="fa-solid fa-magnifying-glass";
    }    
}

        //login_bar
let form_bar=document.querySelector(".form_bar");
let colse=document.querySelector(".colse");
let profil=document.querySelector(".profil");



profil.onclick=()=>{form_bar.style.display= "block"  };
colse.onclick=()=>{form_bar.style.display= "none"  };
form_bar.onclick=()=>{form_bar.style.display= "none"  };

        //barslid
let barslid=document.querySelector(".barslid");    
let slideBar=document.querySelector(".slideBar"); 
let I_Bar=document.querySelector("#I_Bar"); 

let l=false

slideBar.onclick=function(){
    if(l==false){
        barslid.style.display= "block";
        I_Bar.className="fa-solid fa-xmark";
        l=true;
    }else{
        l=false;
        barslid.style.display= "none";
        I_Bar.className="fa-solid fa-bars";
    }    
}

        //Remember Me

let input_email=document.querySelector(".input_email");
let input_password=document.querySelector(".input_password");
let input_submit=document.querySelector(".input_submit")
let checkbox=document.querySelector("#checkbox");
let notif=document.querySelector(".notif");

input_submit.onclick=function(){
    if(checkbox.checked==true  && input_email.value!=="" && input_password.value!==""){
        window.localStorage.setItem("email",input_email.value);
        window.localStorage.setItem("password",input_password.value);
        notif.style.display="block";
        setTimeout(()=>{notif.style.display="none";},1000)
    }
};


     //control video
let video_src=['images/vid-1.mp4','images/vid-3.mp4','images/vid-4.mp4','images/vid-5.mp4'];  
let divhome_video=document.querySelector('.divhome video');
let control_span=document.querySelectorAll('.control span')
let f=1;
setInterval(function(){if(f<4){
     divhome_video.src=video_src[f]
     for(let y=0;y<control_span.length;y++){
        control_span[y].className=''
    }
     control_span[f].className='active';
     f++
}else if(f==4){
   f=0
}

},8000)

control_span.forEach(function(e,i){
     e.addEventListener('click',function(e){
        divhome_video.src=video_src[i];
        for(let y=0;y<control_span.length;y++){
            control_span[y].className=''
        }
        
        e.target.className='active';
     })
})

            
       