const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.addStudent = (req, res) => {
    data = req?.body;
    try {
        con.query('INSERT INTO `students`(`name`, `rollno`, `class`, `password`, `email`, `phone`) VALUES(?)', [[req?.body?.name, req?.body?.rollno, req?.body?.class, req?.body?.password, req?.body?.email, req?.body?.phone]], (error, result) => {
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

exports.getClassStudent = (req, res) => {
    data = req?.query;
    try {
        con.query('select * from students where class=? order by rollno', [data?.class], (error, result) => {
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
exports.updateStudent = (req, res) => {
    data = (req?.body?.data);
    try {
        con.query('update students set name = ? , password=?, email =?, phone = ?,rollno=?,class=? where id = ?', [data?.name, data?.password, data?.email, data?.phone, data?.rollno, data?.class, data?.id], (error, result) => {
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

exports.getStudentData = (req, res) => {
    data = req?.body;
    try {
        con.query('select * from students order by rollno', (error, result) => {
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

exports.deleteStudent = (req, res) => {
    id = (req?.body?.id);
    try {
        con.query('delete from students where id = ?', [id], (error, result) => {
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