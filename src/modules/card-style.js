const chooseStyle = (type,modal) => {
  switch (type) {
    case 'normal':
      modal.style.background = '#8A929A88'
      break;
    case "fighting":
      modal.style.background = '#7B3C1388'
      break;
      case "flying":
      modal.style.background = '#F1F1F188'
      break;
      case "poison":
      modal.style.background = '#AC62C388'
      break;
      case "ground":
      modal.style.background = '#DC6C3388'
      break;
      case "rock":
      modal.style.background = '#BEAD7F88'
      break;
      case "ghost":
      modal.style.background = '#4865A988'
      break;
      case "bug":
      modal.style.background = '#7CB90088'
      break;
      case "steel":
      modal.style.background = '#55879A88'
      break;
      case "fire":
      modal.style.background = '#F28F3E88'
      break;
      case "water":
      modal.style.background = '#338BD188'
      break;
      case "grass":
      modal.style.background = '#35B54788'
      break;
      case "electric":
      modal.style.background = '#EEC60088'
      break;
      case "psychic":
      modal.style.background = '#F2616F88'
      break;
      case "ice":
      modal.style.background = '#48C6B688'
      break;
      case "dragon":
      modal.style.background = '#0069BF88'
      break;
      case "dark":
      modal.style.background = '#62695F88'
      break;
      case "fairy":
      modal.style.background = '#EE82DF88'
      break;
  
    default:
      console.log('something went wrong')
      break;
  }
}

export default chooseStyle