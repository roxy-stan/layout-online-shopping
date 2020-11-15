$(function() { 
  const galleryCoats=$(".gallery-coats");
  getproductsHTML = function(productsObj) {
    return `<div class="box-1" data-id=${productsObj.id}>
        <div class="icon-coat" style="background-image:url(assets/coats/${productsObj.imgUrl})"></div>
        <div class="wrapper-text-box">
             <div>${productsObj.name}</div>
             <div>${productsObj.currency} ${productsObj.price}</div>
        </div>
        </div>`;
  };

  for(let i = 0; i < products.coats.length; i++) {
    let productsObj = products.coats[i];
        productsHTML = getproductsHTML(productsObj);
        galleryCoats.append(productsHTML);

  };

  galleryCoats.delegate(".icon-coat", "click", function(){
    $(".overlay").show();

    const id = $(this).parents(".box-1").data("id");
        for(let i=0; i < products.coats.length; i++){
            let changedObj = products.coats[i];
            if(changedObj.id === id){
                $(".image-overlay").css("background-image",`url(assets/coats/${changedObj.imgUrl})`);
                $(".name-overlay").text(`${changedObj.name}`);
                $(".price-overlay").text(`${changedObj.currency}${changedObj.price}`);
                $(".composition-overlay").text(`${changedObj.composition}`);
                $(".country-overlay").text(`${changedObj.country}`);
                $(".care-overlay").text(`${changedObj.care}`);
            };
          };
});
    $('.icon-close').click(function(){
    $(".overlay").hide();
});
});