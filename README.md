# cookie.js
a tiny library for cookie handling in pure JavaScript

## Usage

### Set Cookie

By default the cookie lifetime is set to 1000 days. So you only need to set 1st and 2nd parameter.
<pre><code>cookie('name','value');</code></pre>

You can set custom expiration time by setting the 3rd parameter. This example will set cookie lifetime to 10 days:
<pre><code>cookie('name','value','10');</code></pre>

### Get Cookie
<pre><code>cookie('name');</code></pre>

### Delete Cookie
<pre><code>cookie('!name');</code></pre>
