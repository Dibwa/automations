const fs = require("fs");
const { default: axios } = require("axios");
const folderToWatch_tobacco_app =
  "C:/Users/laure/OneDrive/Documents/tobbacco_management_system_android/build/app/outputs/apk/release"; // Replace with your desired folder path

fs.watch(
  folderToWatch_tobacco_app,
  { recursive: true },
  (eventType, filename) => {
    console.log(`Detected ${eventType} in ${filename}`);
    // Perform actions based on the eventType and filename
    // e.g., recompile code, refresh a server, log the change

    const hhh = false;
    if (hhh == true) {
      const { default: axios } = require("axios");
      const fs = require("fs");

      const path =
        "C:/Users/laure/OneDrive/Documents/tobbacco_management_system_android/build/app/outputs/apk/release/tms.apk"; /** Path to the file */
      const file = fs.readFileSync(path); /** Read file */
      const stats =
        fs.statSync(path); /** Get file size in bytes (for content-length) */
      const fileSizeInBytes = stats.size;

      /** Add appropriate headers */
      const headers = {
        Authorization: "Bearer Your Token" /** Optional */,
        "Content-Length": fileSizeInBytes /** Recommended to add it */,
        "Content-Type": "application/octet-stream",
      };
      let url = "https://www.example.com/remote-server-upload-url";

      axios
        .post(url, file, {
          headers: headers,
          maxContentLength: Infinity /** To avoid max content length error */,
          maxBodyLength: Infinity /** To avoid max body length error */,
        })
        .then((response) => {
          console.log("Zils Logistics");
          console.log("Zils  ZaZa");
          console.log("Dead Bitch");
          console.log(response.data);
        })
        .catch((error) => {
          return error;
        });
    }
  }
);

console.log(
  `Watching folder: Tobacco_flutter_android_app: ${folderToWatch_tobacco_app}`
);
const folderToWatch_shop_cashier_android =
  "C:/Users/laure/OneDrive/Documents/Shop_manager_applications/shop_manager_flutter_android_cashier/build/app/outputs/apk/release"; // Replace with your desired folder path

fs.watch(
  folderToWatch_shop_cashier_android,
  { recursive: true },
  (eventType, filename) => {
    console.log(`Detected ${eventType} in ${filename}`);
    // Perform actions based on the eventType and filename
    // e.g., recompile code, refresh a server, log the change
  }
);

console.log(
  `Watching folder: Shop Cashier android app: ${folderToWatch_shop_cashier_android}`
);

const FormData = require("form-data"); // You might need to install 'form-data' package

async function uploadFile() {
  const filePath =
    "C:/Users/laure/OneDrive/Documents/Shop_manager_applications/shop_manager_flutter_android_cashier/build/app/outputs/apk/release/shop-cashier.apk"; // Replace with your file path
  //const url = 'https://www.storage.zilslogistics.com/api/v1/uploads/applications'; // Replace with your server's upload endpoint
  const url = "http://localhost:800/api/v1/uploads/applications"; // Replace with your server's upload endpoint

  try {
    const form = new FormData();
    form.append("uploadName", "shop-cashier");
    form.append("files", fs.createReadStream(filePath)); // 'myFile' is the field name on the server

    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(), // Important for setting the correct Content-Type header
      },
    });

    console.log("File uploaded successfully:", response.data);
  } catch (error) {
    console.log("Error uploading file:", error);
  }
}

uploadFile();

const glob = require("glob");

const fastFolderSize = require("fast-folder-size");
const promisify = require("util").promisify;

// Configuration
const FOLDER_TO_MONITOR = "./my_folder";
const SIZE_LIMIT_MB = 100;
const CHECK_INTERVAL_MS = 5000; // Check every 5 seconds

// Promisify the fast-folder-size function for async/await usage
const fastFolderSizeAsync = promisify(fastFolderSize);

/**
 * Gets the size of a folder in megabytes.
 * @param {string} folderPath - The path to the folder.
 * @returns {Promise<number>} - The folder size in MB.
 */
async function getFolderSizeInMB(folderPath) {
  try {
    const bytes = await fastFolderSizeAsync(folderPath);
    return bytes / (1024 * 1024);
  } catch (err) {
    console.error(`Error getting folder size for ${folderPath}:`, err);
    return 0;
  }
}

/**
 * Define the action to take when the size limit is exceeded.
 */
function handleSizeExceeded() {
  console.warn(
    `[ALERT] Folder size exceeded ${SIZE_LIMIT_MB} MB! Taking action...`
  );
  // --- Replace this with your custom action ---
  // Example action: send a notification, clean up old files, etc.
  // For instance, you could call a function to delete the oldest files.
  // Example cleanup (add your own logic):
  // await cleanupOldFiles(FOLDER_TO_MONITOR);
}

/**
 * Main function to monitor the folder size periodically.
 */
async function monitorFolderSize() {
  const sizeInMB = await getFolderSizeInMB(folderToWatch_shop_cashier_android);
  console.log(`Current folder size: ${sizeInMB.toFixed(2)} MB`);

  if (sizeInMB > SIZE_LIMIT_MB) {
    handleSizeExceeded();
  }
}

// Start monitoring on a recurring interval
console.log(
  `Starting folder size monitor for "${folderToWatch_shop_cashier_android}"...`
);
//setInterval(monitorFolderSize, CHECK_INTERVAL_MS);
