//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

// Multiple element
//.log(document.querySelectorAll('.item'))
//console.log(document.getElementsByTagName('li'))


//const ul =document.querySelector('.items');
//l.lastElementChild.textContent= 'hello';
//ul.children[1].innerText= 'Brad'


//const btn = document.querySelector ('.btn');
//btn.style.background ='red'

//
//const btn = document.querySelector ('.btn');
//btn.addEventListener('mouseout', (e) => {
  //  e.preventDefault();
  //  document.querySelector('#my-form').style.background = '#ccc';
  //  document.querySelector('body').classList.add('bg-dark');
   // document.querySelector('.items')
   // .lastElementChild.innerHTML= "<h1>Hello</h1>";
//});
  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector( '.msg');
  const userList = document.querySelector('#users');

  myForm.addEventListener('submit', onSubmit);

  function onSubmit(e){
      e.preventDefault ();
      if (nameInput.value ==='' || emailInput.value === ''){

    msg.classList.add ('error')
          msg.innerHTML = 'Please Enter Fields';

          setTimeout(() => msg.remove(), 3000)
        //alert('please enter fields');
     
  }else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode
        (`${nameInput.value}: ${emailInput.value}`));
      userList.appendChild(li);
      nameInput.value='';
      emailInput.value='';
  }
  }
