import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAMD4O_Vm5ycC7xawfMdJUpEU_Bvb7Mfpk',
  authDomain: 'better-boards-6ed2e.firebaseapp.com',
  projectId: 'better-boards-6ed2e',
  storageBucket: 'better-boards-6ed2e.appspot.com',
  messagingSenderId: '233492048592',
  appId: '1:233492048592:web:c06ecb79e7b981a840ccd5',
  measurementId: 'G-3JTDQDG265',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
