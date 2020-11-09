$(function() { 
  const galleryCoats=$(".gallery-coats");
  getpropertyHTML = function(propertyObj) {
    return `<div class="box-1">
        <div class="icon-coat" style="background-image:url(assets/coats/${propertyObj.imgUrl})"></div>
        <div class="wrapper-text-box">
             <div>${propertyObj.name}</div>
             <div>${propertyObj.currency} ${propertyObj.price}</div>
        </div>
        </div>`;
  };

  for(let i = 0; i < products.coats.length; i++) {
    // aici nu ai properties, ai products, atentie la denumiri
    let propertyObj = products.coats[i];
        propertyHMTL = getpropertyHTML(propertyObj);
        galleryCoats.append(propertyHMTL);

  };
});

// javascript aici? pentru un eventual interviu daca ti se cere jQuery, iti recomand sa scrii jQuery. Daca nu esti sigura, atunci poate ar trebui sa optezi doar pentru javascript peste tot

// const wrapperOverlay=document.getElementsById("wrapperoverlay");
// const buttonOpen=document.getElementById("button-open");
// const buttonClose=document.getElementById("button-close");

// buttonOpen.addEventListener("click", function() {
//   wrapperOverlay.classList.add("show-overlay");
// }
// );

// buttonClose.addEventListener("click", function() {
//   wrapperOverlay.classList.remove("show-overlay");
// }
// );

// ca recomandari generale, pentru un eventual interviu te sfatuiesc sa pui accent pe click event pe produce cu event delegation, pe click pe icon de close sa inchizi overlay-ul, se primesc puncte frumoase pe flow