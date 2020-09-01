//During the test the env variable is set to test


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
describe('Bochon', () => {

    describe('/GET bochones', () => {
        it('it should GET all bochones', (done) => {
            chai.request(server)
                .get('/api/bochon')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('bochones');
                    res.body.bochones.should.be.a('array');
                    done();
                });
        });
    });

    describe('/GET bochon by id', () => {
        it('it should GET one bochon by id', (done) => {
            chai.request(server)
                .get('/api/bochonId/5ac951bfd1611c181c72a8d3')
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });

        it('it should FAIL TO GET one bochon by id', (done) => {
            chai.request(server)
                .get('/api/bochonId/idinvalidonoexistente')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/GET bochon by NUMERO DE CAMPO', () => {

        it('it should GET one bochon by NUMERO DE CAMPO', (done) => {
            chai.request(server)
                .get('/api/bochonCampo/5478')
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });

        it('it should FAIL TO GET un bochon by NUMERO DE CAMPO - id invalido', (done) => {
            chai.request(server)
                .get('/api/bochonCampo/idinvalido')
                .end((err, res) => {
                    res.should.have.status(500);
                    done();
                });
        });

        it('it should FAIL TO GET un bochon by NUMERO DE CAMPO - id inexistente', (done) => {
            chai.request(server)
                .get('/api/bochonCampo/12398723616277363')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/GET bochon by EJEMPLAR', () => {

        it('it should GET one bochon by EJEMPLAR', (done) => {
            chai.request(server)
                .get('/api/bochonEjemplar/5ac96cbd4de457232452aab5')
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });

        it('it should FAIL TO GET un bochon by EJEMPLAR - id invalido', (done) => {
            chai.request(server)
                .get('/api/bochonEjemplar/')
                .end((err, res) => {
                    res.should.not.have.status(200);
                    done();
                });
        });

        it('it should FAIL TO GET un bochon by EJEMPLAR - id inexistente', (done) => {
            chai.request(server)
                .get('/api/bochonEjemplar/12398723616277363')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/POST bochon', () => {

        it('it should  POST bochon', (done) => {
            let bochon = {
                "acidosAplicados": [
                    "ácido yodhídrico"
                ],
                "ejemplarAsociado": "5ac96cbd4de457232452aab5",
                "nombre": "BO-5874-A2001",
                "nroCampo": 5478,
                "preparador": "Cristian, Martinez",
                "preparadorId": "5ac92c222b27c22370de0325",
                "tipoPreparacion": "tipoB",
                "excavacionId": "5ac94201de54861980880129",
                "piezaId": "5ac958455e2d4417a43255c8",
            }
            chai.request(server)
                .post('/api/bochon')
                .send(bochon)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it('it should  FAIL TO POST bochon - documento incorrecto', (done) => {
            let bochonFail = {
                "fruta": "limon"
            }
            chai.request(server)
                .post('/api/bochon')
                .send(bochonFail)
                .end((err, res) => {
                    res.should.have.status(500);
                    done();
                });
        });

    });

});