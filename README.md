# Git Tracker
### Meta-project tracker
## Running the app and making it work.

#### 1. Clone the repository locally.
- With your desired CLI, go to where you want to download this project.
- Run the `git clone` command as follows.
```
git clone https://github.com/ragomez7/git-tracker.git
```

#### 2. Change directories into the cloned project and install the project dependencies with the following CLI command:
```bash
# change directories
cd git-tracker
# install project dependencies 
npm install
```

#### 3. Generate a Github access token. This token is necessary to access the Github API. You must provide this token as an environment variable to the app. [Click here to generate a token](https://github.com/settings/tokens)
- [If you need more help, click here for a guide on Github personal access tokens and how to generate one](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- Create a .env.local file in your root directory.
- Create a key-value pair in .env.local as follows:
```
GITHUB_ACCESS_TOKEN=<GITHUB-ACCESS-TOKEN>
```
![env-var-file](https://res.cloudinary.com/dg8htxonw/image/upload/v1679268507/env-var-file_q4byaz.jpg)
#### 4. Then, run the app:

```bash
# run npm build script
npm run build 
# then run npm start script
npm run start
```

#### 5. Open [http://localhost:3000](http://localhost:3000) to visit the app locally.
##### You're in!

## What this application does.

This application tracks the git commits done within the same app, and provides commit-by-commit information in chronological order.

Next.js' getServerSideProps server-side rendering feature is used to fetch this data at request time.

## Technologies
![My Skills](https://skills.thijs.gg/icons?i=js,ts,react,next,nodejs,tailwind)

## Visit the deployment
####  [Deployed with Vercel](https://git-tracker-rho.vercel.app/)
[![deployment image](https://res.cloudinary.com/dg8htxonw/image/upload/v1679267721/git-tracker_bbndpk.jpg)](https://git-tracker-rho.vercel.app/)