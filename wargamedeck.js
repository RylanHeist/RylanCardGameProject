const SUITS = ["Clover", "Spade", "Diamond", "Heart"]
const VALUES = [
1,
2,
3,
4,
5,
6, 
7,
8,
9,
10,
11,
12,
13]

class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards
    }

    shuffle() {
        for (let i = this.cards.length -1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i +1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    } deckSplit() {
        const half = Math.ceil(this.cards.length / 2)
        const firstHalf = this.cards.slice(0, half)
        const secondHalf = this.cards.slice (half)
        return [firstHalf, secondHalf]
    }  
}

class Player {
    constructor(name, hand, playerscore) {
        this.name = name
        this.hand = hand
        this.playerscore = playerscore
    }
    printHand() {
        console.log(this.hand)
    }
    printName() {
        console.log(this.name)
    }
    topCard(){
        const topHand = this.hand.pop()
        return topHand
    }
    addPoint(){
       this.playerscore = this.playerscore + 1
    }  
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}



const deck = new Deck()
deck.shuffle()
const [firstHalf, secondHalf] = deck.deckSplit()
const Player1 = new Player('Big Pappa', firstHalf, 0)
const Player2 = new Player('Cool Daddy', secondHalf, 0)
Player1.printName()
Player1.printHand()
Player2.printName()
Player2.printHand()

for(let i = 26; i > 0; i--){
    const Player1CurrentCard = Player1.topCard()
    const Player2CurrentCard = Player2.topCard()
    if(
        Player1CurrentCard.value > Player2CurrentCard.value
    ){
        Player1.addPoint()
    } else if(
        Player2CurrentCard.value > Player1CurrentCard.value
    ){
        Player2.addPoint()
    }
}

console.log(Player1.name + " has a score of " + Player1.playerscore)
console.log(Player2.name + " has a score of " + Player2.playerscore)

if(
    Player1.playerscore > Player2.playerscore
){
    console.log(Player1.name + " is the winner of the game! Congratulations, you win nothing but pride!")
} else if(
    Player2.playerscore > Player1.playerscore
){
    console.log(Player2.name + " is the winner of the game! Congratulations, you win nothing but pride!")
}