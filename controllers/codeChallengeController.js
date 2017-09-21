'use strict';

function getMyInfo(req, res) {
    var returnData = {
        email: 'scott.scialabba@gmail.com',
        name: {
            first: 'Scott',
            last: 'Scialabba'
        },
        website: 'http://scott.scialabba.com',
        github_repo_link: 'https://github.com/Scott-S/cc-javascript.git'
    };
    res.status(201);
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(returnData));
    res.end();
};

module.exports = {
    getMyInfo: getMyInfo
};