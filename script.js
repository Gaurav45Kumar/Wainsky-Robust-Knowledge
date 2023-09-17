// Add JavaScript code to handle search functionality here
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsList = document.getElementById("resultsList");

    // Sample data for FAQs (you can replace this with your own data)
    const faqs = [
        { question: "How do I create a new product listing?", answer: "Follow these steps to create a new product listing..." },
        // Add more FAQ items here
    ];

    // Sample data for video tutorials (you can replace this with your own data)
    const videoTutorials = [
        { title: "Optimizing Product Listings", videoId: "VIDEO_ID_HERE", description: "Learn how to optimize your product listings." },
        // Add more video tutorials here
    ];

    // Sample data for step-by-step guides (you can replace this with your own data)
    const stepByStepGuides = [
        { title: "Guide Title 1", description: "Follow this guide to achieve..." },
        // Add more step-by-step guides here
    ];

    // Event listener for the search button
    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const searchResults = [];

        // Search FAQs
        faqs.forEach((faq) => {
            if (faq.question.toLowerCase().includes(searchTerm) || faq.answer.toLowerCase().includes(searchTerm)) {
                searchResults.push({ type: "FAQ", title: faq.question, description: faq.answer });
            }
        });

        // Search video tutorials
        videoTutorials.forEach((tutorial) => {
            if (tutorial.title.toLowerCase().includes(searchTerm) || tutorial.description.toLowerCase().includes(searchTerm)) {
                searchResults.push({ type: "Video Tutorial", title: tutorial.title, description: tutorial.description });
            }
        });

        // Search step-by-step guides
        stepByStepGuides.forEach((guide) => {
            if (guide.title.toLowerCase().includes(searchTerm) || guide.description.toLowerCase().includes(searchTerm)) {
                searchResults.push({ type: "Guide", title: guide.title, description: guide.description });
            }
        });

        // Display search results
        displaySearchResults(searchResults);
    });

    // Function to display search results
    function displaySearchResults(results) {
        resultsList.innerHTML = "";

        if (results.length === 0) {
            resultsList.innerHTML = "<p>No results found.</p>";
        } else {
            results.forEach((result) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<h3>${result.type}: ${result.title}</h3><p>${result.description}</p>`;
                resultsList.appendChild(listItem);
            });
        }
    }
});
