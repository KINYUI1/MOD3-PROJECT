import { getToken } from "./users-service";

const BASE_URL = "/api/users";
const BLOG_URL = "/api/blogs"

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}
export function updateUser(userData,id) {
  return sendRequest(`${BASE_URL}/:${id}`, "PUT", userData);
}

export function deleteUser(id){
  sendRequest(`${BASE_URL}/deleteuser/${id}`, "DELETE")
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function addblog(blog){
  // return sendRequest(`${BLOG_URL}/addblog`, 'POST',blog )
  fetch(`${BLOG_URL}/addblog`,{
    method:'POST',
    body:  blog,
    // headers: {
    //   "Content-Type": "multipart/form-data;boundary=MyBoundary"
    // }
  })
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
if(url === `${BLOG_URL}/addblog`){
  //  delete options.headers 
  //  options.headers = { "Content-Type": "multipart/form-data" }
}

  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}