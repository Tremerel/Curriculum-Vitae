


const previewBox1 = document.querySelector('.preview-1');
const previewBox2 = document.querySelector('.preview-2');
const previewBox3 = document.querySelector('.preview-3');

closeIcon1 = previewBox1.querySelector('.icon-1');
closeIcon2 = previewBox2.querySelector('.icon-2');
closeIcon3 = previewBox3.querySelector('.icon-3');

shadow1 = document.querySelector('.shadow-1');
shadow2 = document.querySelector('.shadow-2');
shadow3 = document.querySelector('.shadow-3');

function preview1(){

  previewBox1.classList.add('show');
  shadow1.classList.add('show');

  closeIcon1.onclick = ()=>{
    previewBox1.classList.remove('show');
    shadow1.classList.remove('show');
  }
  
  shadow1.onclick = ()=>{
    previewBox1.classList.remove('show');
    shadow1.classList.remove('show');
  }

}

function preview2(){

  previewBox2.classList.add('show');
  shadow2.classList.add('show');

  closeIcon2.onclick = ()=>{
    previewBox2.classList.remove('show');
    shadow2.classList.remove('show');
  }
  
  shadow2.onclick = ()=>{
    previewBox2.classList.remove('show');
    shadow2.classList.remove('show');
  }

}
function preview3(){

  previewBox3.classList.add('show');
  shadow3.classList.add('show');

  closeIcon3.onclick = ()=>{
    previewBox3.classList.remove('show');
    shadow3.classList.remove('show');
  }
  
  shadow3.onclick = ()=>{
    previewBox3.classList.remove('show');
    shadow3.classList.remove('show');
  }

}