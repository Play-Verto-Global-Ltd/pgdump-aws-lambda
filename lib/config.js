const path = require('path');
const { S3_REGION, PGDATABASE, PGUSER, PGPASSWORD, PGHOST, S3_BUCKET, ROOT } = process.env;

// default config that is overridden by the Lambda event
module.exports = {
    S3_REGION: S3_REGION,
    PGDATABASE: PGDATABASE,
    PGUSER: PGUSER,
    PGPASSWORD: PGPASSWORD,
    PGHOST: PGHOST,
    S3_BUCKET: S3_BUCKET,
    ROOT: ROOT,
    PGDUMP_PATH: path.join(__dirname, '../bin/postgres-11.6'),
    // maximum time allowed to connect to postgres before a timeout occurs
    PGCONNECT_TIMEOUT: 15
}
