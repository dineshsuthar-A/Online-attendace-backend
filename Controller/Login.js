const con = require("../DB/db_config");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const data = req?.body;
    if (data?.type == 0) {

        con?.query("select * from students where rollno = ?", [data?.email], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.send({
                    "error": error?.sqlMessage,
                    "message": "Server error, Try again later"
                });
                return res;
            }
            if (result?.length > 0) {
                if (result[0]?.password == data?.password) {
                    res.status(200);
                    var token = jwt.sign({
                        id: result[0]?.id,
                        name: result[0]?.name,
                        class: result[0]?.class,
                        email: result[0]?.email,
                        phone: result[0]?.phone,
                        rollno: result[0]?.rollno
                    }, process.env.TOKEN);
                    res.send({
                        "message": "Logged In",
                        "type": 1,
                        "token": token,
                        "user": {
                            id: result[0]?.id,
                            name: result[0]?.name,
                            class: result[0]?.class,
                            email: result[0]?.email,
                            phone: result[0]?.phone,
                            rollno: result[0]?.rollno
                        }
                    });
                } else {
                    res.status(400);
                    res.send({
                        "message": "Wrong password",
                        "error": "password doesn't matched"
                    });
                }
                return res;
            } else {
                res.status(404);
                res.send({
                    "error": "User not found",
                    "message": "No user found with this username"
                });
                return res;
            }
        });
    } else if (data?.type == 1) {
        con?.query("select * from teachers where phone = ?", [data?.email], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.send({
                    "error": error?.sqlMessage,
                    "message": "error"
                });
                return res;
            }
            if (result?.length > 0) {
                if (result[0]?.password == data?.password) {
                    res.status(200);
                    var token = jwt.sign({
                        id: result[0]?.id,
                        name: result[0]?.name,
                        class: result[0]?.class,
                        email: result[0]?.email,
                        phone: result[0]?.phone
                    }, process.env.TOKEN);
                    res.send({
                        "message": "Logged In",
                        "type": 1,
                        "token": token
                    });
                } else {
                    res.status(400);
                    res.send({
                        "message": "Wrong password",
                        "error": "password doesn't matched"
                    });
                }
                return res;
            } else {
                res.status(404);
                res.send({
                    "error": "User not found",
                    "message": "No user found with this username"
                });
                return res;
            }
        });
    } else if (data?.type == 2) {
        con?.query("select * from admin where username = ? ", [data?.user], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400);
                res.send({
                    "error": error?.sqlMessage,
                    "message": "error"
                });
                return res;
            }
            if (result?.length > 0) {
                if (result[0]?.password == data?.password) {
                    res.status(200);
                    console.log(result[0]);
                    var token = jwt.sign({
                        id: result[0]?.id,
                        username: result[0]?.username,
                        password: result[0]?.password
                    }, process.env.TOKEN);
                    res.send({
                        "message": "Logged In",
                        "type": 2,
                        "token": token
                    });
                } else {
                    res.status(400);
                    res.send({
                        "message": "Wrong password",
                        "error": "password doesn't matched"
                    });
                }
                return res;
            } else {
                res.status(404);
                res.send({
                    "error": "User not found",
                    "message": "No user found with this username"
                });
                return res;
            }
        });
    }
}