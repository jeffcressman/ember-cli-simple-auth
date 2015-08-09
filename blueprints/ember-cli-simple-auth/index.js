module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-simple-auth', 'git://github.com/jeffcressman/ember-simple-auth.git#0d3f77cc20f9092dc72c80b1cddc625842a740a9');
  }
};
