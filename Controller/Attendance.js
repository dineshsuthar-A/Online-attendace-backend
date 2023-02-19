const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.attendaceSubmit = (req, res) => {
    data = req?.body;
    try {
        var arr = data.data;
        var newarr = [];
        for (var i = 0; i < arr.length; i++) {
            newarr.push([arr[i].student.rollno, arr[i].student.class, Number(arr[i].status)]);
        }
        con.query("insert into attendence(`rollno`,`class`,`status`) values ?", [newarr], (error, result) => {
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
                "message": "ok"
            });

        })

    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;
}