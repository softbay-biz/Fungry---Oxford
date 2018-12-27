export function modal (e){

   if(e.target.className === "custom_card_dish" || e.target.className === "content" || e.target.className === "media-content"  || e.target.className === "image" || e.target.className === "image is-96x96" || e.target.className === "dish-name" ){
    var modal = e.currentTarget.querySelector('.modal');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
   
    modal.querySelector('#close').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
      });
    modal.querySelector('#close-btn').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
      });
      
    modal.querySelector('#close-btn-btn').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
      });
    modal.querySelector('#number').addEventListener('change', function(e) {
        e.preventDefault();
        let nb = document.getElementById("number").value;
        let price = modal.dataset.price;       
        if(nb<2){
          modal.querySelector('.color').innerHTML = "£"+price*nb+" (for "+nb+" item)";
        }else{
          modal.querySelector('.color').innerHTML = "£"+price*nb+" (for "+nb+" items)";
        }    
      });
 
 }

}