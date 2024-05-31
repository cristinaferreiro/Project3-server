module.exports = app => {
  const authRouter = require("./auth.routes")
  app.use("/api/auth", authRouter)

  const artworkRouter = require("./artwork.routes")
  app.use("/api/artworks", artworkRouter)

  const userRouter = require("./user.routes")
  app.use("/api/users", userRouter)

  const exhibitionRouter = require("./exhibition.routes")
  app.use("/api/exhibitions", exhibitionRouter)

  const uploadRouter = require("./upload.routes")
  app.use("/upload", uploadRouter)
}
