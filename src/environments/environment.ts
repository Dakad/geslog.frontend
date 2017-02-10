// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const env = {
  production: false,
  api : {
    url : 'app/mocks',

    connect : '/api-lo/',
    getStudLogins : '/api-logins.json',
    getProfils : '/api-profils-list-res.json',
    upsertProfil : '/profil/',
    
    upsertUser : '',
    getUsers : '/api-users-list-res.json',

    assignApp : '/access',
    getApplis : '/api-applis-list-res.json',
    upsertAppli : '',

    getScript : '/api-script-res.json'
  }
};
