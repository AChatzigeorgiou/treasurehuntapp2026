const huntsList = document.getElementById("hunts");
const message = document.getElementById("message");

fetch("https://codecyprus.org/th/api/list")
    .then(response => response.json()) // convert JSON to javascript
    .then(data => {

        // Check for  success status
        if (data.status !== "OK") {
            message.textContent =
                data.errorMessages?.join(", ") || "Something went wrong :(";
            return;
        }
        message.textContent = "";   // clear "Loading treasure hunts..."

        data.treasureHunts.forEach(hunt => {
            const item = document.createElement("li");        // List item
            const link = document.createElement("a");     // Link
            const image = document.createElement("img");   // Image
            const name = document.createElement("span");    // Title; Just to style button/title seperately | https://www.w3schools.com/tags/tag_span.asp

            link.className = "button"; // For styling the link using .button

            // Open start.html and pass hunts' UUID in the URL
            link.href = `start.html?uuid=${encodeURIComponent(hunt.uuid)}`;

            image.src = "https://cdn-icons-png.flaticon.com/512/1355/1355893.png";  // Probably temporary
            image.alt = ""; // not needed since the hunt name describes the link

            name.textContent = hunt.name;   //  the hunts title

            link.append(image, name);       //  Image and Name INSIDE the Link
            item.appendChild(link);         //  Link INSIDE the List-Item
            huntsList.appendChild(item);    //  List-Item INSIDE <ul>
        });

    })
    .catch(error => {
        console.error("Error loading treasure hunts: ", error);   //https://www.w3schools.com/jsref/met_console_error.asp
        message.textContent = "Could not load treasure hunts :("; //https://www.w3schools.com/js/js_errors.asp#:~:text=catch(err)%20%7B%0A%C2%A0%C2%A0%C2%A0%20message.innerHTML%20%3D%20%22Input%20is%20%22%20%2B%20err%3B
    });