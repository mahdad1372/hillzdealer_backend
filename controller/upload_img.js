const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
} = require("@azure/storage-blob");

const AzureAccountName = process.env.AZURE_STORAGE_ACCOUNT_NAME || "hillzimage";
const AzureAccessKey =
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY ||
  "/3N7mr9p8zx4aGDv0rgQLY/BFxUPMt9/FL5dCYe1JRgKNWu7iqnnsJZZv5xAMnX9SY3gAvkq8IK2/yyFjl8pQQ==";

const sharedKeyCredential = new StorageSharedKeyCredential(
  AzureAccountName,
  AzureAccessKey
);
const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://${AzureAccountName}.blob.core.windows.net`,
  pipeline
);

const getBlobName = (originalName) => {
  const identifier = Math.random().toString().replace(/0\./, "");
  return `${identifier}-${originalName}`;
};

exports.uploadImageToAzure = (containerName) => {
  return async (req, res, next) => {
    if (!req.file) return next();

    const blobName = getBlobName(req.file.originalname);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    try {
      await blockBlobClient.uploadData(req.file.buffer, {
        blobHTTPHeaders: { blobContentType: `${req.file.mimetype}` },
      });

      req.body.image_file = `/${containerName}/${blobName}`;

      next();
    } catch (err) {
      next(err);
    }
  };
};

exports.uploadImageToAzure2 = (containerName) => {
  return async (req, res, next) => {
    if (!req.files["image_url"][0]) return next();

    const blobName = getBlobName(req.files["image_url"][0].originalname);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const blobName2 = getBlobName(req.files["icon_url"][0].originalname);
    const containerClient2 = blobServiceClient.getContainerClient(
      containerName
    );
    const blockBlobClient2 = containerClient2.getBlockBlobClient(blobName2);
    try {
      console.log("good boy");
      await blockBlobClient.uploadData(req.files["image_url"][0].buffer, {
        blobHTTPHeaders: {
          blobContentType: `${req.files["image_url"][0].mimetype}`,
        },
      });
      await blockBlobClient2.uploadData(req.files["icon_url"][0].buffer, {
        blobHTTPHeaders: {
          blobContentType: `${req.files["icon_url"][0].mimetype}`,
        },
      });
      req.body.image_file1 = `/${containerName}/${blobName}`;
      req.body.image_file2 = `/${containerName}/${blobName2}`;
      next();
    } catch (err) {
      next(err);
    }
  };
};
