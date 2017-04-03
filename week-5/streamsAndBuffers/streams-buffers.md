# Streams & Buffers

### 1) Streams

#### Data Access in Node
-  Fully buffered access vs. partially buffered access - these differ in terms of:
  - How the data is exposed
  - The amount of memory used to store the data

#### Fully Buffered Access
- Asynchronous `readFile()`
- Synchronous `readFileSync()`
- The data is returned in **one big chunk** after all of it has been read
- Node needs to allocate enough memory to store all of that data

#### Partially Buffered Access
- Asynchronous `read()` `createReadStream()`
- Synchronous `readSync()`
- Data input is treated as a **series of events**, occurring as the data is being read or written - this allows us to **access data as it is being read**
- Partially-buffered methods (listed above) allow us to specify the size of the buffer and read the data in small chunks

#### Streams
- Streams are a form of **partially buffered access**
- Streams return small pieces of data (using a buffer) and trigger an event when each new piece of data is available for processing
- Since streams are partially buffered, we can process each piece of data **as soon as it is read** - this means we don't necessarily need to buffer / save the whole file into memory
- The Node stream interface consists of two parts:
  - Readable streams
  - Writeable streams

#### Readable Streams
- Readable streams emit the following events:
  - `data` emits a buffer / string
  - `end` is emitted when the stream receives an EOF (End of Function) - this indicates that there will be no more `data` events
  - `error` is emitted if there's an error receiving data
- To bind a callback to an event, use `stream.on(eventname, callback)` - the HTTP request object is one example of a readable stream that we've already covered:
  - `request.on('error', function(err) { ... });`
  - `request.on('data', function(data) { ... });`
  - `request.on('end', function() { ... });`
- Readable streams also have the following methods:
  - `request.pause()` pauses incoming data events
  - `request.resume()` resumes after a `pause()`
  - `request.destroy()` stops the stream emitting any more events

### 2) Buffers
- In Node, buffers are a **high-performance alternative** to strings, representing raw C memory allocation
- Buffers act like fixed-size arrays of integers, each represented as a **hexidecimal number** when run through `console.log()`

```js
var buffer = new Buffer(10);
buffer[0] = 255;
console.log(buffer); // <Buffer ff 00 00 00 00 4a 00 00 00 00>
```
- Since buffers represent raw memory, any buffer content you haven't assigned (anything other than `buffer[0]` in the above example) will be whatever happens to sit in that position in memory (e.g. the `4a` seen above)
- Compared to strings, buffers are fixed in size, and have very limited predefined functions (missing convenient ones like `String.replace()` for example)
- If you want to use string functions on buffers, you can convert them to strings with `buffer.toString()` first

## Resources
- http://book.mixu.net/node/ch9.html
- https://www.sitepoint.com/basics-node-js-streams/
- https://www.tutorialspoint.com/nodejs/nodejs_streams.htm
