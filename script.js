const dark = document.getElementById('btn-dark');
const x = document.getElementById('body');
   const k = document.getElementById('box');
   var head = document.getElementById('header');
   const bgtb = document.getElementById('bg-tb');
   const bgtb2 = document.getElementById('bg-tb2');
   const box2 = document.getElementById('box-2');
dark.addEventListener("click", function mode(){
   if(x.style.backgroundColor == 'rgb(32, 32, 34)') {
      x.style.backgroundColor = 'white';
      x.style.color = '#202022';
      k.style.backgroundColor = '#F8F7F5';
      head.style.backgroundColor = '#d44835';
      bgtb.style.backgroundColor = '#d44835';
      bgtb2.style.backgroundColor = '#d44835';
      box2.style.backgroundColor = '#d44835';
      document.getElementById('btn-dark').innerHTML = "<p>Dark Mode</p>";
      dark.style.backgroundColor = '#202022';
      dark.style.color = '#f8f7f5';
      
   }else{
      x.style.backgroundColor = '#202022';   
      x.style.color = 'white';
      k.style.backgroundColor = '#202022';
      head.style.backgroundColor = '#d44835';
      bgtb.style.backgroundColor = '#d44835';
      bgtb2.style.backgroundColor = '#d44835';
      box2.style.backgroundColor = '#d44835';
      dark.style.backgroundColor = '#F8F7F5';
      dark.style.color = '#202022';
   }
});

const sembunyikan = document.getElementById('sembunyikan');
sembunyikan.addEventListener("click", function showInfo(){
   const kecil = document.getElementById('kotak-1');
   if(kecil.style.display == 'none') {
      kecil.style.display = '';
      document.getElementById('sembunyikan').innerHTML = "<p>Sembunyikan</p>";
   }else{
      kecil.style.display = 'none';
      document.getElementById('sembunyikan').innerHTML = "<p>Tampilkan</p>";
   }
});

const sembunyikan2 = document.getElementById('sembunyikan-2');
sembunyikan2.addEventListener("click", function showInfo(){
   const kecil2 = document.getElementById('kotak-2');
   if(kecil2.style.display == 'none') {
      kecil2.style.display = '';
      document.getElementById('sembunyikan-2').innerHTML = "<p>Sembunyikan</p>";
   }else{
      kecil2.style.display = 'none';
      document.getElementById('sembunyikan-2').innerHTML = "<p>Tampilkan</p>";
   }
});

function mode(){
   document.getElementById('btn-dark').innerHTML = "<p>Light Mode</p>"; 
}
