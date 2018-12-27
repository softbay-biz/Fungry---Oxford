export function dropdown(e){
    console.log("cliked");
    let dropdown = e.currentTarget.querySelector('#dropdown');
    dropdown.classList.toggle('is-active');

}
export function headermenu(){
    let dropdown = document.querySelector('#nav-ubrea-hide');
    dropdown.classList.toggle('hid-element-nav');

}
export function dropdowns(e){
  

   // let dropdown = document.querySelector('#dropdown1');
    //dropdown.classList.toggle('is-active');
    
    // dropdown.querySelector('#close-btn').addEventListener('click', function(e) {
    //     e.preventDefault();
    //     dropdown.classList.toggle('is-active');

    //   });

            
// var dropdown = document.querySelector('#dropdown2');
// dropdown.addEventListener('click', function(event) {
//   event.stopPropagation();
//   dropdown.classList.toggle('is-active');
// });
        
    
    
}
// modal.querySelector('#close').addEventListener('click', function(e) {
//     e.preventDefault();
//     modal.classList.remove('is-active');
//     html.classList.remove('is-clipped');
//   });
// modal.querySelector('#close-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     modal.classList.remove('is-active');
//     html.classList.remove('is-clipped');
//   });