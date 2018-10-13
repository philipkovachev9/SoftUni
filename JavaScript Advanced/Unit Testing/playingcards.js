/*
Playing Cards

Create a JS factory function that returns a Card object to hold a card’s face and suit, both set trough the constructor. Throw an error if the card is initialized with invalid face or suit or if an attempt is made to change the face or suit of an existing instance to an invalid value.

Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

Valid card suits are: S (♠), H (♥), D (♦), C (♣)

Both face and suit are expected as an uppercase string. The class also needs to have a toString() method that prints the card’s face and suit as a string. Use the following UTF code literals to represent the suits:

\u2660 – Spades (♠)

\u2665 – Hearts (♥)

\u2666 – Diamonds (♦)

\u2663 – Clubs (♣)

Input / Output

The factory function must take two string parameters. The toString() method of the returned object must return a string.

Submit the factory function.

Examples

Sample Input

Sample Output

console.log(&#39;&#39; + makeCard(&#39;A&#39;, &#39;S&#39;));

A♠

console.log(&#39;&#39; + makeCard(&#39;10&#39;, &#39;H&#39;));

10♥

console.log(&#39;&#39; + makeCard(&#39;1&#39;, &#39;C&#39;));

Error
*/
function playindCards(face,suit) {
    VALID_CARD_FACES = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    VALID_CARD_SUITS = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    if(VALID_CARD_FACES.indexOf(face) < 0 || !VALID_CARD_SUITS.hasOwnProperty(suit))  {
        throw new Error('Invalid suite or face!');
    }
    return {
        toString: function() {
            return face + VALID_CARD_SUITS[suit];
        }
    }
}

console.log('' + playindCards('A','S'));
console.log('' + playindCards('10','H'));
console.log('' + playindCards('1','C'));
