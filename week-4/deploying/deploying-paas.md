### Cloud Platforms / Servers

##### What is PaaS?
- The term **PaaS** means **platform as a service** - a category of cloud computing services designed to provide a platform that a developer can use to develop, run and deploy their apps. The infrastructure is managed externally, so this provides simplicity.
- External servers should always be used for deploying apps. There are three main types:  **cloud platform (PaaS), virtual servers (VPS) and dedicated servers** (also known as bare metal).
- Servers are stored physically in large data centers, special buildings with enterprise-grade computers, networking hardware and infrastructure.
- Cloud platforms are generally **virtualised** and **easily scalable**. This means that a virtual computer is run inside of a single, or multiple computers, and resources can be allocated appropriately, depending on how much you need.
- A PaaS will manage parts of the web stack such as the front-facing server (e.g. **nginx**)
- PaaS is managed, so you get support generally. Unmanaged servers mean that you only get support with hardware/network issues that are on the data center's side

##### PaaS History:
- Google launched their App Engine in 2008, which is said to have transformed the cloud computing space into a fully-fledged industry overnight


##### Why is it useful to be able to deploy your code to a cloud platform, rather than running it locally?
- Running an app locally is generally only viable for development/testing, but even then, a PaaS can be used for dev/testing.
- An app can be hosted 24/7 easily if it's running on an external server.
- For production, an app should not be hosted locally for a number of reasons:
    - Non-business ISPs generally prohibit 24/7 servers in their terms and conditions and can thus terminate the contract
    - Home connections will have fair use bandwidth limits - there's no such thing as unlimited
    - Consumer networking infrastructure is fragile, and will not cope with many users
    - Fast network connections - which is good for scalability and quick page load. Servers will mostly have at the least, a 100Mbps or 1Gbps connection.
- Cloud platforms automate most **"system administration"** such as updates, installing software, deploying databases, etc, which are things which have to be done on local machines, VPSes or dedicated servers.

##### What services are there that can provide you with a platform for your code? Heroku is a good start, but try to find some others.
- **Heroku** is one of the most commonly used services for Node apps; however, there are a number of other services which can be used.
    - Heroku automatically deploys NodeJS, databases such as PostgreSQL, nginx to act as a front-facing server, etc.
    - Uses AWS it seems, so cost can be high, as you're paying for 2 platforms effectively
- **Amazon** have a number of managed hosting services, on their AWS platform:
    - [Amazon Docs - Deploying NodeJS web app on AWS](https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/)
    - [scotch.io Guide - Deploying MEAN stack app on AWS EC2](https://scotch.io/tutorials/deploying-a-mean-app-to-amazon-ec2-part-1)
- **Google Cloud Platform**
    - [Quickstart for Node.js in the Google App Engine](https://cloud.google.com/nodejs/)
- **DigitalOcean** - VPS, not full PaaS, but has some automation/management
    - [One-click install and deploy Node.js](https://www.digitalocean.com/products/one-click-apps/node-js/)
- **Linode** - VPS, not full PaaS, but has some automation/management
    - [Deploying NodeJS with Docker (automatic install script)](https://www.linode.com/docs/applications/containers/node-js-web-server-deployed-within-docker)
- **OVH** - PaaS, VPS and dedicated servers (unmanaged)
    - [PaaS site](https://www.runabove.com)

##### Running a local/VPS/dedicated server 24/7
- You can use `npm install forever -g` and `forever start index.js`
- Use `forever stop index.js` to stop the server.
- This allows you to run a server without having to leave the window open, or be connected to the server constantly

**Demos**
- Heroku demo
- VPS/dedi demo



### Sources / Resources Used for Research
- [Wikipedia for PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) <!-- Very trustworthy resource for information ;) -->
- [ZDNet article on Google App Engine launch](http://www.zdnet.com/article/comparing-amazons-and-googles-platform-as-a-service-paas-offerings/)
- [How Heroku works](https://www.quora.com/Scalability-How-does-Heroku-work-2)
