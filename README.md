# Next and DatoCMS starter template.

Run this to generate the files:

```bash
npx create-next-app --example https://github.com/rd3m/dato-starter <YOUR_APP_NAME>
```

---

### Config

Add a .env file with your NEXT_DATOCMS_API_TOKEN and add your token to the graphql.config.yml file.

Queries go in the graphql dir, run:

```bash
npm run generate-ts-types
```

to generate a queries and types file.
