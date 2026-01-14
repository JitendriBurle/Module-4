# Understanding Project Management in Node.js

## a. Package Managers

### What is a package manager?

A package manager is a tool that helps developers **install, update, remove, and manage external libraries** (packages) used in a project. Instead of writing everything from scratch, developers can reuse existing code created by others.

Example:

* Installing a library to handle dates instead of writing date logic manually.

### Why do we need package managers in backend development?

In backend development, applications often depend on many libraries for:

* Server creation
* Database connections
* Authentication
* Validation

A package manager:

* Saves development time
* Keeps dependencies organized
* Ensures everyone in a team uses the same versions

### Problems faced if package managers are not used

Without a package manager:

* Developers must manually download libraries
* Version mismatches can break the application
* Hard to track which library is used where
* Difficult to set up the project on another system

## b. NPM (Node Package Manager)

### What is NPM?

NPM is the default package manager for Node.js. It allows developers to download and manage thousands of open-source packages from the NPM registry.

It is automatically installed when Node.js is installed.

### Why is NPM important for Node.js applications?

NPM is important because it:

* Manages third-party libraries
* Handles dependency versions
* Makes project setup easy
* Helps run scripts like start, build, or test

Without NPM, building and maintaining Node.js applications would be very difficult.

### How NPM helps in managing dependencies

* Dependencies are listed in `package.json`
* NPM installs exact versions required by the project
* It downloads dependencies into the `node_modules` folder
* Uses `package-lock.json` to ensure consistent installs across systems

Example:

* Running `npm install express` automatically adds Express to the project.

---

## c. Backend Project Initialization

### Command used to initialize a backend (Node.js) project

The command used is:

npm init

This command creates a new Node.js project.


### Difference between `npm init` and `npm init -y`

#### npm init

* Asks the user multiple questions
* Allows custom project configuration
* Useful when you want control over project details

#### npm init -y

* Skips all questions
* Creates a project with default values
* Faster and commonly used for quick setup

## d. Files and Folders Created After Project Initialization

### package.json

* The main configuration file of a Node.js project
* Stores:

  * Project name and version
  * Dependencies and scripts
  * Entry point of the application

Importance:

* Required to run and manage the project
* Helps others understand project setup

### node_modules

* Contains all installed dependencies
* Automatically created by NPM
* Can become very large in size

Importance:

* Required for the application to run
* Can be recreated using `npm install`

### package-lock.json

* Records the exact versions of installed packages
* Ensures consistent dependency installation
* Prevents unexpected issues due to version changes

Importance:

* Helps maintain stability across environments

## Files to Push or Not Push to GitHub

### Files/Folders that should NOT be pushed

* `node_modules`

  * Very large
  * Can be recreated using `npm install`

These are usually added to `.gitignore`.

### Files that MUST be committed

* `package.json`
* `package-lock.json`

Why:

* They define dependencies and project structure
* Required to install dependencies correctly on another system