const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

function send_message(){
   var name=jQuery("#name").val();
     var email=jQuery("#email").val();
     var mobile=jQuery("#mobile").val();
     var message=jQuery("#message").val();
     
    if(name ==""){
        alert('Please enter name');
    }else if(email ==""){
         alert('Please enter email');
     }else  if(mobile ==""){
         alert('Please enter mobile no.');
  }else  if(message ==""){
       alert('Please enter message');
   }else  {
       jQuery.ajax({
           url:'send_message.php',
           type:'post',
             data:'name='+name+'&email='+email+'&mobile='+mobile+'&message='+message,
             success:function(result){
                 alert(result);
             }
         });
     }
 }
 
 
 function user_register(){
jQuery('.field_error').html('');
  var name=jQuery("#name").val();
     var email=jQuery("#email").val();
     var mobile=jQuery("#mobile").val();
     var password=jQuery("#password").val();
     var is_error='';
     
    if(name ==""){
    jQuery('#name_error').html('Please enter name');
    is_error='yes';
    } if(email ==""){
        jQuery('#email_error').html('Please enter email');
        is_error='yes';
    }if(mobile ==""){
        jQuery('#mobile_error').html('Please enter mobile no.');
        is_error='yes';
     }if(password ==""){
        jQuery('#password_error').html('Please enter password');
        is_error='yes';
  }
     if(is_error=='') {
       jQuery.ajax({
           url:'register_submit.php',
           type:'post',
             data:'name='+name+'&email='+email+'&mobile='+mobile+'&password='+password,
             success:function(result){
                if(result=='email_present'){
                    jQuery('#email_error').html('Email id already present');
                }
                if(result=='insert'){
                    jQuery('.register_msg p').html('Thank you for registration');
                }
             }
         });
     }
 }
 var x = document.getElementById("login");
 var y = document.getElementById("register");
 var z = document.getElementById("btn");

 function register(){
    x.style.left ="-400px";
    y.style.left ="50px";
    z.style.left ="110px";
 }
 function login(){
    x.style.left ="50px";
    y.style.left ="450px";
    z.style.left ="0";
 }


