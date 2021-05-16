importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"
);

onmessage = (e) => {
  if (e.data.type === "enc") {
    const encrypted = CryptoJS.AES.encrypt(e.data.data, e.data.key);
    const fileURL = "data:application/octet-stream," + encrypted;
    postMessage(fileURL);
  } else {
    var decrypted = CryptoJS.AES.decrypt(e.data.data, e.data.key).toString(
      CryptoJS.enc.Latin1
    );
    console.log(decrypted);
    postMessage(decrypted);
  }
};
