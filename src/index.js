const fs = require("fs");
const { default: axios } = require("axios");

const folderToWatch_shop_cashier_android =
  "C:/Users/laure/OneDrive/Documents/Shop_manager_applications/shop_manager_flutter_android_cashier/build/app/outputs/apk/release"; // Replace with your desired folder path
// M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_inventory/build/app/outputs/apk/release

// const FormData = require("form-data"); // You might need to install 'form-data' package/

async function upload_flutter_shop_cashier_android() {
  const file =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_cashier/build/app/outputs/apk/release/output-metadata.json";

  const filePath =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_cashier/build/app/outputs/apk/release/shop-cashier.apk"; // Replace with your file path

  const image_filePath =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_cashier/android/app/src/main/res/mipmap-hdpi/shop-cashier-icon.png"; // Replace with your file path

  const url =
    "https://www.storage.zilslogistics.com/api/v1/uploads/applications"; // Replace with your server's upload endpoint
  

    
  //const url = "http://localhost:800/api/v1/uploads/applications"; // Replace with your server's upload endpoint
  var obj = JSON.stringify(fs.readFileSync(file, "utf8"));
  try {
    const form = new FormData();


    form.append("applicationmetaData", obj);
    form.append("category", "APPLICATION");
    form.append("creator", "0971067790");
    form.append("fileName", "shop-cashier");
    form.append("uploadName", "shop-cashier");
    form.append(
      "description",
      "Process transactions both electronically and physically"
    );
    form.append("appIcon", fs.createReadStream(image_filePath));
    form.append("files", fs.createReadStream(filePath)); // 'myFile' is the field name on the server

    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(), // Important for setting the correct Content-Type header
      },
    });



    console.log("File uploaded successfully:", response.status);
  } catch (error) {
    console.log("Error uploading file:", error);
  }
}






async function upload_flutter_shop_inventory_android() {
  const file =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_inventory/build/app/outputs/apk/release/output-metadata.json";

  const filePath =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_inventory/build/app/outputs/apk/release/shop-inventory.apk"; // Replace with your file path

  const image_filePath =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_inventory/android/app/src/main/res/mipmap-hdpi/shop_manager_icon.png"; // Replace with your file path

  const url =
    "https://www.storage.zilslogistics.com/api/v1/uploads/applications"; // Replace with your server's upload endpoint
  //const url = "http://localhost:800/api/v1/uploads/applications"; // Replace with your server's upload endpoint
  var obj = JSON.stringify(fs.readFileSync(file, "utf8"));
  try {    const FormData = require('form-data');
    const form = new FormData();

    form.append("applicationmetaData", obj);
    form.append("category", "APPLICATION");
    form.append("creator", "0971067790");
    form.append("fileName", "shop-inventory");
    form.append("uploadName", "shop-inventory");
    form.append(
      "description",
      "Quickens the process of managing your inventory"
    );
    form.append("appIcon", fs.createReadStream(image_filePath));
    form.append("files", fs.createReadStream(filePath)); // 'myFile' is the field name on the server

    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(), // Important for setting the correct Content-Type header
      },
    });

    console.log("File uploaded successfully:", response.status);
  } catch (error) {
    console.log("Error uploading file:", error);
  }
}
async function upload_flutter_shop_admin_android() {
  const file =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_cashier/build/app/outputs/apk/release/output-metadata.json";

  const filePath =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_cashier/build/app/outputs/apk/release/shop-cashier.apk"; // Replace with your file path

  const image_filePath =
    "M:/kadi_projects/Shop_manager_applications/shop_manager_flutter_android_cashier/android/app/src/main/res/mipmap-hdpi/shop-cashier-icon.png"; // Replace with your file path

  const url =
    "https://www.storage.zilslogistics.com/api/v1/uploads/applications"; // Replace with your server's upload endpoint
  //const url = "http://localhost:800/api/v1/uploads/applications"; // Replace with your server's upload endpoint
  var obj = JSON.stringify(fs.readFileSync(file, "utf8"));
  try {
    const form = new FormData();

    form.append("applicationmetaData", obj);
    form.append("category", "APPLICATION");
    form.append("creator", "0971067790");
    form.append("fileName", "shop-cashier");
    form.append("uploadName", "shop-cashier");
    form.append(
      "description",
      "Process transactions both electronically and physical"
    );
    form.append("appIcon", fs.createReadStream(image_filePath));
    form.append("files", fs.createReadStream(filePath)); // 'myFile' is the field name on the server

    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(), // Important for setting the correct Content-Type header
      },
    });

    console.log("File uploaded successfully:", response.status);
  } catch (error) {
    console.log("Error uploading file:", error);
  }
}

