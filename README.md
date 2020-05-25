# Starter for yarn with lerna

## To start the application
1) yarn install
2) check the workspaces using `yarn workspaces info`
```
$ yarn workspaces info
yarn workspaces v1.22.4
{
  "@coolwombat/components": {
    "location": "packages/components",
    "workspaceDependencies": [
      "@coolwombat/styles"
    ],
    "mismatchedWorkspaceDependencies": []
  },
  "@coolwombat/styles": {
    "location": "packages/styles",
    "workspaceDependencies": [],
    "mismatchedWorkspaceDependencies": []
  }
}
Done in 0.06s.
```
4) Run story book  using `yarn workspace @coolwombat/components run storybook`

```
yarn workspace v1.22.4
yarn run v1.22.4
warning package.json: No license field
$ start-storybook -p 3003
```

