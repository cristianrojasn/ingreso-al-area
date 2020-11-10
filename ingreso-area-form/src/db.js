import Firebase from 'firebase';
import apiFire from './config';


// Inicializamos la interacción con el servicio de firebase realtime daa base
let app = Firebase.initializeApp(apiFire); // se debe inicializar con las credenciales
let db = app.firestore();

export default db