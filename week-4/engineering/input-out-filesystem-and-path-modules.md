## Input / Output

### Input/output (the fs and path modules)

#### What kind of tasks does the fs module enable you to perform that you wouldn't be able to in the browser?

- Managing the reading and writing of large and complex loads of data, and how they interact and communicate with one another.

- Node was initially conceived for the purpose of making asynchronous I/O easy and convenient, allowing your code to continue running while it does its work and calls a callback function when it’s done.

###### The file system (fs) module

The node file system (fs) module provides functions for working with files and directories.

For example, there is a function called ``` readFile``` , which reads a file and then calls a callback with the file’s contents.
##### ``` fsreadFile ```

``` js
	var fs = require("fs");
	fs.readFile("file.txt", "utf8", function(error, text) {
  	if (error)
    	throw error;
  	console.log("The file contained:", text);
	});

```

The second argument to readFile ``` "utf8" ``` indicates the character encoding used to decode the file into a string. Most modern systems use UTF-8 to encode text, so unless you have reasons to believe otherwise, "utf8" is a safe bet. If you do not specify an encoding, Node will assume you are interested in the binary data and will give you a Buffer object instead of a string. This is an array-like object that contains numbers representing the bytes in the files.

Other common functions:

``` readdir ```
Will return the files in a directory as an array of strings.
[Doctumentation here]()

``` fs.stat ```
Will retrieve information about a file,
[Doctumentation here](https://nodejs.org/docs/latest/api/fs.html#fs_fs_stat_path_callback)

``` fs.rename ```  
will rename a file.
[Doctumentation here](https://nodejs.org/docs/latest/api/fs.html#fs_fs_rename_oldpath_newpath_callback)

``` fs.unlink ```  
will remove a file.
[Doctumentation here](https://nodejs.org/docs/latest/api/fs.html#fs_fs_unlink_path_callback)

##### ``` fs.access ```
Tests a user's permissions for the file or directory specified by path.
[Documentation here.](https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback)


#### What are some of the issues of working with paths when accessing a file system?

It can become easy for filepaths to become inaccurately referenced. When this happens, your code won't know how to respond, or what files it should be reading / retrieving / serving back to the user. It's therefore important to take measures to ensure that filepaths are accurately referenced.

#### How does the path module help, and why should you use it instead of manually writing file paths as strings?

The path module contains several helper functions to help make path manipulation easier.

The first function worth mentioning is ```path.normalize```. This function takes a path (in the form of a string) and strips it of duplicate slashes and normalizes directory abbreviations, like '.' for 'this directory' and '..' for 'one level up'. For example:

```js

var path = require('path');
path.normalize('/a/.///b/d/../c/')
// '/a/b/c/'
```

A closely related function to normalize is join. This function takes a variable number of arguments, joins them together, and normalizes the path.

``` js

var path = require('path');
path.join('/a/.', './//b/', 'd/../c/')

// '/a/b/c'

```

``` __dirname ``` Returns a string of the directory name of the current module

```js

var endpoint = request.url;
var filePath = path.join(__dirname, "../directoryName" + endpoint);
```
A possible use of join is to manipulate paths when serving urls:
``` js

var path = require('path');
var url = '/index.html';
path.join(process.cwd(), 'static', url);
// '/home/nico/static/index.html'

```



Helpful links:

[Eloquent Javascript chapter on Node](http://eloquentjavascript.net/20_node.html)

[Node.js File System documentation](https://nodejs.org/docs/latest/api/fs.html)

[Nodejitsu Article on using the Node path module](https://docs.nodejitsu.com/articles/file-system/how-to-use-the-path-module/)
