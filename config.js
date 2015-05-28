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
	 * Standardmaessig wird dein Raspberry auf der Startseite des Pi Finders (pi.strebl.ch)
	 * angezeit. Hast du jedoch mehrere Raspberrys und moechtest diese gruppieren? 
	 * Oder hast moechtest du nicht das dein Pi auf der Startseite vertreten ist?
	 * Dann kannst du hier einen Gruppennamen wie '14B' oder 'Strebel' definieren.
	 * Die Gruppe findest du dann unter pi.strebl.ch/@<group>. z.B: pi.strebl.ch/@14B
	 *
	 * Moegliche Werte:
	 * 'string'
	 *
	 * Beispiel:
	 * Soll deine Gruppe 14B heissen, sieht die Konfiguration so aus:
	 * group: '14B',
	 *
	 * Wenn keine Gruppe gesetzt werden soll, den group wieder auskommentieren (//group:).
	 * 
	 * default: my-group
	 */
	//group: 'my-group',

	/*
	 * Soll das Raspberry Pi auf der Uebersicht, also auf der Homepage (pi.strebl.ch) sichbar sein?
	 * 
	 * Moegliche Werte: true, false oder 'auto'
	 * false: Immer sichtbar
	 * true: Immer versteckt
	 * 'auto': Nur versteckt wenn group nicht den Wert false hat.
	 *
	 * default: 'auto'
	 */
	public: 'auto',

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