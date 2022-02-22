describe("checkBrackets", function() {
    it("case.Undefined",function() {
        assert.equal(checkBrackets(undefined), '-1');
    })
    it("case.Nan", function() {
        assert.equal(checkBrackets(NaN), '-1');
    })
    it("case.Object", function() {
        assert.equal(checkBrackets({}), '0');
    })
    it("case.Bool", function() {
        assert.equal(checkBrackets(true), '0');
    })
    it("case.String",function() {
        assert.equal(checkBrackets('string'), '0')
    })
    it("case.Number",function() {
        assert.equal(checkBrackets(22), '0')
    })
    it("case.NULL",function() {
        assert.equal(checkBrackets(null), '0')
    })
    it("case { () }", function() {
        assert.equal(checkBrackets('()'), '0');
    });
    it("case { () ( }", function() {
        assert.equal(checkBrackets('() ('), '1');
    });
    it("case { ()()()(()() }", function() {
        assert.equal(checkBrackets('()()()(()()'), '1');
    });
    it("case { ()()string(string)) }", function() {
        assert.equal(checkBrackets('()()string(string))'), '0');
    });
    it("case { ()()()()() }", function() {
        assert.equal(checkBrackets('()()()()()'), '0');
    });
    it("case { ([ }", function() {
        assert.equal(checkBrackets('(['), '1');
    });
    it("case { ((((((((((hey)))))))) }", function() {
        assert.equal(checkBrackets('((((((((((hey))))))))'), '2');
    });
    it("case { ( ( ( ( ( ( ) }", function() {
        assert.equal(checkBrackets('( ( ( ( ( ( )'), '5');
    });
    it("case { (1) (2) (3) (4) (5) }", function() {
        assert.equal(checkBrackets('(1) (2) (3) (4) (5)'), '0');
    });
    it("case { ())1( )2() }", function() {
        assert.equal(checkBrackets(')1( )2('), '2');
    });
});