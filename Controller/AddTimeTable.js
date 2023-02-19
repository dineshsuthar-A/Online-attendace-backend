const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.addTimeTable = (req, res) => {
    console.log(req?.body);
    try {
        con.query("delete from timetable where day = ? and class=?", [req?.body?.day, req?.body?.classid], (errorr, resultt) => {
            con.query('INSERT INTO `timetable`( `subject`, `day`, `class`) VALUES (?)', [[req?.body?.subject, req?.body?.day, req?.body?.classid]], (error, result) => {
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
        });

    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;
}

exports.getTimeTable = (req, res) => {
    try {
        con.query("select subject from timetable where day = ? and class=?", [req?.query?.day, req?.query?.classid], (error, resultt) => {
            if (error) {
                console.log(error);
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
                });
                return res;
            }
            if (resultt.length > 0) {
                res.status(200);
                res.send({
                    "message": "success",
                    "subject": resultt[0].subject
                });
            } else {
                res.status(400);
                res.send({
                    "message": "success",
                    "error": "No data Present"
                });
            }
            return res;
        });
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        });
    }
    return res;
}


