module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      env_production: {
        NODE_ENV: "production",
        POSRT: 80,
        SECRET: "mantap",
        DATABASE_URL:
          "postgresql://postgres:khoirulariffin@db.jxmsubxkjvqyeghvbdwa.supabase.co:5432/postgres",
      },
    },
  ],
};
