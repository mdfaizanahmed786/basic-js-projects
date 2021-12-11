console.log('Hello World!');


//Declaring Variables

const inputValue = document.querySelector('#numericValue');
const submitBtn = document.querySelectorAll('.btn')[1];
console.log(submitBtn)
const display=document.querySelector('.displayContent')
const alertDisplay=document.querySelector('.alertContainer')
const text=[
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  
  "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  
  "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.",
  
  "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in , viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.",
  
  "Aenean imperdiet.Etiam ultricies nisi vel augue.Curabitur ullamcorper ultricies nisi.Nam eget dui.Etiam rhoncus.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
  
  "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas nec odio et ante tincidunt tempus.Donec vitae sapien ut libero venenatis faucibus.Nullam quis ante.Etiam sit amet orci eget eros faucibus tincidunt.Duis leo.Sed fringilla mauris sit amet nibh.Donec sodales sagittis magna.Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.",
  
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in , viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.",
  
    "Aenean imperdiet.Etiam ultricies nisi vel augue.Curabitur ullamcorper ultricies nisi.Nam eget dui.Etiam rhoncus.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
  
    "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas nec odio et ante tincidunt tempus.Donec vitae sapien ut libero venenatis faucibus.Nullam quis ante.Etiam sit amet orci eget eros faucibus tincidunt.Duis leo.Sed fringilla mauris sit amet nibh.Donec sodales sagittis magna.Sed consequat, leo eget bibendum sodales, augue velit cursus nunc"
  ]
  
  
//Adding event listener
submitBtn.addEventListener('click', (e) =>{
  if(inputValue.value>10 || isNaN(inputValue.value) || inputValue.value<=0){
    alertDisplay.innerHTML=`  <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Error!</strong> Enter the value between 1 and 10.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    return;
  }
  //ST: To generate a random number
const random=Math.floor(Math.random()*text.length)
  
  const numVal=parseInt(inputValue.value)
  let tempText=text.slice(0,inputValue.value) 
  tempText=tempText.map((elem)=>{
    return `<p class="text">${elem}</p>`
  }).join("")
  display.innerHTML=tempText
  
})
