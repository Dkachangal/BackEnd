// THIS CONTROLLER HANDLES ALL THE LOGIC FOR FUNCIOTNS REALTED TO HOME
const getAddHome = (req, res, next) => {
    res.render('addHome', {pageName: 'Add Home'});
}










// exports
exports.getAddHome = getAddHome;