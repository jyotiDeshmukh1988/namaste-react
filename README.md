# Namaste React 

# Parcel - It provide all the things not alone by also taking the help of the other libraries as well
- Dev build
- Setup Local Server for you
- HMR - Hot Module Replacement => Whenever u change the content of the file it quickly display changes on the browser becoz it use the file watching alogrithm
- File Watching Algorithm - written in C++ 
- Caching - Faster Builds => Whenever u have the file you will see build time reduces becoz of the cache
- Image Optimization
- Minification
- Bundling 
- Compress the files
- Content Hashing - Parcel automatically includes content hashes in the names of all output files, which enables long-term browser caching. Whenever the contents of a bundle changes, the hash included in the filename will be updated, triggering invalidation of CDN and browser caches.
- Code Spliting 
- Differential Bundling - It generates different bundles for old browsers so your app will work on all the old browsers
- Diagnostic - If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
- Error Handling
- Https - Sometimes, you may need to use HTTPS during development. For example, you may need to use a certain hostname for authentication cookies, or debug mixed content issues. Parcel’s dev server supports HTTPS out of the box.
- Tree Shaking - Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". 
- Different dev and prod bundles