# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

> [!NOTE]
> Compatible with @docusaurus/faster (rspack and swc). 

## TODO Today
- Customize landing page
- Support aufgabe admonition
- Set up dev and prod credentials in Azure
- Set up GitHub Pages Deployment with PROD credentials
- Set up GitHub API key in backend to enable CMS

## Quickstart
### Basics
1. Install and run Docker
2. Run `yarn global add dotenv-cli`

### Setting up the dev API
Clone https://github.com/GBSL-Informatik/teaching-api and run `yarn run install`. Complete the following steps within that same repository.

Run `docker compose --file dev_services.compose.yml up` to launch the DB container

The following users are created:
- Admin: `postgres` / `qSpEx2Zz8BS9`
- User for DB teaching_api: `teaching_api` / `zW4SMEXLHpXXxxk`

→ For the `teaching-api` DB, the resulting DB URL is `postgresql://teaching_api:zW4SMEXLHpXXxxk@localhost:5432/teaching_api`.

**Note:** To purge and recreate the DB, run `scripts/purge_dev_services.sh` and then re-run ``docker compose --file dev_services.compose.yml up`.

Now, create a `.env` file with the following contents:

```conf
DATABASE_URL="postgresql://teaching_api:zW4SMEXLHpXXxxk@localhost:5432/teaching_api"
USER_ID="<Some UUID>"
USER_EMAIL="<your email>@gbsl.ch"
USER_ROLE="ADMIN"
ALLOWED_ORIGINS="http://localhost:3000"
ALLOW_SUBDOMAINS="false"
NO_AUTH="true"
```

Finally, run `yarn run dev` to launch the API.

### Setting up the frontend
Clone this repository and run `yarn install`. Complete the following steps within that same repository.

Create a `.env` file with the following contents:

```conf
APP_URL="http://localhost:3000"
BACKEND_URL="http://localhost:3002"
DEFAULT_TEST_USER="<your email>@gbsl.ch"
```

Then, run `yarn run start` and visit `http://localhost:3000`.

### Important files and directories
_Check https://github.com/SilasBerger/teaching-website for inspiration._
- `siteConfig.ts`: Configure your website (title, navbar, footer, etc.).
- `docs/material`: This is where you keep all your teaching materials.
- `scriptsConfig.yaml`: Here, you distribute your teaching materials to your classes.
- `src`: This directory is managed by `teaching-dev` – do **NOT** edit.
- `website`: The site's custom "src"-type folder for custom components, etc. (not managed by `teaching-dev`). For instance, to integrate components from other sites (e.g. https://github.com/SilasBerger/teaching-website/tree/main/website/components), place them in `website/components`.

## ENV

| Variable                   | For            | Default                             | Example                         | Description                                                                                                                                                        |
| :------------------------- | :------------- | :---------------------------------- | :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `APP_URL`                  | Production     | `http://localhost:3000`             |                                 | Domain of the hosted app                                                                                                                                           |
| `BACKEND_URL`              | Production     | `http://localhost:3002`             |                                 | Url of the API Endpoint                                                                                                                                            |
| `CLIENT_ID`                | Production     |                                     |                                 | Azure ID: Client ID                                                                                                                                                |
| `TENANT_ID`                | Production     |                                     |                                 | Azure AD: Tenant Id                                                                                                                                                |
| `API_URI`                  | Production     |                                     |                                 | Azure AD: API Url                                                                                                                                                  |
| `STUDENT_USERNAME_PATTERN` | Production     |                                     | `@edu`                          | Users with usernames matching this RegExp pattern are displayed as students (regardless of admin status). If unset, all non-admin users are displayed as students. |
| `DEFAULT_TEST_USER`        | Development    |                                     | `admin.bar@bazz.ch`             | To log in offline. Email of the user to be selected by default. Must correspond to a user email found in the API's database.\*                                     |
| `OFFLINE_API`              | Dev/Production | `memory`                            | `true` | `memory` | `indexedDB` | In case the project shall be fully functional, but API persistent data is not needed (e.g. when run in Github Codespace), set this option to true (=`memory`).     |
| `SENTRY_DSN`               | Production     |                                     |                                 | Sentry DSN for error tracking                                                                                                                                      |
| `SENTRY_AUTH_TOKEN`        | Production     |                                     |                                 | Sentry Auth Token for error tracking                                                                                                                               |
| `SENTRY_ORG`               | Production     |                                     |                                 | Sentry Org for error tracking                                                                                                                                      |
| `SENTRY_PROJECT`           | Production     |                                     |                                 | Sentry Project for error tracking                                                                                                                                  |
| `GH_OAUTH_CLIENT_ID`       | Production     |                                     |                                 | Client ID for the GitHub OAuth app used for CMS auth                                                                                                               |

\* To change users, clear LocalStorage to delete the API key created upon first authentication.<br />

## Upgrade Docusaurus

To upgrade docusaurus, run:

```bash
yarn upgrade @docusaurus/core@latest @docusaurus/faster@latest @docusaurus/preset-classic@latest @docusaurus/theme-classic@latest @docusaurus/theme-common@latest @docusaurus/module-type-aliases@latest @docusaurus/plugin-rsdoctor@latest @docusaurus/tsconfig@latest @docusaurus/types@latest
```

## Upgrade tdev
After detatching a fork of teaching-dev, it will be necessary to periodically update the core framework.

To update to the lastest version of teaching-dev, run `yarn updateTdev` in the local repository (i.e. the detached fork). Afterwards, check the log for changes to non-tracked files and installable / upgradeable packages.

The update behavior can be customized by editing `updateTdev.config.yaml`. The following excerpt explains how the update behavior is configured:
```yaml
tdevPath: ../teaching-dev # The path to the mainline teaching-dev repository.
expectedTdevBranch: main # The expected branch for the mainline teaching-dev repository. Change this only to update a pre-release or historic branch.
trackedElements: # The elements to be synchronized from the mainline teaching-dev repository to the local repository.
    - src: docusaurus.config.ts # Sync the mainline teaching-dev `docusaurus.config.ts` file...
      dst: docusaurus.config.ts # ...to `docusaurus.config.ts` in the custom repository.
    - src: src/ # Sync the mainline teaching-dev `src/` directory...
      dst: src # ...to `src` in the custom repository (Caution: this will override / delete custom files in the custom `src` repository!)
    # ...
watchedElements: # Log changes to these files (glob patterns) in the mainline teaching-dev repository without modifying local files.
    - .env.example
    # ...
```