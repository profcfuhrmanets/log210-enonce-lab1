import type { ScheduleJSON } from ".";

export class Schedule {
  static all(): ScheduleJSON[]{
    let schedules: ScheduleJSON[] = require('../data/Schedule.json');
    return schedules;
  }

  static groups(): string[]{
    const uniqueGroup =  [... new Set(Schedule.all().map(item => item.group_id))];
    return uniqueGroup;
  }
 

}
 