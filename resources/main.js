$(function() { 
  const galleryCoats=$(".gallery-coats");
  getpropertyHTML = function(propertyObj) {
    return `<div class="box-1">
        <div class="icon-coat" style="background-image:url("../assets/coats/${propertyObj.imgUrl}")"></div>
        <div class="wrapper-text-box">
             <div>${propertyObj.name}</div>
             <div>${propertyObj.currency} ${propertyObj.price}</div>
        </div>
        </div>`;
  };

  for(let i = 0; i < products.coats.length; i++) {
    let propertyObj = products.coats[i];
        propertyHMTL = getpropertyHTML(propertyObj);
        galleryCoats.append(propertyHMTL);

  };
});

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