import chai from 'chai';
import chaiHttp from 'chai-http';
// import md5 from 'md5';
import SgbMock from './SgbMock';


chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe('TeacherRouteTest', () => {
  let sgbMock: SgbMock;
  beforeEach(async () => {
    sgbMock = new SgbMock('http://localhost:3000');
  });

  it('Login teacher', async () => {
    const body = await sgbMock.teacherLogin('cc-yvan.ross%40etsmtl.ca', '1234');
    expect(body.token).to.eq("7f1b6b7c407b1292560e61a21e47d645")
    expect(body.user_id).to.equal('cc-yvan.ross@etsmtl.ca')
  }, 10000);
  
  it('Login  fail', async () => {
    try {
      const res = await sgbMock.teacherLogin('teacher%2B100%40gmail.com', '1234')
    } catch (error) {
      expect(error.response.status).to.eq(500);
      expect(error.response.data.error).to.equal('Error: Email and password do not match teacher')
    }
  }, 10000);
  
  it('get all teacher', async () => {
    const res = await sgbMock.teachers();
    expect(res.data.length).to.equal(8)
    expect(res.data[0]).to.deep.equal(   {"first_name": "Vincent", "id": "cc-vincent.lacasse@etsmtl.ca", "last_name": "Lacasse"});
  }, 10000);
  
  it('from teacher token', async () => {
    const res = await sgbMock.teacher('7f1b6b7c407b1292560e61a21e47d645');
    expect(res.user_id).to.equal('cc-yvan.ross@etsmtl.ca')
  }, 10000);
  
  it('from teacher with invalid token', async () => {
    try {
      const res = await sgbMock.teacher('invalid');
    } catch (error) {
      expect(error.response.status).to.eq(500);
      expect(error.response.data.error).to.equal('Error: Teacher token not found');
    }
  }, 10000);
 
  
});

