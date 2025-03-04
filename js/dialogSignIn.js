export const dialogMessage = (response)=>{
    if (response.status != 200){
        dialog__login.showModal()
        dialog__message.innerHTML = response.message;
        
    }else{
        location.href = "views/example.html"
    }
}