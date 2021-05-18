/**********************************************
 * Knex Queries
 * ==================================
 *
 ***********************************************/

require("dotenv").config();
const TABLE_NAME = "bugs";
const development = require("../knexfile").development;
const knex = require("knex")(development);

class DebugService {
  constructor(knex) {
    this.knex = knex;
  }
  // getting all bugs
  getAll() {
    return this.knex(TABLE_NAME)
      .select()
      .then((eachRow) => {
        console.log(eachRow);
        return eachRow.map((row) => ({
          id: row.id,
          problem: row.problem,
          whatshouldbe: row.whatshouldbe,
          whatactuallyis: row.whatactuallyis,
          hypothesis: row.hypothesis,
          plan: row.plan,
          user_id: row.user_id,
        }));
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // getting all of the user's bugs
  getUsersBugs(id) {
    return this.knex(TABLE_NAME)
      .select()
      .where({ user_id: id })
      .then((eachRow) => {
        console.log(eachRow);
        return eachRow.map((row) => ({
          id: row.id,
          problem: row.problem,
          whatshouldbe: row.whatshouldbe,
          whatactuallyis: row.whatactuallyis,
          hypothesis: row.hypothesis,
          plan: row.plan,
          user_id: row.user_id,
        }));
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // getting specific bug
  get(id) {
    return this.knex(TABLE_NAME)
      .select()
      .where({ id: id })
      .then((eachRow) => {
        console.log(eachRow);
        return eachRow;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // adding bug
  add(bug) {
    return this.knex(TABLE_NAME)
      .insert(bug)
      .then(() => {
        console.log("inserted");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // deleting bug
  delete(id) {
    return this.knex(TABLE_NAME)
      .where({ id: id })
      .del()
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  // editing bug
  edit(id, newBug) {
    return this.knex(TABLE_NAME)
      .where({ id: id })
      .update(newBug)
      .then(() => {
        console.log("updated");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}

let database = new DebugService(knex);

database.getAll();

// module.exports = DebugService;
