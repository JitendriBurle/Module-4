# Q1. Role of Frontend (FE)
### Q. Explain the role of Frontend (FE) in a web application. Include points related to:
* User interface
* User interaction
* Communication with backend

##### Ans. Frontend Development in web application is the process of creating user interface of a website.Frontend helps users to interact with the website and allows communication with backend.Some of the tools that can be used in frontend development are Html, Css, JavaScript, React, Angular, Vue, etc.
* Html is used for creating the structure and elements to be used in a website.
* CSS is used for styling and designing the website.
* JavaScript is used for creating the logic and interaction.
* React is a library which is used for building dynamic UIs.
* Angular and Vue are the frameworks through which we can develop frontend applications.

# Q2. Role of Backend (BE)
### Q. Explain the role of Backend (BE) in a web application. Include points related to:

* Server-side processing
* Database handling
* Security and authentication

##### Ans. Backend development handles the server-side logic, database, and core functionality of web applications. It ensures smooth communication between the server and client using languages and frameworks like Node.js, Django, and Spring.The backend is connected to security and authentication by acting as the central "gatekeeper" and data manager for an application.It is the backbone of web applications.The technologies used are Python, Java, Ruby, Node.js, SQL databases.

* Python is a programming language used for backend development with its framworks like Django, Flask.
* Java is a programming language used for creating reliable backend and is scalable.It uses the framworks like Springboot.
* Ruby is loved for its clean, readable syntax that makes it easy to write and maintain backend code. 
* PHP is one of the oldest and most widely used languages for web development.It is a powerful tool for building complex backend systems.
* Node.js is a runtime environment for javascript allowing backend developers to use the same language across both the frontend and backend.
* SQL is a database system which is used to store, organize, and manage data that is used by the application. 

![Frontend + Backend](https://frontendmasters.com/guides/front-end-handbook/2016/images/what-is-front-end-dev.png)

# Q3. Business Logic
### Q. What is Business Logic? Explain in detail and give at least 3 real-world examples where business logic is applied in a web application.

##### Ans. The set of guidelines that determine how a web application should function is known as business logic. It regulates the processing of data and what users are permitted to do.It controls how data is processed as well as what users can do.It ensures that every action complies with the company's real-world regulations by positioning itself between the frontend and the database.

As an example,

* Online shopping: figuring out how much it will cost overall, applying savings, and looking at stock.
* Banking app: Ensuring that the user has sufficient funds and complies with transfer restrictions.
* School portal: Only permitting registration for courses after dues has been cleared. 

# Q4. Client–Server Model
### Q. What is the Client–Server Model? Explain:

* Who is the client
* Who is the server
* How communication happens between them

##### Ans. The Client-Server Model is a distributed architecture where clients request services and servers provide them. It underpins many modern systems, including websites, email, and cloud storage platforms.

##### How Does the Client-Server Model Work?
**Client:** A client is any device or software that initiates communication by requesting data or services from a server. Common client applications include:

* Web browsers (e.g., Chrome, Firefox)
* Email apps (e.g., Gmail, Outlook)

**Server:** A server is a powerful systems that listens for and responds to client requests by delivering data or performing tasks. Servers often handle multiple simultaneous client requests. Common server applications include:

* Web Servers (e.g., Apache, Nginx)
* Email Servers
* Database servers

![Client Server Model](https://media.geeksforgeeks.org/wp-content/uploads/20240419170238/Client-Server-Model.webp)

##### How the Browser Interacts With the Servers?
The process of interacting with servers through a browser involves several steps:

1. User Enters the URL (Uniform Resource Locator):
The user types a website address (e.g., www.example.com) into the browser's address bar.
2. DNS (Domain Name System) Lookup:
The browser contacts a DNS server to convert the domain into an IP address.
3. Establishing a Connection:
The browser sends an HTTP/HTTPS request to the server using the resolved IP address.
4. Server Responds:
The server sends back website files (HTML, CSS, JavaScript, images).
5. Browser Renders the Webpage
* DOM interpreter: Processes HTML to structure the page.
* CSS interpreter: Applies styles
* JavaScript Engine: Adds interactivity (using JIT compilation for performance).

![Client Server Request and Response](https://media.geeksforgeeks.org/wp-content/uploads/20231128175510/Client-Server-Model-2.png)

# Q5. Three-Tier Architecture
### What is 3-Tier Architecture in web applications? Explain each layer:

* Presentation Layer
* Application (Business) Layer
* Data Layer
* Also mention why this architecture is used.

###### Ans. The 3-tier architecture is a client-server architecture that separates the user interface, application processing, and data management into three distinct tiers or layers. The 3-tier architecture is widely used in modern web applications and enterprise systems because it offers scalability, flexibility, and security. Here is a brief description of each tier in the 3-tier architecture:

* Presentation Tier (User Interface Layer)
* Application Tier (Business Logic Layer)
* Data Management Tier (Database Layer)

![Three-tier architecture in web development](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*WggW_vCVv0trIbBfMGnZ1g.png)

1. Presentation Layer (Client Layer):

This layer is what users interact with directly. Its primary responsibility is to present data to the user in a human-readable format and to capture user input. The presentation layer doesn’t contain much business logic; its main job is to display information and handle user interactions.
* This layer represents the interface through which users interact with the application.
* It includes components like web browsers, mobile apps, or desktop applications.
* Its main purpose is to present data to users and to capture user input.
* Technologies used in this layer include HTML, CSS, Frontend Frameworks and Libraries: React, Angular, Vue.js, etc.

2. Application Layer (Server-Side Layer):

This layer acts as the middleman between the presentation layer and the data layer. It contains the core business logic of the application, including processing user requests, executing business rules, and coordinating with the data layer to fetch or store data.
* Technologies Used:
    - Server-side Programming Languages: Python, Java, C#, PHP, Node.js, etc.
    - Frameworks and Libraries: Django, Flask, Spring (Java), ASP.NET (C#), Express.js (Node.js), etc.
    - Middleware: Connects the presentation layer with the data layer and processes requests (e.g., Express.js middleware in Node.js).

3. Data Layer (Backend Layer):

This layer is responsible for managing the storage and retrieval of data. It stores the application’s data and provides mechanisms to access and manipulate that data.
* It includes databases and any other data storage mechanisms.
* It responds to requests from the application layer by retrieving or modifying data.
* Technologies Used:
    - Databases: MySQL, PostgreSQL, SQL Server, Oracle, MongoDB, etc.

# Q6. JavaScript as a Backend Language
### Why is JavaScript used as a backend language? Explain with points such as:

* Performance
* Ecosystem
* Popular backend frameworks

##### Ans. Backend development refers to the "behind the scenes" work of a website or application. It includes managing databases, handling client requests, performing business logic, and sending responses back to the frontend. It is essential for making the website functional and responsive to user interactions.

JavaScript has become popular for backend development due to several reasons:

* Using JavaScript for both frontend and backend development allows for code reusability, as developers can share code between the client and server and also reduces development time.
* JavaScript's asynchronous programming model allows backend applications to handle multiple tasks concurrently without blocking the execution thread. 
* JavaScript has a vast and vibrant ecosystem with a plethora of libraries, frameworks, and tools tailored for backend development.
* It also provides popular backend frameworks like Node.js, Express.js.

