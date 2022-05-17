import chai from 'chai';
import chaiHttp from 'chai-http';
import SgbMock from './SgbMock';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe("SemesterRouterTest", () => {

      it('get all semesters', async () => {
        let mock:SgbMock = new SgbMock('http://localhost:3000');
        const data = await mock.semesters();
        expect(data).to.deep.equal(require('./data/semester.json'));
      }, 10000);

});
