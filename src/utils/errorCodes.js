const clientSideErrorCodes = Object.freeze({
    BAD_REQUEST : 400,
    UNAUTHORISED : 401,
    NOTFOUND : 404
});
const serverSideErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED : 501,
    SERVICE_UNAVAILABLE: 503
});
const successCodes = Object.freeze({
    OK:200,
    CREATED:201,
})
module.exports = {
    clientSideErrorCodes,
    serverSideErrorCodes,
    successCodes
};
