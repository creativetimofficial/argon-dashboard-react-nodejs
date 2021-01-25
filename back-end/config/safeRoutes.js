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

const reqAuth = (req, res, next) => {
  const token = String(req.headers.authorization);
  ActiveSession.find({token: token}, function(err, session) {
    if (session.length == 1) {
      return next();
    } else {
      return res.json({success: false, msg: 'User is not logged on'});
    }
  });
};

module.exports = {
  reqAuth: reqAuth,
};
