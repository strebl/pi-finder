/*
 * Das Einzige was unbedingt angepasst werden muss, ist der NAME.
 * Der Rest kann so belassen werden, ausser du möchtest einen
 * anderen Poke Server verwenden.
 */

module.exports = {

	/*
	 * Mit diesem Namen meldet sich dein Raspberry Pi beim Poke Server.
	 * UNBEDINGT AENDERN damit du dein Pi erkennst!
	 */
	name: "My Awesome Pi",

	/*
	 * Poke Server.
	 * Diesem Host wird die aktuelle IP mitgeteilt.
	 * Muss nur geaendert werden wenn du deinen eigenen Server verwendest.
	 *
	 * default: https://pi.strebl.ch
	 */
	pokeServer: "https://pi.strebl.ch",

	/*
	 * Poke Pfad
	 * Diese URL wird auf dem Poke Server aufgerufen um ihm mitzuteilen,
	 * dass das Geraet noch aktiv ist.
	 *
	 * default: /api/v1/devices/poke
	 */
	pokePath: "/api/v1/devices/poke"

}