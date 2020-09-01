let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('Ejemplares', () => {

    describe('/GET ejemplar', () => {
        it('it should GET all ejemplares', (done) => {
            chai.request(server)
                .get('/api/ejemplar')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ejemplares');
                    res.body.ejemplares.should.be.a('array');
                    done();
                });
        });
    });

    describe('/GET ejemplar by id Mongo', () => {
        it('it should GET one ejemplar by id', (done) => {
            chai.request(server)
                .get('/api/ejemplarId/5ac96cbd4de457232452aab5')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.ejemplar.should.have.property('videosEjemplar');
                    res.body.ejemplar.videosEjemplar.should.be.a('array')
                    res.body.ejemplar.should.have.property('_id');
                    res.body.ejemplar._id.should.be.a('string')
                    res.body.ejemplar.should.have.property('descripcionIC');
                    res.body.ejemplar.descripcionIC.should.be.a('string')
                    res.body.ejemplar.should.have.property('nroColeccion');
                    res.body.ejemplar.nroColeccion.should.be.a('string')
                    done();
                });
        });
    });

    describe('/GET ejemplar by Coleccion', () => {
        it('it should GET one ejemplar by numero Coleccion', (done) => {
            chai.request(server)
                .get('/api/ejemplarNroColeccion/MUCPV 014')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.ejemplar.should.have.property('videosEjemplar');
                    res.body.ejemplar.videosEjemplar.should.be.a('array')
                    res.body.ejemplar.should.have.property('_id');
                    res.body.ejemplar._id.should.be.a('string')
                    res.body.ejemplar.should.have.property('descripcionIC');
                    res.body.ejemplar.descripcionIC.should.be.a('string')
                    res.body.ejemplar.should.have.property('nroColeccion');
                    res.body.ejemplar.nroColeccion.should.be.a('string')
                    res.body.ejemplar.should.have.property('peso');
                    done();
                });
        });
    });

    describe('/GET ejemplares by idEjemplar(al que pertenece)', () => {
        it('it should NOT GET one ejemplar by idEjemplar(al que pertenece)', (done) => {
            chai.request(server)
                .get('/api/ejemplarId/5ac96cbd4de457232452aac5')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/GET ejemplar by numero coleccion', () => {
        it('it should NOT GET one ejemplar by numero Coleccion', (done) => {
            chai.request(server)
                .get('/api/ejemplarNroColeccion/MUCPV 015')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/GET ejemplarHome by idEjemplar', () => {
        it('it should  GET ejemplaresHome by idEjemplar', (done) => {
            chai.request(server)
                .get('/api/ejemplarHome/5ac96cbd4de457232452aab5')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ejemplar');
                    res.body.ejemplar.should.be.a('array')
                    done();
                });
        });
    });

    describe('/GET ejemplarExca by idEjemplar', () => {
        it('it should  GET ejemplaresExca by idEjemplar', (done) => {
            chai.request(server)
                .get('/api/ejemplarExca/5ac96cbd4de457232452aab5')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ejemplar');
                    res.body.ejemplar.should.be.a('array')
                    done();
                });
        });
    });

 
    // // UNHAPPY test POST ejemplar
    describe('/POST ejemplar', () => {
        let ejemplar = {
            "fruta": "kiwi"
        };

        it('it should  POST ejemplar', (done) => {
            chai.request(server)
                .post('/api/ejemplar')
                .send(ejemplar)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });


    describe('/GET ejemplarExca by idEjemplar', () => {
        it('it should NOT GET ejemplaresExca by idEjemplar', (done) => {
            chai.request(server)
                .get('/api/ejemplarExca/5ac96cbd4de457232452aab6')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

});