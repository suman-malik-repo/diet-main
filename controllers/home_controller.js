module.exports.home = async function (req, res) {

   
        return res.render('home', {
            title: 'DietStudentHub'
        });
}


module.exports.notice = function (req, res) {
    return res.render('notice', {
        title: 'Diet||Notice'
    })
}

module.exports.gallery = function (req, res) {
    return res.render('gallery', {
        title: 'Diet||Gallery'
    })
}

module.exports.program = function (req, res) {
    return res.render('program', {
        title: 'Diet||Programs'
    })
}

module.exports.login = function(req,res){
    return res.render('login',{
        title: 'Login||SignUp'
    })
}