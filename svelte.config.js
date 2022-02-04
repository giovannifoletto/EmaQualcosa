import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            // hydrate the <div id="svelte"> element in src/app.html
            target: '#svelte',
            adapter: adapter({
                // default options are shown
                pages: 'build',
                assets: 'build',
                fallback: '200.html',
            }),
            /*
            If you need to serve your file from a sub directory
            paths: {
            	base: '/your-sub-dir',
            },
            */
        })
    }
}