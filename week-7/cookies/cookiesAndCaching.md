## Cookies & Caching

#### what cookies are ?
 Cookies are small files which are stored
 on a user's computer, They are designed to hold a modest amount of data specific to a particular client and website, and can be accessed either by the web server or the client computer.

 This allows the server to deliver a page tailored to a particular user, or the page itself can contain some script which is aware of the data in the cookie and so is able to carry information from one visit to the website (or related site) to the next.

 https://github.com/FACN1/research/blob/master/cookies.png


#### how they can be used to remember stateful information ?

* Cookies were invented to solve the problem **how to remember information about the user**:

  * When a user visits a web page, his name can be stored in a cookie.

  * Next time the user visits the page, the cookie "remembers" his name.

# Example:
###### In the example to follow, we will create a cookie that stores the name of a visitor.


* A function to **set** a cookie value

``` javascript
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
```
* A function to **get** a cookie value

``` javascript
  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
      return "";
  }

```
* A function to **check** a cookie value

``` javascript
  function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
  }
```

# Caching
Research what caching is, and why is it important for your application's performance.

## What is Caching?
Caching is the process of storing data in a cache.
A cache is an area of a computer’s memory devoted to temporarily storing recently used information.

#### Content stored includes(known as representations):
* HTML pages
* images
* files
* Web objects

#### Results from:
* Earlier computations
* Duplicate of data stored elsewhere

### Web Caches/ HTTP Caches
Web browsers employ web caches to store previous responses form web servers.

Web caches reduce the amount of information that needs to be transmitted across the network, as information previously stored in the cache can often be re-used.

Most caching occurs without the user knowing about it. For example, When a user returns to a Web page they have recently accessed, the browser can pull those files from the cache instead of the original server because it has stored the user’s activity.

#### Advantages
* It is faster and more efficient for the user to access the stored content, as it saves time.
* lessens the traffic on the network, and would be more cost-efficient if the client is paying for traffic.
