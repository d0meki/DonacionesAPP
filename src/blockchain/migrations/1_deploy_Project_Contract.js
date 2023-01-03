const Project = artifacts.require("Project");

module.exports = function (deployer) {
    const project_goal = 50;
    deployer.deploy(Project, project_goal);
};