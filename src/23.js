// Example Node.js code for handling file uploads
const fs = require('fs');
const path = require('path');

function handleFileUpload(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = e.target.result;
    
    // Process the uploaded file data (for example, storing it in a database)
    console.log("Uploaded file:", file.name);
    console.log("Data from file:", data);

    fs.appendFile(file.path, data, (err) => {
      if (err) throw err;
      console.log("File has been successfully uploaded");
    });
  };

  reader.readAsDataURL(file);
}

// Example usage
const uploadFilePath = path.join(__dirname, 'upload', 'file.txt');
handleFileUpload(fs.createReadStream(uploadFilePath));
