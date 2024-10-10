// document.getElementById("encryptBtn").addEventListener("click", function () {
//     const plainText = document.getElementById("plainText").value;
//     const cipherText = btoa(plainText); // Encoding to Base64
//     document.getElementById("cipherText").value = cipherText;
// });

// document.getElementById("decryptBtn").addEventListener("click", function () {
//     const cipherText = document.getElementById("cipherText").value;
//     try {
//         const plainText = atob(cipherText); // Decoding from Base64
//         document.getElementById("plainText").value = plainText;
//     } catch (e) {
//         alert("Invalid Cipher Text");
//     }
// });
  
// Caesar Cipher Encryption Function
function encrypt(plainTextMessage, shiftPattern) {
    let cipherText = "";

    // Loop through each letter of the plain text
    for (let letter of plainTextMessage) {
        if (letter !== " ") {
            // Convert letter to uppercase and shift by the given pattern
            let cipherAsciiCode = ((letter.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0)) + shiftPattern) % 26 + 'A'.charCodeAt(0);
            cipherText += String.fromCharCode(cipherAsciiCode);
        } else {
            cipherText += " ";
        }
    }

    return cipherText;
}

// Caesar Cipher Decryption Function
function decrypt(cipherText, shiftPattern) {
    let ogText = "";

    // Loop through each letter of the cipher text
    for (let letter of cipherText) {
        if (letter !== " ") {
            // Reverse the shifting of the character by the pattern
            let ogAsciiCode = ((letter.toUpperCase().charCodeAt(0) + (26 - shiftPattern) - 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0));
            ogText += String.fromCharCode(ogAsciiCode);
        } else {
            ogText += " ";
        }
    }

    return ogText;
}

// Event listener for Encrypt button
document.getElementById("encryptBtn").addEventListener("click", function () {
    const plainText = document.getElementById("plainText").value;
    const shiftPattern = parseInt(prompt("Enter Shift Pattern: "), 10); // Get shift pattern from the user
    const cipherText = encrypt(plainText, shiftPattern); // Encrypt the text
    document.getElementById("cipherText").value = cipherText; // Show cipher text in textarea
});

// Event listener for Decrypt button
document.getElementById("decryptBtn").addEventListener("click", function () {
    const cipherText = document.getElementById("cipherText").value;
    const shiftPattern = parseInt(prompt("Enter Shift Pattern: "), 10); // Get shift pattern from the user
    const plainText = decrypt(cipherText, shiftPattern); // Decrypt the text
    document.getElementById("plainText").value = plainText; // Show decrypted text in textarea
});
