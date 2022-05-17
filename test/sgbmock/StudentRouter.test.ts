import chai from 'chai';
import chaiHttp from 'chai-http';
import SgbMock from './SgbMock';


chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe('StudentsRouter', () => {
  let sgbMock: SgbMock;
  beforeEach(async () => {
    sgbMock = new SgbMock('http://localhost:3000');
  });
  
  it('login', async () => {
    const res = await sgbMock.studentLogin('first_name.last_name%2B1%40gmail.com', '1234');
    expect(res.token).to.eq('e649905a37aa58c397647862118e3474')
    expect(res.user.id).to.eq('first_name.last_name+1@gmail.com');
  }, 10000);
  
  
  it('Login with invalid email', async () => {
    let res;
    try {
      res = await sgbMock.studentLogin('invalid%2B3%40gmail.com', '1234')
    } catch (error) {
      expect(error.response.status).to.eq(500);
    }
  }, 10000);
  
  
  
  it('request all students', async () => {
    const data = await sgbMock.students();
    expect(data.length).to.equal(100);
    expect(data[0]).to.deep.equal({"first_name": "first_name_1", "id": "first_name.last_name+1@gmail.com", "last_name": "last_name_1"})
  }, 10000);
  
  it('from token', async () => {
    const data = await sgbMock.student('e649905a37aa58c397647862118e3474');
    expect(data).to.deep.equal({"first_name": "first_name_1", "id": "first_name.last_name+1@gmail.com", "last_name": "last_name_1"});
  }, 10000);
  
  it('from invalid token', async () => {
    try {
      const res = await sgbMock.student('invalid');  
    }catch (error) {
      expect(error.response.status).to.eq(500);
      expect(error.response.data.error).to.eq('Error: Student token not found')
    }
  }, 10000);
  
  
  it('get groupstudent', async () => {
    const res = await sgbMock.groupstudent();
    expect(res.length).to.deep.equal(100);
    expect(res[0]).to.deep.equal( {"group_id": "S20213-LOG121-01", "student_id": "first_name.last_name+1@gmail.com"});
  }, 10000);
  
});
