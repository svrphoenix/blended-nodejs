const controllerWrapper = require("../helpers/controllerWrapper");
const { signupService, loginService, logoutService } = require("../services/authServices");

const signup = controllerWrapper(async (req, res, next) => {
    const user = await signupService(req.body);
    res.status(201).json(user);
});

const login = controllerWrapper(async (req, res, next) => {
    const { user, token } = await loginService(req.body);
    res.json({user,token})
})
const logout = controllerWrapper(async (req, res, next) => {
    await logoutService();
    res.status(200).json({message:"Logout successfull"})
})


module.exports = { signup,login,logout };