// fetch ("https://codecyprus.org/th/api/start?player=Homer&app=simpsons-app&treasure-hunt-id=ag9nfmNvZGVjeXBydXNvcmdyGQsSDFRyZWFzdXJlSHVudBiAgICAvKGCCgw")
//     .then(response => response.json()) // convert JSON to JavaScript
//     .then(data => {
//
//         // Check for  success status
//         if (data.status !== "OK") {
//             message.textContent =
//                 data.errorMessages?.join(", ") || "Something went wrong :(";
//             return;
//         }
//
//         message.textContent = "";   // clear "Loading treasure hunts..."




    // const params = new URLSearchParams(window.location.search);
    // const huntId = params.get("uuid");
    // const message = document.getElementById("message");
    //
    // document.getElementById("start").addEventListener("click", async () => {
    // const player = document.getElementById("player").value.trim();
    //
    // if (!huntId) {
    // message.textContent = "Missing treasure hunt ID.";
    // return;
// }
//
//     if (!player) {
//     message.textContent = "Enter a player name.";
//     return;
// }
//
//     const apiParams = new URLSearchParams({
//     player,
//     app: "my-treasure-hunt-app",
//     "treasure-hunt-id": huntId
// });
//
//     try {
//     const response = await fetch(
//     `https://codecyprus.org/th/api/start?${apiParams}`
//     );
//     const data = await response.json();
//
//     if (data.status !== "OK") {
//     message.textContent =
//     data.errorMessages?.join(", ") || "Could not start the hunt.";
//     return;
// }
//
 //   Keep the session ID for later API calls, such as /question.
    // sessionStorage.setItem("session", data.session);
    // window.location.href = "question.html";
// } catch (error) {
//     console.error(error);
//     message.textContent = "Could not connect to the server.";
// }
// });
//