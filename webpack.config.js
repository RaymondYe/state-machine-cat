module.exports = (pEnv = 'prod') => {
    const lRetval = {
        entry: './docs/smcat-online-interpreter.js'
    };

    if (pEnv === 'prod') {
        lRetval.output = {
            filename : `smcat-online-interpreter.min.js`,
            path : `${__dirname}/docs/`
        };
    } else {
        lRetval.output = {
            filename : `smcat-online-interpreter.bundle.js`,
            path : `${__dirname}/docs/dev/`
        };
        lRetval.devtool = "source-map";
    }

    return lRetval;
};
