//==============================================================================
// ex. 01 &&
function ex01() {
  
  let arrNum = [1, 2, 3, 4, 5, 6, 7];
  let arrNom = ['Gabriel', 'Mattia', 'Riccardo', 'Federica'];

  if (arrNum.length > 5 && arrNom.length === 4) { console.log(`è tutto vero!!!!!!!!!!!`);} 
  else {`no no no è falso`};

  let people = 6;
  let tempo = 'sole';
  let prenotation = 1;
}

//==============================================================================
// ex. 02
function ex02() {

  let punti = [1, 45, 99, 55, 46, 71, 33, 42, 85]
  let maxPunti = [], puntiMin = 80;

  for ( i = 0; i <= punti.length; i += 1) {
    if ( punti[i] > puntiMin ) { maxPunti.push(punti[i]) };
  }
  console.log(maxPunti);
}

//==============================================================================
// ex.