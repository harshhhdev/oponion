![image](https://user-images.githubusercontent.com/69592270/125812804-4a70e8bd-5614-4eab-b00b-0af7a7ee9ba9.png)

<p align="center">
  <a href="https://oponion.vercel.app/">
    <h2 align="center">Oponion</h2>
  </a>
</p> 
<p align="center">⚡ Creating, voting, and sharing polls made simple</p>
<p align="center">
  <a href="https://www.figma.com/file/DzKnopExFvjt64AZEpdVPV/Oponion?node-id=0%3A1&viewport=112%2C63%2C0.2566978633403778">Design Board</a>
    ·
  <a href="https://oponion.vercel.app/">Demo</a>
 </p>

# 🚀 Quickstart 

Run the website locally

```
git clone https://github.com/harshhhdev/oponion.git
```

## Setting up the project

```bash
cd oponion

# Install deps
yarn
```

# Setting up [Firebase](https://firebase.google.com/)

Now, rename `components/FirebaseSDK.example.config.ts` to `FirebaseSDK.config.ts`

Go to [Firebase](https://console.firebase.google.com/u/0/), and create a new project. Enable the realtime database.

If using anayltics, uncomment the `firebase.anayltics()` function

Go into project settings, and copy paste the content inside of the FirebaseConfig to the object

## Starting server

```bash
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

# 🔧 Tools Used

 - [Firebase](https://firebase.google.com/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Next.js](https://nextjs.org/)
 - [Apache ECharts](https://echarts.apache.org/)
 - [Prettier](https://prettier.io/)
 - [ESLint](https://eslint.org/)
 - [Figma](https://www.figma.com/)

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```
