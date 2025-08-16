// Search function
document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault(); // Stop the page from reloading
    let searchValue = document.querySelector(".srch").value.trim();
    if (searchValue === "") {
        alert("Please type something to search.");
    } else {
        alert("You searched for: " + searchValue);
    }
});

function showRuleInfo(rule) {
    var info = {
        "rule1-2": "<h2>Rule 1 & 2</h2><p>Info about Rule 1 and Rule 2...</p>",
        "rule3-4": "<h2>Rule 3 & 4</h2><p>Info about Rule 3 and Rule 4...</p>",
        // Add more as needed
    };
    document.getElementById('ruleInfo').innerHTML = info[rule] || "<p>No info available.</p>";
}