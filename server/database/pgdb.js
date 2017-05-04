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
        },

        getRecipesByUserId(userId) {
            console.log(`pg: requesting recipes for user_id: ${userId}`);
            return pgPool.query(`
                select * from recipe
                where user_id = $1
            `, [userId]).then(
                res => humps.camelizeKeys(res.rows),
                err => console.error(err)
            );
        },

        getShoppingListsByUserId({userId}) {
            console.log(`pg: requesting shopping lists for user_id: ${userId}`);
            return pgPool.query(`
                select * from shopping_list
                where user_id = $1
            `, [userId]).then(
                res => humps.camelizeKeys(res.rows),
                err => console.error(err)
            );
        }
    }
};