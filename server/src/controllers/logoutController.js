const logout = (req, res) => {
  res.clearCookie("logincookie");
  res.send({
    message: "Logged out!"
  })
}

export default logout;
