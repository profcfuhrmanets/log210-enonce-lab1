import chai from 'chai';
import chaiHttp from 'chai-http';
import SgbMock from './SgbMock';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe("GradeRouterTest", () => {
  let sgbMock: SgbMock;

  beforeEach(async () => {
    sgbMock = new SgbMock("http://localhost:3000");
  });

  it('GradeRouterTest insert grade', async () => {
    let res = await sgbMock.insertGrade("first_name.last_name%2B1%40gmail.com", "S20213-LOG210-01", "Devoir1", "2", "75.1");
    expect(res).to.deep.equal("first_name.last_name+1@gmail.com");
  }, 10000);
  
  it('GradeRouterTest insert grade', async () => {
   let res = await sgbMock.gradeStudent("first_name.last_name%2B1%40gmail.com");
    expect(res).to.deep.equal([{"group_id": "S20213-LOG210-01", "note": "75.1", "student_id": "first_name.last_name+1@gmail.com", "type": "Devoir1", "type_id": "2"}]);
  }, 10000);  
  
  
  it('GradeRouterTest insert grade', async () => {
    let res = await sgbMock.gradeGroup("S20213-LOG210-01");
    expect(res).to.deep.equal(
      [{"group_id": "S20213-LOG210-01", "note": "75.1", "student_id": "first_name.last_name+1@gmail.com", "type": "Devoir1", "type_id": "2"}]
      );
      
      
    }, 10000);
    
  });
  