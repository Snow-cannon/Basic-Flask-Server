# How to Run

To run, use the following command on the top level follder:

```bash
python3 backend.py
```

This will start the server. Then, go to your browser open the URL `localhost:3000` to see the site.

# How to Modify

The file structure is as follows:

```md
/project
  /static
    /css
      - css files
    /js
      - js files
    /imgs
      - images
  /templates
    - html files
  backend.py
```

All files should go into their respective folders as labeled above. This will allow the server to locate them as needed.

## Additional Endpoints

The `backend.py` file is what connects the browser to the server. It lists the endpoints and functions within the file as well as how to connect. An example file is listed below:

```python
@app.route('/add')
def add():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    return jsonify({"result": a + b})
```

`@app.route('/add')` creates an endpoint at the url 'http://localhost:3000/add', and the function that follows is run on the url request. In this case, if you search the url `/add?a=1&b=2`, it will find `a=1` and `b=2` and return a resulting JSON object `{"result": 3}`.

The `request` object is a part of the Flask library, and contains all parts of the HTTP request. The `request.args.get(arg_name)` returns the parameter from the url, as described above. For example, `/add?a=1` has the parameter `a`, and it is set to a value of `1`. This can be used to send data back and forth.

## HTTP Requests

There are many kinds of HTTP requests. However the 3 you will want are:

- GET
  -  Retrieves information from the server. Is not used to modify information on server in any way
- POST
  - Sends information to the server to modify its information
- DELETE
  - Deletes information from the server based on the request

To make a request to the server from the browser you can use a fetch request. The assumed method for `fetch` is GET, but you can also use all ofther methods as will be shown later. The following fetch sends a GET request to the `/add` endpoint of your server:

```js
const request = await fetch(`/add?${URLSearchParams({
  param1: param1_value,
  param2: param2_value,
  ...
})}`);
```

To get the data from a request, you can use the following format:

```js
// Get request result object as above
if(request.ok){
  const requestData = await request.json()
  // Use request result here
} else {
  console.error('There was an error in the request');
}
```

The parameters in `URLSearchParams` must match the params on the python endpoint in order to allow the function to work properly. Currently there is no error checking, so sending a bad request will cause it to break.