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

    for (let letter of plainTextMessage) {
        if (letter !== " ") {
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

    for (let letter of cipherText) {
        if (letter !== " ") {
            let ogAsciiCode = ((letter.toUpperCase().charCodeAt(0) + (26 - shiftPattern) - 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0));
            ogText += String.fromCharCode(ogAsciiCode);
        } else {
            ogText += " ";
        }
    }

    return ogText;
}

// Show the modal to input the shift value
function showModal(callback) {
    const modal = document.getElementById('shiftModal');
    const shiftInput = document.getElementById('shiftInput');
    
    modal.style.display = 'flex'; // Show the modal

    document.getElementById('modalSubmit').onclick = function() {
        const shiftPattern = parseInt(shiftInput.value, 10);
        if (!isNaN(shiftPattern) && shiftPattern > 0 && shiftPattern <= 25) {
            modal.style.display = 'none'; // Hide the modal
            callback(shiftPattern); // Use the shift value in encryption/decryption
        } else {
            alert("Please enter a valid number between 1 and 25.");
        }
    };

    document.getElementById('modalCancel').onclick = function() {
        modal.style.display = 'none'; // Close modal on cancel
    };
}

// Event listener for Encrypt button
document.getElementById("encryptBtn").addEventListener("click", function () {
    showModal(function(shiftPattern) {
        const plainText = document.getElementById("plainText").value;
        const cipherText = encrypt(plainText, shiftPattern);
        document.getElementById("cipherText").value = cipherText;
    });
});

// Event listener for Decrypt button
document.getElementById("decryptBtn").addEventListener("click", function () {
    showModal(function(shiftPattern) {
        const cipherText = document.getElementById("cipherText").value;
        const plainText = decrypt(cipherText, shiftPattern);
        document.getElementById("plainText").value = plainText;
    });
});
