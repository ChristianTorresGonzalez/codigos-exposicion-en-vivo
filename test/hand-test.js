/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 8 PAI - Poker. Programacion Orientada a Objetos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este archivo, implementaremos los correspondientes metodos
  * necesarios para trabajar con la clase mano. Donde almacenaremos un conjunto
  * de cartas, formando el mazo del jugador.
  * @since 10/04/2020
  * @file Fichero de implementacion de la clase mano
  * @version 1.0.0
*/

const expect = require("chai").expect;
let hand = require("../src/hand");
let deck = require("../src/deck");
let card = require("../src/card");

describe("Test unitarios para clase Mno(Hand):",
function() {
  /**
   * @description Expect para comprobar el correcto funcionamiento de clase mano
  */
  let mano = new hand.Hand("Mano");
  let mazo = new deck.Deck;
  mazo.shuffle();
  describe("Probando constructor de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que mano tiene constructor", function() {
      expect(mano).has.a.property('constructor');
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de addCard()
  */
  describe("Probando addCard() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento addCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion addCard() de la clase mano", function() {
      let carta = new card.Card("CLUBS", 4);
      mano.addCard(carta);
      expect(mano.cards.length).to.equal(1);
    });
  });

  /**
   * @description Expect para comprobar el correcto funcionamiento de popCard()
  */
  describe("Probando popCard() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento popCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion popCard() de la clase mano", function() {
      mano.popCard();
      expect(mano.cards.length).to.equal(0);
    });
  });

  /**
   * @description Expect para comprobar el correcto funcionamiento de popCard()
  */
  describe("Probando moveCard() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento moveCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion moveCard() de la clase mano", function() {
      mano.moveCard(mazo, 5);
      console.log(mano);
      expect(mano.cards.length).to.equal(5);
    });
  });
});