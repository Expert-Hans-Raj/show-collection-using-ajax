  $(document).ready(function () {
//collection page sidebar filter 

/* when customer click on li */ $("ul.collside_nav .collection-tag").each(function() {
    $(this).click(function(event) {
        event.preventDefault();
        
        // Remove active class from other li elements
        $("ul.collside_nav .collection-tag").not(this).removeClass("active_collection");
        
        // Toggle the active_collection class on the clicked li
        $(this).toggleClass("active_collection");

        var collectionurl = $(this).attr('coll_handle');
        // console.log('collectionurl', collectionurl);

        $.ajax({
            type: 'GET',
            url: collectionurl,
            data: {},
            success: function(collectiondata) {
                var pagehtml = $(collectiondata).find("#product-grid").html();
                $("#product-grid").html(pagehtml);

                if ($('#product-grid').find('.title--primary').length > 0) {
                    $('#product-grid').parents('.collection').find('.pagination-wrapper').hide();
                    $('#product-grid').parents('.collection').find('.buttons').hide();
                } else {
                    $('#product-grid').parents('.collection').find('.pagination-wrapper').show();
                    $('#product-grid').parents('.collection').find('.buttons').show();
                }
            }
        });
    });
});
//collection page sidebar filter 

/* when customer click on li */ 
    
  });
