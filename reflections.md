# Lab 2: Server-to-Server Communication

## Reflection Questions

### 1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

Reformatting the data allows us to return only the information the client needs. A clean, minimal response makes the data easier to understand and work with while reducing unnecessary information.

### 2. In the `catch` block, why is it better to send a generic error message to the client instead of the actual error object from Axios?

It's better to send a generic error message because detailed error objects could expose sensitive information about the server or application. Logging the detailed error on the server allows developers to troubleshoot problems while keeping unnecessary information private.

### 3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like `?language=de`)?

I would modify the external API URL by adding a query parameter to specify the language. For example, I could add `?language=de` to request a fact in German if the API supports it.
