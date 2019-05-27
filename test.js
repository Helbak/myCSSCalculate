
describe(" test CAlculator", () => {
    before(() => {

    });
    it(`toScreen`, function () {
        const act = toScreen(1);
        const exp = 1;
        assert.deepEqual(act, exp);
    });
    it(`AllNull`, function () {
        setNum1(222);
        const act = allNull();
        const exp = '';
        assert.deepEqual(act, exp);
    });
    it(`ce`, function () {
        setNum1('222');
        const act = ce();
        const exp = '22';
        assert.deepEqual(act, exp);
    });
    it(`ce`, function () {
        const act = ce();
        const exp = '2';
        assert.deepEqual(act, exp);
    });
    it(`saveOldNum`, function () {
        setNum1('123');
        const act = saveOldNum();
        const exp = 123;
        assert.deepEqual(act, exp);
    });
    it(`saveOldNum`, function () {
        setNum1('123');
        const act = saveOldNum();
        const exp = 123;
        assert.deepEqual(act, exp);
    });
    it(`getResult()  8 doPlus 2`, function () {
        setOldNum(8);
        setNum1("2");
        setAction('doPlus');
        const act = getResult();
        const exp = 10;
        assert.deepEqual(act, exp);
    });
    it(`getResult()  -8 doPlus 0.2`, function () {
        setOldNum(-8);
        setNum1(".2");
        setAction('doPlus');
        const act = getResult();
        const exp = -7.8;
        assert.deepEqual(act, exp);
    });


    it(`getResult()  8 doMinus 2`, function () {
        setOldNum(8);
        setNum1("2");
        setAction('doMinus');
        const act = getResult();
        const exp = 6;
        assert.deepEqual(act, exp);
    });
    it(`getResult()  8 doDivide 2`, function () {
        setOldNum(8);
        setNum1("2");
        setAction('doDivide');
        const act = getResult();
        const exp = 4;
        assert.deepEqual(act, exp);
    });
    it(`getResult()  8 doMulti 2`, function () {
        setOldNum(8);
        setNum1("2");
        setAction('doMulti');
        const act = getResult();
        const exp = 16;
        assert.deepEqual(act, exp);
    });
    it(`writeMinus()`, function () {
        allNull();
        const act = writeMinus();
        const exp = '-';
        assert.deepEqual(act, exp);
    });
    it(`writeDot()`, function () {
        allNull();
        const act = writeDot();
        const exp = '.';
        assert.deepEqual(act, exp);
    });




    it(`AllNull`, function () {
        setNum1(222);
        const act = allNull();
        const exp = '';
        assert.deepEqual(act, exp);
    });
});

//