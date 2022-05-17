import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/App';
import SgbMock from './SgbMock';
// import type { ScheduleJSON } from '../../src/model';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

describe("ScheduleRouterTest", () => {

  it('get all Schedules', async () => {
        let mock:SgbMock = new SgbMock('http://localhost:3000');
        let data = await mock.schedules();
        expect(data).to.deep.equal(require('./data/Schedule.json'));
      }, 10000);

});
