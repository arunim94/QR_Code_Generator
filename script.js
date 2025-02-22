let textQR = document.getElementById("textQR");
      let imgQR = document.getElementById("imgQR");
      let btnGenerateQR = document.getElementById("btnGenerateQR");
      let imgBox=document.getElementById('imgBox');

      function generateQR() {

        let inputValue = textQR.value.trim();
        if(inputValue.length === 0){
          imgBox.style.display="none";
          textQR.style.border="3px solid red";
          textQR.placeholder="Please enter some valid text";
        }
        else{
        imgQR.src =
          "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
          inputValue;
          imgBox.style.display="block";
          textQR.style.border="1px solid black";
        }
      }