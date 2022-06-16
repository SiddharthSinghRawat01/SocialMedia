module.exports.setFlash = function(req,res,next){
    res.locals.flash = {
        'success': req.flash('success'),
        'error': req.flash('err')
    }
    next();
}

// flsh messages are stored in session