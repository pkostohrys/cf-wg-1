export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        uri: 'mongodb://local.codefresh.io:27017/nest',
    },
});
