import { initializeApp } from 'firebase/app'
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore'
import sampleData from '../src/sampleData.js'
import { firebaseConfig } from '../src/firebase.js'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function upload() {
  for (const item of sampleData) {
    await setDoc(doc(collection(db, 'products'), item.id), item)
  }
  console.log('Uploaded sample data')
}

upload()
