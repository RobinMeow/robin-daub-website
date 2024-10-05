# RobinsHomepage

A little bit about myself.

## Dev - Initial Setup

1. Clone the Repository
2. run `npm install` (this will install all packages and and get rid of various relating error messages)
3. Refer to the [Firebase](docs/firebase.md) and [Workflows](docs/workflows.md) file for further things, if at all, needed.

> Make sure you have the global packages available via the path variable
> (in windows it would an environment varibale.
> You can simply add `C...absolutePathTo\AppData\Roaming\npm`.
> Make sure to use backslash, and not forward slash, and to have the npm folder,
> which contains the cmd .ps files if you look into it, as the last folder,
> and not npm\nodes_modules because, the said cmds will make use of the node_modules folder)
>
> I'am using, firebase, firebase-tools, http-server and @angular/cli
> http-server is the only optional thing in here.

### Environments

- go to [Firebase Console](https://console.firebase.google.com/) and log in
- find "Project Settings"
- open the 'General' tab and scroll down
- There should be a section with "your apps" and within your app a "Firebase Admin SDK" which will display your firebase configuration

> Firebase Console UI updates regulary. Literally everytime Im on it, its new.
