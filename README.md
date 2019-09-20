# url-shortner

## Run locally

```bash
# create new env file, update all variables with correct values
cp .env.dist .env && vim .env
# run the app
npm install 
npm run dev
```

## Database
When we develop new version in the future, sometime we need to change or add new table in database
`changelog` is sql command to control when database change.
Please run sql command under [changelog](changelog) folder follow your current version.

```
changelog/
  db-1.0.0.sql
  ...
```