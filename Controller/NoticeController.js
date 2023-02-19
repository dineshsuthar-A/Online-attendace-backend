const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.addNotice = (req, res) => {
    console.log(req?.body);
    try {
        con.query("insert into notices(title,description) values(?)", [[req?.body?.title, req?.body?.description]], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.send({
                    "error": error?.sqlMessage,
                    "message": "Server error, Try again later"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "success"
            });
            return res;
        })
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        });
        return res;
    }
    return res;
}

exports.getNotice = (req, res) => {
    console.log(req?.body);
    try {
        con.query("select * from  notices order by created_at desc", (error, result) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.send({
                    "error": error?.sqlMessage,
                    "message": "Server error, Try again later"
                });
                return res;
            }
            console.log(result);
            res.status(200);
            res.send({
                "message": "success",
                "data": result
            });
            return res;
        })
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        });
        return res;
    }
    return res;
}


exports.updateNotice = (req, res) => {
    try {
        con.query("update notices set title = ? , description = ? where id = ?", [req?.body?.title, req?.body?.description, req?.body?.id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.send({
                    "error": error?.sqlMessage,
                    "message": "Server error, Try again later"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "success"
            });
            return res;
        })
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        });
        return res;
    }
    return res;
}


exports.deleteNotice = (req, res) => {
    console.log(req?.body);
    try {
        con.query("delete from notices where id= ?", [req?.body?.id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.send({
                    "error": error?.sqlMessage,
                    "message": "Server error, Try again later"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "success"
            });
            return res;
        })
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        });
        return res;
    }
    return res;
}