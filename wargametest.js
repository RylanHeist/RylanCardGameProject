var expect = chat.expect

describe('MyFunctions', function() {
    describe('#addPoint', function() {
        it('should add a point to the player score', function() {
            let x = addPoint(1)
            expect(x).to.equal(playerScore > 0)
        })
    })
})