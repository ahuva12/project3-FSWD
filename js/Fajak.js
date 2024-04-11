//import handleRequest from './server.js';

class FXMLHttpRequest {
    constructor() {
      this.readyState = 0; 
      this.status = 0;
      this.responseText = null;
      this.onreadystatechange = null;
      this.method = null;
      this.url = null;
      this.async = 0;
      this.headers = {};
      this.timeout = 0;
      this.responseType = "json";
      this.withCredentials = false;
      this.upload = new XMLHttpRequestUpload();
    }
  
    open(method, url, async) {
      console.log('open');
      this.method = method;
      this.url = url;
      this.readyState = 1; 
      this.async = async;
    }
  
    setRequestHeader(header, value) {
      this.headers[header] = value;
    }
  
    send(data=null) {
      console.log('send');
      if (this.readyState !== 1) throw new Error("Invalid state");
      else {
          if (this.url == `file:///C:/Users/user/Desktop/%D7%AA%D7%A9%D7%A4%D7%93%20%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%90/Full-Stack/project3-FSWD/html/application.html`) {
            this.responseText = handleRequestApp(data, this.method);
          }
          else {
            this.responseText = handleRequestEnter(data, this.method);
          }
          this.status = 200;
          this.readyState = 4; 
          this.onreadystatechange();
      }
    }

    abort() {
        this.readyState = 0;
        this.status = 0;
        this.responseText = null;
    }

    getAllResponseHeaders() {
        if (this.readyState < 2 || this.status === 0) {
          return null;
        }
    
        let headers = "";
        for (let header in this.headers) {
          headers += `${header}: ${this.headers[header]}\r\n`;
        }
        return headers;
    }

    getResponseHeader(header) {
        if (this.readyState < 3 || this.status === 0) {
          return null;
        }
    
        const lowerdHeader = header.toLowerCase();    
        for (let key in this.headers) {
          if (key.toLowerCase() === lowerdHeader) {
            return this.headers[key];
          }
        }
    
        // If the header is not found, return null
        return null;
    }  
  }
  
  class XMLHttpRequestUpload {
    constructor() {
      // This is just a placeholder for XMLHttpRequestUpload object
      // You can add properties and methods if necessary
    }
  }

//  export { FXMLHttpRequest };

