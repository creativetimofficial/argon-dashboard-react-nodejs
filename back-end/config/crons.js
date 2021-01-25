/* eslint-disable max-len */
/* !

=========================================================
* Argon React NodeJS - v1.0.0
=========================================================

* Product Page: https://argon-dashboard-react-nodejs.creative-tim.com/
* Copyright 2020 Creative Tim (https://https://www.creative-tim.com//)
* Copyright 2020 ProjectData (https://projectdata.dev/)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react-nodejs/blob/main/README.md)

* Coded by Creative Tim & ProjectData

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const ActiveSession = require('../models/activeSession');
const User = require('../models/user');

module.exports = {
  tokensCleanUp: function() {
    const date = new Date();
    const daysToDelete = 1;
    const deletionDate = new Date(date.setDate(date.getDate() - daysToDelete));
    ActiveSession.deleteMany({date: {$lt: deletionDate}}, function(err, item) {
      return;
    });

    User.deleteMany({email: {$ne: 'test@test.com'}}, function(err, item) {
      return;
    });
  },
};


