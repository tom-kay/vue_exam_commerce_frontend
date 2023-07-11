module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        changeOrigin: true,
        ws: false,
      },
    },
  },
};
