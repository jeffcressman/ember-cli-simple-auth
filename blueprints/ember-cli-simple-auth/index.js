module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-simple-auth', 'git://github.com/jeffcressman/ember-simple-auth.git');
  }
};
