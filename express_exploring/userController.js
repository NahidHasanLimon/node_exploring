exports.getAllUser = (req,res) => {
    res.send('Its a users route');
}
exports.login = (req,res) => {
    res.send('Its a login route');
}

exports.logout = (req,res) => {
    res.send('Its a logout route');
}

exports.profile = (eq,res) => {
    res.send('Its a logged user profile route');
}

exports.singleUser = (req,res) => {
    res.send('Its a single user profile route : '+req.params.userID);
}

exports.createUser = (req,res) => {
    res.send('Its a create user route');
}