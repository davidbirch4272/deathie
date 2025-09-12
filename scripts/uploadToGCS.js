import 'dotenv/config';

console.log('🔍 GCS_PROJECT_ID:', process.env.GCS_PROJECT_ID);
console.log('🔍 GCS_KEY_FILE:', process.env.GCS_KEY_FILE);

import { Storage } from '@google-cloud/storage';
import fs from 'fs';
import path from 'path';

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  keyFilename: process.env.GCS_KEY_FILE,
});

// map local folders → bucket names
const bucketMap = {
  DeathiePictureFolder: 'deathie-pictures',
  DeathieMusicFolder: 'deathie-songs',
  DeathieVideoFolder: 'deathie-videos',
};

async function uploadFolder(localFolder, bucketName) {
  const bucket = storage.bucket(bucketName);
  const files = fs.readdirSync(localFolder);

  for (const file of files) {
    const localPath = path.join(localFolder, file);
    const remotePath = file; // root of bucket, no subfolders

    // check if file already exists in bucket
    const [exists] = await bucket.file(remotePath).exists();
    if (exists) {
      console.log(`⏭️  Skipped (already exists): ${remotePath}`);
      continue;
    }

    try {
      await bucket.upload(localPath, { destination: remotePath });
      console.log(`✅ Uploaded: ${remotePath}`);
    } catch (err) {
      console.error(`❌ Failed to upload ${remotePath}:`, err.message);
    }
  }
}

async function main() {
  for (const [localFolder, bucketName] of Object.entries(bucketMap)) {
    console.log(`\n📂 Uploading from ${localFolder} → ${bucketName}`);
    await uploadFolder(`./local-assets/${localFolder}`, bucketName);
  }
}

main().catch(console.error);
