const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.getData = (req, res) => {
    try {
        con.query('SELECT \'students\' AS students, COUNT(*) as number FROM students UNION SELECT \'teachers\' AS teachers, COUNT(*) as numberofteacher FROM teachers Union SELECT  \'present\' AS present, COUNT(*) as present FROM attendence where status=1 and date = cast(Date(Now()) as Date) Union SELECT \'absent\' AS absent, COUNT(*) as absent FROM attendence where status=0 and date =  cast(Date(Now()) as Date)', (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
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
        });
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;
}

exports.getStudentAttendanceData = (req, res) => {
    try {
        con.query('SELECT *  FROM attendence where rollno = ?', [req?.user?.rollno], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
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
        });
    } catch {
        res.status(400);
        res.send({
            "error": "server error"
        })
    }
    return res;
}