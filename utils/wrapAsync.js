module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);  // use `next` instead of `err`
    };
};
