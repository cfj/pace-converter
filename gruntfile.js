module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-ssh');

  grunt.initConfig({
    sftp: {
      deploy: {
        files: {
          './': ['dist/.*', 'dist/**']
        },
        options: {
          host: process.env.DEPLOY_HOST,
          port: process.env.DEPLOY_PORT,
          path: process.env.DEPLOY_PATH,
          username: process.env.DEPLOY_USERNAME,
          password: process.env.DEPLOY_PASSWORD,
          showProgress: true,
          srcBasePath: 'dist',
          createDirectories: true
        }
      }
    }
  });
};
