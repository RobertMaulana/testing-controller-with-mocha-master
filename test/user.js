const chai      = require('chai'),
      chaiHttp  = require('chai-http'),
      should    = chai.should(),
      expect    = chai.expect,
      User      = require('../models/user'),
      mongoose  = require('mongoose');

chai.use(chaiHttp);

describe('User testing ', () => {

  it('Should Create new User', (done) => {
  chai.request('http://localhost:3000')
  .post('/users')
  .send({
    name : 'Maulana',
    email : 'maulana.robert.mr@gmail.com'
  })
  .end((err, res) => {
    if (err){
      done(err)
    }else {
      res.should.have.status(200)
      expect(res.body).to.have.property('success').and.equal(true)
      expect(res.body.user.name).and.equal('Maulana')
      expect(res.body.user.email).and.equal('maulana.robert.mr@gmail.com')
      done()
    }
    })
  })

  it('Should Delete a user and its true', (done) => {
    User.create({
      name : 'testing',
      email : 'maulana.robert.mr@gmail.com'},
      (err, user) => {
      if (err){
        console.log('error cuy');
        done(err)
      }
      else{
        chai.request('http://localhost:3000')
            .delete('/users/' + user._id)
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
            });
      }
    })
  })

  it('Should get all User', (done) => {
  chai.request('http://localhost:3000')
  .get('/users')
  .end((err, res) => {
      if(err){
        done(err)
      }else {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        done()
      }
    })
  })

  it('Should update a user', (done) => {
    User.create({
      name : 'hhhhhhh',
      email : 'hmmm@gmail.com'},
     (err, user) => {
      if (err){
        console.log('hahahaha... error!');
        done(err)
      }
      else{
        chai.request('http://localhost:3000')
            .put('/users/' + user._id)
            .send({ name : 'lalalala', email : 'zzzzz@gmail.com' })
            .end((err, res) => {
             res.should.have.status(200);
             res.body.should.have.property('success').eql(true);
            done();
            });
      }
    })
  })
})
