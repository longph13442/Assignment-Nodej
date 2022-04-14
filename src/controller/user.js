import user from "../model/user";

export const signup = async (req, res) => {
    console.log(" vừa thực hiện sign up !");
    const { email, name, password } = req.body
    try {
        const existUser = await user.findOne({ email }).exec() // kiểm tra xem email đã tồn tại chưa
        if (existUser) { // nếu email đã tồn tại
            res.status(400).json({
                message: 'Email đã tồn tại !' // trả về message
            })
        }

        const users = await new user({ email, name, password }).save();
        res.json({
            users: {
                _id: users.id,
                name: users.name,
                email: users.email
            }
        })
    } catch (error) {
        res.status(400).json({
            message: " không đăng kí được tài khoản !"
        })
    }
}

export const signin = async (req, res) => {
    console.log("vừa thực hiện đăng nhập !");
    const { email, password } = req.body;
    const users = await user.findOne({ email }).exec()
    if (!users) {
        return res.status(400).json({
            message: " Email không tồn tại !"
        })
    }
    if (!users.authenticate(password)) {
        return res.status(400).json({
            message: " Sai mật khẩu !"
        })
    }
    res.json({
        message: "Đăng nhập thành công !",
        users: {
            _id: users.id,
            name: users.name,
            email: users.email
        }
    })
}