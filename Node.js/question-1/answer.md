# Node.js Architecture

Node.js is a runtime environment that allows JavaScript to run outside the browser. It's built to keep up with lots of users at once for it's non-blocking, event-driven design instead of opening a brand new thread for every single thing, Node.js uses something called an event loop. It’s like a single line where tasks wait their turn. This is why it’s so speedy and good at dealing with lots of things at once without getting bogged down. It handles them efficiently.JS gets things done really well by using just one main thread, and it does this with a little help from some basic system tools.


## JavaScript Engine (V8)

* V8 is Google’s JavaScript engine written in C++.
* It is responsible for executing JavaScript code in Node.js.
* V8 converts JavaScript into machine code using Just-In-Time (JIT) compilation.
* It manages:

  * Call Stack
  * Heap memory
  * Garbage collection

> V8 only runs JavaScript; it does not handle file systems, networking, or asynchronous I/O.

## Node.js Core APIs

* Node.js provides built-in APIs such as:

  * `fs` (File System)
  * `http`
  * `path`
  * `crypto`
  * `timers`
* These APIs look like JavaScript but are backed by native C/C++ code.
* They allow JavaScript to interact with the operating system in a safe and efficient way.

## Native Bindings

* Native bindings act as a bridge between JavaScript and C/C++ code.
* When a core API is called, the request is passed through native bindings.
* Native bindings forward the task to lower-level libraries such as libuv.

Example flow:

* JavaScript calls `fs.readFile()`
* Native bindings convert the call
* libuv handles the actual file system operation

## Event Loop

* The event loop is the heart of Node.js asynchronous behavior.
* It continuously checks:

  * Is the call stack empty?
  * Are there pending callbacks in queues?
* If the stack is empty, it pulls tasks from queues and executes them.
* The event loop allows Node.js to handle thousands of requests using a single thread.

> The event loop is implemented by libuv, not by V8.

## libuv

### What is libuv?

* libuv is a C library used by Node.js.
* It provides:

  * Event loop
  * Asynchronous I/O
  * Thread pool
  * Cross-platform support

### Why Node.js needs libuv

* JavaScript does not have built-in support for:

  * Non-blocking file system access
  * Networking at OS level
  * Multithreading
* libuv fills this gap by interacting directly with the operating system.

### Responsibilities of libuv

* Managing the event loop
* Handling file system operations
* Performing DNS lookups
* Managing background threads
* Handling timers and signals
* Providing consistent behavior across different operating systems

## Thread Pool

### What is a Thread Pool?

* A thread pool is a collection of background threads.
* Default size is 4 threads.
* Used for tasks that would otherwise block the main thread.

### Why Node.js uses a Thread Pool

* Some operations are slow or blocking by nature.
* Running them on the main thread would freeze the application.
* The thread pool allows these tasks to run in parallel without blocking JavaScript execution.

### Operations handled by the Thread Pool

* File system operations (`fs`)
* Cryptographic functions (`crypto`)
* Compression tasks (`zlib`)
* DNS lookup (`dns.lookup`)

> Networking and timers do NOT use the thread pool.

## Worker Threads

### What are Worker Threads?

* Worker threads are real JavaScript threads.
* Each worker has:

  * Its own V8 instance
  * Its own event loop
* Workers can run JavaScript code in parallel.

### Why are Worker Threads needed?

* Node.js is single-threaded by default.
* CPU-intensive JavaScript tasks can block the event loop.
* Worker threads allow heavy computation to be moved off the main thread.

Common use cases:

* Image processing
* Data analysis
* Large calculations

### Difference between Thread Pool and Worker Threads

| Thread Pool                | Worker Threads              |
| -------------------------- | --------------------------- |
| Used internally by Node.js | Used directly by developers |
| Written in C/C++           | Runs JavaScript             |
| Handles system-level tasks | Handles CPU-heavy JS logic  |
| Fixed purpose              | Fully customizable          |

## Event Loop Queues

Node.js uses different queues to manage task execution order.

### Macro Task Queue

* Contains tasks such as:

  * `setTimeout`
  * `setInterval`
  * `setImmediate`
  * I/O callbacks

Example:

setTimeout(() => console.log("Timer"), 0);

### Micro Task Queue

* Contains tasks such as:

  * `Promise.then()`
  * `Promise.catch()`
  * `queueMicrotask()`
  * `process.nextTick()`

Example:

Promise.resolve().then(() => console.log("Promise"));

### Execution Priority

Execution order in Node.js:

1. `process.nextTick()`
2. Microtasks (Promises)
3. Macrotasks (Timers and I/O)

Example:

setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
process.nextTick(() => console.log("NextTick"));

Output:

NextTick
Promise
Timeout