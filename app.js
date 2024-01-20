let count = 0

value = document.querySelector('#value')
buttons = document.querySelectorAll('.btn')

buttons.forEach((button)=>{button.addEventListener('click', 
    (e)=>{
        styles = e.target.classList
        if(styles.contains("decrease")){
            count--
        } else if(styles.contains("increase")){
            count++
        } else{
            count = 0
        }

        if(count < 0){
            value.style.color = "red"
        } else if(count > 0){
            value.style.color = "green"
        } else {
            value.style.color = "black"
        }
        value.textContent = count
    })})