module.exports = {
    first:  ['jshint', 'clean'],
    second: ['blanket', 'copy:coverage'],
    third:  ['mochaTest'],
    fourth: ['string-replace']
};
