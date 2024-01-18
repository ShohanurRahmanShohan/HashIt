var HashTextArea = document.getElementById("hash");
var Massage = document.getElementById("message");
var password = document.getElementById("key");

// Function to encrypt
function encrypt(text, password) {
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        charCode += password.charCodeAt(i % password.length);
        encryptedText += String.fromCharCode(charCode);
    }

    return encryptedText;
}

// Function to decrypt
function decrypt(encryptedText, password) {
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);
        charCode -= password.charCodeAt(i % password.length);
        decryptedText += String.fromCharCode(charCode);
    }

    return decryptedText;
}

// Function to get message from hash
function getMessageFromHash() {
    // Check if hash textarea and password are empty
    if (!HashTextArea.value.trim() || !password.value.trim()) {
        alert("Hash and password cannot be empty");
        return;
    }

    // Your decryption logic here
    let encryptedText = HashTextArea.value;
    let decryptedText = decrypt(encryptedText, password.value);

    // Display the decrypted message
    Massage.value = decryptedText;
}

// Function to convert text into hash
function generateHash() {
    // Check if hash textarea and password are empty
    if (!Massage.value.trim() || !password.value.trim()) {
        alert("Message and password cannot be empty");
        return;
    }

    // Your encryption logic here
    let Text = Massage.value;
    let encryptedText = encrypt(Text, password.value);

    // Display the encrypted message
    HashTextArea.value = encryptedText;
}
