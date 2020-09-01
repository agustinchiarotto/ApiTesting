let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST Exploracion', () => {

    it('it should  POST Exploracion', (done) => {
        let exploracion = {
            "idExploracion": "1",
            "nombre": "1",
            "fecha": "1"
        }
        chai.request(server)
            .post('/api/exploracion')
            .send(exploracion)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('/PUT Exploracion', () => {
    it.only('it should  POST Exploracion', (done) => {

        let exploracion2 = {
            "idExploracion": "2",
            "nombre": "EXPLORACION MODIFICADA",
            "fecha": "2"
        }
        chai.request(server)
            .put('/api/exploracion/5d1bc67ce9843613c9b35970')
            .send(exploracion2)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })

});


describe('exploraciones', () => {

    describe('/GET exploracion', () => {
        it('it should GET all exploraciones', (done) => {
            chai.request(server)
                .get('/api/exploracion')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/GET exploracion by id Mongo', () => {
        it('it should GET one exploracion by id', (done) => {
            chai.request(server)
                .get('/api/exploracionId/5ac96cbd4de457232452aab5')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/GET exploracion by id Mongo', () => {
        it('it should GET one exploracion by id', (done) => {
            chai.request(server)
                .get('/api/exploracionId/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/GET exploracion by Filtro', () => {
        it('it should GET one exploracion by filtro', (done) => {
            chai.request(server)
                .get('/api/exploracionesFiltro/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/GET exploraciones by idexploracion(al que pertenece)', () => {
        it('it should NOT GET one exploracion by idexploracion(al que pertenece)', (done) => {
            chai.request(server)
                .get('/api/exploracionId/2')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });





    // // UNHAPPY test POST exploracion
    describe('/POST exploracion', () => {
        let exploracion = {
            "fruta": "kiwi"
        };

        it('it should  POST exploracion', (done) => {
            chai.request(server)
                .post('/api/exploracion')
                .send(exploracion)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });


    describe('/GET exploracionExca by idexploracion', () => {
        it('it should NOT GET exploracionesExca by idexploracion', (done) => {
            chai.request(server)
                .get('/api/exploracionExca/5ac96cbd4de457232452aab6')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });


    describe('/DELETE exploracion by idexploracion', () => {
        it('it should DELETE by idexploracion', (done) => {
            chai.request(server)
                .get('/api/exploracion/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});