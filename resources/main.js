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
        // putina atentie la denumiri aici, productsHTML si getProductsHTML ar trebui sa fie la singulura pentru ca este general si asignat cate unul o data, smantica si sintaxa folosite sunt foarte importante, atentia la atceva nu as vrea sa va distraga de la asta
        productsHTML = getproductsHTML(productsObj);
        galleryCoats.append(productsHTML);

  };

  // cu js, principiul de delagate functioneaza la fel, trebuie sa ne legam de ceva existent in DOM inainte de a adauga continut dinamic si apoi trebuie sa controlam pe ce anume dam click
  // document.getElementsByClassName('gallery-coats')[0].addEventListener('click', function(e){
  //   // if the event target that was clicked DOES NOT match the input element it will exit the function.
  //   if(e.target.matches('.icon-coat')) {
  //     console.log('1')
  //     console.log(e.target)
  //   }
  // });
  
  galleryCoats.delegate(".icon-coat", "click", function(){
    $(".overlay").show();

    const id = $(this).parents(".box-1").data("id");
        for(let i=0; i < products.coats.length; i++){
            let changedObj = products.coats[i];
            // in legatura cu a folosi JS la partea asta, nu sunt sigura daca la asta te referi, pur si simplu folosim selectori JS si proprietatea texContent similar cu ce am facut in primul proiect JS pe care am discutat la lectie, replaceMainTitle()
            // daca te refereai la altceva mai putem discuta
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