# NodeJS on CPanel

This repo includes a simple NodeJS app using ExpressJS. It is intended as a proof of concept for deploying a NodeJS app to CPanel with GitHub Actions.

# Deployment

This repo includes a GitHub Actions deployment workflow to publish your app to the CPanel server at `phoenix.sheridanc.on.ca`. This runs automatically each time you push changes to GitHub.

# CPanel Setup

GitHub needs an SSH Key to login to your CPanel server for deployment. To create one, login to your CPanel account at `https://phoenix.sheridanc.on.ca:2083/`. Then, in the Security section:

1. Go to `SSH Access` > `Manage Keys` > `Generate a New Key`
2. Generate a passphrase and save it, then click `Generate Key`
3. Go back, find the Public Key and click `Manage`, then `Authorize`
4. Go back, find the Private Key and click `View/Download` -- this is your key, you will need this for the GitHub Setup.

# Configure GitHub Secrets

Now add your CPanel SSH Key and Username to GitHub Secrets so that GitHub can login to your CPanel server during deployment. The following variables need to be added as Secrets.

- `CPANEL_USER` (e.g. ixd0000, or sikkemha)
- `CPANEL_SSH_KEY` (paste from the CPanel setup step)

To add these settings, navigate to your repository on GitHub, and then click: `Settings` > `Secrets and Variables` > `Actions` > `Repository Secrets` > `New Repository Secret`.
Repeat for both variables above.

# Naming Convention for Folders and URLs

During deployment we automatically copy your code to a folder in your CPanel home directory. This folder will be named to match the repository name. Similarly the app will become reachable at a URL that includes the repository name. Example: if your repository is called `my-repo`, then you'll end up with a folder at `/home/user/my-repo`. Furthermore, you app will then be reachable at a URL similar to this: `https://user.phoenix.sheridanc.on.ca/my-repo`.
