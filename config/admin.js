module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a40a3dc759f1b28310e640602ec4b32a'),
  },
});
