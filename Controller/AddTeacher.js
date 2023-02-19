const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.addTeacher = (req, res) => {
    try {
        con.query('INSERT INTO `teachers`(`name`, `password`,`email`, `phone`) VALUES (?)', [[req?.body?.name, req?.body?.password, req?.body?.email, req?.body?.phone]], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "success"
            });
            return res;
        });
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;
}
exports.deleteTeacher = (req, res) => {
    id = (req?.body?.id);
    try {
        con.query('delete from teachers where id = ?', [id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "success",
            });
            return res;
        });
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;
}
exports.updateTeacher = (req, res) => {
    data = (req?.body?.data);
    try {
        con.query('update teachers set name = ? , password=?, email =?, phone = ? where id = ?', [data?.name, data?.password, data?.email, data?.phone, data?.id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "success",
            });
            return res;
        });
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;

}
exports.getTeacherData = (req, res) => {
    data = req?.body;
    try {
        con.query('select * from teachers order by id', (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "success",
                "data": result
            });
            return res;
        });
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;
}