const _ = require('lodash');

module.exports.OMIT = (object) => {
    return _.omit(object, ['createdAt', 'updatedAt']);
}