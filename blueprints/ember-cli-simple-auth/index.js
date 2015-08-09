module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-cli-simple-auth', 'git://github.com/jeffcressman/ember-cli-simple-auth.git');
  }
};
