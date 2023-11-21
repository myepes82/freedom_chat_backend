module.exports = {
    apps : [{
      name: "chat-service",
      cwd: "/app",
      script: "./dist/src/index.js",
      watch: false,
      exec_mode: "cluster",
      error_file: "/logs/error.log",
      out_file: "/logs/output.log",
      env: {
        NODE_ENV: "production",
      },
    }]
  }