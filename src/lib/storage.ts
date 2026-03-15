import { Storage } from '@google-cloud/storage';
import path from 'path';

const projectId = process.env.GCS_PROJECT_ID;
const keyFilePath = process.env.GCS_KEY_FILE_PATH;
const bucketName = process.env.GCS_BUCKET_NAME;

let storage: Storage;

if (keyFilePath) {
  storage = new Storage({
    projectId,
    keyFilename: path.isAbsolute(keyFilePath) 
      ? keyFilePath 
      : path.join(process.cwd(), keyFilePath),
  });
} else {
  // Use Application Default Credentials (ADC)
  storage = new Storage({
    projectId: projectId || undefined,
  });
}

export const bucket = bucketName ? storage.bucket(bucketName) : null;

/**
 * Uploads a file to the GCS bucket
 * @param fileBuffer The file content as a Buffer
 * @param destination The path in the bucket
 * @param contentType The MIME type of the file
 */
export async function uploadFile(fileBuffer: Buffer, destination: string, contentType: string) {
  if (!bucket) throw new Error('GCS_BUCKET_NAME is not defined');

  const file = bucket.file(destination);
  await file.save(fileBuffer, {
    metadata: { contentType },
  });

  return `https://storage.googleapis.com/${bucketName}/${destination}`;
}

/**
 * Gets a signed URL for a file in the GCS bucket
 * @param fileName The path to the file in the bucket
 */
export async function getSignedUrl(fileName: string) {
  if (!bucket) throw new Error('GCS_BUCKET_NAME is not defined');

  const [url] = await bucket.file(fileName).getSignedUrl({
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  });

  return url;
}

export default storage;
