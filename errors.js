const notImplemented = {
    status_code: 400,
    title: 'Bad Request',
    details: 'Not Implemented',
    content_type: 'application/problem+json'
};

const internalError = {
    status_code: 500,
    title: 'Internal Error',
    details: 'Internal Server Error',
    content_type: 'application/problem+json'
};

const notFound = {
    status_code: 404,
    title: 'Not Found',
    details: 'Not Found',
    content_type: 'application/problem+json'
};


module.exports.notImplemented = notImplemented
module.exports.internalError = internalError
module.exports.notFound = notFound

