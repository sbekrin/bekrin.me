export function extractAssetsPath(locals) {
    if (locals.webpackStats) {
        const { assets, outputOptions } = locals.webpackStats.compilation;
        const [ css, js ] = [ /\.css$/, /\.js$/ ].map((regex) => (
            Object.keys(assets)
                .filter((value) => value.match(regex))
                .map((value) => outputOptions.publicPath + value)
        ));

        return { css, js };
    }

    return {
        css: [],
        js: [ '/bundle.js' ]
    };
}
