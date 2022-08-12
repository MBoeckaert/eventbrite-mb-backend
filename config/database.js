module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "eventbrite-mb-backend"),
      user: env("DATABASE_USERNAME", "mboeckaert"),
      password: env("DATABASE_PASSWORD", "devine4life"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
