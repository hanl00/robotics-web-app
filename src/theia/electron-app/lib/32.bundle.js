(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "../switch-workspace/lib/browser/switch-workspace-contribution.js":
/*!************************************************************************!*\
  !*** ../switch-workspace/lib/browser/switch-workspace-contribution.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "../node_modules/@theia/core/lib/browser/dialogs.js");
exports.SwitchWorkspaceCommand = {
    id: 'SwitchWorkspace.command',
    label: "Shows a message"
};
var SwitchWorkspaceCommandContribution = /** @class */ (function () {
    function SwitchWorkspaceCommandContribution(messageService) {
        this.messageService = messageService;
    }
    SwitchWorkspaceCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.SwitchWorkspaceCommand, {
            execute: function () { return _this.messageService.info('Hello World!'); }
        });
    };
    SwitchWorkspaceCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
    ], SwitchWorkspaceCommandContribution);
    return SwitchWorkspaceCommandContribution;
}());
exports.SwitchWorkspaceCommandContribution = SwitchWorkspaceCommandContribution;
var SwitchWorkspaceMenuContribution = /** @class */ (function () {
    function SwitchWorkspaceMenuContribution() {
    }
    SwitchWorkspaceMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.SwitchWorkspaceCommand.id,
            label: 'Say Hello'
        });
    };
    SwitchWorkspaceMenuContribution = __decorate([
        inversify_1.injectable()
    ], SwitchWorkspaceMenuContribution);
    return SwitchWorkspaceMenuContribution;
}());
exports.SwitchWorkspaceMenuContribution = SwitchWorkspaceMenuContribution;
var SwitchWorkspaceFrontendContribution = /** @class */ (function () {
    function SwitchWorkspaceFrontendContribution(fileSystem, workspaceService) {
        this.fileSystem = fileSystem;
        this.workspaceService = workspaceService;
    }
    SwitchWorkspaceFrontendContribution.prototype.switchWorkspace = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = new dialogs_1.ConfirmDialog({
                            title: 'Switch Workspace',
                            msg: 'Please ensure that you have saved your current progress before switching.'
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.workspaceService.close()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.workspaceService.open(new uri_1.default(event.data))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SwitchWorkspaceFrontendContribution.prototype.callback = function (event) {
        try {
            if (event.data.startsWith('setImmediate')) {
                return;
            }
            // alert("switching workspace to " + event.data);
            this.switchWorkspace(event);
        }
        catch (e) {
            console.log(e);
        }
    };
    SwitchWorkspaceFrontendContribution.prototype.onStart = function (app) {
        var _this = this;
        window.addEventListener("message", function (event) { return _this.callback(event); }, false);
    };
    SwitchWorkspaceFrontendContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_2.FileSystem)),
        __param(1, inversify_1.inject(workspace_service_1.WorkspaceService)),
        __metadata("design:paramtypes", [Object, workspace_service_1.WorkspaceService])
    ], SwitchWorkspaceFrontendContribution);
    return SwitchWorkspaceFrontendContribution;
}());
exports.SwitchWorkspaceFrontendContribution = SwitchWorkspaceFrontendContribution;


/***/ }),

/***/ "../switch-workspace/lib/browser/switch-workspace-frontend-module.js":
/*!***************************************************************************!*\
  !*** ../switch-workspace/lib/browser/switch-workspace-frontend-module.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var switch_workspace_contribution_1 = __webpack_require__(/*! ./switch-workspace-contribution */ "../switch-workspace/lib/browser/switch-workspace-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var frontend_application_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application */ "../node_modules/@theia/core/lib/browser/frontend-application.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(switch_workspace_contribution_1.SwitchWorkspaceCommandContribution);
    bind(common_1.MenuContribution).to(switch_workspace_contribution_1.SwitchWorkspaceMenuContribution);
    bind(frontend_application_1.FrontendApplicationContribution).to(switch_workspace_contribution_1.SwitchWorkspaceFrontendContribution);
});


/***/ })

}]);
//# sourceMappingURL=32.bundle.js.map