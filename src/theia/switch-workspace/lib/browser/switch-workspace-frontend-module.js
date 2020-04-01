"use strict";
/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var switch_workspace_contribution_1 = require("./switch-workspace-contribution");
var common_1 = require("@theia/core/lib/common");
var frontend_application_1 = require("@theia/core/lib/browser/frontend-application");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(switch_workspace_contribution_1.SwitchWorkspaceCommandContribution);
    bind(common_1.MenuContribution).to(switch_workspace_contribution_1.SwitchWorkspaceMenuContribution);
    bind(frontend_application_1.FrontendApplicationContribution).to(switch_workspace_contribution_1.SwitchWorkspaceFrontendContribution);
});
//# sourceMappingURL=switch-workspace-frontend-module.js.map