import chai from 'chai';
import chaiHttp from 'chai-http';
import SgbMock from './SgbMock';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe("CourseRouterTest", () => {
  
  it('get all courses', async () => {
    let mock:SgbMock = new SgbMock('http://localhost:3000');
    let data = await mock.getAllCourses();
    expect(data).to.deep.equal(require('./data/courses.json'));
  }, 10000);
  
});
