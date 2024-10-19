/**
 * Create an abstraction to store plant species
 * @class
 * @param {string} name - Scientific name of the species
 * @param {string} region - Region of the planet where it is found
 * @function setExtinct - State whether this species is already extinct
 * @returns {object}
 * @author Fabio Santos
 */
function Flora(name, region) {
	this.name = name;
	this.region = region;

	this._isExtinct = false;

	this.setExtinct = function () {
		this._isExtinct = !this._isExtinct;
	};
}

/**
 * Creates an abstraction to store species of Roses, a subspecies of Flora
 * @class
 * @param {string} name - Scientific name of the species
 * @param {string} region - Region of the planet in which it is found
 * @param {string} color - Coloring of the rose petals
 * @param {number} averageHeigh - Average height in meters reached by the rose as an adult
 * @returns {object}
 * @author Fabio Santos
 */
function Rose(name, region, color, averageHeigh) {
	this.color = color;
	this.avarageHeigh = averageHeigh;

	Flora.call(this, name, region);
}

/**
 * Creates an abstraction to store species of Trees, a subspecies of Flora
 * @class
 * @param {string} name - Scientific name of the species
 * @param {string} region - Region of the planet in which it is found
 * @param {number} age - Age in years at which the tree usually reaches the average height of the species
 * @param {number} averageHeigh - Average height in meters of this tree species
 * @function getDescription - Method that creates a brief description of the inserted tree
 * @returns {object}
 * @author Fabio Santos
 */
function Tree(name, region, age, averageHeight) {
	this.age = age;
	this.averageHeigh = averageHeight;

	this.getDescription = () => {
		return `The tree ${toCamelCase(name)} is originary from ${toCamelCase(
			region
		)}. The average height that this specimen can achieve is ${averageHeight} meters at an age of about ${age} years old.`;
	};

	Flora.call(this, name, region);
}

/**
 * Edit the names and regions of the species in CamelCase style
 * @param {string} string - String representing either the name or the region of the species
 * @returns {string}
 * @author Fabio Santos
 */
function toCamelCase(string) {
	const splitString = string.split(" ");
	const splitCamelCase = splitString.map((word) => {
		return [word.slice(0, 1).toUpperCase(), word.slice(1).toLowerCase()].join("");
	});
	return splitCamelCase.join(" ");
}

const whiteRose = new Rose("agrestis", "Portugal", "branca", 0.75);
const sequoia = new Tree("sequoia sempervirens", "north america", 75, 80);
const cedrus = new Tree("cedrus", "himalaya", 40, 65);

console.log(`\n${"-".repeat(120)}`);
console.table(whiteRose);
console.log(`${"-".repeat(120)}`);

console.log(`\n${"-".repeat(120)}`);
console.table(sequoia);
console.log(sequoia.getDescription());
console.log(`${"-".repeat(120)}`);

console.log(`\n${"-".repeat(120)}`);
console.table(cedrus);
console.log(cedrus.getDescription());
console.log(`${"-".repeat(120)}`);
