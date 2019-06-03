document.addEventListener("DOMContentLoaded", function(e) {
    // Hämta sökinput och skriv ut värdet när det
    // förändingar.
    let searchbox = document.getElementById("country");
    searchbox.addEventListener('keyup', function(e) {
        console.log(searchbox.value);

        if (searchbox.value.length >= 2) {
            $.ajax({
                method: "GET",
                url: "search.php?search=" + searchbox.value
            }).done(function(remote_suggestion) {
                    addSuggestions(remote_suggestion);
                    console.log(remote_suggestion);
                });
        }
    });

    // Lägger till klicklyssnare på alla a i suggestions,
    // Även nya.
    $("#suggestions").on("click", "a", function(e) {
        e.preventDefault();
        searchbox.value = $(this)[0].innerText;
    });

    function addSuggestions(suggestions) {
        // Get UL
        let suggestions_parent = $("#suggestions");
        $(suggestions_parent).empty();
            
        suggestions.forEach(function(item) {

            let li_elem = document.createElement("li");
            let a_elem = document.createElement("a");

            a_elem.setAttribute("href", "#");
            a_elem.innerText = item;
            // Append A to LI
            li_elem.append(a_elem);
            // Append LI to UL.
            suggestions_parent.append(li_elem);
        })
    }
});