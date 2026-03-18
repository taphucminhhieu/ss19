let names = document.getElementById("name");
let nameUser = document.getElementById("nameuser");
let pass = document.getElementById("pass");
let repass = document.getElementById("repass");
let btn = document.getElementById("pass");

    

btn.addEventListener("click",()=>{
let value = ()=> {

        if(names.value.trim() ===""){
            alert("vui lòng nhập tên");
            return;
        };
        
        if(nameUser.value.length < 4){
            alert("tên đăng nhập phải nhiều hơn 4 kí tự");
            return;
        }
        
        if(pass.value.length < 6){
            alert("mật khẩu ít nhất tối đa 6 kí tự");
            return;
        }
        
        if(pass.value.length !== repass.value.length ){
            alert("2 mật khẩu  nhập lại không trùng khớp");
            return;
        }
        
    };
    localStorage.setItem("user",JSON.stringify(value));
    
});



