/** <h1>Cria uma abstração para guardar espécies de plantas</h1>
 *
 * @param {string} name - Nome científico da espécie
 * @param {string} region - Região do planeta em que é encontrada
 * @function setExtinct - Declara se essa espécie já está extinta 
 */
function Flora(name, region) {
    this.name = name;
    this.region = region;

    this._isExtinct = false;

    this.setExtinct = function() {
        this._isExtinct = !this._isExtinct;
    }
}

function Rosas(name, region, color, avarageHeigh) {
    this.color = color;
    this.avarageHeigh = avarageHeigh;

    Flora.call(this, name, region);
}

const whiteRose = new Rosas("agrestis", "Portugal", "branca", 75);