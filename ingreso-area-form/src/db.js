import dayjs from 'dayjs';
import Firebase from 'firebase';
import apiFire from './config';


// Inicializamos la interacción con el servicio de firebase realtime daa base
let app = Firebase.initializeApp(apiFire); // se debe inicializar con las credenciales
let db = app.firestore();
const isDay =  dayjs().hour() <= 19 &&  dayjs().hour() >= 7
const nigth =  dayjs().hour() > 19? dayjs().format('YYYY-MM-DD 19'): dayjs().subtract(1, 'day').format('YYYY-MM-DD 19')
let refTurn = db.collection('registers').where('timestamp', '>=',isDay? dayjs().format('YYYY-MM-DD 07'):nigth)
let refTurnZone = (zone) => db.collection(zone).where('timestamp', '>=',isDay? dayjs().format('YYYY-MM-DD 07'):nigth)

export default db
export {
    Firebase,
    refTurn,
    refTurnZone,
}