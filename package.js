Package.describe({
  "summary": "Reactive Data Source for Search",
  "version": "1.4.3",
  "git": "https://github.com/rafaelcorreiapoli/search-source.git",
  "name": "rafa93br:search-source-highlight-local"
});

Npm.depends({
  "body-parser": "1.10.1"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(['SearchSource']);
});

Package.onTest(function(api) {
  configurePackage(api);

  api.use(['tinytest', 'mongo-livedata'], ['client', 'server']);
});

function configurePackage(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use([
    'tracker', 'underscore', 'mongo', 'reactive-var',
    'http', 'ejson', 'check', 'ddp'
  ], ['client']);

  api.use(['ejson', 'check', 'ddp'], ['server']);
  
  api.use('meteorhacks:picker@1.0.1', 'server');

  api.add_files([
    'lib/server.js',
  ], ['server']);

  api.add_files([
    'lib/client.js',
  ], ['client']);
}
