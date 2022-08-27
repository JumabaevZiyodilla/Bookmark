var elItem = document.querySelectorAll(".features-list__item");
var elLink = document.querySelectorAll(".features-list__link");
var elBookmark = document.querySelectorAll(".bookmark-wrapper");

elLink.forEach(function(links){

    links.addEventListener("click", function(evt){

        evt.preventDefault();

        elItem.forEach(function(item){

            item.classList.remove("features-list__item--active");
            
        })

        links.parentElement.classList.add("features-list__item--active");
        
        elBookmark.forEach(function(bookmark){
            bookmark.classList.remove("bookmark-wrapper--active")
        })
        document.querySelector(links.getAttribute("href")).classList.add("bookmark-wrapper--active")
        
    })
})