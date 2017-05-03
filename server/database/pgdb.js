const humps = require('humps');

module.exports = pgPool => {
    return {
        getUser({id}) {
            console.log(`pg: requesting user with id: ${id}`);
            return pgPool.query(`
                select * from app_user
                where id = $1
            `, [id]).then(
                res => humps.camelizeKeys(res.rows[0]),
                err => console.error(err)
            );
        }
    }
};