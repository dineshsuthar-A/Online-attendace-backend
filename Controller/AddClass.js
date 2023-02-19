const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.addClass = (req, res) => {
    console.log(req.body, req.user);
    if (!(req?.body?.class || req?.body?.section)) {
        return res.status(400).json({
            "message": "Invalid parameter sent"
        });
    }
    try {
        var classs = req?.body?.class + "-" + req?.body?.section;
        con.query("insert into class(classname) values(?)", [[classs]], (error, result) => {
            if (error) {
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "Successfully added the class"
            });
            return res;
        });
    } catch (err) {
        return res.status(400).json({
            "error": err,
            "message": "Server error occured"
        });
    }
    return res;
}

exports.deleteClass = (req, res) => {
    console.log(req.body, req.user);
    if (!(req?.body?.id)) {
        return res.status(400).json({
            "message": "Invalid parameter sent"
        });
    }
    try {
        var classs = req?.body?.id;
        con.query("delete from class where id = ?", [[classs]], (error, result) => {
            if (error) {
                res.status(400).json({
                    "error": error?.sqlMessage,
                    "message": "SQL error on server"
                });
                return res;
            }
            res.status(200);
            res.send({
                "message": "Successfully deleted the class"
            });
            return res;
        });
    } catch (err) {
        return res.status(400).json({
            "error": err,
            "message": "Server error occured"
        });
    }
    return res;
}

exports.getattendanceClass = (req, res) => {
    con.query("select * from class where id not in (select distinct(class) from attendence where date = cast(Date(Now()) as Date)) order by classname", (error, result) => {
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
            "data": result,
            "message": "Successfull"
        });
        return res;
    });
    return res;

}
exports.getClass = (req, res) => {
    con.query("select * from class order by classname", (error, result) => {
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
            "data": result,
            "message": "Successfull"
        });
        return res;
    });
    return res;
}