// const glob = require("glob");

// const fastFolderSize = require("fast-folder-size");
// const promisify = require("util").promisify;

// // Configuration
// const FOLDER_TO_MONITOR = "./my_folder";
// const SIZE_LIMIT_MB = 100;
// const CHECK_INTERVAL_MS = 5000; // Check every 5 seconds

// // Promisify the fast-folder-size function for async/await usage
// const fastFolderSizeAsync = promisify(fastFolderSize);

// /**
//  * Gets the size of a folder in megabytes.
//  * @param {string} folderPath - The path to the folder.
//  * @returns {Promise<number>} - The folder size in MB.
//  */
// async function getFolderSizeInMB(folderPath) {
//   try {
//     const bytes = await fastFolderSizeAsync(folderPath);
//     return bytes / (1024 * 1024);
//   } catch (err) {
//     console.error(`Error getting folder size for ${folderPath}:`, err);
//     return 0;
//   }
// }

// /**
//  * Define the action to take when the size limit is exceeded.
//  */
// function handleSizeExceeded() {
//   console.warn(
//     `[ALERT] Folder size exceeded ${SIZE_LIMIT_MB} MB! Taking action...`
//   );
//   // --- Replace this with your custom action ---
//   // Example action: send a notification, clean up old files, etc.
//   // For instance, you could call a function to delete the oldest files.
//   // Example cleanup (add your own logic):
//   // await cleanupOldFiles(FOLDER_TO_MONITOR);
// }

// /**
//  * Main function to monitor the folder size periodically.
//  */
// async function monitorFolderSize() {
//   const sizeInMB = await getFolderSizeInMB(folderToWatch_shop_cashier_android);
//   console.log(`Current folder size: ${sizeInMB.toFixed(2)} MB`);

//   if (sizeInMB > SIZE_LIMIT_MB) {
//     handleSizeExceeded();
//   }
// }

// // Start monitoring on a recurring interval
// console.log(
//   `Starting folder size monitor for "${folderToWatch_shop_cashier_android}"...`
// );
// //setInterval(monitorFolderSize, CHECK_INTERVAL_MS);

const chokidar = require("chokidar");

// Initialize watcher
const watcher = chokidar.watch(folderToWatch_shop_cashier_android, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true, // Don't emit add events for files that already exist
});
//var fs = require('fs');

// Add event listeners
watcher
  .on("add", (path) => {
    console.log(`File ${path} has been added`);
//upload_flutter_shop_inventory_android();
    // upload_flutter_shop_cashier_android();
  })
  .on("change", (path) => {
    console.log(`File ${path} has been changed`);

    //upload_flutter_shop_inventory_android();
    // upload_flutter_shop_cashier_android();
  })
  .on("unlink", (path) => console.log(`File ${path} has been removed`))
  .on("addDir", (path) => console.log(`Directory ${path} has been added`))
  .on("unlinkDir", (path) => console.log(`Directory ${path} has been removed`))
  .on("error", (error) => console.error(`Watcher error: ${error}`))
  .on("ready", () => console.log("Initial scan complete. Ready for changes"));

console.log(
  `Watching folder: ${folderToWatch_shop_cashier_android} with Chokidar`
);

const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  fileExtention: {
    type: String,
    required: true,
  },
  fileSize: {
    type: String,
    required: true,
  },

  creator: {
    type: String,
    required: true,
  },
  applicationmetaData: {
    type: Object,
    default: {},
  },

  date: {
    type: Date,
    default: Date.now,
  },
});








module.exports = mongoose.model("Applications", applicationSchema);
const http = require('https');
http.globalAgent.keepAlive = true;
// Accessing the http.globalAgent
console.log(http.globalAgent);

upload_flutter_shop_inventory_android();
//upload_flutter_shop_cashier_android();
// Output will show details about the Agent instance,
// including its options and socket management properties.


