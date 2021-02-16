# GitHub-Search-Application
- Search github users
- Search github repositories

**Home Page**
[![Home](https://github.com/vineeth-pappu/GitHub-Search-Application/raw/main/design/home.png "Home")](https://github.com/vineeth-pappu/GitHub-Search-Application/raw/main/design/home.png)

<br>

**Users Search Results**
[![Users](https://github.com/vineeth-pappu/GitHub-Search-Application/raw/main/design/users.png "Users")](https://github.com/vineeth-pappu/GitHub-Search-Application/raw/main/design/users.png)

<br>

**Repositories Search Results**
[![Repos](https://github.com/vineeth-pappu/GitHub-Search-Application/raw/main/design/repos.png "Repositories")](https://github.com/vineeth-pappu/GitHub-Search-Application/raw/main/design/repos.png)

# Technology Stack
- React
- Redux and Redux-Persist
- Typescript
- Express
- Redis

# Development Process
- Define Project
- Create backlogs/issues
- Set Milestone
- Update backlogs/issues as and when developing
- Close backlogs/issues once completed
- Create dedicated branch for development & features
- Practise atomic commits
- Post development raise PR to master branch
- Merge to master & Create a release

# Project Structure

Follow the instructions present in **[Client](https://github.com/vineeth-pappu/GitHub-Search-Application/tree/main/client)** and **[Server](https://github.com/vineeth-pappu/GitHub-Search-Application/tree/main/server)** to run the application.

**[Client](https://github.com/vineeth-pappu/GitHub-Search-Application/tree/main/client)** - contains client side React app.
Read more about Client app [here](https://github.com/vineeth-pappu/GitHub-Search-Application/blob/main/client/README.md)

**[Server](https://github.com/vineeth-pappu/GitHub-Search-Application/tree/main/server)** - contains server side Express app.
Read more about Server app [here](https://github.com/vineeth-pappu/GitHub-Search-Application/blob/main/server/README.md)


# Summary

- Redis is used to implement server side data caching. By default data is cached for 2hrs(can be changed from the env file).
- Redux-Persist is used to cache data on the client side. Search results are cached to prevent same api calls