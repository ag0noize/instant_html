<h1><strong>Instant HTML:</strong> <br>Starter HTML template with Gulp, Babel and jQuery</h1>

<p>
	<img src="https://raw.githubusercontent.com/ag0noize/instant_html/master/app/img/header_image.jpg" alt="Starter HTML Template">
</p>

<p>Instant HTML is starter HTML5 template with Gulp, Babel and jQuery. It also contains Autoprefixer, Clean-CSS, Uglify, Image minifier (JPG and PNG only), Browsersync and Vinyl-ftp for better deployment of your projects.</p>

<h2>Getting started:</h2>

<ol>
<li><a href="https://github.com/ag0noize/instant_html/archive/master.zip">Download</a> <strong>Instant HTML</strong> from GitHub and extract it to a project folder.</li>
<li>Install all dependencies:</li>

``` bash
npm i

```
<li>Run the template:</li>

``` bash
gulp

```
</ol>

<h2>Gulp tasks to use:</h2>

<ul>
<li><strong>gulp</strong>: default gulp task (watches for changes in project folder and minifies css and js files after saving) for project development;</li>
<li><strong>gulp deploy</strong>: minify js, css and images and deploy your project on the server via <strong>vinyl-ftp</strong>;</li>
</ul>

<h2>Need to know:</h2>

<ol>
<li>Place your third party JS libraries and plugins in <strong>app/js/libs</strong>;</li>
<li>Custom JS located in <strong>app/js/scripts.js</strong>;</li>
<li>Place your third party CSS styles for plugins in <strong>app/css/libs</strong>;</li>
<li>Custom CSS located in <strong>app/css/styles.css</strong> and <strong>app/css/styles-resp.css (for media queries)</strong>;</li>
<li>If necessary, you can change the order of your JS and CSS files in <strong>gulpfile.js</strong> (scripts and styles variables);</li>
<li><strong>Important!</strong> Before deploying your project you should config vinyl-ftp in <strong>gulpfile.js</strong> to access your ftp server (more information about vinyl-ftp config <a href="https://github.com/morris/vinyl-ftp" target="_blank">here</a>);</li>
</ol>
