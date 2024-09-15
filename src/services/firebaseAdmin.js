import admin from "firebase-admin";

import serviceAccount from "./serviceAccountKey.json";

// Initialize the Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Export Firebase Admin Auth instance
export const auth = admin.auth();
