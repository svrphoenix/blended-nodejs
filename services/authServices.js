const bcrypt = require('bcryptjs');

const HttpError = require('../helpers/HttpError');
const { User } = require('../models/User');
const { createTokens } = require('../helpers/createTokens');

const signupService = async body => {
  const user = await User.findOne({ email: body.email });
  if (user) {
    throw new HttpError(409, 'This user is already exist');
  }
  const hashedPassword = await bcrypt.hash(body.password, 12);
  return await User.create({ ...body, password: hashedPassword });
};

const loginService = async body => {
  const user = await User.findOne({ email: body.email });
  if (!user) {
    throw new HttpError(401, 'Email or paswword is uncorrect');
  }
  const isPasswordCorrect = await bcrypt.compare(body.password, user.password);
  if (!isPasswordCorrect) {
    throw new HttpError(401, 'Email or paswword is uncorrect');
  }
  const { accessToken, refreshToken } = createTokens(user);
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      refresh_token: refreshToken,
    },
    { new: true }
  );
  return { user: updatedUser, token: accessToken };
};

const logoutService = async body => {
  await User.findByIdAndUpdate(req.user._id, { refresh_token: null });
};

module.exports = { signupService, loginService, logoutService };
