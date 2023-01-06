document.getElementById("loginPage").addEventListener("click",function(){
    document.getElementById("popup").style.display="none";
    document.getElementById("popup2").style.display="block";
});
document.getElementById("SignUpPage").addEventListener("click",function(){
    document.getElementById("popup").style.display="block";
    document.getElementById("popup2").style.display="none";
});
document.querySelectorAll(".close")[0].addEventListener("click",function() {
    document.getElementById("parent").style.display="none";
    document.querySelector("body").style.overflow= "auto";
  })
  document.querySelectorAll(".close")[1].addEventListener("click",function() {
    document.getElementById("parent").style.display="none";
    document.querySelector("body").style.overflow= "auto";
  })

document.getElementById("Submit").addEventListener("click",registerUser);
let ins = JSON.parse(localStorage.getItem("user-data")) || [];
console.log(ins);
function registerUser(){
    event.preventDefault();
    let firstName = document.querySelectorAll("#nameContainer input")[0].value;
    let lastName = document.querySelectorAll("#nameContainer input")[1].value;
    
 
        let mobile = document.querySelector("#phoneNumber input").value
        

    let pass = document.getElementById("passwordE").value
    let confpass = document.getElementById("paswordC").value
    if(pass===confpass){
        let obj = { 
        Firstname:firstName,
        LastName:lastName,
        mobile:mobile,
        password:pass,
        confirm_password:confpass
  };
    
    ins.push(obj);
    localStorage.setItem("user-data",JSON.stringify(ins));
    alert("Signup Sucessfully");
    document.getElementById("popup").style.display="none";
    document.getElementById("popup2").style.display="block";
  }
  else{
    alert("Password does not match with confirm_password")
  } 
}
document.getElementById("Submit1").addEventListener("click",logIn)
function logIn(){
    event.preventDefault();
    let data = document.getElementById("telNumber").value;
    let password = document.getElementById("loginPassword").value;

    if(ins.length==0){
        alert("No Users")
    }
    let flag = 0;
    
        for(let i=0;i<ins.length;i++){
        if(ins[i].mobile==data && ins[i].password==password){
            alert("Success login")
            flag = 1;
            document.getElementById("parent").style.display="none";
      break;
    }
    }
    if(flag==0){
        alert("Wrong credentials")
    }

}
