(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "../../../../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!**************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!********************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!***************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!*************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../../../../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../../../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../../../../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/regenerator/index.js":
/*!*********************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../../../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/language-client-contribution.js":
/*!**********************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/language-client-contribution.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../../../node_modules/@theia/core/lib/common/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../../../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../../../node_modules/@theia/core/lib/browser/index.js");
var language_client_services_1 = __webpack_require__(/*! ./language-client-services */ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js");
var language_client_factory_1 = __webpack_require__(/*! ./language-client-factory */ "../../../../node_modules/@theia/languages/lib/browser/language-client-factory.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../../../../node_modules/@theia/workspace/lib/browser/index.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../../../../node_modules/@theia/core/lib/common/promise-util.js");
exports.LanguageClientContribution = Symbol('LanguageClientContribution');
var BaseLanguageClientContribution = /** @class */ (function () {
    function BaseLanguageClientContribution(workspace, languages, languageClientFactory) {
        this.workspace = workspace;
        this.languages = languages;
        this.languageClientFactory = languageClientFactory;
        this.deferredConnection = new promise_util_1.Deferred();
        this.toDeactivate = new common_1.DisposableCollection();
        this.stop = Promise.resolve();
        this.waitForReady();
    }
    Object.defineProperty(BaseLanguageClientContribution.prototype, "languageClient", {
        get: function () {
            return this._languageClient ? Promise.resolve(this._languageClient) : this.ready;
        },
        enumerable: true,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BaseLanguageClientContribution.prototype.waitForActivation = function (app) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var activationPromises = [];
        var workspaceContains = this.workspaceContains;
        if (workspaceContains.length !== 0) {
            activationPromises.push(this.waitForItemInWorkspace());
        }
        var documentSelector = this.documentSelector;
        if (documentSelector) {
            activationPromises.push(this.waitForOpenTextDocument(documentSelector));
        }
        if (activationPromises.length !== 0) {
            return Promise.all([
                this.workspace.ready,
                Promise.race(activationPromises.map(function (p) { return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, p];
                            case 1:
                                _a.sent();
                                resolve();
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                console.error(e_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }); }))
            ]);
        }
        return this.workspace.ready;
    };
    BaseLanguageClientContribution.prototype.activate = function () {
        var _this = this;
        if (this.toDeactivate.disposed) {
            if (!this._languageClient) {
                this._languageClient = this.createLanguageClient(function () { return _this.deferredConnection.promise; });
                this._languageClient.onDidChangeState(function (_a) {
                    var newState = _a.newState;
                    _this.state = newState;
                });
            }
            var toStop = new common_1.DisposableCollection(common_1.Disposable.create(function () { })); // mark as not disposed
            this.toDeactivate.push(toStop);
            this.doActivate(toStop);
        }
        return this.toDeactivate;
    };
    BaseLanguageClientContribution.prototype.deactivate = function () {
        this.toDeactivate.dispose();
    };
    BaseLanguageClientContribution.prototype.doActivate = function (toStop) {
        return __awaiter(this, void 0, void 0, function () {
            var startParameters, sessionId_1, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        // make sure that the previous client is stopped to avoid duplicate commands and language services
                        return [4 /*yield*/, this.stop];
                    case 1:
                        // make sure that the previous client is stopped to avoid duplicate commands and language services
                        _a.sent();
                        if (toStop.disposed) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getStartParameters()];
                    case 2:
                        startParameters = _a.sent();
                        if (toStop.disposed) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.languageContributionService.create(this.id, startParameters)];
                    case 3:
                        sessionId_1 = _a.sent();
                        if (toStop.disposed) {
                            this.languageContributionService.destroy(sessionId_1);
                            return [2 /*return*/];
                        }
                        toStop.push(common_1.Disposable.create(function () { return _this.languageContributionService.destroy(sessionId_1); }));
                        this.connectionProvider.listen({
                            path: language_client_services_1.LanguageContribution.getPath(this, sessionId_1),
                            onConnection: function (messageConnection) {
                                _this.deferredConnection.resolve(messageConnection);
                                messageConnection.onDispose(function () { return _this.deferredConnection = new promise_util_1.Deferred(); });
                                if (toStop.disposed) {
                                    messageConnection.dispose();
                                    return;
                                }
                                toStop.push(common_1.Disposable.create(function () { return _this.stop = (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _a;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _b.trys.push([0, 3, , 4]);
                                                // avoid calling stop if start failed
                                                return [4 /*yield*/, this._languageClient.onReady()];
                                            case 1:
                                                // avoid calling stop if start failed
                                                _b.sent();
                                                // remove all listeners
                                                return [4 /*yield*/, this._languageClient.stop()];
                                            case 2:
                                                // remove all listeners
                                                _b.sent();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                _a = _b.sent();
                                                try {
                                                    // if start or stop failed make sure the the connection is closed
                                                    messageConnection.dispose();
                                                }
                                                catch ( /* no-op */_c) { /* no-op */ }
                                                return [3 /*break*/, 4];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); })(); }));
                                toStop.push(messageConnection.onClose(function () { return _this.forceRestart(); }));
                                _this._languageClient.start();
                                // it should be called after `start` that `onReady` promise gets reinitialized
                                _this.onWillStart(_this._languageClient, toStop);
                            }
                        }, { reconnecting: false });
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        if (!toStop.disposed) {
                            this.forceRestart();
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(BaseLanguageClientContribution.prototype, "running", {
        get: function () {
            return !this.toDeactivate.disposed && this.state === language_client_services_1.State.Running;
        },
        enumerable: true,
        configurable: true
    });
    BaseLanguageClientContribution.prototype.restart = function () {
        if (!this.running) {
            return;
        }
        this.forceRestart();
    };
    BaseLanguageClientContribution.prototype.forceRestart = function () {
        this.deactivate();
        this.activate();
    };
    BaseLanguageClientContribution.prototype.onWillStart = function (languageClient, toStop) {
        var _this = this;
        languageClient.onReady().then(function () { return _this.onReady(languageClient, toStop); });
    };
    BaseLanguageClientContribution.prototype.onReady = function (languageClient, toStop) {
        this._languageClient = languageClient;
        this.resolveReady(this._languageClient);
        this.waitForReady();
    };
    BaseLanguageClientContribution.prototype.waitForReady = function () {
        var _this = this;
        this.ready = new Promise(function (resolve) {
            return _this.resolveReady = resolve;
        });
    };
    BaseLanguageClientContribution.prototype.createLanguageClient = function (connection) {
        var clientOptions = this.createOptions();
        return this.languageClientFactory.get(this, clientOptions, connection);
    };
    BaseLanguageClientContribution.prototype.createOptions = function () {
        var _this = this;
        var _a = this, id = _a.id, documentSelector = _a.documentSelector, fileEvents = _a.fileEvents, configurationSection = _a.configurationSection, initializationOptions = _a.initializationOptions;
        return {
            documentSelector: documentSelector,
            synchronize: { fileEvents: fileEvents, configurationSection: configurationSection },
            initializationFailedHandler: function (err) { return _this.handleInitializationFailed(err); },
            diagnosticCollectionName: id,
            initializationOptions: initializationOptions
        };
    };
    BaseLanguageClientContribution.prototype.handleInitializationFailed = function (err) {
        var _this = this;
        this.deactivate();
        var detail = err instanceof Error ? ": " + err.message : '.';
        this.messageService.error("Failed to start " + this.name + " language server" + detail, 'Retry').then(function (result) {
            if (result) {
                _this.activate();
            }
        });
        return false;
    };
    BaseLanguageClientContribution.prototype.getStartParameters = function () {
        return undefined;
    };
    Object.defineProperty(BaseLanguageClientContribution.prototype, "initializationOptions", {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "configurationSection", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "workspaceContains", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "documentSelector", {
        get: function () {
            return [this.id];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLanguageClientContribution.prototype, "fileEvents", {
        get: function () {
            return this._fileEvents = this._fileEvents || this.createFileEvents();
        },
        enumerable: true,
        configurable: true
    });
    BaseLanguageClientContribution.prototype.createFileEvents = function () {
        var e_3, _a;
        var watchers = [];
        if (this.workspace.createFileSystemWatcher) {
            try {
                for (var _b = __values(this.globPatterns), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var globPattern = _c.value;
                    watchers.push(this.workspace.createFileSystemWatcher(globPattern));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return watchers;
    };
    Object.defineProperty(BaseLanguageClientContribution.prototype, "globPatterns", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check to see if one of the paths is in the current workspace.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BaseLanguageClientContribution.prototype.waitForItemInWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var doesContain;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.containsSome(this.workspaceContains)];
                    case 1:
                        doesContain = _a.sent();
                        if (!doesContain) {
                            return [2 /*return*/, new Promise(function (resolve) { })];
                        }
                        return [2 /*return*/, doesContain];
                }
            });
        });
    };
    // FIXME move it to the workspace
    BaseLanguageClientContribution.prototype.waitForOpenTextDocument = function (selector) {
        var _this = this;
        var document = this.workspace.textDocuments.filter(function (doc) {
            return _this.languages.match(selector, doc);
        })[0];
        if (document !== undefined) {
            return Promise.resolve(document);
        }
        return new Promise(function (resolve) {
            var disposable = _this.workspace.onDidOpenTextDocument(function (doc) {
                if (_this.languages.match(selector, doc)) {
                    disposable.dispose();
                    resolve(doc);
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], BaseLanguageClientContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], BaseLanguageClientContribution.prototype, "registry", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], BaseLanguageClientContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(language_client_services_1.LanguageContribution.Service),
        __metadata("design:type", Object)
    ], BaseLanguageClientContribution.prototype, "languageContributionService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WebSocketConnectionProvider),
        __metadata("design:type", browser_1.WebSocketConnectionProvider)
    ], BaseLanguageClientContribution.prototype, "connectionProvider", void 0);
    BaseLanguageClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(language_client_services_1.Workspace)),
        __param(1, inversify_1.inject(language_client_services_1.Languages)),
        __param(2, inversify_1.inject(language_client_factory_1.LanguageClientFactory)),
        __metadata("design:paramtypes", [Object, Object, language_client_factory_1.LanguageClientFactory])
    ], BaseLanguageClientContribution);
    return BaseLanguageClientContribution;
}());
exports.BaseLanguageClientContribution = BaseLanguageClientContribution;


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/language-client-factory.js":
/*!*****************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/language-client-factory.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../../../node_modules/@theia/core/lib/common/index.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../../../../node_modules/monaco-languageclient/lib/index.js");
var language_client_services_1 = __webpack_require__(/*! ./language-client-services */ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js");
var typehierarchy_feature_1 = __webpack_require__(/*! ./typehierarchy/typehierarchy-feature */ "../../../../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-feature.js");
var LanguageClientFactory = /** @class */ (function () {
    function LanguageClientFactory(workspace, languages, window) {
        this.workspace = workspace;
        this.languages = languages;
        this.window = window;
        language_client_services_1.Services.install({
            workspace: workspace,
            languages: languages,
            window: window,
            commands: {
                registerCommand: this.registerCommand.bind(this)
            }
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LanguageClientFactory.prototype.registerCommand = function (id, callback, thisArg) {
        var execute = callback.bind(thisArg);
        return this.registry.registerCommand({ id: id }, { execute: execute });
    };
    LanguageClientFactory.prototype.get = function (contribution, clientOptions, connectionProvider) {
        var _this = this;
        if (clientOptions.revealOutputChannelOn === undefined) {
            clientOptions.revealOutputChannelOn = monaco_languageclient_1.RevealOutputChannelOn.Never;
        }
        if (!clientOptions.errorHandler) {
            clientOptions.errorHandler = {
                // ignore connection errors
                error: function () { return monaco_languageclient_1.ErrorAction.Continue; },
                closed: function () { return monaco_languageclient_1.CloseAction.DoNotRestart; }
            };
        }
        var initializationFailedHandler = clientOptions.initializationFailedHandler;
        clientOptions.initializationFailedHandler = function (e) { return !!initializationFailedHandler && initializationFailedHandler(e); };
        var client = new language_client_services_1.MonacoLanguageClient({
            id: contribution.id,
            name: contribution.name,
            clientOptions: clientOptions,
            connectionProvider: {
                get: function (errorHandler, closeHandler) { return __awaiter(_this, void 0, void 0, function () {
                    var connection, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(typeof connectionProvider === 'function')) return [3 /*break*/, 2];
                                return [4 /*yield*/, connectionProvider()];
                            case 1:
                                _a = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                _a = connectionProvider;
                                _b.label = 3;
                            case 3:
                                connection = _a;
                                return [2 /*return*/, language_client_services_1.createConnection(connection, errorHandler, closeHandler)];
                        }
                    });
                }); }
            }
        });
        client.registerFeature(new typehierarchy_feature_1.TypeHierarchyFeature(client));
        return this.patch4085(client);
    };
    /**
     * see https://github.com/eclipse-theia/theia/issues/4085
     * remove when monaco-languageclient is upgraded to latest vscode-languageclient
     */
    LanguageClientFactory.prototype.patch4085 = function (client) {
        var e_1, _a;
        var features = client['_dynamicFeatures'];
        var _loop_1 = function (feature) {
            if (feature.dispose) {
                var dispose_1 = feature.dispose.bind(feature);
                feature.dispose = function () {
                    dispose_1();
                    if (feature._listener) {
                        feature._listener = undefined;
                    }
                };
            }
        };
        try {
            for (var _b = __values(features.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var feature = _c.value;
                _loop_1(feature);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return client;
    };
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], LanguageClientFactory.prototype, "registry", void 0);
    LanguageClientFactory = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(language_client_services_1.Workspace)),
        __param(1, inversify_1.inject(language_client_services_1.Languages)),
        __param(2, inversify_1.inject(language_client_services_1.Window)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], LanguageClientFactory);
    return LanguageClientFactory;
}());
exports.LanguageClientFactory = LanguageClientFactory;


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/language-client-provider-impl.js":
/*!***********************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/language-client-provider-impl.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../../../node_modules/@theia/core/lib/common/index.js");
var language_client_contribution_1 = __webpack_require__(/*! ./language-client-contribution */ "../../../../node_modules/@theia/languages/lib/browser/language-client-contribution.js");
var LanguageClientProviderImpl = /** @class */ (function () {
    function LanguageClientProviderImpl() {
    }
    LanguageClientProviderImpl.prototype.getLanguageClient = function (languageId) {
        return __awaiter(this, void 0, void 0, function () {
            var contribution;
            return __generator(this, function (_a) {
                contribution = this.getLanguageContribution(languageId);
                if (contribution) {
                    return [2 /*return*/, contribution.languageClient];
                }
                return [2 /*return*/];
            });
        });
    };
    LanguageClientProviderImpl.prototype.getLanguageContribution = function (languageId) {
        var e_1, _a;
        var contributions = this.contributions.getContributions();
        if (contributions) {
            try {
                for (var contributions_1 = __values(contributions), contributions_1_1 = contributions_1.next(); !contributions_1_1.done; contributions_1_1 = contributions_1.next()) {
                    var contribution = contributions_1_1.value;
                    if (contribution.id === languageId) {
                        return contribution;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (contributions_1_1 && !contributions_1_1.done && (_a = contributions_1.return)) _a.call(contributions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(language_client_contribution_1.LanguageClientContribution),
        __metadata("design:type", Object)
    ], LanguageClientProviderImpl.prototype, "contributions", void 0);
    LanguageClientProviderImpl = __decorate([
        inversify_1.injectable()
    ], LanguageClientProviderImpl);
    return LanguageClientProviderImpl;
}());
exports.LanguageClientProviderImpl = LanguageClientProviderImpl;


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/language-client-provider.js":
/*!******************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/language-client-provider.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageClientProvider = Symbol('LanguageClientProvider');


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js":
/*!******************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/language-client-services.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! monaco-languageclient */ "../../../../node_modules/monaco-languageclient/lib/index.js"));
__export(__webpack_require__(/*! ../common */ "../../../../node_modules/@theia/languages/lib/common/index.js"));
exports.Languages = Symbol('Languages');
exports.Workspace = Symbol('Workspace');
exports.Commands = Symbol('Commands');
exports.Window = Symbol('Window');
exports.IConnectionProvider = Symbol('IConnectionProvider');
exports.ILanguageClient = Symbol('ILanguageClient');


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/language-resource-context-key.js":
/*!***********************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/language-resource-context-key.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var resource_context_key_1 = __webpack_require__(/*! @theia/core/lib/browser/resource-context-key */ "../../../../node_modules/@theia/core/lib/browser/resource-context-key.js");
var language_client_services_1 = __webpack_require__(/*! ./language-client-services */ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js");
var LanguageResourceContextKey = /** @class */ (function (_super) {
    __extends(LanguageResourceContextKey, _super);
    function LanguageResourceContextKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageResourceContextKey.prototype.getLanguageId = function (uri) {
        var e_1, _a;
        var languages = this.languages.languages;
        if (uri && languages) {
            try {
                for (var languages_1 = __values(languages), languages_1_1 = languages_1.next(); !languages_1_1.done; languages_1_1 = languages_1.next()) {
                    var language = languages_1_1.value;
                    if (language.extensions.has(uri.path.ext)) {
                        return language.id;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (languages_1_1 && !languages_1_1.done && (_a = languages_1.return)) _a.call(languages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(language_client_services_1.Languages),
        __metadata("design:type", Object)
    ], LanguageResourceContextKey.prototype, "languages", void 0);
    LanguageResourceContextKey = __decorate([
        inversify_1.injectable()
    ], LanguageResourceContextKey);
    return LanguageResourceContextKey;
}(resource_context_key_1.ResourceContextKey));
exports.LanguageResourceContextKey = LanguageResourceContextKey;


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/languages-frontend-contribution.js":
/*!*************************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/languages-frontend-contribution.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../../../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../../../node_modules/@theia/core/lib/browser/index.js");
var language_client_contribution_1 = __webpack_require__(/*! ./language-client-contribution */ "../../../../node_modules/@theia/languages/lib/browser/language-client-contribution.js");
var LanguagesFrontendContribution = /** @class */ (function () {
    function LanguagesFrontendContribution() {
    }
    LanguagesFrontendContribution.prototype.onStart = function (app) {
        var e_1, _a;
        var schema = {
            type: 'object',
            properties: {}
        };
        var _loop_1 = function (contribution) {
            contribution.waitForActivation(app).then(function () {
                return contribution.activate(app);
            });
            schema.properties[contribution.id + ".trace.server"] = {
                type: 'string',
                enum: [
                    'off',
                    'messages',
                    'verbose'
                ],
                default: 'off',
                description: "Enable/disable tracing communications with the " + contribution.name + " language server"
            };
        };
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                _loop_1(contribution);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.preferenceSchema.setSchema(schema);
    };
    LanguagesFrontendContribution.prototype.registerCommands = function (commands) {
        var e_2, _a;
        var _this = this;
        var _loop_2 = function (contribution) {
            commands.registerCommand({
                id: contribution.id + ".server.start",
                label: contribution.name + ": Start Language Server"
            }, {
                execute: function () { return contribution.activate(_this.app); },
                isEnabled: function () { return !contribution.running; },
                isVisible: function () { return !contribution.running; },
            });
            commands.registerCommand({
                id: contribution.id + ".server.stop",
                label: contribution.name + ": Stop Language Server"
            }, {
                execute: function () { return contribution.deactivate(); },
                isEnabled: function () { return contribution.running; },
                isVisible: function () { return contribution.running; },
            });
            commands.registerCommand({
                id: contribution.id + ".server.restart",
                label: contribution.name + ": Restart Language Server"
            }, {
                execute: function () { return contribution.restart(); },
                isEnabled: function () { return contribution.running; },
                isVisible: function () { return contribution.running; },
            });
        };
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                _loop_2(contribution);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], LanguagesFrontendContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], LanguagesFrontendContribution.prototype, "preferenceSchema", void 0);
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(language_client_contribution_1.LanguageClientContribution),
        __metadata("design:type", Object)
    ], LanguagesFrontendContribution.prototype, "contributions", void 0);
    LanguagesFrontendContribution = __decorate([
        inversify_1.injectable()
    ], LanguagesFrontendContribution);
    return LanguagesFrontendContribution;
}());
exports.LanguagesFrontendContribution = LanguagesFrontendContribution;


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/languages-frontend-module.js":
/*!*******************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/languages-frontend-module.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../../../node_modules/@theia/core/lib/common/index.js");
var resource_context_key_1 = __webpack_require__(/*! @theia/core/lib/browser/resource-context-key */ "../../../../node_modules/@theia/core/lib/browser/resource-context-key.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../../../node_modules/@theia/core/lib/browser/index.js");
var language_client_services_1 = __webpack_require__(/*! ./language-client-services */ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js");
var window_impl_1 = __webpack_require__(/*! ./window-impl */ "../../../../node_modules/@theia/languages/lib/browser/window-impl.js");
var language_client_factory_1 = __webpack_require__(/*! ./language-client-factory */ "../../../../node_modules/@theia/languages/lib/browser/language-client-factory.js");
var languages_frontend_contribution_1 = __webpack_require__(/*! ./languages-frontend-contribution */ "../../../../node_modules/@theia/languages/lib/browser/languages-frontend-contribution.js");
var language_client_contribution_1 = __webpack_require__(/*! ./language-client-contribution */ "../../../../node_modules/@theia/languages/lib/browser/language-client-contribution.js");
var workspace_symbols_1 = __webpack_require__(/*! ./workspace-symbols */ "../../../../node_modules/@theia/languages/lib/browser/workspace-symbols.js");
var language_client_provider_1 = __webpack_require__(/*! ./language-client-provider */ "../../../../node_modules/@theia/languages/lib/browser/language-client-provider.js");
var language_client_provider_impl_1 = __webpack_require__(/*! ./language-client-provider-impl */ "../../../../node_modules/@theia/languages/lib/browser/language-client-provider-impl.js");
var common_2 = __webpack_require__(/*! ../common */ "../../../../node_modules/@theia/languages/lib/common/index.js");
var language_resource_context_key_1 = __webpack_require__(/*! ./language-resource-context-key */ "../../../../node_modules/@theia/languages/lib/browser/language-resource-context-key.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    var e_1, _a;
    bind(language_client_services_1.Window).to(window_impl_1.WindowImpl).inSingletonScope();
    bind(language_client_factory_1.LanguageClientFactory).toSelf().inSingletonScope();
    bind(common_2.LanguageContribution.Service).toDynamicValue(function (_a) {
        var container = _a.container;
        return browser_1.WebSocketConnectionProvider.createProxy(container, common_2.LanguageContribution.servicePath);
    }).inSingletonScope();
    common_1.bindContributionProvider(bind, language_client_contribution_1.LanguageClientContribution);
    bind(languages_frontend_contribution_1.LanguagesFrontendContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(languages_frontend_contribution_1.LanguagesFrontendContribution);
    bind(common_1.CommandContribution).toService(languages_frontend_contribution_1.LanguagesFrontendContribution);
    bind(workspace_symbols_1.WorkspaceSymbolCommand).toSelf().inSingletonScope();
    try {
        for (var _b = __values([common_1.CommandContribution, browser_1.KeybindingContribution, browser_1.QuickOpenContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(workspace_symbols_1.WorkspaceSymbolCommand);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(language_client_provider_impl_1.LanguageClientProviderImpl).toSelf().inSingletonScope();
    bind(language_client_provider_1.LanguageClientProvider).toService(language_client_provider_impl_1.LanguageClientProviderImpl);
    bind(language_resource_context_key_1.LanguageResourceContextKey).toSelf().inSingletonScope();
    rebind(resource_context_key_1.ResourceContextKey).to(language_resource_context_key_1.LanguageResourceContextKey).inSingletonScope();
});


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-feature.js":
/*!*****************************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-feature.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __webpack_require__(/*! uuid */ "../../../../node_modules/uuid/index.js");
var language_client_services_1 = __webpack_require__(/*! ../language-client-services */ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js");
var typehierarchy_protocol_1 = __webpack_require__(/*! ./typehierarchy-protocol */ "../../../../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol.js");
// NOTE: This module can be removed, or at least can be simplified once the type hierarchy will become the part of the LSP.
// https://github.com/Microsoft/language-server-protocol/issues/582
// https://github.com/Microsoft/vscode-languageserver-node/pull/346#discussion_r221659062
/**
 * Text document feature for handling super- and subtype hierarchies through the LSP.
 */
var TypeHierarchyFeature = /** @class */ (function (_super) {
    __extends(TypeHierarchyFeature, _super);
    function TypeHierarchyFeature(client) {
        var _this = _super.call(this, client, typehierarchy_protocol_1.TypeHierarchyRequest.type) || this;
        _this.client = client;
        return _this;
    }
    TypeHierarchyFeature.prototype.fillClientCapabilities = function (capabilities) {
        if (!capabilities.textDocument) {
            capabilities.textDocument = {};
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        capabilities.textDocument.typeHierarchy = {
            dynamicRegistration: true
        };
    };
    TypeHierarchyFeature.prototype.initialize = function (capabilities, documentSelector) {
        if (!documentSelector) {
            return;
        }
        var capabilitiesExt = capabilities;
        if (capabilitiesExt.typeHierarchyProvider) {
            var id = uuid_1.v4();
            this.register(this.messages, {
                id: id,
                registerOptions: Object.assign({}, { documentSelector: documentSelector }, capabilitiesExt.typeHierarchyProvider)
            });
        }
    };
    TypeHierarchyFeature.prototype.registerLanguageProvider = function () {
        return language_client_services_1.Disposable.create(function () { });
    };
    return TypeHierarchyFeature;
}(language_client_services_1.TextDocumentFeature));
exports.TypeHierarchyFeature = TypeHierarchyFeature;


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol.js":
/*!******************************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var language_client_services_1 = __webpack_require__(/*! ../language-client-services */ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js");
var TypeHierarchyDirection;
(function (TypeHierarchyDirection) {
    /**
     * Flag for retrieving/resolving the subtypes.
     */
    TypeHierarchyDirection.Children = 0;
    /**
     * Flag to use when retrieving/resolving the supertypes.
     */
    TypeHierarchyDirection.Parents = 1;
    /**
     * Flag for resolving both the super- and subtypes.
     */
    TypeHierarchyDirection.Both = 2;
})(TypeHierarchyDirection = exports.TypeHierarchyDirection || (exports.TypeHierarchyDirection = {}));
/**
 * The `textDocument/typeHierarchy` request is sent from the client to the server to retrieve the type hierarchy
 * items from a given position of a text document. Can resolve the parentage information on demand.
 * If no item can be retrieved for a given text document position, returns with `null`.
 */
var TypeHierarchyRequest;
(function (TypeHierarchyRequest) {
    TypeHierarchyRequest.type = new language_client_services_1.RequestType('textDocument/typeHierarchy');
})(TypeHierarchyRequest = exports.TypeHierarchyRequest || (exports.TypeHierarchyRequest = {}));
/**
 * The `typeHierarchy/resolve` request is sent from the client to the server to resolve a type hierarchy
 * item by resolving sub- and supertype information.
 */
var ResolveTypeHierarchyRequest;
(function (ResolveTypeHierarchyRequest) {
    ResolveTypeHierarchyRequest.type = new language_client_services_1.RequestType('typeHierarchy/resolve');
})(ResolveTypeHierarchyRequest = exports.ResolveTypeHierarchyRequest || (exports.ResolveTypeHierarchyRequest = {}));


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/window-impl.js":
/*!*****************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/window-impl.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../../../node_modules/@theia/core/lib/common/index.js");
var services_1 = __webpack_require__(/*! monaco-languageclient/lib/services */ "../../../../node_modules/monaco-languageclient/lib/services.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "../../../../node_modules/@theia/output/lib/common/output-channel.js");
var output_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-contribution */ "../../../../node_modules/@theia/output/lib/browser/output-contribution.js");
var WindowImpl = /** @class */ (function () {
    function WindowImpl() {
    }
    WindowImpl.prototype.showMessage = function (type, message) {
        var _a, _b, _c, _d;
        var actions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            actions[_i - 2] = arguments[_i];
        }
        var originalActions = new Map((actions || []).map(function (action) { return [action.title, action]; }));
        var actionTitles = (actions || []).map(function (action) { return action.title; });
        var mapActionType = function (result) {
            if (!!result) {
                return originalActions.get(result);
            }
            return undefined;
        };
        if (type === services_1.MessageType.Error) {
            return (_a = this.messageService).error.apply(_a, __spread([message], actionTitles)).then(mapActionType);
        }
        if (type === services_1.MessageType.Warning) {
            return (_b = this.messageService).warn.apply(_b, __spread([message], actionTitles)).then(mapActionType);
        }
        if (type === services_1.MessageType.Info) {
            return (_c = this.messageService).info.apply(_c, __spread([message], actionTitles)).then(mapActionType);
        }
        if (type === services_1.MessageType.Log) {
            return (_d = this.messageService).log.apply(_d, __spread([message], actionTitles)).then(mapActionType);
        }
        return Promise.resolve(undefined);
    };
    WindowImpl.prototype.createOutputChannel = function (name) {
        var _this = this;
        var outputChannel = this.outputChannelManager.getChannel(name);
        return {
            append: outputChannel.append.bind(outputChannel),
            appendLine: outputChannel.appendLine.bind(outputChannel),
            show: function (preserveFocus) { return __awaiter(_this, void 0, void 0, function () {
                var options, activate, reveal;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = Object.assign({
                                preserveFocus: false,
                            }, { preserveFocus: preserveFocus });
                            activate = !options.preserveFocus;
                            reveal = options.preserveFocus;
                            return [4 /*yield*/, this.outputContribution.openView({ activate: activate, reveal: reveal })];
                        case 1:
                            _a.sent();
                            outputChannel.setVisibility(true);
                            return [2 /*return*/];
                    }
                });
            }); },
            dispose: function () {
                _this.outputChannelManager.deleteChannel(outputChannel.name);
            }
        };
    };
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], WindowImpl.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], WindowImpl.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], WindowImpl.prototype, "outputContribution", void 0);
    WindowImpl = __decorate([
        inversify_1.injectable()
    ], WindowImpl);
    return WindowImpl;
}());
exports.WindowImpl = WindowImpl;


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/browser/workspace-symbols.js":
/*!***********************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/browser/workspace-symbols.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../../../../node_modules/inversify/lib/inversify.js");
var environment_1 = __webpack_require__(/*! @theia/application-package/lib/environment */ "../../../../node_modules/@theia/application-package/lib/environment.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../../../node_modules/@theia/core/lib/browser/index.js");
var language_client_services_1 = __webpack_require__(/*! ./language-client-services */ "../../../../node_modules/@theia/languages/lib/browser/language-client-services.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../../../node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../../../node_modules/@theia/core/lib/common/uri.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "../../../../node_modules/vscode-languageserver-types/lib/esm/main.js");
var WorkspaceSymbolCommand = /** @class */ (function () {
    function WorkspaceSymbolCommand(languages, openerService, quickOpenService, selectionService) {
        this.languages = languages;
        this.openerService = openerService;
        this.quickOpenService = quickOpenService;
        this.selectionService = selectionService;
        this.prefix = '#';
        this.description = 'Go to Symbol in Workspace';
        this.command = {
            id: 'languages.workspace.symbol',
            label: 'Open Workspace Symbol...'
        };
        this.cancellationSource = new core_1.CancellationTokenSource();
    }
    WorkspaceSymbolCommand.prototype.isEnabled = function () {
        return this.languages.workspaceSymbolProviders !== undefined;
    };
    WorkspaceSymbolCommand.prototype.execute = function () {
        this.quickOpenService.open(this.prefix);
    };
    WorkspaceSymbolCommand.prototype.getModel = function () {
        return this;
    };
    WorkspaceSymbolCommand.prototype.getOptions = function () {
        var _this = this;
        return {
            fuzzyMatchLabel: true,
            showItemsWithoutHighlight: true,
            onClose: function () {
                _this.cancellationSource.cancel();
            }
        };
    };
    WorkspaceSymbolCommand.prototype.registerCommands = function (commands) {
        commands.registerCommand(this.command, this);
    };
    WorkspaceSymbolCommand.prototype.isElectron = function () {
        return environment_1.environment.electron.is();
    };
    WorkspaceSymbolCommand.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: this.command.id,
            keybinding: this.isElectron() ? 'ctrlcmd+t' : 'ctrlcmd+o',
        });
    };
    WorkspaceSymbolCommand.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this);
    };
    WorkspaceSymbolCommand.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var newCancellationSource_1, param_1, items_1, workspaceProviderPromises, _loop_1, _a, _b, provider;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                if (this.languages.workspaceSymbolProviders) {
                    this.cancellationSource.cancel();
                    newCancellationSource_1 = new core_1.CancellationTokenSource();
                    this.cancellationSource = newCancellationSource_1;
                    param_1 = {
                        query: lookFor
                    };
                    items_1 = [];
                    workspaceProviderPromises = [];
                    _loop_1 = function (provider) {
                        workspaceProviderPromises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                            var symbols, symbols_1, symbols_1_1, symbol;
                            var e_2, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, provider.provideWorkspaceSymbols(param_1, newCancellationSource_1.token)];
                                    case 1:
                                        symbols = _b.sent();
                                        if (symbols && !newCancellationSource_1.token.isCancellationRequested) {
                                            try {
                                                for (symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                                                    symbol = symbols_1_1.value;
                                                    items_1.push(this.createItem(symbol, provider, newCancellationSource_1.token));
                                                }
                                            }
                                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                            finally {
                                                try {
                                                    if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                                                }
                                                finally { if (e_2) throw e_2.error; }
                                            }
                                            acceptor(items_1);
                                        }
                                        return [2 /*return*/, symbols];
                                }
                            });
                        }); })());
                    };
                    try {
                        for (_a = __values(this.languages.workspaceSymbolProviders), _b = _a.next(); !_b.done; _b = _a.next()) {
                            provider = _b.value;
                            _loop_1(provider);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    Promise.all(workspaceProviderPromises.map(function (p) { return p.then(function (sym) { return sym; }, function (_) { return undefined; }); })).then(function (symbols) {
                        var filteredSymbols = symbols.filter(function (el) { return el && el.length !== 0; });
                        if (filteredSymbols.length === 0) {
                            items_1.push(new browser_1.QuickOpenItem({
                                label: lookFor.length === 0 ? 'Type to search for symbols' : 'No symbols matching',
                                run: function () { return false; }
                            }));
                            acceptor(items_1);
                        }
                    }).catch();
                }
                return [2 /*return*/];
            });
        });
    };
    WorkspaceSymbolCommand.prototype.createItem = function (sym, provider, token) {
        var _this = this;
        var uri = new uri_1.default(sym.location.uri);
        var kind = SymbolKind[sym.kind];
        var icon = (kind) ? SymbolKind[sym.kind].toLowerCase() : 'unknown';
        var parent = sym.containerName;
        if (parent) {
            parent += ' - ';
        }
        parent = (parent || '') + uri.displayName;
        return new SimpleOpenItem(sym.name, icon, parent, uri.toString(), function () {
            if (provider.resolveWorkspaceSymbol) {
                provider.resolveWorkspaceSymbol(sym, token).then(function (resolvedSymbol) {
                    if (resolvedSymbol) {
                        _this.openURL(uri, resolvedSymbol.location.range.start, resolvedSymbol.location.range.end);
                    }
                    else {
                        // the symbol didn't resolve -> use given symbol
                        _this.openURL(uri, sym.location.range.start, sym.location.range.end);
                    }
                });
            }
            else {
                // resolveWorkspaceSymbol wasn't specified
                _this.openURL(uri, sym.location.range.start, sym.location.range.end);
            }
        });
    };
    WorkspaceSymbolCommand.prototype.openURL = function (uri, start, end) {
        this.openerService.getOpener(uri).then(function (opener) { return opener.open(uri, {
            selection: vscode_languageserver_types_1.Range.create(start, end)
        }); });
    };
    WorkspaceSymbolCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(language_client_services_1.Languages)),
        __param(1, inversify_1.inject(browser_1.OpenerService)),
        __param(2, inversify_1.inject(browser_1.PrefixQuickOpenService)),
        __param(3, inversify_1.inject(core_1.SelectionService)),
        __metadata("design:paramtypes", [Object, Object, browser_1.PrefixQuickOpenService,
            core_1.SelectionService])
    ], WorkspaceSymbolCommand);
    return WorkspaceSymbolCommand;
}());
exports.WorkspaceSymbolCommand = WorkspaceSymbolCommand;
var SimpleOpenItem = /** @class */ (function (_super) {
    __extends(SimpleOpenItem, _super);
    function SimpleOpenItem(label, icon, parent, toolTip, onOpen, onSelect) {
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.icon = icon;
        _this.parent = parent;
        _this.toolTip = toolTip;
        _this.onOpen = onOpen;
        _this.onSelect = onSelect;
        return _this;
    }
    SimpleOpenItem.prototype.getLabel = function () {
        return this.label;
    };
    SimpleOpenItem.prototype.isHidden = function () {
        return false;
    };
    SimpleOpenItem.prototype.getTooltip = function () {
        return this.toolTip;
    };
    SimpleOpenItem.prototype.getDescription = function () {
        return this.parent;
    };
    SimpleOpenItem.prototype.getIconClass = function () {
        return this.icon;
    };
    SimpleOpenItem.prototype.run = function (mode) {
        if (mode !== browser_1.QuickOpenMode.OPEN) {
            if (!this.onSelect) {
                return false;
            }
            this.onSelect();
            return true;
        }
        this.onOpen();
        return true;
    };
    return SimpleOpenItem;
}(browser_1.QuickOpenItem));
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 1] = "File";
    SymbolKind[SymbolKind["Module"] = 2] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 3] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 4] = "Package";
    SymbolKind[SymbolKind["Class"] = 5] = "Class";
    SymbolKind[SymbolKind["Method"] = 6] = "Method";
    SymbolKind[SymbolKind["Property"] = 7] = "Property";
    SymbolKind[SymbolKind["Field"] = 8] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 9] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 10] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 11] = "Interface";
    SymbolKind[SymbolKind["Function"] = 12] = "Function";
    SymbolKind[SymbolKind["Variable"] = 13] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 14] = "Constant";
    SymbolKind[SymbolKind["String"] = 15] = "String";
    SymbolKind[SymbolKind["Number"] = 16] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 17] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 18] = "Array";
    SymbolKind[SymbolKind["Object"] = 19] = "Object";
    SymbolKind[SymbolKind["Key"] = 20] = "Key";
    SymbolKind[SymbolKind["Null"] = 21] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 22] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 23] = "Struct";
    SymbolKind[SymbolKind["Event"] = 24] = "Event";
    SymbolKind[SymbolKind["Operator"] = 25] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 26] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/common/index.js":
/*!**********************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/common/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./language-contribution */ "../../../../node_modules/@theia/languages/lib/common/language-contribution.js"));


/***/ }),

/***/ "../../../../node_modules/@theia/languages/lib/common/language-contribution.js":
/*!**************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/languages/lib/common/language-contribution.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageContribution;
(function (LanguageContribution) {
    LanguageContribution.servicePath = '/services/languages';
    function getPath(contribution, sessionId) {
        if (sessionId === void 0) { sessionId = ':id'; }
        return LanguageContribution.servicePath + '/' + contribution.id + '/' + sessionId;
    }
    LanguageContribution.getPath = getPath;
    LanguageContribution.Service = Symbol('LanguageContributionService');
})(LanguageContribution = exports.LanguageContribution || (exports.LanguageContribution = {}));


/***/ }),

/***/ "../../../../node_modules/@theia/workspace/lib/browser/index.js":
/*!***********************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/@theia/workspace/lib/browser/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./workspace-commands */ "../../../../node_modules/@theia/workspace/lib/browser/workspace-commands.js"));
__export(__webpack_require__(/*! ./workspace-service */ "../../../../node_modules/@theia/workspace/lib/browser/workspace-service.js"));
__export(__webpack_require__(/*! ./workspace-frontend-contribution */ "../../../../node_modules/@theia/workspace/lib/browser/workspace-frontend-contribution.js"));
__export(__webpack_require__(/*! ./workspace-frontend-module */ "../../../../node_modules/@theia/workspace/lib/browser/workspace-frontend-module.js"));
__export(__webpack_require__(/*! ./workspace-preferences */ "../../../../node_modules/@theia/workspace/lib/browser/workspace-preferences.js"));


/***/ }),

/***/ "../../../../node_modules/glob-to-regexp/index.js":
/*!*********************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/glob-to-regexp/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (glob, opts) {
  if (typeof glob !== 'string') {
    throw new TypeError('Expected a string');
  }

  var str = String(glob);

  // The regexp we are building, as a string.
  var reStr = "";

  // Whether we are matching so called "extended" globs (like bash) and should
  // support single character matching, matching ranges of characters, group
  // matching, etc.
  var extended = opts ? !!opts.extended : false;

  // When globstar is _false_ (default), '/foo/*' is translated a regexp like
  // '^\/foo\/.*$' which will match any string beginning with '/foo/'
  // When globstar is _true_, '/foo/*' is translated to regexp like
  // '^\/foo\/[^/]*$' which will match any string beginning with '/foo/' BUT
  // which does not have a '/' to the right of it.
  // E.g. with '/foo/*' these will match: '/foo/bar', '/foo/bar.txt' but
  // these will not '/foo/bar/baz', '/foo/bar/baz.txt'
  // Lastely, when globstar is _true_, '/foo/**' is equivelant to '/foo/*' when
  // globstar is _false_
  var globstar = opts ? !!opts.globstar : false;

  // If we are doing extended matching, this boolean is true when we are inside
  // a group (eg {*.html,*.js}), and false otherwise.
  var inGroup = false;

  // RegExp flags (eg "i" ) to pass in to RegExp constructor.
  var flags = opts && typeof( opts.flags ) === "string" ? opts.flags : "";

  var c;
  for (var i = 0, len = str.length; i < len; i++) {
    c = str[i];

    switch (c) {
    case "\\":
    case "/":
    case "$":
    case "^":
    case "+":
    case ".":
    case "(":
    case ")":
    case "=":
    case "!":
    case "|":
      reStr += "\\" + c;
      break;

    case "?":
      if (extended) {
        reStr += ".";
	    break;
      }

    case "[":
    case "]":
      if (extended) {
        reStr += c;
	    break;
      }

    case "{":
      if (extended) {
        inGroup = true;
	    reStr += "(";
	    break;
      }

    case "}":
      if (extended) {
        inGroup = false;
	    reStr += ")";
	    break;
      }

    case ",":
      if (inGroup) {
        reStr += "|";
	    break;
      }
      reStr += "\\" + c;
      break;

    case "*":
      // Move over all consecutive "*"'s.
      // Also store the previous and next characters
      var prevChar = str[i - 1];
      var starCount = 1;
      while(str[i + 1] === "*") {
        starCount++;
        i++;
      }
      var nextChar = str[i + 1];

      if (!globstar) {
        // globstar is disabled, so treat any number of "*" as one
        reStr += ".*";
      } else {
        // globstar is enabled, so determine if this is a globstar segment
        var isGlobstar = starCount > 1                      // multiple "*"'s
          && (prevChar === "/" || prevChar === undefined)   // from the start of the segment
          && (nextChar === "/" || nextChar === undefined)   // to the end of the segment

        if (isGlobstar) {
          // it's a globstar, so match zero or more path segments
          reStr += "(?:[^/]*(?:\/|$))*";
          i++; // move over the "/"
        } else {
          // it's not a globstar, so only match one path segment
          reStr += "[^/]*";
        }
      }
      break;

    default:
      reStr += c;
    }
  }

  // When regexp 'g' flag is specified don't
  // constrain the regular expression with ^ & $
  if (!flags || !~flags.indexOf('g')) {
    reStr = "^" + reStr + "$";
  }

  return new RegExp(reStr, flags);
};


/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/connection.js":
/*!*************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/connection.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var main_1 = __webpack_require__(/*! vscode-languageserver-protocol/lib/main */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! vscode-languageserver-protocol/lib/utils/is */ "../../../../node_modules/vscode-languageserver-protocol/lib/utils/is.js");

function createConnection(connection, errorHandler, closeHandler) {
  connection.onError(function (data) {
    errorHandler(data[0], data[1], data[2]);
  });
  connection.onClose(closeHandler);
  return {
    listen: function listen() {
      return connection.listen();
    },
    sendRequest: function sendRequest(type) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return connection.sendRequest.apply(connection, [Is.string(type) ? type : type.method].concat(params));
    },
    onRequest: function onRequest(type, handler) {
      return connection.onRequest(Is.string(type) ? type : type.method, handler);
    },
    sendNotification: function sendNotification(type, params) {
      return connection.sendNotification(Is.string(type) ? type : type.method, params);
    },
    onNotification: function onNotification(type, handler) {
      return connection.onNotification(Is.string(type) ? type : type.method, handler);
    },
    trace: function trace(value, tracer) {
      var sendNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return connection.trace(value, tracer, sendNotification);
    },
    initialize: function initialize(params) {
      return connection.sendRequest(main_1.InitializeRequest.type, params);
    },
    shutdown: function shutdown() {
      return connection.sendRequest(main_1.ShutdownRequest.type, undefined);
    },
    exit: function exit() {
      return connection.sendNotification(main_1.ExitNotification.type);
    },
    onLogMessage: function onLogMessage(handler) {
      return connection.onNotification(main_1.LogMessageNotification.type, handler);
    },
    onShowMessage: function onShowMessage(handler) {
      return connection.onNotification(main_1.ShowMessageNotification.type, handler);
    },
    onTelemetry: function onTelemetry(handler) {
      return connection.onNotification(main_1.TelemetryEventNotification.type, handler);
    },
    didChangeConfiguration: function didChangeConfiguration(params) {
      return connection.sendNotification(main_1.DidChangeConfigurationNotification.type, params);
    },
    didChangeWatchedFiles: function didChangeWatchedFiles(params) {
      return connection.sendNotification(main_1.DidChangeWatchedFilesNotification.type, params);
    },
    didOpenTextDocument: function didOpenTextDocument(params) {
      return connection.sendNotification(main_1.DidOpenTextDocumentNotification.type, params);
    },
    didChangeTextDocument: function didChangeTextDocument(params) {
      return connection.sendNotification(main_1.DidChangeTextDocumentNotification.type, params);
    },
    didCloseTextDocument: function didCloseTextDocument(params) {
      return connection.sendNotification(main_1.DidCloseTextDocumentNotification.type, params);
    },
    didSaveTextDocument: function didSaveTextDocument(params) {
      return connection.sendNotification(main_1.DidSaveTextDocumentNotification.type, params);
    },
    onDiagnostics: function onDiagnostics(handler) {
      return connection.onNotification(main_1.PublishDiagnosticsNotification.type, handler);
    },
    dispose: function dispose() {
      return connection.dispose();
    }
  };
}

exports.createConnection = createConnection;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/console-window.js":
/*!*****************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/console-window.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

var ConsoleWindow =
/*#__PURE__*/
function () {
  function ConsoleWindow() {
    _classCallCheck(this, ConsoleWindow);

    this.channels = new Map();
  }

  _createClass(ConsoleWindow, [{
    key: "showMessage",
    value: function showMessage(type, message) {
      if (type === services_1.MessageType.Error) {
        console.error(message);
      }

      if (type === services_1.MessageType.Warning) {
        console.warn(message);
      }

      if (type === services_1.MessageType.Info) {
        console.info(message);
      }

      if (type === services_1.MessageType.Log) {
        console.log(message);
      }

      return Promise.resolve(undefined);
    }
  }, {
    key: "createOutputChannel",
    value: function createOutputChannel(name) {
      var existing = this.channels.get(name);

      if (existing) {
        return existing;
      }

      var channel = {
        append: function append(value) {
          console.log(name + ': ' + value);
        },
        appendLine: function appendLine(line) {
          console.log(name + ': ' + line);
        },
        show: function show() {// no-op
        },
        dispose: function dispose() {// no-op
        }
      };
      this.channels.set(name, channel);
      return channel;
    }
  }]);

  return ConsoleWindow;
}();

exports.ConsoleWindow = ConsoleWindow;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/disposable.js":
/*!*************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/disposable.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

exports.Disposable = services_1.Disposable;

var DisposableCollection =
/*#__PURE__*/
function () {
  function DisposableCollection() {
    _classCallCheck(this, DisposableCollection);

    this.disposables = [];
  }

  _createClass(DisposableCollection, [{
    key: "dispose",
    value: function dispose() {
      while (this.disposables.length !== 0) {
        this.disposables.pop().dispose();
      }
    }
  }, {
    key: "push",
    value: function push(disposable) {
      var disposables = this.disposables;
      disposables.push(disposable);
      return {
        dispose: function dispose() {
          var index = disposables.indexOf(disposable);

          if (index !== -1) {
            disposables.splice(index, 1);
          }
        }
      };
    }
  }]);

  return DisposableCollection;
}();

exports.DisposableCollection = DisposableCollection;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/index.js":
/*!********************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

__export(__webpack_require__(/*! ./disposable */ "../../../../node_modules/monaco-languageclient/lib/disposable.js"));

__export(__webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js"));

__export(__webpack_require__(/*! ./connection */ "../../../../node_modules/monaco-languageclient/lib/connection.js"));

__export(__webpack_require__(/*! ./monaco-language-client */ "../../../../node_modules/monaco-languageclient/lib/monaco-language-client.js"));

__export(__webpack_require__(/*! ./monaco-commands */ "../../../../node_modules/monaco-languageclient/lib/monaco-commands.js"));

__export(__webpack_require__(/*! ./console-window */ "../../../../node_modules/monaco-languageclient/lib/console-window.js"));

__export(__webpack_require__(/*! ./monaco-languages */ "../../../../node_modules/monaco-languageclient/lib/monaco-languages.js"));

__export(__webpack_require__(/*! ./monaco-workspace */ "../../../../node_modules/monaco-languageclient/lib/monaco-workspace.js"));

__export(__webpack_require__(/*! ./monaco-services */ "../../../../node_modules/monaco-languageclient/lib/monaco-services.js"));

__export(__webpack_require__(/*! ./monaco-converter */ "../../../../node_modules/monaco-languageclient/lib/monaco-converter.js"));

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/monaco-commands.js":
/*!******************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/monaco-commands.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MonacoCommands =
/*#__PURE__*/
function () {
  function MonacoCommands(editor) {
    _classCallCheck(this, MonacoCommands);

    this.editor = editor;
  }

  _createClass(MonacoCommands, [{
    key: "registerCommand",
    value: function registerCommand(command, callback, thisArg) {
      return this.editor._commandService.addCommand({
        id: command,
        handler: function handler(_accessor) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return callback.apply(void 0, args);
        }
      });
    }
  }]);

  return MonacoCommands;
}();

exports.MonacoCommands = MonacoCommands;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/monaco-converter.js":
/*!*******************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/monaco-converter.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var ls = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! vscode-languageserver-protocol/lib/utils/is */ "../../../../node_modules/vscode-languageserver-protocol/lib/utils/is.js");

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

var ProtocolDocumentLink;

(function (ProtocolDocumentLink) {
  function is(item) {
    return !!item && 'data' in item;
  }

  ProtocolDocumentLink.is = is;
})(ProtocolDocumentLink = exports.ProtocolDocumentLink || (exports.ProtocolDocumentLink = {}));

var ProtocolCodeLens;

(function (ProtocolCodeLens) {
  function is(item) {
    return !!item && 'data' in item;
  }

  ProtocolCodeLens.is = is;
})(ProtocolCodeLens = exports.ProtocolCodeLens || (exports.ProtocolCodeLens = {}));

var ProtocolCompletionItem;

(function (ProtocolCompletionItem) {
  function is(item) {
    return !!item && 'data' in item;
  }

  ProtocolCompletionItem.is = is;
})(ProtocolCompletionItem = exports.ProtocolCompletionItem || (exports.ProtocolCompletionItem = {}));

var MonacoToProtocolConverter =
/*#__PURE__*/
function () {
  function MonacoToProtocolConverter() {
    _classCallCheck(this, MonacoToProtocolConverter);
  }

  _createClass(MonacoToProtocolConverter, [{
    key: "asPosition",
    value: function asPosition(lineNumber, column) {
      var line = lineNumber === undefined || lineNumber === null ? undefined : lineNumber - 1;
      var character = column === undefined || column === null ? undefined : column - 1;
      return {
        line: line,
        character: character
      };
    }
  }, {
    key: "asRange",
    value: function asRange(range) {
      if (range === undefined) {
        return undefined;
      }

      if (range === null) {
        return null;
      }

      var start = this.asPosition(range.startLineNumber, range.startColumn);
      var end = this.asPosition(range.endLineNumber, range.endColumn);
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "asTextDocumentIdentifier",
    value: function asTextDocumentIdentifier(model) {
      return {
        uri: model.uri.toString()
      };
    }
  }, {
    key: "asTextDocumentPositionParams",
    value: function asTextDocumentPositionParams(model, position) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column)
      };
    }
  }, {
    key: "asCompletionParams",
    value: function asCompletionParams(model, position, context) {
      return Object.assign(this.asTextDocumentPositionParams(model, position), {
        context: this.asCompletionContext(context)
      });
    }
  }, {
    key: "asCompletionContext",
    value: function asCompletionContext(context) {
      return {
        triggerKind: this.asTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter
      };
    }
  }, {
    key: "asTriggerKind",
    value: function asTriggerKind(triggerKind) {
      switch (triggerKind) {
        case monaco.languages.CompletionTriggerKind.TriggerCharacter:
          return services_1.CompletionTriggerKind.TriggerCharacter;

        case monaco.languages.CompletionTriggerKind.TriggerForIncompleteCompletions:
          return services_1.CompletionTriggerKind.TriggerForIncompleteCompletions;

        default:
          return services_1.CompletionTriggerKind.Invoked;
      }
    }
  }, {
    key: "asCompletionItem",
    value: function asCompletionItem(item) {
      var result = {
        label: item.label
      };
      var protocolItem = ProtocolCompletionItem.is(item) ? item : undefined;

      if (item.detail) {
        result.detail = item.detail;
      } // We only send items back we created. So this can't be something else than
      // a string right now.


      if (item.documentation) {
        if (!protocolItem || !protocolItem.documentationFormat) {
          result.documentation = item.documentation;
        } else {
          result.documentation = this.asDocumentation(protocolItem.documentationFormat, item.documentation);
        }
      }

      if (item.filterText) {
        result.filterText = item.filterText;
      }

      this.fillPrimaryInsertText(result, item);

      if (Is.number(item.kind)) {
        result.kind = this.asCompletionItemKind(item.kind, protocolItem && protocolItem.originalItemKind);
      }

      if (item.sortText) {
        result.sortText = item.sortText;
      }

      if (item.additionalTextEdits) {
        result.additionalTextEdits = this.asTextEdits(item.additionalTextEdits);
      }

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (item.commitCharacters) {
        result.commitCharacters = item.commitCharacters.slice();
      }

      if (item.command) {
        result.command = this.asCommand(item.command);
      } // TODO if (item.preselect === true || item.preselect === false) { result.preselect = item.preselect; }


      if (protocolItem) {
        if (protocolItem.data !== undefined) {
          result.data = protocolItem.data;
        }

        if (protocolItem.deprecated === true || protocolItem.deprecated === false) {
          result.deprecated = protocolItem.deprecated;
        }
      }

      return result;
    }
  }, {
    key: "asCompletionItemKind",
    value: function asCompletionItemKind(value, original) {
      if (original !== undefined) {
        return original;
      }

      switch (value) {
        case monaco.languages.CompletionItemKind.Method:
          return services_1.CompletionItemKind.Method;

        case monaco.languages.CompletionItemKind.Function:
          return services_1.CompletionItemKind.Function;

        case monaco.languages.CompletionItemKind.Constructor:
          return services_1.CompletionItemKind.Constructor;

        case monaco.languages.CompletionItemKind.Field:
          return services_1.CompletionItemKind.Field;

        case monaco.languages.CompletionItemKind.Variable:
          return services_1.CompletionItemKind.Variable;

        case monaco.languages.CompletionItemKind.Class:
          return services_1.CompletionItemKind.Class;

        case monaco.languages.CompletionItemKind.Struct:
          return services_1.CompletionItemKind.Struct;

        case monaco.languages.CompletionItemKind.Interface:
          return services_1.CompletionItemKind.Interface;

        case monaco.languages.CompletionItemKind.Module:
          return services_1.CompletionItemKind.Module;

        case monaco.languages.CompletionItemKind.Property:
          return services_1.CompletionItemKind.Property;

        case monaco.languages.CompletionItemKind.Event:
          return services_1.CompletionItemKind.Event;

        case monaco.languages.CompletionItemKind.Operator:
          return services_1.CompletionItemKind.Operator;

        case monaco.languages.CompletionItemKind.Unit:
          return services_1.CompletionItemKind.Unit;

        case monaco.languages.CompletionItemKind.Value:
          return services_1.CompletionItemKind.Value;

        case monaco.languages.CompletionItemKind.Constant:
          return services_1.CompletionItemKind.Constant;

        case monaco.languages.CompletionItemKind.Enum:
          return services_1.CompletionItemKind.Enum;

        case monaco.languages.CompletionItemKind.EnumMember:
          return services_1.CompletionItemKind.EnumMember;

        case monaco.languages.CompletionItemKind.Keyword:
          return services_1.CompletionItemKind.Keyword;

        case monaco.languages.CompletionItemKind.Text:
          return services_1.CompletionItemKind.Text;

        case monaco.languages.CompletionItemKind.Color:
          return services_1.CompletionItemKind.Color;

        case monaco.languages.CompletionItemKind.File:
          return services_1.CompletionItemKind.File;

        case monaco.languages.CompletionItemKind.Reference:
          return services_1.CompletionItemKind.Reference;

        case monaco.languages.CompletionItemKind.Customcolor:
          return services_1.CompletionItemKind.Color;

        case monaco.languages.CompletionItemKind.Folder:
          return services_1.CompletionItemKind.Folder;

        case monaco.languages.CompletionItemKind.TypeParameter:
          return services_1.CompletionItemKind.TypeParameter;

        case monaco.languages.CompletionItemKind.Snippet:
          return services_1.CompletionItemKind.Snippet;

        default:
          return value + 1;
      }
    }
  }, {
    key: "asDocumentation",
    value: function asDocumentation(format, documentation) {
      switch (format) {
        case services_1.MarkupKind.PlainText:
          return {
            kind: format,
            value: documentation
          };

        case services_1.MarkupKind.Markdown:
          return {
            kind: format,
            value: documentation.value
          };

        default:
          return "Unsupported Markup content received. Kind is: ".concat(format);
      }
    }
  }, {
    key: "fillPrimaryInsertText",
    value: function fillPrimaryInsertText(target, source) {
      var format = services_1.InsertTextFormat.PlainText;
      var text;
      var range;

      if (source.insertTextRules !== undefined && (source.insertTextRules & monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet) === 0) {
        format = services_1.InsertTextFormat.Snippet;
        text = source.insertText;
      }

      target.insertTextFormat = format;
      text = source.insertText;

      if (source.range) {
        range = this.asRange(source.range);
      }

      target.insertTextFormat = format;

      if (source.fromEdit && text && range) {
        target.textEdit = {
          newText: text,
          range: range
        };
      } else {
        target.insertText = text;
      }
    }
  }, {
    key: "asTextEdit",
    value: function asTextEdit(edit) {
      var range = this.asRange(edit.range);
      return {
        range: range,
        newText: edit.text || ''
      };
    }
  }, {
    key: "asTextEdits",
    value: function asTextEdits(items) {
      var _this = this;

      if (!items) {
        return undefined;
      }

      return items.map(function (item) {
        return _this.asTextEdit(item);
      });
    }
  }, {
    key: "asReferenceParams",
    value: function asReferenceParams(model, position, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column),
        context: {
          includeDeclaration: options.includeDeclaration
        }
      };
    }
  }, {
    key: "asDocumentSymbolParams",
    value: function asDocumentSymbolParams(model) {
      return {
        textDocument: this.asTextDocumentIdentifier(model)
      };
    }
  }, {
    key: "asCodeLensParams",
    value: function asCodeLensParams(model) {
      return {
        textDocument: this.asTextDocumentIdentifier(model)
      };
    }
  }, {
    key: "asDiagnosticSeverity",
    value: function asDiagnosticSeverity(value) {
      switch (value) {
        case monaco.MarkerSeverity.Error:
          return services_1.DiagnosticSeverity.Error;

        case monaco.MarkerSeverity.Warning:
          return services_1.DiagnosticSeverity.Warning;

        case monaco.MarkerSeverity.Info:
          return services_1.DiagnosticSeverity.Information;

        case monaco.MarkerSeverity.Hint:
          return services_1.DiagnosticSeverity.Hint;
      }

      return undefined;
    }
  }, {
    key: "asDiagnostic",
    value: function asDiagnostic(marker) {
      var range = this.asRange(new monaco.Range(marker.startLineNumber, marker.startColumn, marker.endLineNumber, marker.endColumn));
      var severity = this.asDiagnosticSeverity(marker.severity);
      return services_1.Diagnostic.create(range, marker.message, severity, marker.code, marker.source);
    }
  }, {
    key: "asDiagnostics",
    value: function asDiagnostics(markers) {
      var _this2 = this;

      if (markers === void 0 || markers === null) {
        return markers;
      }

      return markers.map(function (marker) {
        return _this2.asDiagnostic(marker);
      });
    }
  }, {
    key: "asCodeActionContext",
    value: function asCodeActionContext(context) {
      if (context === void 0 || context === null) {
        return context;
      }

      var diagnostics = this.asDiagnostics(context.markers);
      return services_1.CodeActionContext.create(diagnostics, Is.string(context.only) ? [context.only] : undefined);
    }
  }, {
    key: "asCodeActionParams",
    value: function asCodeActionParams(model, range, context) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        range: this.asRange(range),
        context: this.asCodeActionContext(context)
      };
    }
  }, {
    key: "asCommand",
    value: function asCommand(item) {
      if (item) {
        var _services_1$Command;

        var args = item.arguments || [];
        return (_services_1$Command = services_1.Command).create.apply(_services_1$Command, [item.title, item.id].concat(_toConsumableArray(args)));
      }

      return undefined;
    }
  }, {
    key: "asCodeLens",
    value: function asCodeLens(item) {
      var result = services_1.CodeLens.create(this.asRange(item.range));

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (ProtocolCodeLens.is(item)) {
        if (item.data) {
          result.data = item.data;
        }

        ;
      }

      return result;
    }
  }, {
    key: "asFormattingOptions",
    value: function asFormattingOptions(options) {
      return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
      };
    }
  }, {
    key: "asDocumentFormattingParams",
    value: function asDocumentFormattingParams(model, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        options: this.asFormattingOptions(options)
      };
    }
  }, {
    key: "asDocumentRangeFormattingParams",
    value: function asDocumentRangeFormattingParams(model, range, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        range: this.asRange(range),
        options: this.asFormattingOptions(options)
      };
    }
  }, {
    key: "asDocumentOnTypeFormattingParams",
    value: function asDocumentOnTypeFormattingParams(model, position, ch, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column),
        ch: ch,
        options: this.asFormattingOptions(options)
      };
    }
  }, {
    key: "asRenameParams",
    value: function asRenameParams(model, position, newName) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column),
        newName: newName
      };
    }
  }, {
    key: "asDocumentLinkParams",
    value: function asDocumentLinkParams(model) {
      return {
        textDocument: this.asTextDocumentIdentifier(model)
      };
    }
  }, {
    key: "asDocumentLink",
    value: function asDocumentLink(item) {
      var result = services_1.DocumentLink.create(this.asRange(item.range));

      if (item.url) {
        result.target = typeof item.url === 'string' ? item.url : item.url.toString();
      }

      if (ProtocolDocumentLink.is(item) && item.data) {
        result.data = item.data;
      }

      return result;
    }
  }]);

  return MonacoToProtocolConverter;
}();

exports.MonacoToProtocolConverter = MonacoToProtocolConverter;

var ProtocolToMonacoConverter =
/*#__PURE__*/
function () {
  function ProtocolToMonacoConverter() {
    _classCallCheck(this, ProtocolToMonacoConverter);
  }

  _createClass(ProtocolToMonacoConverter, [{
    key: "asResourceEdits",
    value: function asResourceEdits(resource, edits, modelVersionId) {
      return {
        resource: resource,
        edits: this.asTextEdits(edits),
        modelVersionId: modelVersionId
      };
    }
  }, {
    key: "asWorkspaceEdit",
    value: function asWorkspaceEdit(item) {
      var _this3 = this;

      if (!item) {
        return undefined;
      }

      var edits = [];

      if (item.documentChanges) {
        item.documentChanges.forEach(function (change) {
          if (ls.CreateFile.is(change)) {
            edits.push({
              newUri: monaco.Uri.parse(change.uri),
              options: change.options
            });
          } else if (ls.RenameFile.is(change)) {
            edits.push({
              oldUri: monaco.Uri.parse(change.oldUri),
              newUri: monaco.Uri.parse(change.newUri),
              options: change.options
            });
          } else if (ls.DeleteFile.is(change)) {
            edits.push({
              oldUri: monaco.Uri.parse(change.uri),
              options: change.options
            });
          } else if (ls.TextDocumentEdit.is(change)) {
            var resource = monaco.Uri.parse(change.textDocument.uri);
            var version = typeof change.textDocument.version === 'number' ? change.textDocument.version : undefined;
            edits.push(_this3.asResourceEdits(resource, change.edits, version));
          } else {
            console.error("Unknown workspace edit change received:\n".concat(JSON.stringify(change, undefined, 4)));
          }
        });
      } else if (item.changes) {
        for (var _i = 0, _Object$keys = Object.keys(item.changes); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          var resource = monaco.Uri.parse(key);
          edits.push(this.asResourceEdits(resource, item.changes[key]));
        }
      }

      return {
        edits: edits
      };
    }
  }, {
    key: "asTextEdit",
    value: function asTextEdit(edit) {
      if (!edit) {
        return undefined;
      }

      var range = this.asRange(edit.range);
      return {
        range: range,
        text: edit.newText
      };
    }
  }, {
    key: "asTextEdits",
    value: function asTextEdits(items) {
      var _this4 = this;

      if (!items) {
        return undefined;
      }

      return items.map(function (item) {
        return _this4.asTextEdit(item);
      });
    }
  }, {
    key: "asCodeLens",
    value: function asCodeLens(item) {
      if (!item) {
        return undefined;
      }

      var range = this.asRange(item.range);
      var result = {
        range: range
      };

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (item.data !== void 0 && item.data !== null) {
        result.data = item.data;
      }

      return result;
    }
  }, {
    key: "asCodeLenses",
    value: function asCodeLenses(items) {
      var _this5 = this;

      if (!items) {
        return undefined;
      }

      return items.map(function (codeLens) {
        return _this5.asCodeLens(codeLens);
      });
    }
  }, {
    key: "asCodeActions",
    value: function asCodeActions(actions) {
      var _this6 = this;

      return actions.map(function (action) {
        return _this6.asCodeAction(action);
      });
    }
  }, {
    key: "asCodeAction",
    value: function asCodeAction(item) {
      if (services_1.CodeAction.is(item)) {
        return {
          title: item.title,
          command: this.asCommand(item.command),
          edit: this.asWorkspaceEdit(item.edit),
          diagnostics: this.asDiagnostics(item.diagnostics),
          kind: item.kind
        };
      }

      return {
        command: {
          id: item.command,
          title: item.title,
          arguments: item.arguments
        },
        title: item.title
      };
    }
  }, {
    key: "asCommand",
    value: function asCommand(command) {
      if (!command) {
        return undefined;
      }

      return {
        id: command.command,
        title: command.title,
        arguments: command.arguments
      };
    }
  }, {
    key: "asDocumentSymbol",
    value: function asDocumentSymbol(value) {
      var _this7 = this;

      var children = value.children && value.children.map(function (c) {
        return _this7.asDocumentSymbol(c);
      });
      return {
        name: value.name,
        detail: value.detail || "",
        kind: this.asSymbolKind(value.kind),
        range: this.asRange(value.range),
        selectionRange: this.asRange(value.selectionRange),
        children: children
      };
    }
  }, {
    key: "asDocumentSymbols",
    value: function asDocumentSymbols(values) {
      var _this8 = this;

      if (services_1.DocumentSymbol.is(values[0])) {
        return values.map(function (s) {
          return _this8.asDocumentSymbol(s);
        });
      }

      return this.asSymbolInformations(values);
    }
  }, {
    key: "asSymbolInformations",
    value: function asSymbolInformations(values, uri) {
      var _this9 = this;

      if (!values) {
        return undefined;
      }

      return values.map(function (information) {
        return _this9.asSymbolInformation(information, uri);
      });
    }
  }, {
    key: "asSymbolInformation",
    value: function asSymbolInformation(item, uri) {
      var location = this.asLocation(uri ? Object.assign({}, item.location, {
        uri: uri.toString()
      }) : item.location);
      return {
        name: item.name,
        detail: '',
        containerName: item.containerName,
        kind: this.asSymbolKind(item.kind),
        range: location.range,
        selectionRange: location.range
      };
    }
  }, {
    key: "asSymbolKind",
    value: function asSymbolKind(item) {
      if (item <= services_1.SymbolKind.TypeParameter) {
        // Symbol kind is one based in the protocol and zero based in code.
        return item - 1;
      }

      return monaco.languages.SymbolKind.Property;
    }
  }, {
    key: "asDocumentHighlights",
    value: function asDocumentHighlights(values) {
      var _this10 = this;

      if (!values) {
        return undefined;
      }

      return values.map(function (item) {
        return _this10.asDocumentHighlight(item);
      });
    }
  }, {
    key: "asDocumentHighlight",
    value: function asDocumentHighlight(item) {
      var range = this.asRange(item.range);
      var kind = Is.number(item.kind) ? this.asDocumentHighlightKind(item.kind) : undefined;
      return {
        range: range,
        kind: kind
      };
    }
  }, {
    key: "asDocumentHighlightKind",
    value: function asDocumentHighlightKind(item) {
      switch (item) {
        case services_1.DocumentHighlightKind.Text:
          return monaco.languages.DocumentHighlightKind.Text;

        case services_1.DocumentHighlightKind.Read:
          return monaco.languages.DocumentHighlightKind.Read;

        case services_1.DocumentHighlightKind.Write:
          return monaco.languages.DocumentHighlightKind.Write;
      }

      return monaco.languages.DocumentHighlightKind.Text;
    }
  }, {
    key: "asReferences",
    value: function asReferences(values) {
      var _this11 = this;

      if (!values) {
        return undefined;
      }

      return values.map(function (location) {
        return _this11.asLocation(location);
      });
    }
  }, {
    key: "asDefinitionResult",
    value: function asDefinitionResult(item) {
      var _this12 = this;

      if (!item) {
        return undefined;
      }

      if (Is.array(item)) {
        return item.map(function (location) {
          return _this12.asLocation(location);
        });
      } else {
        return this.asLocation(item);
      }
    }
  }, {
    key: "asLocation",
    value: function asLocation(item) {
      if (!item) {
        return undefined;
      }

      var uri = monaco.Uri.parse(item.uri);
      var range = this.asRange(item.range);
      return {
        uri: uri,
        range: range
      };
    }
  }, {
    key: "asSignatureHelp",
    value: function asSignatureHelp(item) {
      if (!item) {
        return undefined;
      }

      var result = {};

      if (Is.number(item.activeSignature)) {
        result.activeSignature = item.activeSignature;
      } else {
        // activeSignature was optional in the past
        result.activeSignature = 0;
      }

      if (Is.number(item.activeParameter)) {
        result.activeParameter = item.activeParameter;
      } else {
        // activeParameter was optional in the past
        result.activeParameter = 0;
      }

      if (item.signatures) {
        result.signatures = this.asSignatureInformations(item.signatures);
      } else {
        result.signatures = [];
      }

      return result;
    }
  }, {
    key: "asSignatureInformations",
    value: function asSignatureInformations(items) {
      var _this13 = this;

      return items.map(function (item) {
        return _this13.asSignatureInformation(item);
      });
    }
  }, {
    key: "asSignatureInformation",
    value: function asSignatureInformation(item) {
      var result = {
        label: item.label
      };

      if (item.documentation) {
        result.documentation = this.asDocumentation(item.documentation);
      }

      if (item.parameters) {
        result.parameters = this.asParameterInformations(item.parameters);
      } else {
        result.parameters = [];
      }

      return result;
    }
  }, {
    key: "asParameterInformations",
    value: function asParameterInformations(item) {
      var _this14 = this;

      return item.map(function (item) {
        return _this14.asParameterInformation(item);
      });
    }
  }, {
    key: "asParameterInformation",
    value: function asParameterInformation(item) {
      var result = {
        label: item.label
      };

      if (item.documentation) {
        result.documentation = this.asDocumentation(item.documentation);
      }

      ;
      return result;
    }
  }, {
    key: "asHover",
    value: function asHover(hover) {
      if (!hover) {
        return undefined;
      }

      return {
        contents: this.asHoverContent(hover.contents),
        range: this.asRange(hover.range)
      };
    }
  }, {
    key: "asHoverContent",
    value: function asHoverContent(contents) {
      var _this15 = this;

      if (Array.isArray(contents)) {
        return contents.map(function (content) {
          return _this15.asMarkdownString(content);
        });
      }

      return [this.asMarkdownString(contents)];
    }
  }, {
    key: "asDocumentation",
    value: function asDocumentation(value) {
      if (Is.string(value)) {
        return value;
      }

      if (value.kind === services_1.MarkupKind.PlainText) {
        return value.value;
      }

      return this.asMarkdownString(value);
    }
  }, {
    key: "asMarkdownString",
    value: function asMarkdownString(content) {
      if (services_1.MarkupContent.is(content)) {
        return {
          value: content.value
        };
      }

      if (Is.string(content)) {
        return {
          value: content
        };
      }

      var language = content.language,
          value = content.value;
      return {
        value: '```' + language + '\n' + value + '\n```'
      };
    }
  }, {
    key: "asSeverity",
    value: function asSeverity(severity) {
      if (severity === 1) {
        return monaco.MarkerSeverity.Error;
      }

      if (severity === 2) {
        return monaco.MarkerSeverity.Warning;
      }

      if (severity === 3) {
        return monaco.MarkerSeverity.Info;
      }

      return monaco.MarkerSeverity.Hint;
    }
  }, {
    key: "asDiagnostics",
    value: function asDiagnostics(diagnostics) {
      var _this16 = this;

      if (!diagnostics) {
        return undefined;
      }

      return diagnostics.map(function (diagnostic) {
        return _this16.asDiagnostic(diagnostic);
      });
    }
  }, {
    key: "asDiagnostic",
    value: function asDiagnostic(diagnostic) {
      return {
        code: typeof diagnostic.code === "number" ? diagnostic.code.toString() : diagnostic.code,
        severity: this.asSeverity(diagnostic.severity),
        message: diagnostic.message,
        source: diagnostic.source,
        startLineNumber: diagnostic.range.start.line + 1,
        startColumn: diagnostic.range.start.character + 1,
        endLineNumber: diagnostic.range.end.line + 1,
        endColumn: diagnostic.range.end.character + 1,
        relatedInformation: this.asRelatedInformations(diagnostic.relatedInformation)
      };
    }
  }, {
    key: "asRelatedInformations",
    value: function asRelatedInformations(relatedInformation) {
      var _this17 = this;

      if (!relatedInformation) {
        return undefined;
      }

      return relatedInformation.map(function (item) {
        return _this17.asRelatedInformation(item);
      });
    }
  }, {
    key: "asRelatedInformation",
    value: function asRelatedInformation(relatedInformation) {
      return {
        resource: monaco.Uri.parse(relatedInformation.location.uri),
        startLineNumber: relatedInformation.location.range.start.line + 1,
        startColumn: relatedInformation.location.range.start.character + 1,
        endLineNumber: relatedInformation.location.range.end.line + 1,
        endColumn: relatedInformation.location.range.end.character + 1,
        message: relatedInformation.message
      };
    }
  }, {
    key: "asCompletionResult",
    value: function asCompletionResult(result, defaultRange) {
      var _this18 = this;

      if (!result) {
        return {
          incomplete: false,
          suggestions: []
        };
      }

      if (Array.isArray(result)) {
        var suggestions = result.map(function (item) {
          return _this18.asCompletionItem(item, defaultRange);
        });
        return {
          incomplete: false,
          suggestions: suggestions
        };
      }

      return {
        incomplete: result.isIncomplete,
        suggestions: result.items.map(function (item) {
          return _this18.asCompletionItem(item, defaultRange);
        })
      };
    }
  }, {
    key: "asCompletionItem",
    value: function asCompletionItem(item, defaultRange) {
      var result = {
        label: item.label
      };

      if (item.detail) {
        result.detail = item.detail;
      }

      if (item.documentation) {
        result.documentation = this.asDocumentation(item.documentation);
        result.documentationFormat = Is.string(item.documentation) ? undefined : item.documentation.kind;
      }

      ;

      if (item.filterText) {
        result.filterText = item.filterText;
      }

      var insertText = this.asCompletionInsertText(item, defaultRange);
      result.insertText = insertText.insertText;
      result.range = insertText.range;
      result.fromEdit = insertText.fromEdit;

      if (insertText.isSnippet) {
        result.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
      }

      if (Is.number(item.kind)) {
        var _this$asCompletionIte = this.asCompletionItemKind(item.kind),
            _this$asCompletionIte2 = _slicedToArray(_this$asCompletionIte, 2),
            itemKind = _this$asCompletionIte2[0],
            original = _this$asCompletionIte2[1];

        result.kind = itemKind;

        if (original) {
          result.originalItemKind = original;
        }
      }

      if (item.sortText) {
        result.sortText = item.sortText;
      }

      if (item.additionalTextEdits) {
        result.additionalTextEdits = this.asTextEdits(item.additionalTextEdits);
      }

      if (Is.stringArray(item.commitCharacters)) {
        result.commitCharacters = item.commitCharacters.slice();
      }

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (item.deprecated === true || item.deprecated === false) {
        result.deprecated = item.deprecated;
      }

      if (item.preselect === true || item.preselect === false) {
        result.preselect = item.preselect;
      }

      if (item.data !== undefined) {
        result.data = item.data;
      }

      if (item.deprecated === true || item.deprecated === false) {
        result.deprecated = item.deprecated;
      }

      return result;
    }
  }, {
    key: "asCompletionItemKind",
    value: function asCompletionItemKind(value) {
      if (services_1.CompletionItemKind.Text <= value && value <= services_1.CompletionItemKind.TypeParameter) {
        switch (value) {
          case services_1.CompletionItemKind.Text:
            return [monaco.languages.CompletionItemKind.Text, undefined];

          case services_1.CompletionItemKind.Method:
            return [monaco.languages.CompletionItemKind.Method, undefined];

          case services_1.CompletionItemKind.Function:
            return [monaco.languages.CompletionItemKind.Function, undefined];

          case services_1.CompletionItemKind.Constructor:
            return [monaco.languages.CompletionItemKind.Constructor, undefined];

          case services_1.CompletionItemKind.Field:
            return [monaco.languages.CompletionItemKind.Field, undefined];

          case services_1.CompletionItemKind.Variable:
            return [monaco.languages.CompletionItemKind.Variable, undefined];

          case services_1.CompletionItemKind.Class:
            return [monaco.languages.CompletionItemKind.Class, undefined];

          case services_1.CompletionItemKind.Interface:
            return [monaco.languages.CompletionItemKind.Interface, undefined];

          case services_1.CompletionItemKind.Module:
            return [monaco.languages.CompletionItemKind.Module, undefined];

          case services_1.CompletionItemKind.Property:
            return [monaco.languages.CompletionItemKind.Property, undefined];

          case services_1.CompletionItemKind.Unit:
            return [monaco.languages.CompletionItemKind.Unit, undefined];

          case services_1.CompletionItemKind.Value:
            return [monaco.languages.CompletionItemKind.Value, undefined];

          case services_1.CompletionItemKind.Enum:
            return [monaco.languages.CompletionItemKind.Enum, undefined];

          case services_1.CompletionItemKind.Keyword:
            return [monaco.languages.CompletionItemKind.Keyword, undefined];

          case services_1.CompletionItemKind.Snippet:
            return [monaco.languages.CompletionItemKind.Snippet, undefined];

          case services_1.CompletionItemKind.Color:
            return [monaco.languages.CompletionItemKind.Color, undefined];

          case services_1.CompletionItemKind.File:
            return [monaco.languages.CompletionItemKind.File, undefined];

          case services_1.CompletionItemKind.Reference:
            return [monaco.languages.CompletionItemKind.Reference, undefined];

          case services_1.CompletionItemKind.Folder:
            return [monaco.languages.CompletionItemKind.Folder, undefined];

          case services_1.CompletionItemKind.EnumMember:
            return [monaco.languages.CompletionItemKind.EnumMember, undefined];

          case services_1.CompletionItemKind.Constant:
            return [monaco.languages.CompletionItemKind.Constant, undefined];

          case services_1.CompletionItemKind.Struct:
            return [monaco.languages.CompletionItemKind.Struct, undefined];

          case services_1.CompletionItemKind.Event:
            return [monaco.languages.CompletionItemKind.Event, undefined];

          case services_1.CompletionItemKind.Operator:
            return [monaco.languages.CompletionItemKind.Operator, undefined];

          case services_1.CompletionItemKind.TypeParameter:
            return [monaco.languages.CompletionItemKind.TypeParameter, undefined];

          default:
            return [value - 1, undefined];
        }
      }

      ;
      return [services_1.CompletionItemKind.Text, value];
    }
  }, {
    key: "asCompletionInsertText",
    value: function asCompletionInsertText(item, defaultRange) {
      var isSnippet = item.insertTextFormat === services_1.InsertTextFormat.Snippet;

      if (item.textEdit) {
        var range = this.asRange(item.textEdit.range);
        var value = item.textEdit.newText;
        return {
          isSnippet: isSnippet,
          insertText: value,
          range: range,
          fromEdit: true
        };
      }

      if (item.insertText) {
        return {
          isSnippet: isSnippet,
          insertText: item.insertText,
          fromEdit: false,
          range: defaultRange
        };
      }

      return {
        insertText: item.label,
        range: defaultRange,
        fromEdit: false,
        isSnippet: false
      };
    }
  }, {
    key: "asDocumentLinks",
    value: function asDocumentLinks(documentLinks) {
      var _this19 = this;

      var links = documentLinks.map(function (link) {
        return _this19.asDocumentLink(link);
      });
      return {
        links: links
      };
    }
  }, {
    key: "asDocumentLink",
    value: function asDocumentLink(documentLink) {
      return {
        range: this.asRange(documentLink.range),
        url: documentLink.target,
        data: documentLink.data
      };
    }
  }, {
    key: "asRange",
    value: function asRange(range) {
      if (range === undefined) {
        return undefined;
      }

      if (range === null) {
        return null;
      }

      var start = this.asPosition(range.start);
      var end = this.asPosition(range.end);

      if (start instanceof monaco.Position && end instanceof monaco.Position) {
        return new monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column);
      }

      var startLineNumber = !start || start.lineNumber === undefined ? undefined : start.lineNumber;
      var startColumn = !start || start.column === undefined ? undefined : start.column;
      var endLineNumber = !end || end.lineNumber === undefined ? undefined : end.lineNumber;
      var endColumn = !end || end.column === undefined ? undefined : end.column;
      return {
        startLineNumber: startLineNumber,
        startColumn: startColumn,
        endLineNumber: endLineNumber,
        endColumn: endColumn
      };
    }
  }, {
    key: "asPosition",
    value: function asPosition(position) {
      if (position === undefined) {
        return undefined;
      }

      if (position === null) {
        return null;
      }

      var line = position.line,
          character = position.character;
      var lineNumber = line === undefined ? undefined : line + 1;
      var column = character === undefined ? undefined : character + 1;

      if (lineNumber !== undefined && column !== undefined) {
        return new monaco.Position(lineNumber, column);
      }

      return {
        lineNumber: lineNumber,
        column: column
      };
    }
  }, {
    key: "asColorInformations",
    value: function asColorInformations(items) {
      var _this20 = this;

      return items.map(function (item) {
        return _this20.asColorInformation(item);
      });
    }
  }, {
    key: "asColorInformation",
    value: function asColorInformation(item) {
      return {
        range: this.asRange(item.range),
        color: item.color
      };
    }
  }, {
    key: "asColorPresentations",
    value: function asColorPresentations(items) {
      var _this21 = this;

      return items.map(function (item) {
        return _this21.asColorPresentation(item);
      });
    }
  }, {
    key: "asColorPresentation",
    value: function asColorPresentation(item) {
      return {
        label: item.label,
        textEdit: this.asTextEdit(item.textEdit),
        additionalTextEdits: this.asTextEdits(item.additionalTextEdits)
      };
    }
  }, {
    key: "asFoldingRanges",
    value: function asFoldingRanges(items) {
      var _this22 = this;

      if (!items) {
        return items;
      }

      return items.map(function (item) {
        return _this22.asFoldingRange(item);
      });
    }
  }, {
    key: "asFoldingRange",
    value: function asFoldingRange(item) {
      return {
        start: item.startLine + 1,
        end: item.endLine + 1,
        kind: this.asFoldingRangeKind(item.kind)
      };
    }
  }, {
    key: "asFoldingRangeKind",
    value: function asFoldingRangeKind(kind) {
      if (kind) {
        switch (kind) {
          case services_1.FoldingRangeKind.Comment:
            return monaco.languages.FoldingRangeKind.Comment;

          case services_1.FoldingRangeKind.Imports:
            return monaco.languages.FoldingRangeKind.Imports;

          case services_1.FoldingRangeKind.Region:
            return monaco.languages.FoldingRangeKind.Region;
        }

        ;
      }

      return undefined;
    }
  }]);

  return ProtocolToMonacoConverter;
}();

exports.ProtocolToMonacoConverter = ProtocolToMonacoConverter;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js":
/*!*******************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var disposable_1 = __webpack_require__(/*! ./disposable */ "../../../../node_modules/monaco-languageclient/lib/disposable.js");

var MonacoDiagnosticCollection =
/*#__PURE__*/
function () {
  function MonacoDiagnosticCollection(name, p2m) {
    _classCallCheck(this, MonacoDiagnosticCollection);

    this.name = name;
    this.p2m = p2m;
    this.diagnostics = new Map();
    this.toDispose = new disposable_1.DisposableCollection();
  }

  _createClass(MonacoDiagnosticCollection, [{
    key: "dispose",
    value: function dispose() {
      this.toDispose.dispose();
    }
  }, {
    key: "get",
    value: function get(uri) {
      var diagnostics = this.diagnostics.get(uri);
      return !!diagnostics ? diagnostics.diagnostics : [];
    }
  }, {
    key: "set",
    value: function set(uri, diagnostics) {
      var _this = this;

      var existing = this.diagnostics.get(uri);

      if (existing) {
        existing.diagnostics = diagnostics;
      } else {
        var modelDiagnostics = new MonacoModelDiagnostics(uri, diagnostics, this.name, this.p2m);
        this.diagnostics.set(uri, modelDiagnostics);
        this.toDispose.push(disposable_1.Disposable.create(function () {
          _this.diagnostics["delete"](uri);

          modelDiagnostics.dispose();
        }));
      }
    }
  }]);

  return MonacoDiagnosticCollection;
}();

exports.MonacoDiagnosticCollection = MonacoDiagnosticCollection;

var MonacoModelDiagnostics =
/*#__PURE__*/
function () {
  function MonacoModelDiagnostics(uri, diagnostics, owner, p2m) {
    var _this2 = this;

    _classCallCheck(this, MonacoModelDiagnostics);

    this.owner = owner;
    this.p2m = p2m;
    this._markers = [];
    this._diagnostics = [];
    this.uri = monaco.Uri.parse(uri);
    this.diagnostics = diagnostics;
    monaco.editor.onDidCreateModel(function (model) {
      return _this2.doUpdateModelMarkers(model);
    });
  }

  _createClass(MonacoModelDiagnostics, [{
    key: "dispose",
    value: function dispose() {
      this._markers = [];
      this.updateModelMarkers();
    }
  }, {
    key: "updateModelMarkers",
    value: function updateModelMarkers() {
      var model = monaco.editor.getModel(this.uri);
      this.doUpdateModelMarkers(model ? model : undefined);
    }
  }, {
    key: "doUpdateModelMarkers",
    value: function doUpdateModelMarkers(model) {
      if (model && this.uri.toString() === model.uri.toString()) {
        monaco.editor.setModelMarkers(model, this.owner, this._markers);
      }
    }
  }, {
    key: "diagnostics",
    set: function set(diagnostics) {
      this._diagnostics = diagnostics;
      this._markers = this.p2m.asDiagnostics(diagnostics);
      this.updateModelMarkers();
    },
    get: function get() {
      return this._diagnostics;
    }
  }, {
    key: "markers",
    get: function get() {
      return this._markers;
    }
  }]);

  return MonacoModelDiagnostics;
}();

exports.MonacoModelDiagnostics = MonacoModelDiagnostics;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/monaco-language-client.js":
/*!*************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/monaco-language-client.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _get = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../../../node_modules/@babel/runtime/helpers/get.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var client_1 = __webpack_require__(/*! vscode-languageclient/lib/client */ "../../../../node_modules/vscode-languageclient/lib/client.js");

var typeDefinition_1 = __webpack_require__(/*! vscode-languageclient/lib/typeDefinition */ "../../../../node_modules/vscode-languageclient/lib/typeDefinition.js");

var configuration_1 = __webpack_require__(/*! vscode-languageclient/lib/configuration */ "../../../../node_modules/vscode-languageclient/lib/configuration.js");

var implementation_1 = __webpack_require__(/*! vscode-languageclient/lib/implementation */ "../../../../node_modules/vscode-languageclient/lib/implementation.js");

var colorProvider_1 = __webpack_require__(/*! vscode-languageclient/lib/colorProvider */ "../../../../node_modules/vscode-languageclient/lib/colorProvider.js");

var workspaceFolders_1 = __webpack_require__(/*! vscode-languageclient/lib/workspaceFolders */ "../../../../node_modules/vscode-languageclient/lib/workspaceFolders.js");

var foldingRange_1 = __webpack_require__(/*! vscode-languageclient/lib/foldingRange */ "../../../../node_modules/vscode-languageclient/lib/foldingRange.js");

var declaration_1 = __webpack_require__(/*! vscode-languageclient/lib/declaration */ "../../../../node_modules/vscode-languageclient/lib/declaration.js");

__export(__webpack_require__(/*! vscode-languageclient/lib/client */ "../../../../node_modules/vscode-languageclient/lib/client.js"));

var MonacoLanguageClient =
/*#__PURE__*/
function (_client_1$BaseLanguag) {
  _inherits(MonacoLanguageClient, _client_1$BaseLanguag);

  function MonacoLanguageClient(_ref) {
    var _this;

    var id = _ref.id,
        name = _ref.name,
        clientOptions = _ref.clientOptions,
        connectionProvider = _ref.connectionProvider;

    _classCallCheck(this, MonacoLanguageClient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonacoLanguageClient).call(this, id || name.toLowerCase(), name, clientOptions));
    _this.connectionProvider = connectionProvider;
    _this.createConnection = _this.doCreateConnection.bind(_assertThisInitialized(_this)); // bypass LSP <=> VS Code conversion

    var self = _assertThisInitialized(_this);

    self._p2c = new Proxy(self._p2c, {
      get: function get(target, prop) {
        if (prop === 'asUri') {
          return target[prop];
        }

        return MonacoLanguageClient.bypassConversion;
      }
    });
    self._c2p = new Proxy(self._c2p, {
      get: function get(target, prop) {
        if (prop === 'asUri') {
          return target[prop];
        }

        if (prop === 'asCompletionParams') {
          return function (textDocument, position, context) {
            return {
              textDocument: target.asTextDocumentIdentifier(textDocument),
              position: position,
              context: context
            };
          };
        }

        if (prop === 'asWillSaveTextDocumentParams') {
          return function (event) {
            return {
              textDocument: target.asTextDocumentIdentifier(event.document),
              reason: event.reason
            };
          };
        }

        if (prop.endsWith('Params')) {
          return target[prop];
        }

        return MonacoLanguageClient.bypassConversion;
      }
    });
    return _this;
  }

  _createClass(MonacoLanguageClient, [{
    key: "doCreateConnection",
    value: function doCreateConnection() {
      var errorHandler = this.handleConnectionError.bind(this);
      var closeHandler = this.handleConnectionClosed.bind(this);
      return this.connectionProvider.get(errorHandler, closeHandler, this.outputChannel);
    }
  }, {
    key: "createMessageTransports",
    value: function createMessageTransports(encoding) {
      throw new Error('Unsupported');
    }
  }, {
    key: "registerBuiltinFeatures",
    value: function registerBuiltinFeatures() {
      _get(_getPrototypeOf(MonacoLanguageClient.prototype), "registerBuiltinFeatures", this).call(this);

      this.registerFeature(new configuration_1.ConfigurationFeature(this));
      this.registerFeature(new typeDefinition_1.TypeDefinitionFeature(this));
      this.registerFeature(new implementation_1.ImplementationFeature(this));
      this.registerFeature(new colorProvider_1.ColorProviderFeature(this));
      this.registerFeature(new workspaceFolders_1.WorkspaceFoldersFeature(this));
      var foldingRangeFeature = new foldingRange_1.FoldingRangeFeature(this);
      foldingRangeFeature['asFoldingRanges'] = MonacoLanguageClient.bypassConversion;
      this.registerFeature(foldingRangeFeature);
      this.registerFeature(new declaration_1.DeclarationFeature(this));
      var features = this['_features'];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = features[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var feature = _step.value;

          if (feature instanceof colorProvider_1.ColorProviderFeature) {
            feature['asColor'] = MonacoLanguageClient.bypassConversion;
            feature['asColorInformations'] = MonacoLanguageClient.bypassConversion;
            feature['asColorPresentations'] = MonacoLanguageClient.bypassConversion;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return MonacoLanguageClient;
}(client_1.BaseLanguageClient);

MonacoLanguageClient.bypassConversion = function (result) {
  return result || undefined;
};

exports.MonacoLanguageClient = MonacoLanguageClient;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/monaco-languages.js":
/*!*******************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/monaco-languages.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../../node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var globToRegExp = __webpack_require__(/*! glob-to-regexp */ "../../../../node_modules/glob-to-regexp/index.js");

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

var monaco_diagnostic_collection_1 = __webpack_require__(/*! ./monaco-diagnostic-collection */ "../../../../node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js");

var disposable_1 = __webpack_require__(/*! ./disposable */ "../../../../node_modules/monaco-languageclient/lib/disposable.js");

var MonacoModelIdentifier;

(function (MonacoModelIdentifier) {
  function fromDocument(document) {
    return {
      uri: monaco.Uri.parse(document.uri),
      languageId: document.languageId
    };
  }

  MonacoModelIdentifier.fromDocument = fromDocument;

  function fromModel(model) {
    return {
      uri: model.uri,
      languageId: model.getModeId()
    };
  }

  MonacoModelIdentifier.fromModel = fromModel;
})(MonacoModelIdentifier = exports.MonacoModelIdentifier || (exports.MonacoModelIdentifier = {}));

function testGlob(pattern, value) {
  var regExp = globToRegExp(pattern, {
    extended: true,
    globstar: true
  });
  return regExp.test(value);
}

exports.testGlob = testGlob;

var MonacoLanguages =
/*#__PURE__*/
function () {
  function MonacoLanguages(p2m, m2p) {
    _classCallCheck(this, MonacoLanguages);

    this.p2m = p2m;
    this.m2p = m2p;
  }

  _createClass(MonacoLanguages, [{
    key: "match",
    value: function match(selector, document) {
      return this.matchModel(selector, MonacoModelIdentifier.fromDocument(document));
    }
  }, {
    key: "createDiagnosticCollection",
    value: function createDiagnosticCollection(name) {
      return new monaco_diagnostic_collection_1.MonacoDiagnosticCollection(name || 'default', this.p2m);
    }
  }, {
    key: "registerCompletionItemProvider",
    value: function registerCompletionItemProvider(selector, provider) {
      for (var _len = arguments.length, triggerCharacters = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        triggerCharacters[_key - 2] = arguments[_key];
      }

      var completionProvider = this.createCompletionProvider.apply(this, [selector, provider].concat(triggerCharacters));
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.matchLanguage(selector)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var language = _step.value;
          providers.push(monaco.languages.registerCompletionItemProvider(language, completionProvider));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ;
      return providers;
    }
  }, {
    key: "createCompletionProvider",
    value: function createCompletionProvider(selector, provider) {
      var _this = this;

      for (var _len2 = arguments.length, triggerCharacters = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        triggerCharacters[_key2 - 2] = arguments[_key2];
      }

      return {
        triggerCharacters: triggerCharacters,
        provideCompletionItems: function provideCompletionItems(model, position, context, token) {
          return __awaiter(_this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee() {
            var wordUntil, defaultRange, params, result;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", undefined);

                  case 2:
                    wordUntil = model.getWordUntilPosition(position);
                    defaultRange = new monaco.Range(position.lineNumber, wordUntil.startColumn, position.lineNumber, wordUntil.endColumn);
                    params = this.m2p.asCompletionParams(model, position, context);
                    _context.next = 7;
                    return provider.provideCompletionItems(params, token);

                  case 7:
                    result = _context.sent;
                    return _context.abrupt("return", result && this.p2m.asCompletionResult(result, defaultRange));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        },
        resolveCompletionItem: provider.resolveCompletionItem ? function (model, position, item, token) {
          return __awaiter(_this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee2() {
            var protocolItem, resolvedItem, resolvedCompletionItem;
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    protocolItem = this.m2p.asCompletionItem(item);
                    _context2.next = 3;
                    return provider.resolveCompletionItem(protocolItem, token);

                  case 3:
                    resolvedItem = _context2.sent;

                    if (resolvedItem) {
                      resolvedCompletionItem = this.p2m.asCompletionItem(resolvedItem, item.range);
                      Object.assign(item, resolvedCompletionItem);
                    }

                    return _context2.abrupt("return", item);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } : undefined
      };
    }
  }, {
    key: "registerHoverProvider",
    value: function registerHoverProvider(selector, provider) {
      var hoverProvider = this.createHoverProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.matchLanguage(selector)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var language = _step2.value;
          providers.push(monaco.languages.registerHoverProvider(language, hoverProvider));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createHoverProvider",
    value: function createHoverProvider(selector, provider) {
      var _this2 = this;

      return {
        provideHover: function provideHover(model, position, token) {
          return __awaiter(_this2, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee3() {
            var params, hover;
            return _regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context3.next = 5;
                    return provider.provideHover(params, token);

                  case 5:
                    hover = _context3.sent;
                    return _context3.abrupt("return", hover && this.p2m.asHover(hover));

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      };
    }
  }, {
    key: "registerSignatureHelpProvider",
    value: function registerSignatureHelpProvider(selector, provider) {
      for (var _len3 = arguments.length, triggerCharacters = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        triggerCharacters[_key3 - 2] = arguments[_key3];
      }

      var signatureHelpProvider = this.createSignatureHelpProvider.apply(this, [selector, provider].concat(triggerCharacters));
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.matchLanguage(selector)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var language = _step3.value;
          providers.push(monaco.languages.registerSignatureHelpProvider(language, signatureHelpProvider));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createSignatureHelpProvider",
    value: function createSignatureHelpProvider(selector, provider) {
      var _this3 = this;

      for (var _len4 = arguments.length, triggerCharacters = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        triggerCharacters[_key4 - 2] = arguments[_key4];
      }

      var signatureHelpTriggerCharacters = _toConsumableArray(provider.triggerCharacters || triggerCharacters || []); // TODO support regrigger characters after Monaco udpate


      return {
        signatureHelpTriggerCharacters: signatureHelpTriggerCharacters,
        provideSignatureHelp: function provideSignatureHelp(model, position, token) {
          return __awaiter(_this3, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee4() {
            var params, signatureHelp;
            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context4.next = 5;
                    return provider.provideSignatureHelp(params, token, {
                      // TODO pass context from monaco after Monaco udpate
                      triggerKind: 1,
                      isRetrigger: false
                    });

                  case 5:
                    signatureHelp = _context4.sent;
                    return _context4.abrupt("return", signatureHelp && this.p2m.asSignatureHelp(signatureHelp));

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      };
    }
  }, {
    key: "registerDefinitionProvider",
    value: function registerDefinitionProvider(selector, provider) {
      var definitionProvider = this.createDefinitionProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.matchLanguage(selector)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var language = _step4.value;
          providers.push(monaco.languages.registerDefinitionProvider(language, definitionProvider));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createDefinitionProvider",
    value: function createDefinitionProvider(selector, provider) {
      var _this4 = this;

      return {
        provideDefinition: function provideDefinition(model, position, token) {
          return __awaiter(_this4, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee5() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context5.next = 5;
                    return provider.provideDefinition(params, token);

                  case 5:
                    result = _context5.sent;
                    return _context5.abrupt("return", result && this.p2m.asDefinitionResult(result));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      };
    }
  }, {
    key: "registerReferenceProvider",
    value: function registerReferenceProvider(selector, provider) {
      var referenceProvider = this.createReferenceProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.matchLanguage(selector)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var language = _step5.value;
          providers.push(monaco.languages.registerReferenceProvider(language, referenceProvider));
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createReferenceProvider",
    value: function createReferenceProvider(selector, provider) {
      var _this5 = this;

      return {
        provideReferences: function provideReferences(model, position, context, token) {
          return __awaiter(_this5, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee6() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asReferenceParams(model, position, context);
                    _context6.next = 5;
                    return provider.provideReferences(params, token);

                  case 5:
                    result = _context6.sent;
                    return _context6.abrupt("return", result && this.p2m.asReferences(result));

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentHighlightProvider",
    value: function registerDocumentHighlightProvider(selector, provider) {
      var documentHighlightProvider = this.createDocumentHighlightProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.matchLanguage(selector)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var language = _step6.value;
          providers.push(monaco.languages.registerDocumentHighlightProvider(language, documentHighlightProvider));
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createDocumentHighlightProvider",
    value: function createDocumentHighlightProvider(selector, provider) {
      var _this6 = this;

      return {
        provideDocumentHighlights: function provideDocumentHighlights(model, position, token) {
          return __awaiter(_this6, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee7() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context7.next = 5;
                    return provider.provideDocumentHighlights(params, token);

                  case 5:
                    result = _context7.sent;
                    return _context7.abrupt("return", result && this.p2m.asDocumentHighlights(result));

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentSymbolProvider",
    value: function registerDocumentSymbolProvider(selector, provider) {
      var documentSymbolProvider = this.createDocumentSymbolProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.matchLanguage(selector)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var language = _step7.value;
          providers.push(monaco.languages.registerDocumentSymbolProvider(language, documentSymbolProvider));
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createDocumentSymbolProvider",
    value: function createDocumentSymbolProvider(selector, provider) {
      var _this7 = this;

      return {
        provideDocumentSymbols: function provideDocumentSymbols(model, token) {
          return __awaiter(_this7, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee8() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentSymbolParams(model);
                    _context8.next = 5;
                    return provider.provideDocumentSymbols(params, token);

                  case 5:
                    result = _context8.sent;
                    return _context8.abrupt("return", result && this.p2m.asDocumentSymbols(result));

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      };
    }
  }, {
    key: "registerCodeActionsProvider",
    value: function registerCodeActionsProvider(selector, provider) {
      var codeActionProvider = this.createCodeActionProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this.matchLanguage(selector)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var language = _step8.value;
          providers.push(monaco.languages.registerCodeActionProvider(language, codeActionProvider));
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createCodeActionProvider",
    value: function createCodeActionProvider(selector, provider) {
      var _this8 = this;

      return {
        provideCodeActions: function provideCodeActions(model, range, context, token) {
          return __awaiter(_this8, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee9() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context9.next = 2;
                      break;
                    }

                    return _context9.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asCodeActionParams(model, range, context);
                    _context9.next = 5;
                    return provider.provideCodeActions(params, token);

                  case 5:
                    result = _context9.sent;
                    return _context9.abrupt("return", result && this.p2m.asCodeActions(result) || undefined);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      };
    }
  }, {
    key: "registerCodeLensProvider",
    value: function registerCodeLensProvider(selector, provider) {
      var codeLensProvider = this.createCodeLensProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = this.matchLanguage(selector)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var language = _step9.value;
          providers.push(monaco.languages.registerCodeLensProvider(language, codeLensProvider));
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
            _iterator9["return"]();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createCodeLensProvider",
    value: function createCodeLensProvider(selector, provider) {
      var _this9 = this;

      return {
        provideCodeLenses: function provideCodeLenses(model, token) {
          return __awaiter(_this9, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee10() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context10.next = 2;
                      break;
                    }

                    return _context10.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asCodeLensParams(model);
                    _context10.next = 5;
                    return provider.provideCodeLenses(params, token);

                  case 5:
                    result = _context10.sent;
                    return _context10.abrupt("return", result && this.p2m.asCodeLenses(result));

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        },
        resolveCodeLens: provider.resolveCodeLens ? function (model, codeLens, token) {
          return __awaiter(_this9, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee11() {
            var protocolCodeLens, result, resolvedCodeLens;
            return _regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context11.next = 2;
                      break;
                    }

                    return _context11.abrupt("return", codeLens);

                  case 2:
                    protocolCodeLens = this.m2p.asCodeLens(codeLens);
                    _context11.next = 5;
                    return provider.resolveCodeLens(protocolCodeLens, token);

                  case 5:
                    result = _context11.sent;

                    if (result) {
                      resolvedCodeLens = this.p2m.asCodeLens(result);
                      Object.assign(codeLens, resolvedCodeLens);
                    }

                    return _context11.abrupt("return", codeLens);

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } : function (_, codeLens) {
          return codeLens;
        }
      };
    }
  }, {
    key: "registerDocumentFormattingEditProvider",
    value: function registerDocumentFormattingEditProvider(selector, provider) {
      var documentFormattingEditProvider = this.createDocumentFormattingEditProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = this.matchLanguage(selector)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var language = _step10.value;
          providers.push(monaco.languages.registerDocumentFormattingEditProvider(language, documentFormattingEditProvider));
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createDocumentFormattingEditProvider",
    value: function createDocumentFormattingEditProvider(selector, provider) {
      var _this10 = this;

      return {
        provideDocumentFormattingEdits: function provideDocumentFormattingEdits(model, options, token) {
          return __awaiter(_this10, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee12() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context12.next = 2;
                      break;
                    }

                    return _context12.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentFormattingParams(model, options);
                    _context12.next = 5;
                    return provider.provideDocumentFormattingEdits(params, token);

                  case 5:
                    result = _context12.sent;
                    return _context12.abrupt("return", result && this.p2m.asTextEdits(result));

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentRangeFormattingEditProvider",
    value: function registerDocumentRangeFormattingEditProvider(selector, provider) {
      var documentRangeFormattingEditProvider = this.createDocumentRangeFormattingEditProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = this.matchLanguage(selector)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var language = _step11.value;
          providers.push(monaco.languages.registerDocumentRangeFormattingEditProvider(language, documentRangeFormattingEditProvider));
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createDocumentRangeFormattingEditProvider",
    value: function createDocumentRangeFormattingEditProvider(selector, provider) {
      var _this11 = this;

      return {
        provideDocumentRangeFormattingEdits: function provideDocumentRangeFormattingEdits(model, range, options, token) {
          return __awaiter(_this11, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee13() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context13.next = 2;
                      break;
                    }

                    return _context13.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentRangeFormattingParams(model, range, options);
                    _context13.next = 5;
                    return provider.provideDocumentRangeFormattingEdits(params, token);

                  case 5:
                    result = _context13.sent;
                    return _context13.abrupt("return", result && this.p2m.asTextEdits(result));

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      };
    }
  }, {
    key: "registerOnTypeFormattingEditProvider",
    value: function registerOnTypeFormattingEditProvider(selector, provider, firstTriggerCharacter) {
      for (var _len5 = arguments.length, moreTriggerCharacter = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
        moreTriggerCharacter[_key5 - 3] = arguments[_key5];
      }

      var onTypeFormattingEditProvider = this.createOnTypeFormattingEditProvider.apply(this, [selector, provider, firstTriggerCharacter].concat(moreTriggerCharacter));
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = this.matchLanguage(selector)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var language = _step12.value;
          providers.push(monaco.languages.registerOnTypeFormattingEditProvider(language, onTypeFormattingEditProvider));
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
            _iterator12["return"]();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createOnTypeFormattingEditProvider",
    value: function createOnTypeFormattingEditProvider(selector, provider, firstTriggerCharacter) {
      var _this12 = this;

      for (var _len6 = arguments.length, moreTriggerCharacter = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
        moreTriggerCharacter[_key6 - 3] = arguments[_key6];
      }

      var autoFormatTriggerCharacters = [firstTriggerCharacter].concat(moreTriggerCharacter);
      return {
        autoFormatTriggerCharacters: autoFormatTriggerCharacters,
        provideOnTypeFormattingEdits: function provideOnTypeFormattingEdits(model, position, ch, options, token) {
          return __awaiter(_this12, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee14() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context14.next = 2;
                      break;
                    }

                    return _context14.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentOnTypeFormattingParams(model, position, ch, options);
                    _context14.next = 5;
                    return provider.provideOnTypeFormattingEdits(params, token);

                  case 5:
                    result = _context14.sent;
                    return _context14.abrupt("return", result && this.p2m.asTextEdits(result));

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      };
    }
  }, {
    key: "registerRenameProvider",
    value: function registerRenameProvider(selector, provider) {
      var renameProvider = this.createRenameProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = this.matchLanguage(selector)[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var language = _step13.value;
          providers.push(monaco.languages.registerRenameProvider(language, renameProvider));
        }
      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
            _iterator13["return"]();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createRenameProvider",
    value: function createRenameProvider(selector, provider) {
      var _this13 = this;

      return {
        provideRenameEdits: function provideRenameEdits(model, position, newName, token) {
          return __awaiter(_this13, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee15() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context15.next = 2;
                      break;
                    }

                    return _context15.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asRenameParams(model, position, newName);
                    _context15.next = 5;
                    return provider.provideRenameEdits(params, token);

                  case 5:
                    result = _context15.sent;
                    return _context15.abrupt("return", result && this.p2m.asWorkspaceEdit(result));

                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentLinkProvider",
    value: function registerDocumentLinkProvider(selector, provider) {
      var linkProvider = this.createDocumentLinkProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = this.matchLanguage(selector)[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var language = _step14.value;
          providers.push(monaco.languages.registerLinkProvider(language, linkProvider));
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
            _iterator14["return"]();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createDocumentLinkProvider",
    value: function createDocumentLinkProvider(selector, provider) {
      var _this14 = this;

      return {
        provideLinks: function provideLinks(model, token) {
          return __awaiter(_this14, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee16() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context16.next = 2;
                      break;
                    }

                    return _context16.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentLinkParams(model);
                    _context16.next = 5;
                    return provider.provideDocumentLinks(params, token);

                  case 5:
                    result = _context16.sent;
                    return _context16.abrupt("return", result && this.p2m.asDocumentLinks(result));

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        },
        resolveLink: function resolveLink(link, token) {
          return __awaiter(_this14, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee17() {
            var documentLink, result, resolvedLink;
            return _regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    if (!(provider.resolveDocumentLink && (link.url === null || link.url === undefined))) {
                      _context17.next = 6;
                      break;
                    }

                    documentLink = this.m2p.asDocumentLink(link);
                    _context17.next = 4;
                    return provider.resolveDocumentLink(documentLink, token);

                  case 4:
                    result = _context17.sent;

                    if (result) {
                      resolvedLink = this.p2m.asDocumentLink(result);
                      Object.assign(link, resolvedLink);
                    }

                  case 6:
                    return _context17.abrupt("return", link);

                  case 7:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      };
    }
  }, {
    key: "registerImplementationProvider",
    value: function registerImplementationProvider(selector, provider) {
      var implementationProvider = this.createImplementationProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        for (var _iterator15 = this.matchLanguage(selector)[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var language = _step15.value;
          providers.push(monaco.languages.registerImplementationProvider(language, implementationProvider));
        }
      } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
            _iterator15["return"]();
          }
        } finally {
          if (_didIteratorError15) {
            throw _iteratorError15;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createImplementationProvider",
    value: function createImplementationProvider(selector, provider) {
      var _this15 = this;

      return {
        provideImplementation: function provideImplementation(model, position, token) {
          return __awaiter(_this15, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee18() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context18.next = 2;
                      break;
                    }

                    return _context18.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context18.next = 5;
                    return provider.provideImplementation(params, token);

                  case 5:
                    result = _context18.sent;
                    return _context18.abrupt("return", result && this.p2m.asDefinitionResult(result));

                  case 7:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      };
    }
  }, {
    key: "registerTypeDefinitionProvider",
    value: function registerTypeDefinitionProvider(selector, provider) {
      var typeDefinitionProvider = this.createTypeDefinitionProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = this.matchLanguage(selector)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var language = _step16.value;
          providers.push(monaco.languages.registerTypeDefinitionProvider(language, typeDefinitionProvider));
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
            _iterator16["return"]();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createTypeDefinitionProvider",
    value: function createTypeDefinitionProvider(selector, provider) {
      var _this16 = this;

      return {
        provideTypeDefinition: function provideTypeDefinition(model, position, token) {
          return __awaiter(_this16, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee19() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context19.next = 2;
                      break;
                    }

                    return _context19.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context19.next = 5;
                    return provider.provideTypeDefinition(params, token);

                  case 5:
                    result = _context19.sent;
                    return _context19.abrupt("return", result && this.p2m.asDefinitionResult(result));

                  case 7:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      };
    }
  }, {
    key: "registerColorProvider",
    value: function registerColorProvider(selector, provider) {
      var documentColorProvider = this.createDocumentColorProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion17 = true;
      var _didIteratorError17 = false;
      var _iteratorError17 = undefined;

      try {
        for (var _iterator17 = this.matchLanguage(selector)[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
          var language = _step17.value;
          providers.push(monaco.languages.registerColorProvider(language, documentColorProvider));
        }
      } catch (err) {
        _didIteratorError17 = true;
        _iteratorError17 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
            _iterator17["return"]();
          }
        } finally {
          if (_didIteratorError17) {
            throw _iteratorError17;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createDocumentColorProvider",
    value: function createDocumentColorProvider(selector, provider) {
      var _this17 = this;

      return {
        provideDocumentColors: function provideDocumentColors(model, token) {
          return __awaiter(_this17, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee20() {
            var textDocument, result;
            return _regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context20.next = 2;
                      break;
                    }

                    return _context20.abrupt("return", undefined);

                  case 2:
                    textDocument = this.m2p.asTextDocumentIdentifier(model);
                    _context20.next = 5;
                    return provider.provideDocumentColors({
                      textDocument: textDocument
                    }, token);

                  case 5:
                    result = _context20.sent;
                    return _context20.abrupt("return", result && this.p2m.asColorInformations(result));

                  case 7:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        },
        provideColorPresentations: function provideColorPresentations(model, info, token) {
          return __awaiter(_this17, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee21() {
            var textDocument, range, result;
            return _regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context21.next = 2;
                      break;
                    }

                    return _context21.abrupt("return", undefined);

                  case 2:
                    textDocument = this.m2p.asTextDocumentIdentifier(model);
                    range = this.m2p.asRange(info.range);
                    _context21.next = 6;
                    return provider.provideColorPresentations({
                      textDocument: textDocument,
                      color: info.color,
                      range: range
                    }, token);

                  case 6:
                    result = _context21.sent;
                    return _context21.abrupt("return", result && this.p2m.asColorPresentations(result));

                  case 8:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      };
    }
  }, {
    key: "registerFoldingRangeProvider",
    value: function registerFoldingRangeProvider(selector, provider) {
      var foldingRangeProvider = this.createFoldingRangeProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();
      var _iteratorNormalCompletion18 = true;
      var _didIteratorError18 = false;
      var _iteratorError18 = undefined;

      try {
        for (var _iterator18 = this.matchLanguage(selector)[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
          var language = _step18.value;
          providers.push(monaco.languages.registerFoldingRangeProvider(language, foldingRangeProvider));
        }
      } catch (err) {
        _didIteratorError18 = true;
        _iteratorError18 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
            _iterator18["return"]();
          }
        } finally {
          if (_didIteratorError18) {
            throw _iteratorError18;
          }
        }
      }

      return providers;
    }
  }, {
    key: "createFoldingRangeProvider",
    value: function createFoldingRangeProvider(selector, provider) {
      var _this18 = this;

      return {
        provideFoldingRanges: function provideFoldingRanges(model, context, token) {
          return __awaiter(_this18, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee22() {
            var textDocument, result;
            return _regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context22.next = 2;
                      break;
                    }

                    return _context22.abrupt("return", undefined);

                  case 2:
                    textDocument = this.m2p.asTextDocumentIdentifier(model);
                    _context22.next = 5;
                    return provider.provideFoldingRanges({
                      textDocument: textDocument
                    }, token);

                  case 5:
                    result = _context22.sent;
                    return _context22.abrupt("return", result && this.p2m.asFoldingRanges(result));

                  case 7:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      };
    }
  }, {
    key: "matchModel",
    value: function matchModel(selector, model) {
      var _this19 = this;

      if (Array.isArray(selector)) {
        return selector.some(function (filter) {
          return _this19.matchModel(filter, model);
        });
      }

      if (services_1.DocumentFilter.is(selector)) {
        if (!!selector.language && selector.language !== model.languageId) {
          return false;
        }

        if (!!selector.scheme && selector.scheme !== model.uri.scheme) {
          return false;
        }

        if (!!selector.pattern && !testGlob(selector.pattern, model.uri.path)) {
          return false;
        }

        return true;
      }

      return selector === model.languageId;
    }
  }, {
    key: "matchLanguage",
    value: function matchLanguage(selector) {
      var languages = new Set();

      if (Array.isArray(selector)) {
        var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = selector[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var filter = _step19.value;
            languages.add(this.matchLanguageByFilter(filter));
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
              _iterator19["return"]();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }
      } else {
        languages.add(this.matchLanguageByFilter(selector));
      }

      return languages;
    }
  }, {
    key: "matchLanguageByFilter",
    value: function matchLanguageByFilter(selector) {
      if (services_1.DocumentFilter.is(selector)) {
        if (!selector.language) {
          return '*';
        }

        return selector.language;
      }

      return selector;
    }
  }]);

  return MonacoLanguages;
}();

exports.MonacoLanguages = MonacoLanguages;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/monaco-services.js":
/*!******************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/monaco-services.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var monaco_converter_1 = __webpack_require__(/*! ./monaco-converter */ "../../../../node_modules/monaco-languageclient/lib/monaco-converter.js");

var monaco_commands_1 = __webpack_require__(/*! ./monaco-commands */ "../../../../node_modules/monaco-languageclient/lib/monaco-commands.js");

var monaco_languages_1 = __webpack_require__(/*! ./monaco-languages */ "../../../../node_modules/monaco-languageclient/lib/monaco-languages.js");

var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../../../../node_modules/monaco-languageclient/lib/monaco-workspace.js");

var console_window_1 = __webpack_require__(/*! ./console-window */ "../../../../node_modules/monaco-languageclient/lib/console-window.js");

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

var MonacoServices;

(function (MonacoServices) {
  function create(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var m2p = new monaco_converter_1.MonacoToProtocolConverter();
    var p2m = new monaco_converter_1.ProtocolToMonacoConverter();
    return {
      commands: new monaco_commands_1.MonacoCommands(editor),
      languages: new monaco_languages_1.MonacoLanguages(p2m, m2p),
      workspace: new monaco_workspace_1.MonacoWorkspace(p2m, m2p, options.rootUri),
      window: new console_window_1.ConsoleWindow()
    };
  }

  MonacoServices.create = create;

  function install(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var services = create(editor, options);
    services_1.Services.install(services);
    return services;
  }

  MonacoServices.install = install;

  function get() {
    return services_1.Services.get();
  }

  MonacoServices.get = get;
})(MonacoServices = exports.MonacoServices || (exports.MonacoServices = {}));

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/monaco-workspace.js":
/*!*******************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/monaco-workspace.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

var MonacoWorkspace =
/*#__PURE__*/
function () {
  function MonacoWorkspace(p2m, m2p) {
    var _this = this;

    var _rootUri = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, MonacoWorkspace);

    this.p2m = p2m;
    this.m2p = m2p;
    this._rootUri = _rootUri;
    this.documents = new Map();
    this.onDidOpenTextDocumentEmitter = new services_1.Emitter();
    this.onDidCloseTextDocumentEmitter = new services_1.Emitter();
    this.onDidChangeTextDocumentEmitter = new services_1.Emitter();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = monaco.editor.getModels()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var model = _step.value;
        this.addModel(model);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    monaco.editor.onDidCreateModel(function (model) {
      return _this.addModel(model);
    });
    monaco.editor.onWillDisposeModel(function (model) {
      return _this.removeModel(model);
    });
  }

  _createClass(MonacoWorkspace, [{
    key: "removeModel",
    value: function removeModel(model) {
      var uri = model.uri.toString();
      var document = this.documents.get(uri);

      if (document) {
        this.documents["delete"](uri);
        this.onDidCloseTextDocumentEmitter.fire(document);
      }
    }
  }, {
    key: "addModel",
    value: function addModel(model) {
      var _this2 = this;

      var uri = model.uri.toString();
      var document = this.setModel(uri, model);
      this.onDidOpenTextDocumentEmitter.fire(document);
      model.onDidChangeContent(function (event) {
        return _this2.onDidChangeContent(uri, model, event);
      });
    }
  }, {
    key: "onDidChangeContent",
    value: function onDidChangeContent(uri, model, event) {
      var textDocument = this.setModel(uri, model);
      var contentChanges = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = event.changes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var change = _step2.value;
          var range = this.m2p.asRange(change.range);
          var rangeLength = change.rangeLength;
          var text = change.text;
          contentChanges.push({
            range: range,
            rangeLength: rangeLength,
            text: text
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.onDidChangeTextDocumentEmitter.fire({
        textDocument: textDocument,
        contentChanges: contentChanges
      });
    }
  }, {
    key: "setModel",
    value: function setModel(uri, model) {
      var document = services_1.TextDocument.create(uri, model.getModeId(), model.getVersionId(), model.getValue());
      this.documents.set(uri, document);
      return document;
    }
  }, {
    key: "applyEdit",
    value: function applyEdit(workspaceEdit) {
      var edit = this.p2m.asWorkspaceEdit(workspaceEdit); // Collect all referenced models

      var models = edit.edits ? edit.edits.reduce(function (acc, currentEdit) {
        var textEdit = currentEdit;
        acc[textEdit.resource.toString()] = monaco.editor.getModel(textEdit.resource);
        return acc;
      }, {}) : {}; // If any of the models do not exist, refuse to apply the edit.

      if (!Object.keys(models).map(function (uri) {
        return models[uri];
      }).every(function (model) {
        return !!model;
      })) {
        return Promise.resolve(false);
      } // Group edits by resource so we can batch them when applying


      var editsByResource = edit.edits ? edit.edits.reduce(function (acc, currentEdit) {
        var _acc$uri;

        var textEdit = currentEdit;
        var uri = textEdit.resource.toString();

        if (!(uri in acc)) {
          acc[uri] = [];
        }

        var operations = textEdit.edits.map(function (edit) {
          return {
            range: monaco.Range.lift(edit.range),
            text: edit.text
          };
        });

        (_acc$uri = acc[uri]).push.apply(_acc$uri, _toConsumableArray(operations));

        return acc;
      }, {}) : {}; // Apply edits for each resource

      Object.keys(editsByResource).forEach(function (uri) {
        models[uri].pushEditOperations([], // Do not try and preserve editor selections.
        editsByResource[uri].map(function (resourceEdit) {
          return {
            identifier: {
              major: 1,
              minor: 0
            },
            range: resourceEdit.range,
            text: resourceEdit.text,
            forceMoveMarkers: true
          };
        }), function () {
          return [];
        });
      });
      return Promise.resolve(true);
    }
  }, {
    key: "rootUri",
    get: function get() {
      return this._rootUri;
    }
  }, {
    key: "textDocuments",
    get: function get() {
      return Array.from(this.documents.values());
    }
  }, {
    key: "onDidOpenTextDocument",
    get: function get() {
      return this.onDidOpenTextDocumentEmitter.event;
    }
  }, {
    key: "onDidCloseTextDocument",
    get: function get() {
      return this.onDidCloseTextDocumentEmitter.event;
    }
  }, {
    key: "onDidChangeTextDocument",
    get: function get() {
      return this.onDidChangeTextDocumentEmitter.event;
    }
  }]);

  return MonacoWorkspace;
}();

exports.MonacoWorkspace = MonacoWorkspace;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/services.js":
/*!***********************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/services.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../../../node_modules/vscode-jsonrpc/lib/main.js");

exports.Disposable = vscode_jsonrpc_1.Disposable;
exports.CancellationToken = vscode_jsonrpc_1.CancellationToken;
exports.Event = vscode_jsonrpc_1.Event;
exports.Emitter = vscode_jsonrpc_1.Emitter;

__export(__webpack_require__(/*! vscode-languageserver-protocol/lib/main */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js"));

var Services;

(function (Services) {
  var global = window;
  var symbol = Symbol('Services');

  Services.get = function () {
    var services = global[symbol];

    if (!services) {
      throw new Error('Language Client services has not been installed');
    }

    return services;
  };

  function install(services) {
    if (global[symbol]) {
      console.error(new Error('Language Client services has been overridden'));
    }

    global[symbol] = services;
    return vscode_jsonrpc_1.Disposable.create(function () {
      return global[symbol] = undefined;
    });
  }

  Services.install = install;
})(Services = exports.Services || (exports.Services = {}));

function isDocumentSelector(selector) {
  if (!selector || !Array.isArray(selector)) {
    return false;
  }

  return selector.every(function (value) {
    return typeof value === 'string' || vscode_languageserver_protocol_1.DocumentFilter.is(value);
  });
}

exports.isDocumentSelector = isDocumentSelector;
var SignatureHelpTriggerKind;

(function (SignatureHelpTriggerKind) {
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));

var DocumentIdentifier;

(function (DocumentIdentifier) {
  function is(arg) {
    return !!arg && 'uri' in arg && 'languageId' in arg;
  }

  DocumentIdentifier.is = is;
})(DocumentIdentifier = exports.DocumentIdentifier || (exports.DocumentIdentifier = {}));

var ConfigurationTarget;

(function (ConfigurationTarget) {
  ConfigurationTarget[ConfigurationTarget["Global"] = 1] = "Global";
  ConfigurationTarget[ConfigurationTarget["Workspace"] = 2] = "Workspace";
  ConfigurationTarget[ConfigurationTarget["WorkspaceFolder"] = 3] = "WorkspaceFolder";
})(ConfigurationTarget = exports.ConfigurationTarget || (exports.ConfigurationTarget = {}));

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/vscode-api.js":
/*!*************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/vscode-api.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../../node_modules/@babel/runtime/regenerator/index.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../../../node_modules/vscode-uri/lib/esm/index.js");

var disposable_1 = __webpack_require__(/*! ./disposable */ "../../../../node_modules/monaco-languageclient/lib/disposable.js");

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

function createVSCodeApi(servicesProvider) {
  var _this = this;

  var unsupported = function unsupported() {
    throw new Error('unsupported');
  };

  var Uri = vscode_uri_1["default"];

  var CompletionItem = function CompletionItem(label, kind) {
    _classCallCheck(this, CompletionItem);

    this.label = label;
    this.kind = kind;
  };

  var CodeLens =
  /*#__PURE__*/
  function () {
    function CodeLens(range, command) {
      _classCallCheck(this, CodeLens);

      this.range = range;
      this.command = command;
    }

    _createClass(CodeLens, [{
      key: "isResolved",
      get: function get() {
        return !!this.command;
      }
    }]);

    return CodeLens;
  }();

  var DocumentLink = function DocumentLink(range, target) {
    _classCallCheck(this, DocumentLink);

    this.range = range;
    this.target = target;
  };

  var CodeActionKind =
  /*#__PURE__*/
  function () {
    function CodeActionKind(value) {
      _classCallCheck(this, CodeActionKind);

      this.value = value;
      this.contains = unsupported;
      this.intersects = unsupported;
    }

    _createClass(CodeActionKind, [{
      key: "append",
      value: function append(parts) {
        return new CodeActionKind(this.value ? this.value + CodeActionKind.sep + parts : parts);
      }
    }]);

    return CodeActionKind;
  }();

  CodeActionKind.sep = '.';
  CodeActionKind.Empty = new CodeActionKind('');
  CodeActionKind.QuickFix = new CodeActionKind('quickfix');
  CodeActionKind.Refactor = new CodeActionKind('refactor');
  CodeActionKind.RefactorExtract = CodeActionKind.Refactor.append('extract');
  CodeActionKind.RefactorInline = CodeActionKind.Refactor.append('inline');
  CodeActionKind.RefactorRewrite = CodeActionKind.Refactor.append('rewrite');
  CodeActionKind.Source = new CodeActionKind('source');
  CodeActionKind.SourceOrganizeImports = CodeActionKind.Source.append('organizeImports');
  CodeActionKind.SourceFixAll = CodeActionKind.Source.append('fixAll');
  var workspace = {
    createFileSystemWatcher: function createFileSystemWatcher(globPattern, ignoreCreateEvents, ignoreChangeEvents, ignoreDeleteEvents) {
      var services = servicesProvider();

      if (typeof globPattern !== 'string') {
        throw new Error('unsupported');
      }

      if (services.workspace.createFileSystemWatcher) {
        var watcher = services.workspace.createFileSystemWatcher(globPattern, ignoreCreateEvents, ignoreChangeEvents, ignoreDeleteEvents);
        return Object.assign(watcher, {
          ignoreCreateEvents: !!ignoreCreateEvents,
          ignoreChangeEvents: !!ignoreChangeEvents,
          ignoreDeleteEvents: !!ignoreDeleteEvents
        });
      }

      return {
        ignoreCreateEvents: !!ignoreCreateEvents,
        ignoreChangeEvents: !!ignoreChangeEvents,
        ignoreDeleteEvents: !!ignoreDeleteEvents,
        onDidCreate: services_1.Event.None,
        onDidChange: services_1.Event.None,
        onDidDelete: services_1.Event.None,
        dispose: function dispose() {}
      };
    },
    applyEdit: function applyEdit(edit) {
      return __awaiter(_this, void 0, void 0,
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var services;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                services = servicesProvider();

                if (!services_1.WorkspaceEdit.is(edit)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", services.workspace.applyEdit(edit));

              case 3:
                throw new Error('unsupported');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    },
    getConfiguration: function getConfiguration(section, resource) {
      var _servicesProvider = servicesProvider(),
          workspace = _servicesProvider.workspace;

      var configuration = workspace.configurations ? workspace.configurations.getConfiguration(section, resource ? resource.toString() : undefined) : undefined;
      var result = {
        get: function get(section, defaultValue) {
          return configuration ? configuration.get(section, defaultValue) : defaultValue;
        },
        has: function has(section) {
          return configuration ? configuration.has(section) : false;
        },
        inspect: unsupported,
        update: unsupported
      };
      return Object.assign(result, {
        toJSON: function toJSON() {
          return configuration ? configuration.toJSON() : undefined;
        }
      });
    },

    get onDidChangeConfiguration() {
      var services = servicesProvider();

      if (services.workspace.configurations) {
        return services.workspace.configurations.onDidChangeConfiguration;
      }

      return services_1.Event.None;
    },

    get workspaceFolders() {
      var services = servicesProvider();

      if ('workspaceFolders' in services.workspace) {
        return services.workspace.workspaceFolders;
      }

      var rootUri = services.workspace.rootUri;

      if (!rootUri) {
        return undefined;
      }

      var uri = Uri.parse(rootUri);
      return [{
        uri: uri,
        index: 0,
        name: uri.toString()
      }];
    },

    get onDidChangeWorkspaceFolders() {
      var services = servicesProvider();
      return services.workspace.onDidChangeWorkspaceFolders || services_1.Event.None;
    },

    get textDocuments() {
      var services = servicesProvider();
      return services.workspace.textDocuments;
    },

    get onDidOpenTextDocument() {
      var services = servicesProvider();
      return services.workspace.onDidOpenTextDocument;
    },

    get onDidCloseTextDocument() {
      var services = servicesProvider();
      return services.workspace.onDidCloseTextDocument;
    },

    get onDidChangeTextDocument() {
      var services = servicesProvider();
      return function (listener, thisArgs, disposables) {
        return services.workspace.onDidChangeTextDocument(function (_ref) {
          var textDocument = _ref.textDocument,
              contentChanges = _ref.contentChanges;
          var l = listener.bind(thisArgs);
          l({
            document: textDocument,
            contentChanges: contentChanges
          });
        }, undefined, disposables);
      };
    },

    get onWillSaveTextDocument() {
      var services = servicesProvider();
      var onWillSaveTextDocument = services.workspace.onWillSaveTextDocument;

      if (!onWillSaveTextDocument) {
        return services_1.Event.None;
      }

      return function (listener, thisArgs, disposables) {
        return onWillSaveTextDocument(function (_ref2) {
          var textDocument = _ref2.textDocument,
              reason = _ref2.reason,
              _waitUntil = _ref2.waitUntil;
          var l = listener.bind(thisArgs);
          l({
            document: textDocument,
            reason: reason,
            waitUntil: function waitUntil(edits) {
              if (_waitUntil) {
                _waitUntil(edits);
              }
            }
          });
        }, undefined, disposables);
      };
    },

    get onDidSaveTextDocument() {
      var services = servicesProvider();
      return services.workspace.onDidSaveTextDocument || services_1.Event.None;
    },

    getWorkspaceFolder: unsupported,
    asRelativePath: unsupported,
    updateWorkspaceFolders: unsupported,
    findFiles: unsupported,
    saveAll: unsupported,
    openTextDocument: unsupported,
    registerTextDocumentContentProvider: unsupported,
    registerTaskProvider: unsupported,
    registerFileSystemProvider: unsupported,
    rootPath: undefined,
    name: undefined
  };
  var languages = {
    match: function match(selector, document) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      if (!services_1.DocumentIdentifier.is(document)) {
        throw new Error('unexpected document: ' + JSON.stringify(document));
      }

      var services = servicesProvider();
      var result = services.languages.match(selector, document);
      return result ? 1 : 0;
    },
    createDiagnosticCollection: function createDiagnosticCollection(name) {
      var services = servicesProvider();
      var collection = services.languages.createDiagnosticCollection ? services.languages.createDiagnosticCollection(name) : undefined;
      return {
        name: name || 'default',
        set: function set(arg0, arg1) {
          if (collection) {
            if (arg1) {
              collection.set(arg0.toString(), arg1);
            } else {
              collection.set(arg0.toString(), []);
            }
          }
        },
        dispose: function dispose() {
          if (collection) {
            collection.dispose();
          }
        },
        "delete": unsupported,
        clear: unsupported,
        forEach: unsupported,
        get: unsupported,
        has: unsupported
      };
    },
    registerCompletionItemProvider: function registerCompletionItemProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider2 = servicesProvider(),
          languages = _servicesProvider2.languages;

      if (!languages.registerCompletionItemProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var resolveCompletionItem = provider.resolveCompletionItem;

      for (var _len = arguments.length, triggerCharacters = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        triggerCharacters[_key - 2] = arguments[_key];
      }

      return languages.registerCompletionItemProvider.apply(languages, [selector, {
        provideCompletionItems: function provideCompletionItems(_ref3, token) {
          var textDocument = _ref3.textDocument,
              position = _ref3.position,
              context = _ref3.context;
          return provider.provideCompletionItems(textDocument, position, token, context || {
            triggerKind: services_1.CompletionTriggerKind.Invoked
          });
        },
        resolveCompletionItem: resolveCompletionItem ? function (item, token) {
          return resolveCompletionItem(item, token);
        } : undefined
      }].concat(triggerCharacters));
    },
    registerCodeActionsProvider: function registerCodeActionsProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider3 = servicesProvider(),
          languages = _servicesProvider3.languages;

      if (!languages.registerCodeActionsProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerCodeActionsProvider(selector, {
        provideCodeActions: function provideCodeActions(_ref4, token) {
          var textDocument = _ref4.textDocument,
              range = _ref4.range,
              context = _ref4.context;
          return provider.provideCodeActions(textDocument, range, context, token);
        }
      });
    },
    registerCodeLensProvider: function registerCodeLensProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider4 = servicesProvider(),
          languages = _servicesProvider4.languages;

      if (!languages.registerCodeLensProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var resolveCodeLens = provider.resolveCodeLens;
      return languages.registerCodeLensProvider(selector, {
        provideCodeLenses: function provideCodeLenses(_ref5, token) {
          var textDocument = _ref5.textDocument;
          return provider.provideCodeLenses(textDocument, token);
        },
        resolveCodeLens: resolveCodeLens ? function (codeLens, token) {
          return resolveCodeLens(codeLens, token);
        } : undefined
      });
    },
    registerDefinitionProvider: function registerDefinitionProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider5 = servicesProvider(),
          languages = _servicesProvider5.languages;

      if (!languages.registerDefinitionProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDefinitionProvider(selector, {
        provideDefinition: function provideDefinition(_ref6, token) {
          var textDocument = _ref6.textDocument,
              position = _ref6.position;
          return provider.provideDefinition(textDocument, position, token);
        }
      });
    },
    registerImplementationProvider: function registerImplementationProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider6 = servicesProvider(),
          languages = _servicesProvider6.languages;

      if (!languages.registerImplementationProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerImplementationProvider(selector, {
        provideImplementation: function provideImplementation(_ref7, token) {
          var textDocument = _ref7.textDocument,
              position = _ref7.position;
          return provider.provideImplementation(textDocument, position, token);
        }
      });
    },
    registerTypeDefinitionProvider: function registerTypeDefinitionProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider7 = servicesProvider(),
          languages = _servicesProvider7.languages;

      if (!languages.registerTypeDefinitionProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerTypeDefinitionProvider(selector, {
        provideTypeDefinition: function provideTypeDefinition(_ref8, token) {
          var textDocument = _ref8.textDocument,
              position = _ref8.position;
          return provider.provideTypeDefinition(textDocument, position, token);
        }
      });
    },
    registerDeclarationProvider: function registerDeclarationProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider8 = servicesProvider(),
          languages = _servicesProvider8.languages;

      if (!languages.registerDeclarationProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDeclarationProvider(selector, {
        provideDeclaration: function provideDeclaration(_ref9, token) {
          var textDocument = _ref9.textDocument,
              position = _ref9.position;
          return provider.provideDeclaration(textDocument, position, token);
        }
      });
    },
    registerHoverProvider: function registerHoverProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider9 = servicesProvider(),
          languages = _servicesProvider9.languages;

      if (languages.registerHoverProvider) {
        return languages.registerHoverProvider(selector, {
          provideHover: function provideHover(_ref10, token) {
            var textDocument = _ref10.textDocument,
                position = _ref10.position;
            return provider.provideHover(textDocument, position, token);
          }
        });
      }

      return disposable_1.Disposable.create(function () {});
    },
    registerDocumentHighlightProvider: function registerDocumentHighlightProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider10 = servicesProvider(),
          languages = _servicesProvider10.languages;

      if (!languages.registerDocumentHighlightProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentHighlightProvider(selector, {
        provideDocumentHighlights: function provideDocumentHighlights(_ref11, token) {
          var textDocument = _ref11.textDocument,
              position = _ref11.position;
          return provider.provideDocumentHighlights(textDocument, position, token);
        }
      });
    },
    registerDocumentSymbolProvider: function registerDocumentSymbolProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider11 = servicesProvider(),
          languages = _servicesProvider11.languages;

      if (!languages.registerDocumentSymbolProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentSymbolProvider(selector, {
        provideDocumentSymbols: function provideDocumentSymbols(_ref12, token) {
          var textDocument = _ref12.textDocument;
          return provider.provideDocumentSymbols(textDocument, token);
        }
      });
    },
    registerWorkspaceSymbolProvider: function registerWorkspaceSymbolProvider(provider) {
      var _servicesProvider12 = servicesProvider(),
          languages = _servicesProvider12.languages;

      if (!languages.registerWorkspaceSymbolProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerWorkspaceSymbolProvider({
        provideWorkspaceSymbols: function provideWorkspaceSymbols(_ref13, token) {
          var query = _ref13.query;
          return provider.provideWorkspaceSymbols(query, token);
        }
      });
    },
    registerReferenceProvider: function registerReferenceProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider13 = servicesProvider(),
          languages = _servicesProvider13.languages;

      if (!languages.registerReferenceProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerReferenceProvider(selector, {
        provideReferences: function provideReferences(_ref14, token) {
          var textDocument = _ref14.textDocument,
              position = _ref14.position,
              context = _ref14.context;
          return provider.provideReferences(textDocument, position, context, token);
        }
      });
    },
    registerRenameProvider: function registerRenameProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider14 = servicesProvider(),
          languages = _servicesProvider14.languages;

      if (!languages.registerRenameProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerRenameProvider(selector, {
        provideRenameEdits: function provideRenameEdits(_ref15, token) {
          var textDocument = _ref15.textDocument,
              position = _ref15.position,
              newName = _ref15.newName;
          return provider.provideRenameEdits(textDocument, position, newName, token);
        }
      });
    },
    registerDocumentFormattingEditProvider: function registerDocumentFormattingEditProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider15 = servicesProvider(),
          languages = _servicesProvider15.languages;

      if (!languages.registerDocumentFormattingEditProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentFormattingEditProvider(selector, {
        provideDocumentFormattingEdits: function provideDocumentFormattingEdits(_ref16, token) {
          var textDocument = _ref16.textDocument,
              options = _ref16.options;
          return provider.provideDocumentFormattingEdits(textDocument, options, token);
        }
      });
    },
    registerDocumentRangeFormattingEditProvider: function registerDocumentRangeFormattingEditProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider16 = servicesProvider(),
          languages = _servicesProvider16.languages;

      if (!languages.registerDocumentRangeFormattingEditProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentRangeFormattingEditProvider(selector, {
        provideDocumentRangeFormattingEdits: function provideDocumentRangeFormattingEdits(_ref17, token) {
          var textDocument = _ref17.textDocument,
              range = _ref17.range,
              options = _ref17.options;
          return provider.provideDocumentRangeFormattingEdits(textDocument, range, options, token);
        }
      });
    },
    registerOnTypeFormattingEditProvider: function registerOnTypeFormattingEditProvider(selector, provider, firstTriggerCharacter) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider17 = servicesProvider(),
          languages = _servicesProvider17.languages;

      if (!languages.registerOnTypeFormattingEditProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      for (var _len2 = arguments.length, moreTriggerCharacter = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        moreTriggerCharacter[_key2 - 3] = arguments[_key2];
      }

      return languages.registerOnTypeFormattingEditProvider.apply(languages, [selector, {
        provideOnTypeFormattingEdits: function provideOnTypeFormattingEdits(_ref18, token) {
          var textDocument = _ref18.textDocument,
              position = _ref18.position,
              ch = _ref18.ch,
              options = _ref18.options;
          return provider.provideOnTypeFormattingEdits(textDocument, position, ch, options, token);
        }
      }, firstTriggerCharacter].concat(moreTriggerCharacter));
    },
    registerSignatureHelpProvider: function registerSignatureHelpProvider(selector, provider, firstItem) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider18 = servicesProvider(),
          languages = _servicesProvider18.languages;

      if (!languages.registerSignatureHelpProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var triggerCharacters;
      var retriggerCharacters;

      if (typeof firstItem === 'string') {
        for (var _len3 = arguments.length, remaining = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          remaining[_key3 - 3] = arguments[_key3];
        }

        triggerCharacters = [firstItem].concat(remaining);
      } else if (firstItem) {
        triggerCharacters = firstItem.triggerCharacters;
        retriggerCharacters = firstItem.retriggerCharacters;
      }

      return languages.registerSignatureHelpProvider(selector, {
        triggerCharacters: triggerCharacters,
        retriggerCharacters: retriggerCharacters,
        provideSignatureHelp: function provideSignatureHelp(_ref19, token, context) {
          var textDocument = _ref19.textDocument,
              position = _ref19.position;
          return provider.provideSignatureHelp(textDocument, position, token, context);
        }
      });
    },
    registerDocumentLinkProvider: function registerDocumentLinkProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider19 = servicesProvider(),
          languages = _servicesProvider19.languages;

      if (!languages.registerDocumentLinkProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var resolveDocumentLink = provider.resolveDocumentLink;
      return languages.registerDocumentLinkProvider(selector, {
        provideDocumentLinks: function provideDocumentLinks(_ref20, token) {
          var textDocument = _ref20.textDocument;
          return provider.provideDocumentLinks(textDocument, token);
        },
        resolveDocumentLink: resolveDocumentLink ? function (link, token) {
          return resolveDocumentLink(link, token);
        } : undefined
      });
    },
    registerColorProvider: function registerColorProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider20 = servicesProvider(),
          languages = _servicesProvider20.languages;

      if (!languages.registerColorProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerColorProvider(selector, {
        provideDocumentColors: function provideDocumentColors(_ref21, token) {
          var textDocument = _ref21.textDocument;
          return provider.provideDocumentColors(textDocument, token);
        },
        provideColorPresentations: function provideColorPresentations(_ref22, token) {
          var textDocument = _ref22.textDocument,
              color = _ref22.color,
              range = _ref22.range;
          return provider.provideColorPresentations(color, {
            document: textDocument,
            range: range
          }, token);
        }
      });
    },
    registerFoldingRangeProvider: function registerFoldingRangeProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider21 = servicesProvider(),
          languages = _servicesProvider21.languages;

      if (!languages.registerFoldingRangeProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerFoldingRangeProvider(selector, {
        provideFoldingRanges: function provideFoldingRanges(_ref23, token) {
          var textDocument = _ref23.textDocument;
          return provider.provideFoldingRanges(textDocument, {}, token);
        }
      });
    },
    registerSelectionRangeProvider: function registerSelectionRangeProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider22 = servicesProvider(),
          languages = _servicesProvider22.languages;

      if (!languages.registerSelectionRangeProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerSelectionRangeProvider(selector, {
        provideSelectionRanges: function provideSelectionRanges(_ref24, token) {
          var textDocument = _ref24.textDocument,
              positions = _ref24.positions;
          return provider.provideSelectionRanges(textDocument, positions, token);
        }
      });
    },
    getLanguages: unsupported,
    setTextDocumentLanguage: unsupported,
    getDiagnostics: unsupported,
    setLanguageConfiguration: unsupported,
    onDidChangeDiagnostics: unsupported
  };

  function showMessage(type, arg0) {
    if (typeof arg0 !== "string") {
      throw new Error('unexpected message: ' + JSON.stringify(arg0));
    }

    var message = arg0;

    for (var _len4 = arguments.length, arg1 = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      arg1[_key4 - 2] = arguments[_key4];
    }

    if (arg1 !== undefined && !Array.isArray(arg1)) {
      throw new Error('unexpected actions: ' + JSON.stringify(arg1));
    }

    var actions = arg1 || [];

    var _servicesProvider23 = servicesProvider(),
        window = _servicesProvider23.window;

    if (!window) {
      return Promise.resolve(undefined);
    }

    return window.showMessage.apply(window, [type, message].concat(actions));
  }

  var window = {
    showInformationMessage: showMessage.bind(undefined, services_1.MessageType.Info),
    showWarningMessage: showMessage.bind(undefined, services_1.MessageType.Warning),
    showErrorMessage: showMessage.bind(undefined, services_1.MessageType.Error),
    createOutputChannel: function createOutputChannel(name) {
      var _servicesProvider24 = servicesProvider(),
          window = _servicesProvider24.window;

      var createOutputChannel = window ? window.createOutputChannel : undefined;
      var channel = createOutputChannel ? createOutputChannel.bind(window)(name) : undefined;
      return {
        name: name,
        append: channel ? channel.append.bind(channel) : function () {},
        appendLine: channel ? channel.appendLine.bind(channel) : function () {},
        clear: unsupported,
        show: function show(arg) {
          if (arg !== undefined && typeof arg !== 'boolean') {
            throw new Error('unexpected preserveFocus argument: ' + JSON.stringify(arg, undefined, 4));
          }

          return channel ? channel.show(arg) : function () {};
        },
        hide: unsupported,
        dispose: channel ? channel.dispose.bind(channel) : function () {}
      };
    },
    withProgress: function withProgress(options, task) {
      var _servicesProvider25 = servicesProvider(),
          window = _servicesProvider25.window;

      if (window && window.withProgress) {
        return window.withProgress(options, task);
      }

      return task({
        report: function report() {}
      }, new vscode.CancellationTokenSource().token);
    },
    showTextDocument: unsupported,
    createTextEditorDecorationType: unsupported,
    showQuickPick: unsupported,
    showWorkspaceFolderPick: unsupported,
    showOpenDialog: unsupported,
    showSaveDialog: unsupported,
    showInputBox: unsupported,
    createWebviewPanel: unsupported,
    setStatusBarMessage: unsupported,
    withScmProgress: unsupported,
    createStatusBarItem: unsupported,
    createTerminal: unsupported,
    registerTreeDataProvider: unsupported,
    createTreeView: unsupported,
    registerWebviewPanelSerializer: unsupported,

    get activeTextEditor() {
      return unsupported();
    },

    get visibleTextEditors() {
      return unsupported();
    },

    onDidChangeActiveTextEditor: unsupported,
    onDidChangeVisibleTextEditors: unsupported,
    onDidChangeTextEditorSelection: unsupported,
    onDidChangeTextEditorVisibleRanges: unsupported,
    onDidChangeTextEditorOptions: unsupported,
    onDidChangeTextEditorViewColumn: unsupported,

    get terminals() {
      return unsupported();
    },

    get activeTerminal() {
      return unsupported();
    },

    onDidChangeActiveTerminal: unsupported,
    onDidOpenTerminal: unsupported,
    onDidCloseTerminal: unsupported,

    get state() {
      return unsupported();
    },

    onDidChangeWindowState: unsupported,
    createQuickPick: unsupported,
    createInputBox: unsupported,
    registerUriHandler: unsupported
  };
  var commands = {
    registerCommand: function registerCommand(command, callback, thisArg) {
      var _servicesProvider26 = servicesProvider(),
          commands = _servicesProvider26.commands;

      if (!commands) {
        return disposable_1.Disposable.create(function () {});
      }

      return commands.registerCommand(command, callback, thisArg);
    },
    registerTextEditorCommand: unsupported,
    executeCommand: unsupported,
    getCommands: unsupported
  };

  var CodeDisposable =
  /*#__PURE__*/
  function () {
    function CodeDisposable(callOnDispose) {
      _classCallCheck(this, CodeDisposable);

      this.callOnDispose = callOnDispose;
    }

    _createClass(CodeDisposable, [{
      key: "dispose",
      value: function dispose() {
        this.callOnDispose();
      }
    }]);

    return CodeDisposable;
  }();

  return {
    workspace: workspace,
    languages: languages,
    window: window,
    commands: commands,
    Uri: Uri,
    CompletionItem: CompletionItem,
    CodeLens: CodeLens,
    DocumentLink: DocumentLink,
    CodeActionKind: CodeActionKind,
    Disposable: CodeDisposable
  };
}

exports.createVSCodeApi = createVSCodeApi;

/***/ }),

/***/ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js":
/*!***********************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/monaco-languageclient/lib/vscode-compatibility.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var vscode_api_1 = __webpack_require__(/*! ./vscode-api */ "../../../../node_modules/monaco-languageclient/lib/vscode-api.js");

var services_1 = __webpack_require__(/*! ./services */ "../../../../node_modules/monaco-languageclient/lib/services.js");

module.exports = vscode_api_1.createVSCodeApi(services_1.Services.get);

/***/ }),

/***/ "../../../../node_modules/regenerator-runtime/runtime.js":
/*!****************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../../../../node_modules/uuid/index.js":
/*!***********************************************************!*\
  !*** /home/nicholas/Documents/node_modules/uuid/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../../../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../../../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../../../node_modules/uuid/lib/bytesToUuid.js":
/*!*********************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/uuid/lib/bytesToUuid.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../../../node_modules/uuid/lib/rng-browser.js":
/*!*********************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/uuid/lib/rng-browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../../../node_modules/uuid/v1.js":
/*!********************************************************!*\
  !*** /home/nicholas/Documents/node_modules/uuid/v1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../../../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../../../node_modules/uuid/v4.js":
/*!********************************************************!*\
  !*** /home/nicholas/Documents/node_modules/uuid/v4.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/client.js":
/*!*********************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/client.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _get = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../../../node_modules/@babel/runtime/helpers/get.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var c2p = __webpack_require__(/*! ./codeConverter */ "../../../../node_modules/vscode-languageclient/lib/codeConverter.js");

var p2c = __webpack_require__(/*! ./protocolConverter */ "../../../../node_modules/vscode-languageclient/lib/protocolConverter.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../../../node_modules/vscode-languageclient/lib/utils/is.js");

var async_1 = __webpack_require__(/*! ./utils/async */ "../../../../node_modules/vscode-languageclient/lib/utils/async.js");

var UUID = __webpack_require__(/*! ./utils/uuid */ "../../../../node_modules/vscode-languageclient/lib/utils/uuid.js");

var progressPart_1 = __webpack_require__(/*! ./progressPart */ "../../../../node_modules/vscode-languageclient/lib/progressPart.js");

__export(__webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js"));

var ConsoleLogger =
/*#__PURE__*/
function () {
  function ConsoleLogger() {
    _classCallCheck(this, ConsoleLogger);
  }

  _createClass(ConsoleLogger, [{
    key: "error",
    value: function error(message) {
      console.error(message);
    }
  }, {
    key: "warn",
    value: function warn(message) {
      console.warn(message);
    }
  }, {
    key: "info",
    value: function info(message) {
      console.info(message);
    }
  }, {
    key: "log",
    value: function log(message) {
      console.log(message);
    }
  }]);

  return ConsoleLogger;
}();

function _createConnection(input, output, errorHandler, closeHandler) {
  var logger = new ConsoleLogger();
  var connection = vscode_languageserver_protocol_1.createProtocolConnection(input, output, logger);
  connection.onError(function (data) {
    errorHandler(data[0], data[1], data[2]);
  });
  connection.onClose(closeHandler);
  var result = {
    listen: function listen() {
      return connection.listen();
    },
    sendRequest: function sendRequest(type) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return connection.sendRequest.apply(connection, [Is.string(type) ? type : type.method].concat(params));
    },
    onRequest: function onRequest(type, handler) {
      return connection.onRequest(Is.string(type) ? type : type.method, handler);
    },
    sendNotification: function sendNotification(type, params) {
      return connection.sendNotification(Is.string(type) ? type : type.method, params);
    },
    onNotification: function onNotification(type, handler) {
      return connection.onNotification(Is.string(type) ? type : type.method, handler);
    },
    onProgress: connection.onProgress,
    sendProgress: connection.sendProgress,
    trace: function trace(value, tracer, sendNotificationOrTraceOptions) {
      var defaultTraceOptions = {
        sendNotification: false,
        traceFormat: vscode_languageserver_protocol_1.TraceFormat.Text
      };

      if (sendNotificationOrTraceOptions === void 0) {
        connection.trace(value, tracer, defaultTraceOptions);
      } else if (Is["boolean"](sendNotificationOrTraceOptions)) {
        connection.trace(value, tracer, sendNotificationOrTraceOptions);
      } else {
        connection.trace(value, tracer, sendNotificationOrTraceOptions);
      }
    },
    initialize: function initialize(params) {
      return connection.sendRequest(vscode_languageserver_protocol_1.InitializeRequest.type, params);
    },
    shutdown: function shutdown() {
      return connection.sendRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, undefined);
    },
    exit: function exit() {
      return connection.sendNotification(vscode_languageserver_protocol_1.ExitNotification.type);
    },
    onLogMessage: function onLogMessage(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, handler);
    },
    onShowMessage: function onShowMessage(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.ShowMessageNotification.type, handler);
    },
    onTelemetry: function onTelemetry(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, handler);
    },
    didChangeConfiguration: function didChangeConfiguration(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, params);
    },
    didChangeWatchedFiles: function didChangeWatchedFiles(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, params);
    },
    didOpenTextDocument: function didOpenTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, params);
    },
    didChangeTextDocument: function didChangeTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
    },
    didCloseTextDocument: function didCloseTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, params);
    },
    didSaveTextDocument: function didSaveTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, params);
    },
    onDiagnostics: function onDiagnostics(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, handler);
    },
    dispose: function dispose() {
      return connection.dispose();
    }
  };
  return result;
}
/**
 * An action to be performed when the connection is producing errors.
 */


var ErrorAction;

(function (ErrorAction) {
  /**
   * Continue running the server.
   */
  ErrorAction[ErrorAction["Continue"] = 1] = "Continue";
  /**
   * Shutdown the server.
   */

  ErrorAction[ErrorAction["Shutdown"] = 2] = "Shutdown";
})(ErrorAction = exports.ErrorAction || (exports.ErrorAction = {}));
/**
 * An action to be performed when the connection to a server got closed.
 */


var CloseAction;

(function (CloseAction) {
  /**
   * Don't restart the server. The connection stays closed.
   */
  CloseAction[CloseAction["DoNotRestart"] = 1] = "DoNotRestart";
  /**
   * Restart the server.
   */

  CloseAction[CloseAction["Restart"] = 2] = "Restart";
})(CloseAction = exports.CloseAction || (exports.CloseAction = {}));

var DefaultErrorHandler =
/*#__PURE__*/
function () {
  function DefaultErrorHandler(name) {
    _classCallCheck(this, DefaultErrorHandler);

    this.name = name;
    this.restarts = [];
  }

  _createClass(DefaultErrorHandler, [{
    key: "error",
    value: function error(_error, _message, count) {
      if (count && count <= 3) {
        return ErrorAction.Continue;
      }

      return ErrorAction.Shutdown;
    }
  }, {
    key: "closed",
    value: function closed() {
      this.restarts.push(Date.now());

      if (this.restarts.length < 5) {
        return CloseAction.Restart;
      } else {
        var diff = this.restarts[this.restarts.length - 1] - this.restarts[0];

        if (diff <= 3 * 60 * 1000) {
          vscode_1.window.showErrorMessage("The ".concat(this.name, " server crashed 5 times in the last 3 minutes. The server will not be restarted."));
          return CloseAction.DoNotRestart;
        } else {
          this.restarts.shift();
          return CloseAction.Restart;
        }
      }
    }
  }]);

  return DefaultErrorHandler;
}();

var RevealOutputChannelOn;

(function (RevealOutputChannelOn) {
  RevealOutputChannelOn[RevealOutputChannelOn["Info"] = 1] = "Info";
  RevealOutputChannelOn[RevealOutputChannelOn["Warn"] = 2] = "Warn";
  RevealOutputChannelOn[RevealOutputChannelOn["Error"] = 3] = "Error";
  RevealOutputChannelOn[RevealOutputChannelOn["Never"] = 4] = "Never";
})(RevealOutputChannelOn = exports.RevealOutputChannelOn || (exports.RevealOutputChannelOn = {}));

var State;

(function (State) {
  State[State["Stopped"] = 1] = "Stopped";
  State[State["Starting"] = 3] = "Starting";
  State[State["Running"] = 2] = "Running";
})(State = exports.State || (exports.State = {}));

var ClientState;

(function (ClientState) {
  ClientState[ClientState["Initial"] = 0] = "Initial";
  ClientState[ClientState["Starting"] = 1] = "Starting";
  ClientState[ClientState["StartFailed"] = 2] = "StartFailed";
  ClientState[ClientState["Running"] = 3] = "Running";
  ClientState[ClientState["Stopping"] = 4] = "Stopping";
  ClientState[ClientState["Stopped"] = 5] = "Stopped";
})(ClientState || (ClientState = {}));

var SupportedSymbolKinds = [vscode_languageserver_protocol_1.SymbolKind.File, vscode_languageserver_protocol_1.SymbolKind.Module, vscode_languageserver_protocol_1.SymbolKind.Namespace, vscode_languageserver_protocol_1.SymbolKind.Package, vscode_languageserver_protocol_1.SymbolKind.Class, vscode_languageserver_protocol_1.SymbolKind.Method, vscode_languageserver_protocol_1.SymbolKind.Property, vscode_languageserver_protocol_1.SymbolKind.Field, vscode_languageserver_protocol_1.SymbolKind.Constructor, vscode_languageserver_protocol_1.SymbolKind.Enum, vscode_languageserver_protocol_1.SymbolKind.Interface, vscode_languageserver_protocol_1.SymbolKind.Function, vscode_languageserver_protocol_1.SymbolKind.Variable, vscode_languageserver_protocol_1.SymbolKind.Constant, vscode_languageserver_protocol_1.SymbolKind.String, vscode_languageserver_protocol_1.SymbolKind.Number, vscode_languageserver_protocol_1.SymbolKind.Boolean, vscode_languageserver_protocol_1.SymbolKind.Array, vscode_languageserver_protocol_1.SymbolKind.Object, vscode_languageserver_protocol_1.SymbolKind.Key, vscode_languageserver_protocol_1.SymbolKind.Null, vscode_languageserver_protocol_1.SymbolKind.EnumMember, vscode_languageserver_protocol_1.SymbolKind.Struct, vscode_languageserver_protocol_1.SymbolKind.Event, vscode_languageserver_protocol_1.SymbolKind.Operator, vscode_languageserver_protocol_1.SymbolKind.TypeParameter];
var SupportedCompletionItemKinds = [vscode_languageserver_protocol_1.CompletionItemKind.Text, vscode_languageserver_protocol_1.CompletionItemKind.Method, vscode_languageserver_protocol_1.CompletionItemKind.Function, vscode_languageserver_protocol_1.CompletionItemKind.Constructor, vscode_languageserver_protocol_1.CompletionItemKind.Field, vscode_languageserver_protocol_1.CompletionItemKind.Variable, vscode_languageserver_protocol_1.CompletionItemKind.Class, vscode_languageserver_protocol_1.CompletionItemKind.Interface, vscode_languageserver_protocol_1.CompletionItemKind.Module, vscode_languageserver_protocol_1.CompletionItemKind.Property, vscode_languageserver_protocol_1.CompletionItemKind.Unit, vscode_languageserver_protocol_1.CompletionItemKind.Value, vscode_languageserver_protocol_1.CompletionItemKind.Enum, vscode_languageserver_protocol_1.CompletionItemKind.Keyword, vscode_languageserver_protocol_1.CompletionItemKind.Snippet, vscode_languageserver_protocol_1.CompletionItemKind.Color, vscode_languageserver_protocol_1.CompletionItemKind.File, vscode_languageserver_protocol_1.CompletionItemKind.Reference, vscode_languageserver_protocol_1.CompletionItemKind.Folder, vscode_languageserver_protocol_1.CompletionItemKind.EnumMember, vscode_languageserver_protocol_1.CompletionItemKind.Constant, vscode_languageserver_protocol_1.CompletionItemKind.Struct, vscode_languageserver_protocol_1.CompletionItemKind.Event, vscode_languageserver_protocol_1.CompletionItemKind.Operator, vscode_languageserver_protocol_1.CompletionItemKind.TypeParameter];

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var DynamicFeature;

(function (DynamicFeature) {
  function is(value) {
    var candidate = value;
    return candidate && Is.func(candidate.register) && Is.func(candidate.unregister) && Is.func(candidate.dispose) && candidate.messages !== void 0;
  }

  DynamicFeature.is = is;
})(DynamicFeature || (DynamicFeature = {}));

var DocumentNotifiactions =
/*#__PURE__*/
function () {
  function DocumentNotifiactions(_client, _event, _type, _middleware, _createParams, _selectorFilter) {
    _classCallCheck(this, DocumentNotifiactions);

    this._client = _client;
    this._event = _event;
    this._type = _type;
    this._middleware = _middleware;
    this._createParams = _createParams;
    this._selectorFilter = _selectorFilter;
    this._selectors = new Map();
  }

  _createClass(DocumentNotifiactions, [{
    key: "register",
    value: function register(_message, data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }

      if (!this._listener) {
        this._listener = this._event(this.callback, this);
      }

      this._selectors.set(data.id, data.registerOptions.documentSelector);
    }
  }, {
    key: "callback",
    value: function callback(data) {
      var _this = this;

      if (!this._selectorFilter || this._selectorFilter(this._selectors.values(), data)) {
        if (this._middleware) {
          this._middleware(data, function (data) {
            return _this._client.sendNotification(_this._type, _this._createParams(data));
          });
        } else {
          this._client.sendNotification(this._type, this._createParams(data));
        }

        this.notificationSent(data);
      }
    }
  }, {
    key: "notificationSent",
    value: function notificationSent(_data) {}
  }, {
    key: "unregister",
    value: function unregister(id) {
      this._selectors["delete"](id);

      if (this._selectors.size === 0 && this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._selectors.clear();

      if (this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }], [{
    key: "textDocumentFilter",
    value: function textDocumentFilter(selectors, textDocument) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = selectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var selector = _step.value;

          if (vscode_1.languages.match(selector, textDocument)) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  }]);

  return DocumentNotifiactions;
}();

var DidOpenTextDocumentFeature =
/*#__PURE__*/
function (_DocumentNotifiaction) {
  _inherits(DidOpenTextDocumentFeature, _DocumentNotifiaction);

  function DidOpenTextDocumentFeature(client, _syncedDocuments) {
    var _this2;

    _classCallCheck(this, DidOpenTextDocumentFeature);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DidOpenTextDocumentFeature).call(this, client, vscode_1.workspace.onDidOpenTextDocument, vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, client.clientOptions.middleware.didOpen, function (textDocument) {
      return client.code2ProtocolConverter.asOpenTextDocumentParams(textDocument);
    }, DocumentNotifiactions.textDocumentFilter));
    _this2._syncedDocuments = _syncedDocuments;
    return _this2;
  }

  _createClass(DidOpenTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "register",
    value: function register(message, data) {
      var _this3 = this;

      _get(_getPrototypeOf(DidOpenTextDocumentFeature.prototype), "register", this).call(this, message, data);

      if (!data.registerOptions.documentSelector) {
        return;
      }

      var documentSelector = data.registerOptions.documentSelector;
      vscode_1.workspace.textDocuments.forEach(function (textDocument) {
        var uri = textDocument.uri.toString();

        if (_this3._syncedDocuments.has(uri)) {
          return;
        }

        if (vscode_1.languages.match(documentSelector, textDocument)) {
          var middleware = _this3._client.clientOptions.middleware;

          var didOpen = function didOpen(textDocument) {
            _this3._client.sendNotification(_this3._type, _this3._createParams(textDocument));
          };

          if (middleware.didOpen) {
            middleware.didOpen(textDocument, didOpen);
          } else {
            didOpen(textDocument);
          }

          _this3._syncedDocuments.set(uri, textDocument);
        }
      });
    }
  }, {
    key: "notificationSent",
    value: function notificationSent(textDocument) {
      _get(_getPrototypeOf(DidOpenTextDocumentFeature.prototype), "notificationSent", this).call(this, textDocument);

      this._syncedDocuments.set(textDocument.uri.toString(), textDocument);
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type;
    }
  }]);

  return DidOpenTextDocumentFeature;
}(DocumentNotifiactions);

var DidCloseTextDocumentFeature =
/*#__PURE__*/
function (_DocumentNotifiaction2) {
  _inherits(DidCloseTextDocumentFeature, _DocumentNotifiaction2);

  function DidCloseTextDocumentFeature(client, _syncedDocuments) {
    var _this4;

    _classCallCheck(this, DidCloseTextDocumentFeature);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(DidCloseTextDocumentFeature).call(this, client, vscode_1.workspace.onDidCloseTextDocument, vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, client.clientOptions.middleware.didClose, function (textDocument) {
      return client.code2ProtocolConverter.asCloseTextDocumentParams(textDocument);
    }, DocumentNotifiactions.textDocumentFilter));
    _this4._syncedDocuments = _syncedDocuments;
    return _this4;
  }

  _createClass(DidCloseTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "notificationSent",
    value: function notificationSent(textDocument) {
      _get(_getPrototypeOf(DidCloseTextDocumentFeature.prototype), "notificationSent", this).call(this, textDocument);

      this._syncedDocuments["delete"](textDocument.uri.toString());
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var _this5 = this;

      var selector = this._selectors.get(id); // The super call removed the selector from the map
      // of selectors.


      _get(_getPrototypeOf(DidCloseTextDocumentFeature.prototype), "unregister", this).call(this, id);

      var selectors = this._selectors.values();

      this._syncedDocuments.forEach(function (textDocument) {
        if (vscode_1.languages.match(selector, textDocument) && !_this5._selectorFilter(selectors, textDocument)) {
          var middleware = _this5._client.clientOptions.middleware;

          var didClose = function didClose(textDocument) {
            _this5._client.sendNotification(_this5._type, _this5._createParams(textDocument));
          };

          _this5._syncedDocuments["delete"](textDocument.uri.toString());

          if (middleware.didClose) {
            middleware.didClose(textDocument, didClose);
          } else {
            didClose(textDocument);
          }
        }
      });
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type;
    }
  }]);

  return DidCloseTextDocumentFeature;
}(DocumentNotifiactions);

var DidChangeTextDocumentFeature =
/*#__PURE__*/
function () {
  function DidChangeTextDocumentFeature(_client) {
    _classCallCheck(this, DidChangeTextDocumentFeature);

    this._client = _client;
    this._changeData = new Map();
    this._forcingDelivery = false;
  }

  _createClass(DidChangeTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.change !== void 0 && textDocumentSyncOptions.change !== vscode_languageserver_protocol_1.TextDocumentSyncKind.None) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: Object.assign({}, {
            documentSelector: documentSelector
          }, {
            syncKind: textDocumentSyncOptions.change
          })
        });
      }
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }

      if (!this._listener) {
        this._listener = vscode_1.workspace.onDidChangeTextDocument(this.callback, this);
      }

      this._changeData.set(data.id, {
        documentSelector: data.registerOptions.documentSelector,
        syncKind: data.registerOptions.syncKind
      });
    }
  }, {
    key: "callback",
    value: function callback(event) {
      var _this6 = this;

      // Text document changes are send for dirty changes as well. We don't
      // have dirty / undirty events in the LSP so we ignore content changes
      // with length zero.
      if (event.contentChanges.length === 0) {
        return;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._changeData.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var changeData = _step2.value;

          if (vscode_1.languages.match(changeData.documentSelector, event.document)) {
            var middleware = this._client.clientOptions.middleware;

            if (changeData.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental) {
              (function () {
                var params = _this6._client.code2ProtocolConverter.asChangeTextDocumentParams(event);

                if (middleware.didChange) {
                  middleware.didChange(event, function () {
                    return _this6._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
                  });
                } else {
                  _this6._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
                }
              })();
            } else if (changeData.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Full) {
              var didChange = function didChange(event) {
                if (_this6._changeDelayer) {
                  if (_this6._changeDelayer.uri !== event.document.uri.toString()) {
                    // Use this force delivery to track boolean state. Otherwise we might call two times.
                    _this6.forceDelivery();

                    _this6._changeDelayer.uri = event.document.uri.toString();
                  }

                  _this6._changeDelayer.delayer.trigger(function () {
                    _this6._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, _this6._client.code2ProtocolConverter.asChangeTextDocumentParams(event.document));
                  });
                } else {
                  _this6._changeDelayer = {
                    uri: event.document.uri.toString(),
                    delayer: new async_1.Delayer(200)
                  };

                  _this6._changeDelayer.delayer.trigger(function () {
                    _this6._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, _this6._client.code2ProtocolConverter.asChangeTextDocumentParams(event.document));
                  }, -1);
                }
              };

              if (middleware.didChange) {
                middleware.didChange(event, didChange);
              } else {
                didChange(event);
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      this._changeData["delete"](id);

      if (this._changeData.size === 0 && this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._changeDelayer = undefined;
      this._forcingDelivery = false;

      this._changeData.clear();

      if (this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "forceDelivery",
    value: function forceDelivery() {
      if (this._forcingDelivery || !this._changeDelayer) {
        return;
      }

      try {
        this._forcingDelivery = true;

        this._changeDelayer.delayer.forceDelivery();
      } finally {
        this._forcingDelivery = false;
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type;
    }
  }]);

  return DidChangeTextDocumentFeature;
}();

var WillSaveFeature =
/*#__PURE__*/
function (_DocumentNotifiaction3) {
  _inherits(WillSaveFeature, _DocumentNotifiaction3);

  function WillSaveFeature(client) {
    _classCallCheck(this, WillSaveFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(WillSaveFeature).call(this, client, vscode_1.workspace.onWillSaveTextDocument, vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, client.clientOptions.middleware.willSave, function (willSaveEvent) {
      return client.code2ProtocolConverter.asWillSaveTextDocumentParams(willSaveEvent);
    }, function (selectors, willSaveEvent) {
      return DocumentNotifiactions.textDocumentFilter(selectors, willSaveEvent.document);
    }));
  }

  _createClass(WillSaveFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      var value = ensure(ensure(capabilities, 'textDocument'), 'synchronization');
      value.willSave = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSave) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type;
    }
  }]);

  return WillSaveFeature;
}(DocumentNotifiactions);

var WillSaveWaitUntilFeature =
/*#__PURE__*/
function () {
  function WillSaveWaitUntilFeature(_client) {
    _classCallCheck(this, WillSaveWaitUntilFeature);

    this._client = _client;
    this._selectors = new Map();
  }

  _createClass(WillSaveWaitUntilFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      var value = ensure(ensure(capabilities, 'textDocument'), 'synchronization');
      value.willSaveWaitUntil = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSaveWaitUntil) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }

      if (!this._listener) {
        this._listener = vscode_1.workspace.onWillSaveTextDocument(this.callback, this);
      }

      this._selectors.set(data.id, data.registerOptions.documentSelector);
    }
  }, {
    key: "callback",
    value: function callback(event) {
      var _this7 = this;

      if (DocumentNotifiactions.textDocumentFilter(this._selectors.values(), event.document)) {
        var middleware = this._client.clientOptions.middleware;

        var willSaveWaitUntil = function willSaveWaitUntil(event) {
          return _this7._client.sendRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, _this7._client.code2ProtocolConverter.asWillSaveTextDocumentParams(event)).then(function (edits) {
            var vEdits = _this7._client.protocol2CodeConverter.asTextEdits(edits);

            return vEdits === void 0 ? [] : vEdits;
          });
        };

        event.waitUntil(middleware.willSaveWaitUntil ? middleware.willSaveWaitUntil(event, willSaveWaitUntil) : willSaveWaitUntil(event));
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      this._selectors["delete"](id);

      if (this._selectors.size === 0 && this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._selectors.clear();

      if (this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type;
    }
  }]);

  return WillSaveWaitUntilFeature;
}();

var DidSaveTextDocumentFeature =
/*#__PURE__*/
function (_DocumentNotifiaction4) {
  _inherits(DidSaveTextDocumentFeature, _DocumentNotifiaction4);

  function DidSaveTextDocumentFeature(client) {
    var _this8;

    _classCallCheck(this, DidSaveTextDocumentFeature);

    return _this8 = _possibleConstructorReturn(this, _getPrototypeOf(DidSaveTextDocumentFeature).call(this, client, vscode_1.workspace.onDidSaveTextDocument, vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, client.clientOptions.middleware.didSave, function (textDocument) {
      return client.code2ProtocolConverter.asSaveTextDocumentParams(textDocument, _this8._includeText);
    }, DocumentNotifiactions.textDocumentFilter));
  }

  _createClass(DidSaveTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').didSave = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.save) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: Object.assign({}, {
            documentSelector: documentSelector
          }, {
            includeText: !!textDocumentSyncOptions.save.includeText
          })
        });
      }
    }
  }, {
    key: "register",
    value: function register(method, data) {
      this._includeText = !!data.registerOptions.includeText;

      _get(_getPrototypeOf(DidSaveTextDocumentFeature.prototype), "register", this).call(this, method, data);
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type;
    }
  }]);

  return DidSaveTextDocumentFeature;
}(DocumentNotifiactions);

var FileSystemWatcherFeature =
/*#__PURE__*/
function () {
  function FileSystemWatcherFeature(_client, _notifyFileEvent) {
    _classCallCheck(this, FileSystemWatcherFeature);

    this._client = _client;
    this._notifyFileEvent = _notifyFileEvent;
    this._watchers = new Map();
  }

  _createClass(FileSystemWatcherFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'workspace'), 'didChangeWatchedFiles').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(_capabilities, _documentSelector) {}
  }, {
    key: "register",
    value: function register(_method, data) {
      if (!Array.isArray(data.registerOptions.watchers)) {
        return;
      }

      var disposeables = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data.registerOptions.watchers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var watcher = _step3.value;

          if (!Is.string(watcher.globPattern)) {
            continue;
          }

          var watchCreate = true,
              watchChange = true,
              watchDelete = true;

          if (watcher.kind !== void 0 && watcher.kind !== null) {
            watchCreate = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Create) !== 0;
            watchChange = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Change) != 0;
            watchDelete = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Delete) != 0;
          }

          var fileSystemWatcher = vscode_1.workspace.createFileSystemWatcher(watcher.globPattern, !watchCreate, !watchChange, !watchDelete);
          this.hookListeners(fileSystemWatcher, watchCreate, watchChange, watchDelete);
          disposeables.push(fileSystemWatcher);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this._watchers.set(data.id, disposeables);
    }
  }, {
    key: "registerRaw",
    value: function registerRaw(id, fileSystemWatchers) {
      var disposeables = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = fileSystemWatchers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var fileSystemWatcher = _step4.value;
          this.hookListeners(fileSystemWatcher, true, true, true, disposeables);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this._watchers.set(id, disposeables);
    }
  }, {
    key: "hookListeners",
    value: function hookListeners(fileSystemWatcher, watchCreate, watchChange, watchDelete, listeners) {
      var _this9 = this;

      if (watchCreate) {
        fileSystemWatcher.onDidCreate(function (resource) {
          return _this9._notifyFileEvent({
            uri: _this9._client.code2ProtocolConverter.asUri(resource),
            type: vscode_languageserver_protocol_1.FileChangeType.Created
          });
        }, null, listeners);
      }

      if (watchChange) {
        fileSystemWatcher.onDidChange(function (resource) {
          return _this9._notifyFileEvent({
            uri: _this9._client.code2ProtocolConverter.asUri(resource),
            type: vscode_languageserver_protocol_1.FileChangeType.Changed
          });
        }, null, listeners);
      }

      if (watchDelete) {
        fileSystemWatcher.onDidDelete(function (resource) {
          return _this9._notifyFileEvent({
            uri: _this9._client.code2ProtocolConverter.asUri(resource),
            type: vscode_languageserver_protocol_1.FileChangeType.Deleted
          });
        }, null, listeners);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposeables = this._watchers.get(id);

      if (disposeables) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = disposeables[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var disposable = _step5.value;
            disposable.dispose();
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._watchers.forEach(function (disposeables) {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = disposeables[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var disposable = _step6.value;
            disposable.dispose();
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      });

      this._watchers.clear();
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type;
    }
  }]);

  return FileSystemWatcherFeature;
}();

var TextDocumentFeature =
/*#__PURE__*/
function () {
  function TextDocumentFeature(_client, _message) {
    _classCallCheck(this, TextDocumentFeature);

    this._client = _client;
    this._message = _message;
    this._providers = new Map();
  }

  _createClass(TextDocumentFeature, [{
    key: "register",
    value: function register(message, data) {
      if (message.method !== this.messages.method) {
        throw new Error("Register called on wrong feature. Requested ".concat(message.method, " but reached feature ").concat(this.messages.method));
      }

      if (!data.registerOptions.documentSelector) {
        return;
      }

      var provider = this.registerLanguageProvider(data.registerOptions);

      if (provider) {
        this._providers.set(data.id, provider);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var provider = this._providers.get(id);

      if (provider) {
        provider.dispose();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._providers.forEach(function (value) {
        value.dispose();
      });

      this._providers.clear();
    }
  }, {
    key: "getRegistration",
    value: function getRegistration(documentSelector, capability) {
      if (!capability) {
        return [undefined, undefined];
      } else if (vscode_languageserver_protocol_1.TextDocumentRegistrationOptions.is(capability)) {
        var id = vscode_languageserver_protocol_1.StaticRegistrationOptions.hasId(capability) ? capability.id : UUID.generateUuid();
        var selector = capability.documentSelector || documentSelector;

        if (selector) {
          return [id, Object.assign({}, capability, {
            documentSelector: selector
          })];
        }
      } else if (Is["boolean"](capability) && capability === true || vscode_languageserver_protocol_1.WorkDoneProgressOptions.is(capability)) {
        if (!documentSelector) {
          return [undefined, undefined];
        }

        var options = Is["boolean"](capability) && capability === true ? {
          documentSelector: documentSelector
        } : Object.assign({}, capability, {
          documentSelector: documentSelector
        });
        return [UUID.generateUuid(), options];
      }

      return [undefined, undefined];
    }
  }, {
    key: "getRegistrationOptions",
    value: function getRegistrationOptions(documentSelector, capability) {
      if (!documentSelector || !capability) {
        return undefined;
      }

      return Is["boolean"](capability) && capability === true ? {
        documentSelector: documentSelector
      } : Object.assign({}, capability, {
        documentSelector: documentSelector
      });
    }
  }, {
    key: "messages",
    get: function get() {
      return this._message;
    }
  }]);

  return TextDocumentFeature;
}();

exports.TextDocumentFeature = TextDocumentFeature;

var WorkspaceFeature =
/*#__PURE__*/
function () {
  function WorkspaceFeature(_client, _message) {
    _classCallCheck(this, WorkspaceFeature);

    this._client = _client;
    this._message = _message;
    this._providers = new Map();
  }

  _createClass(WorkspaceFeature, [{
    key: "register",
    value: function register(message, data) {
      if (message.method !== this.messages.method) {
        throw new Error("Register called on wron feature. Requested ".concat(message.method, " but reached feature ").concat(this.messages.method));
      }

      var provider = this.registerLanguageProvider(data.registerOptions);

      if (provider) {
        this._providers.set(data.id, provider);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var provider = this._providers.get(id);

      if (provider) {
        provider.dispose();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._providers.forEach(function (value) {
        value.dispose();
      });

      this._providers.clear();
    }
  }, {
    key: "messages",
    get: function get() {
      return this._message;
    }
  }]);

  return WorkspaceFeature;
}();

var CompletionItemFeature =
/*#__PURE__*/
function (_TextDocumentFeature) {
  _inherits(CompletionItemFeature, _TextDocumentFeature);

  function CompletionItemFeature(client) {
    _classCallCheck(this, CompletionItemFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(CompletionItemFeature).call(this, client, vscode_languageserver_protocol_1.CompletionRequest.type));
  }

  _createClass(CompletionItemFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var completion = ensure(ensure(capabilites, 'textDocument'), 'completion');
      completion.dynamicRegistration = true;
      completion.contextSupport = true;
      completion.completionItem = {
        snippetSupport: true,
        commitCharactersSupport: true,
        documentationFormat: [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText],
        deprecatedSupport: true,
        preselectSupport: true
      };
      completion.completionItemKind = {
        valueSet: SupportedCompletionItemKinds
      };
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.completionProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _vscode_1$languages;

      var triggerCharacters = options.triggerCharacters || [];
      var client = this._client;

      var _provideCompletionItems = function provideCompletionItems(document, position, context, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.CompletionRequest.type, client.code2ProtocolConverter.asCompletionParams(document, position, context), token).then(client.protocol2CodeConverter.asCompletionResult, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.CompletionRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var resolveCompletionItem = function resolveCompletionItem(item, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, client.code2ProtocolConverter.asCompletionItem(item), token).then(client.protocol2CodeConverter.asCompletionItem, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, error);
          return Promise.resolve(item);
        });
      };

      var middleware = this._client.clientOptions.middleware;
      return (_vscode_1$languages = vscode_1.languages).registerCompletionItemProvider.apply(_vscode_1$languages, [options.documentSelector, {
        provideCompletionItems: function provideCompletionItems(document, position, token, context) {
          return middleware.provideCompletionItem ? middleware.provideCompletionItem(document, position, context, token, _provideCompletionItems) : _provideCompletionItems(document, position, context, token);
        },
        resolveCompletionItem: options.resolveProvider ? function (item, token) {
          return middleware.resolveCompletionItem ? middleware.resolveCompletionItem(item, token, resolveCompletionItem) : resolveCompletionItem(item, token);
        } : undefined
      }].concat(_toConsumableArray(triggerCharacters)));
    }
  }]);

  return CompletionItemFeature;
}(TextDocumentFeature);

var HoverFeature =
/*#__PURE__*/
function (_TextDocumentFeature2) {
  _inherits(HoverFeature, _TextDocumentFeature2);

  function HoverFeature(client) {
    _classCallCheck(this, HoverFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(HoverFeature).call(this, client, vscode_languageserver_protocol_1.HoverRequest.type));
  }

  _createClass(HoverFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var hoverCapability = ensure(ensure(capabilites, 'textDocument'), 'hover');
      hoverCapability.dynamicRegistration = true;
      hoverCapability.contentFormat = [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText];
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.hoverProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideHover = function provideHover(document, position, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.HoverRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asHover, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.HoverRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerHoverProvider(options.documentSelector, {
        provideHover: function provideHover(document, position, token) {
          return middleware.provideHover ? middleware.provideHover(document, position, token, _provideHover) : _provideHover(document, position, token);
        }
      });
    }
  }]);

  return HoverFeature;
}(TextDocumentFeature);

var SignatureHelpFeature =
/*#__PURE__*/
function (_TextDocumentFeature3) {
  _inherits(SignatureHelpFeature, _TextDocumentFeature3);

  function SignatureHelpFeature(client) {
    _classCallCheck(this, SignatureHelpFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(SignatureHelpFeature).call(this, client, vscode_languageserver_protocol_1.SignatureHelpRequest.type));
  }

  _createClass(SignatureHelpFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var config = ensure(ensure(capabilites, 'textDocument'), 'signatureHelp');
      config.dynamicRegistration = true;
      config.signatureInformation = {
        documentationFormat: [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText]
      };
      config.signatureInformation.parameterInformation = {
        labelOffsetSupport: true
      };
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.signatureHelpProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _vscode_1$languages2;

      var client = this._client;

      var providerSignatureHelp = function providerSignatureHelp(document, position, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asSignatureHelp, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      var triggerCharacters = options.triggerCharacters || [];
      return (_vscode_1$languages2 = vscode_1.languages).registerSignatureHelpProvider.apply(_vscode_1$languages2, [options.documentSelector, {
        provideSignatureHelp: function provideSignatureHelp(document, position, token) {
          return middleware.provideSignatureHelp ? middleware.provideSignatureHelp(document, position, token, providerSignatureHelp) : providerSignatureHelp(document, position, token);
        }
      }].concat(_toConsumableArray(triggerCharacters)));
    }
  }]);

  return SignatureHelpFeature;
}(TextDocumentFeature);

var DefinitionFeature =
/*#__PURE__*/
function (_TextDocumentFeature4) {
  _inherits(DefinitionFeature, _TextDocumentFeature4);

  function DefinitionFeature(client) {
    _classCallCheck(this, DefinitionFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionFeature).call(this, client, vscode_languageserver_protocol_1.DefinitionRequest.type));
  }

  _createClass(DefinitionFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var definitionSupport = ensure(ensure(capabilites, 'textDocument'), 'definition');
      definitionSupport.dynamicRegistration = true;
      definitionSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.definitionProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideDefinition = function provideDefinition(document, position, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDefinitionResult, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerDefinitionProvider(options.documentSelector, {
        provideDefinition: function provideDefinition(document, position, token) {
          return middleware.provideDefinition ? middleware.provideDefinition(document, position, token, _provideDefinition) : _provideDefinition(document, position, token);
        }
      });
    }
  }]);

  return DefinitionFeature;
}(TextDocumentFeature);

var ReferencesFeature =
/*#__PURE__*/
function (_TextDocumentFeature5) {
  _inherits(ReferencesFeature, _TextDocumentFeature5);

  function ReferencesFeature(client) {
    _classCallCheck(this, ReferencesFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReferencesFeature).call(this, client, vscode_languageserver_protocol_1.ReferencesRequest.type));
  }

  _createClass(ReferencesFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'references').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.referencesProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var providerReferences = function providerReferences(document, position, options, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, client.code2ProtocolConverter.asReferenceParams(document, position, options), token).then(client.protocol2CodeConverter.asReferences, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerReferenceProvider(options.documentSelector, {
        provideReferences: function provideReferences(document, position, options, token) {
          return middleware.provideReferences ? middleware.provideReferences(document, position, options, token, providerReferences) : providerReferences(document, position, options, token);
        }
      });
    }
  }]);

  return ReferencesFeature;
}(TextDocumentFeature);

var DocumentHighlightFeature =
/*#__PURE__*/
function (_TextDocumentFeature6) {
  _inherits(DocumentHighlightFeature, _TextDocumentFeature6);

  function DocumentHighlightFeature(client) {
    _classCallCheck(this, DocumentHighlightFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentHighlightFeature).call(this, client, vscode_languageserver_protocol_1.DocumentHighlightRequest.type));
  }

  _createClass(DocumentHighlightFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'documentHighlight').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentHighlightProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideDocumentHighlights = function provideDocumentHighlights(document, position, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDocumentHighlights, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerDocumentHighlightProvider(options.documentSelector, {
        provideDocumentHighlights: function provideDocumentHighlights(document, position, token) {
          return middleware.provideDocumentHighlights ? middleware.provideDocumentHighlights(document, position, token, _provideDocumentHighlights) : _provideDocumentHighlights(document, position, token);
        }
      });
    }
  }]);

  return DocumentHighlightFeature;
}(TextDocumentFeature);

var DocumentSymbolFeature =
/*#__PURE__*/
function (_TextDocumentFeature7) {
  _inherits(DocumentSymbolFeature, _TextDocumentFeature7);

  function DocumentSymbolFeature(client) {
    _classCallCheck(this, DocumentSymbolFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentSymbolFeature).call(this, client, vscode_languageserver_protocol_1.DocumentSymbolRequest.type));
  }

  _createClass(DocumentSymbolFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var symbolCapabilities = ensure(ensure(capabilites, 'textDocument'), 'documentSymbol');
      symbolCapabilities.dynamicRegistration = true;
      symbolCapabilities.symbolKind = {
        valueSet: SupportedSymbolKinds
      };
      symbolCapabilities.hierarchicalDocumentSymbolSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentSymbolProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideDocumentSymbols = function provideDocumentSymbols(document, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, client.code2ProtocolConverter.asDocumentSymbolParams(document), token).then(function (data) {
          if (data === null) {
            return undefined;
          }

          if (data.length === 0) {
            return [];
          } else {
            var element = data[0];

            if (vscode_languageserver_protocol_1.DocumentSymbol.is(element)) {
              return client.protocol2CodeConverter.asDocumentSymbols(data);
            } else {
              return client.protocol2CodeConverter.asSymbolInformations(data);
            }
          }
        }, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerDocumentSymbolProvider(options.documentSelector, {
        provideDocumentSymbols: function provideDocumentSymbols(document, token) {
          return middleware.provideDocumentSymbols ? middleware.provideDocumentSymbols(document, token, _provideDocumentSymbols) : _provideDocumentSymbols(document, token);
        }
      });
    }
  }]);

  return DocumentSymbolFeature;
}(TextDocumentFeature);

var WorkspaceSymbolFeature =
/*#__PURE__*/
function (_WorkspaceFeature) {
  _inherits(WorkspaceSymbolFeature, _WorkspaceFeature);

  function WorkspaceSymbolFeature(client) {
    _classCallCheck(this, WorkspaceSymbolFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(WorkspaceSymbolFeature).call(this, client, vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type));
  }

  _createClass(WorkspaceSymbolFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var symbolCapabilities = ensure(ensure(capabilites, 'workspace'), 'symbol');
      symbolCapabilities.dynamicRegistration = true;
      symbolCapabilities.symbolKind = {
        valueSet: SupportedSymbolKinds
      };
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities) {
      if (!capabilities.workspaceSymbolProvider) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: capabilities.workspaceSymbolProvider === true ? {
          workDoneProgress: false
        } : capabilities.workspaceSymbolProvider
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(_options) {
      var client = this._client;

      var _provideWorkspaceSymbols = function provideWorkspaceSymbols(query, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, {
          query: query
        }, token).then(client.protocol2CodeConverter.asSymbolInformations, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerWorkspaceSymbolProvider({
        provideWorkspaceSymbols: function provideWorkspaceSymbols(query, token) {
          return middleware.provideWorkspaceSymbols ? middleware.provideWorkspaceSymbols(query, token, _provideWorkspaceSymbols) : _provideWorkspaceSymbols(query, token);
        }
      });
    }
  }]);

  return WorkspaceSymbolFeature;
}(WorkspaceFeature);

var CodeActionFeature =
/*#__PURE__*/
function (_TextDocumentFeature8) {
  _inherits(CodeActionFeature, _TextDocumentFeature8);

  function CodeActionFeature(client) {
    _classCallCheck(this, CodeActionFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodeActionFeature).call(this, client, vscode_languageserver_protocol_1.CodeActionRequest.type));
  }

  _createClass(CodeActionFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var cap = ensure(ensure(capabilites, 'textDocument'), 'codeAction');
      cap.dynamicRegistration = true;
      cap.codeActionLiteralSupport = {
        codeActionKind: {
          valueSet: [vscode_languageserver_protocol_1.CodeActionKind.Empty, vscode_languageserver_protocol_1.CodeActionKind.QuickFix, vscode_languageserver_protocol_1.CodeActionKind.Refactor, vscode_languageserver_protocol_1.CodeActionKind.RefactorExtract, vscode_languageserver_protocol_1.CodeActionKind.RefactorInline, vscode_languageserver_protocol_1.CodeActionKind.RefactorRewrite, vscode_languageserver_protocol_1.CodeActionKind.Source, vscode_languageserver_protocol_1.CodeActionKind.SourceOrganizeImports]
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.codeActionProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideCodeActions = function provideCodeActions(document, range, context, token) {
        var params = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
          range: client.code2ProtocolConverter.asRange(range),
          context: client.code2ProtocolConverter.asCodeActionContext(context)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, params, token).then(function (values) {
          if (values === null) {
            return undefined;
          }

          var result = [];
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = values[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var item = _step7.value;

              if (vscode_languageserver_protocol_1.Command.is(item)) {
                result.push(client.protocol2CodeConverter.asCommand(item));
              } else {
                result.push(client.protocol2CodeConverter.asCodeAction(item));
              }

              ;
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          return result;
        }, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerCodeActionsProvider(options.documentSelector, {
        provideCodeActions: function provideCodeActions(document, range, context, token) {
          return middleware.provideCodeActions ? middleware.provideCodeActions(document, range, context, token, _provideCodeActions) : _provideCodeActions(document, range, context, token);
        }
      }, options.codeActionKinds ? {
        providedCodeActionKinds: client.protocol2CodeConverter.asCodeActionKinds(options.codeActionKinds)
      } : undefined);
    }
  }]);

  return CodeActionFeature;
}(TextDocumentFeature);

var CodeLensFeature =
/*#__PURE__*/
function (_TextDocumentFeature9) {
  _inherits(CodeLensFeature, _TextDocumentFeature9);

  function CodeLensFeature(client) {
    _classCallCheck(this, CodeLensFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodeLensFeature).call(this, client, vscode_languageserver_protocol_1.CodeLensRequest.type));
  }

  _createClass(CodeLensFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'codeLens').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.codeLensProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideCodeLenses = function provideCodeLenses(document, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, client.code2ProtocolConverter.asCodeLensParams(document), token).then(client.protocol2CodeConverter.asCodeLenses, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var resolveCodeLens = function resolveCodeLens(codeLens, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, client.code2ProtocolConverter.asCodeLens(codeLens), token).then(client.protocol2CodeConverter.asCodeLens, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, error);
          return codeLens;
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerCodeLensProvider(options.documentSelector, {
        provideCodeLenses: function provideCodeLenses(document, token) {
          return middleware.provideCodeLenses ? middleware.provideCodeLenses(document, token, _provideCodeLenses) : _provideCodeLenses(document, token);
        },
        resolveCodeLens: options.resolveProvider ? function (codeLens, token) {
          return middleware.resolveCodeLens ? middleware.resolveCodeLens(codeLens, token, resolveCodeLens) : resolveCodeLens(codeLens, token);
        } : undefined
      });
    }
  }]);

  return CodeLensFeature;
}(TextDocumentFeature);

var DocumentFormattingFeature =
/*#__PURE__*/
function (_TextDocumentFeature10) {
  _inherits(DocumentFormattingFeature, _TextDocumentFeature10);

  function DocumentFormattingFeature(client) {
    _classCallCheck(this, DocumentFormattingFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentFormattingFeature).call(this, client, vscode_languageserver_protocol_1.DocumentFormattingRequest.type));
  }

  _createClass(DocumentFormattingFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'formatting').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentFormattingProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideDocumentFormattingEdits = function provideDocumentFormattingEdits(document, options, token) {
        var params = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
          options: client.code2ProtocolConverter.asFormattingOptions(options)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, params, token).then(client.protocol2CodeConverter.asTextEdits, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerDocumentFormattingEditProvider(options.documentSelector, {
        provideDocumentFormattingEdits: function provideDocumentFormattingEdits(document, options, token) {
          return middleware.provideDocumentFormattingEdits ? middleware.provideDocumentFormattingEdits(document, options, token, _provideDocumentFormattingEdits) : _provideDocumentFormattingEdits(document, options, token);
        }
      });
    }
  }]);

  return DocumentFormattingFeature;
}(TextDocumentFeature);

var DocumentRangeFormattingFeature =
/*#__PURE__*/
function (_TextDocumentFeature11) {
  _inherits(DocumentRangeFormattingFeature, _TextDocumentFeature11);

  function DocumentRangeFormattingFeature(client) {
    _classCallCheck(this, DocumentRangeFormattingFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentRangeFormattingFeature).call(this, client, vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type));
  }

  _createClass(DocumentRangeFormattingFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'rangeFormatting').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentRangeFormattingProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideDocumentRangeFormattingEdits = function provideDocumentRangeFormattingEdits(document, range, options, token) {
        var params = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
          range: client.code2ProtocolConverter.asRange(range),
          options: client.code2ProtocolConverter.asFormattingOptions(options)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, params, token).then(client.protocol2CodeConverter.asTextEdits, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerDocumentRangeFormattingEditProvider(options.documentSelector, {
        provideDocumentRangeFormattingEdits: function provideDocumentRangeFormattingEdits(document, range, options, token) {
          return middleware.provideDocumentRangeFormattingEdits ? middleware.provideDocumentRangeFormattingEdits(document, range, options, token, _provideDocumentRangeFormattingEdits) : _provideDocumentRangeFormattingEdits(document, range, options, token);
        }
      });
    }
  }]);

  return DocumentRangeFormattingFeature;
}(TextDocumentFeature);

var DocumentOnTypeFormattingFeature =
/*#__PURE__*/
function (_TextDocumentFeature12) {
  _inherits(DocumentOnTypeFormattingFeature, _TextDocumentFeature12);

  function DocumentOnTypeFormattingFeature(client) {
    _classCallCheck(this, DocumentOnTypeFormattingFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentOnTypeFormattingFeature).call(this, client, vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type));
  }

  _createClass(DocumentOnTypeFormattingFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'onTypeFormatting').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentOnTypeFormattingProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _vscode_1$languages3;

      var client = this._client;
      var moreTriggerCharacter = options.moreTriggerCharacter || [];

      var _provideOnTypeFormattingEdits = function provideOnTypeFormattingEdits(document, position, ch, options, token) {
        var params = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
          position: client.code2ProtocolConverter.asPosition(position),
          ch: ch,
          options: client.code2ProtocolConverter.asFormattingOptions(options)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, params, token).then(client.protocol2CodeConverter.asTextEdits, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, error);
          return Promise.resolve([]);
        });
      };

      var middleware = client.clientOptions.middleware;
      return (_vscode_1$languages3 = vscode_1.languages).registerOnTypeFormattingEditProvider.apply(_vscode_1$languages3, [options.documentSelector, {
        provideOnTypeFormattingEdits: function provideOnTypeFormattingEdits(document, position, ch, options, token) {
          return middleware.provideOnTypeFormattingEdits ? middleware.provideOnTypeFormattingEdits(document, position, ch, options, token, _provideOnTypeFormattingEdits) : _provideOnTypeFormattingEdits(document, position, ch, options, token);
        }
      }, options.firstTriggerCharacter].concat(_toConsumableArray(moreTriggerCharacter)));
    }
  }]);

  return DocumentOnTypeFormattingFeature;
}(TextDocumentFeature);

var RenameFeature =
/*#__PURE__*/
function (_TextDocumentFeature13) {
  _inherits(RenameFeature, _TextDocumentFeature13);

  function RenameFeature(client) {
    _classCallCheck(this, RenameFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(RenameFeature).call(this, client, vscode_languageserver_protocol_1.RenameRequest.type));
  }

  _createClass(RenameFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var rename = ensure(ensure(capabilites, 'textDocument'), 'rename');
      rename.dynamicRegistration = true;
      rename.prepareSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.renameProvider);

      if (!options) {
        return;
      }

      if (Is["boolean"](capabilities.renameProvider)) {
        options.prepareProvider = false;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideRenameEdits = function provideRenameEdits(document, position, newName, token) {
        var params = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
          position: client.code2ProtocolConverter.asPosition(position),
          newName: newName
        };
        return client.sendRequest(vscode_languageserver_protocol_1.RenameRequest.type, params, token).then(client.protocol2CodeConverter.asWorkspaceEdit, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.RenameRequest.type, error);
          return Promise.reject(new Error(error.message));
        });
      };

      var prepareRename = function prepareRename(document, position, token) {
        var params = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
          position: client.code2ProtocolConverter.asPosition(position)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, params, token).then(function (result) {
          if (vscode_languageserver_protocol_1.Range.is(result)) {
            return client.protocol2CodeConverter.asRange(result);
          } else if (result && vscode_languageserver_protocol_1.Range.is(result.range)) {
            return {
              range: client.protocol2CodeConverter.asRange(result.range),
              placeholder: result.placeholder
            };
          } // To cancel the rename vscode API expects a rejected promise.


          return Promise.reject(new Error("The element can't be renamed."));
        }, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, error);
          return Promise.reject(new Error(error.message));
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerRenameProvider(options.documentSelector, {
        provideRenameEdits: function provideRenameEdits(document, position, newName, token) {
          return middleware.provideRenameEdits ? middleware.provideRenameEdits(document, position, newName, token, _provideRenameEdits) : _provideRenameEdits(document, position, newName, token);
        },
        prepareRename: options.prepareProvider ? function (document, position, token) {
          return middleware.prepareRename ? middleware.prepareRename(document, position, token, prepareRename) : prepareRename(document, position, token);
        } : undefined
      });
    }
  }]);

  return RenameFeature;
}(TextDocumentFeature);

var DocumentLinkFeature =
/*#__PURE__*/
function (_TextDocumentFeature14) {
  _inherits(DocumentLinkFeature, _TextDocumentFeature14);

  function DocumentLinkFeature(client) {
    _classCallCheck(this, DocumentLinkFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentLinkFeature).call(this, client, vscode_languageserver_protocol_1.DocumentLinkRequest.type));
  }

  _createClass(DocumentLinkFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'documentLink').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentLinkProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideDocumentLinks = function provideDocumentLinks(document, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, client.code2ProtocolConverter.asDocumentLinkParams(document), token).then(client.protocol2CodeConverter.asDocumentLinks, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, error);
          Promise.resolve(new Error(error.message));
        });
      };

      var resolveDocumentLink = function resolveDocumentLink(link, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, client.code2ProtocolConverter.asDocumentLink(link), token).then(client.protocol2CodeConverter.asDocumentLink, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, error);
          Promise.resolve(new Error(error.message));
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerDocumentLinkProvider(options.documentSelector, {
        provideDocumentLinks: function provideDocumentLinks(document, token) {
          return middleware.provideDocumentLinks ? middleware.provideDocumentLinks(document, token, _provideDocumentLinks) : _provideDocumentLinks(document, token);
        },
        resolveDocumentLink: options.resolveProvider ? function (link, token) {
          return middleware.resolveDocumentLink ? middleware.resolveDocumentLink(link, token, resolveDocumentLink) : resolveDocumentLink(link, token);
        } : undefined
      });
    }
  }]);

  return DocumentLinkFeature;
}(TextDocumentFeature);

var ConfigurationFeature =
/*#__PURE__*/
function () {
  function ConfigurationFeature(_client) {
    _classCallCheck(this, ConfigurationFeature);

    this._client = _client;
    this._listeners = new Map();
  }

  _createClass(ConfigurationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'workspace'), 'didChangeConfiguration').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var section = this._client.clientOptions.synchronize.configurationSection;

      if (section !== void 0) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            section: section
          }
        });
      }
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      var _this10 = this;

      var disposable = vscode_1.workspace.onDidChangeConfiguration(function (event) {
        _this10.onDidChangeConfiguration(data.registerOptions.section, event);
      });

      this._listeners.set(data.id, disposable);

      if (data.registerOptions.section !== void 0) {
        this.onDidChangeConfiguration(data.registerOptions.section, undefined);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposable = this._listeners.get(id);

      if (disposable) {
        this._listeners["delete"](id);

        disposable.dispose();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this._listeners.values()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var disposable = _step8.value;
          disposable.dispose();
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      this._listeners.clear();
    }
  }, {
    key: "onDidChangeConfiguration",
    value: function onDidChangeConfiguration(configurationSection, event) {
      var _this11 = this;

      var sections;

      if (Is.string(configurationSection)) {
        sections = [configurationSection];
      } else {
        sections = configurationSection;
      }

      if (sections !== void 0 && event !== void 0) {
        var affected = sections.some(function (section) {
          return event.affectsConfiguration(section);
        });

        if (!affected) {
          return;
        }
      }

      var didChangeConfiguration = function didChangeConfiguration(sections) {
        if (sections === void 0) {
          _this11._client.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, {
            settings: null
          });

          return;
        }

        _this11._client.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, {
          settings: _this11.extractSettingsInformation(sections)
        });
      };

      var middleware = this.getMiddleware();
      middleware ? middleware(sections, didChangeConfiguration) : didChangeConfiguration(sections);
    }
  }, {
    key: "extractSettingsInformation",
    value: function extractSettingsInformation(keys) {
      function ensurePath(config, path) {
        var current = config;

        for (var i = 0; i < path.length - 1; i++) {
          var obj = current[path[i]];

          if (!obj) {
            obj = Object.create(null);
            current[path[i]] = obj;
          }

          current = obj;
        }

        return current;
      }

      var resource = this._client.clientOptions.workspaceFolder ? this._client.clientOptions.workspaceFolder.uri : undefined;
      var result = Object.create(null);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var index = key.indexOf('.');
        var config = null;

        if (index >= 0) {
          config = vscode_1.workspace.getConfiguration(key.substr(0, index), resource).get(key.substr(index + 1));
        } else {
          config = vscode_1.workspace.getConfiguration(key, resource);
        }

        if (config) {
          var path = keys[i].split('.');
          ensurePath(result, path)[path[path.length - 1]] = config;
        }
      }

      return result;
    }
  }, {
    key: "getMiddleware",
    value: function getMiddleware() {
      var middleware = this._client.clientOptions.middleware;

      if (middleware.workspace && middleware.workspace.didChangeConfiguration) {
        return middleware.workspace.didChangeConfiguration;
      } else {
        return undefined;
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type;
    }
  }]);

  return ConfigurationFeature;
}();

var ExecuteCommandFeature =
/*#__PURE__*/
function () {
  function ExecuteCommandFeature(_client) {
    _classCallCheck(this, ExecuteCommandFeature);

    this._client = _client;
    this._commands = new Map();
  }

  _createClass(ExecuteCommandFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'workspace'), 'executeCommand').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities) {
      if (!capabilities.executeCommandProvider) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: Object.assign({}, capabilities.executeCommandProvider)
      });
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      var client = this._client;

      if (data.registerOptions.commands) {
        var disposeables = [];
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          var _loop = function _loop() {
            var command = _step9.value;
            disposeables.push(vscode_1.commands.registerCommand(command, function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var params = {
                command: command,
                arguments: args
              };
              return client.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params).then(undefined, function (error) {
                client.logFailedRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, error);
              });
            }));
          };

          for (var _iterator9 = data.registerOptions.commands[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        this._commands.set(data.id, disposeables);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposeables = this._commands.get(id);

      if (disposeables) {
        disposeables.forEach(function (disposable) {
          return disposable.dispose();
        });
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._commands.forEach(function (value) {
        value.forEach(function (disposable) {
          return disposable.dispose();
        });
      });

      this._commands.clear();
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.ExecuteCommandRequest.type;
    }
  }]);

  return ExecuteCommandFeature;
}();

var MessageTransports;

(function (MessageTransports) {
  function is(value) {
    var candidate = value;
    return candidate && vscode_languageserver_protocol_1.MessageReader.is(value.reader) && vscode_languageserver_protocol_1.MessageWriter.is(value.writer);
  }

  MessageTransports.is = is;
})(MessageTransports = exports.MessageTransports || (exports.MessageTransports = {}));

var OnReady =
/*#__PURE__*/
function () {
  function OnReady(_resolve, _reject) {
    _classCallCheck(this, OnReady);

    this._resolve = _resolve;
    this._reject = _reject;
    this._used = false;
  }

  _createClass(OnReady, [{
    key: "resolve",
    value: function resolve() {
      this._used = true;

      this._resolve();
    }
  }, {
    key: "reject",
    value: function reject(error) {
      this._used = true;

      this._reject(error);
    }
  }, {
    key: "isUsed",
    get: function get() {
      return this._used;
    }
  }]);

  return OnReady;
}();

var BaseLanguageClient =
/*#__PURE__*/
function () {
  function BaseLanguageClient(id, name, clientOptions) {
    var _this12 = this;

    _classCallCheck(this, BaseLanguageClient);

    this._traceFormat = vscode_languageserver_protocol_1.TraceFormat.Text;
    this._features = [];
    this._method2Message = new Map();
    this._dynamicFeatures = new Map();
    this._id = id;
    this._name = name;
    clientOptions = clientOptions || {};
    this._clientOptions = {
      documentSelector: clientOptions.documentSelector || [],
      synchronize: clientOptions.synchronize || {},
      diagnosticCollectionName: clientOptions.diagnosticCollectionName,
      outputChannelName: clientOptions.outputChannelName || this._name,
      revealOutputChannelOn: clientOptions.revealOutputChannelOn || RevealOutputChannelOn.Error,
      stdioEncoding: clientOptions.stdioEncoding || 'utf8',
      initializationOptions: clientOptions.initializationOptions,
      initializationFailedHandler: clientOptions.initializationFailedHandler,
      progressOnInitialization: !!clientOptions.progressOnInitialization,
      errorHandler: clientOptions.errorHandler || new DefaultErrorHandler(this._name),
      middleware: clientOptions.middleware || {},
      uriConverters: clientOptions.uriConverters,
      workspaceFolder: clientOptions.workspaceFolder
    };
    this._clientOptions.synchronize = this._clientOptions.synchronize || {};
    this.state = ClientState.Initial;
    this._connectionPromise = undefined;
    this._resolvedConnection = undefined;
    this._initializeResult = undefined;

    if (clientOptions.outputChannel) {
      this._outputChannel = clientOptions.outputChannel;
      this._disposeOutputChannel = false;
    } else {
      this._outputChannel = undefined;
      this._disposeOutputChannel = true;
    }

    this._traceOutputChannel = clientOptions.traceOutputChannel;
    this._listeners = undefined;
    this._providers = undefined;
    this._diagnostics = undefined;
    this._fileEvents = [];
    this._fileEventDelayer = new async_1.Delayer(250);
    this._onReady = new Promise(function (resolve, reject) {
      _this12._onReadyCallbacks = new OnReady(resolve, reject);
    });
    this._onStop = undefined;
    this._telemetryEmitter = new vscode_languageserver_protocol_1.Emitter();
    this._stateChangeEmitter = new vscode_languageserver_protocol_1.Emitter();
    this._tracer = {
      log: function log(messageOrDataObject, data) {
        if (Is.string(messageOrDataObject)) {
          _this12.logTrace(messageOrDataObject, data);
        } else {
          _this12.logObjectTrace(messageOrDataObject);
        }
      }
    };
    this._c2p = c2p.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.code2Protocol : undefined);
    this._p2c = p2c.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.protocol2Code : undefined);
    this._syncedDocuments = new Map();
    this.registerBuiltinFeatures();
  }

  _createClass(BaseLanguageClient, [{
    key: "getPublicState",
    value: function getPublicState() {
      if (this.state === ClientState.Running) {
        return State.Running;
      } else if (this.state === ClientState.Starting) {
        return State.Starting;
      } else {
        return State.Stopped;
      }
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(type) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      this.forceDocumentSync();

      try {
        var _this$_resolvedConnec;

        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        return (_this$_resolvedConnec = this._resolvedConnection).sendRequest.apply(_this$_resolvedConnec, [type].concat(params));
      } catch (error) {
        this.error("Sending request ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "onRequest",
    value: function onRequest(type, handler) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      try {
        this._resolvedConnection.onRequest(type, handler);
      } catch (error) {
        this.error("Registering request handler ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "sendNotification",
    value: function sendNotification(type, params) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      this.forceDocumentSync();

      try {
        this._resolvedConnection.sendNotification(type, params);
      } catch (error) {
        this.error("Sending notification ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "onNotification",
    value: function onNotification(type, handler) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      try {
        this._resolvedConnection.onNotification(type, handler);
      } catch (error) {
        this.error("Registering notification handler ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "onProgress",
    value: function onProgress(type, token, handler) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      try {
        return this._resolvedConnection.onProgress(type, token, handler);
      } catch (error) {
        this.error("Registering progress handler for token ".concat(token, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "sendProgress",
    value: function sendProgress(type, token, value) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      this.forceDocumentSync();

      try {
        this._resolvedConnection.sendProgress(type, token, value);
      } catch (error) {
        this.error("Sending progress for token ".concat(token, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "createDefaultErrorHandler",
    value: function createDefaultErrorHandler() {
      return new DefaultErrorHandler(this._name);
    }
  }, {
    key: "data2String",
    value: function data2String(data) {
      if (data instanceof vscode_languageserver_protocol_1.ResponseError) {
        var responseError = data;
        return "  Message: ".concat(responseError.message, "\n  Code: ").concat(responseError.code, " ").concat(responseError.data ? '\n' + responseError.data.toString() : '');
      }

      if (data instanceof Error) {
        if (Is.string(data.stack)) {
          return data.stack;
        }

        return data.message;
      }

      if (Is.string(data)) {
        return data;
      }

      return data.toString();
    }
  }, {
    key: "info",
    value: function info(message, data) {
      this.outputChannel.appendLine("[Info  - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.outputChannel.appendLine(this.data2String(data));
      }

      if (this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Info) {
        this.showNotificationMessage();
      }
    }
  }, {
    key: "warn",
    value: function warn(message, data) {
      this.outputChannel.appendLine("[Warn  - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.outputChannel.appendLine(this.data2String(data));
      }

      if (this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Warn) {
        this.showNotificationMessage();
      }
    }
  }, {
    key: "error",
    value: function error(message, data) {
      this.outputChannel.appendLine("[Error - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.outputChannel.appendLine(this.data2String(data));
      }

      if (this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Error) {
        this.showNotificationMessage();
      }
    }
  }, {
    key: "showNotificationMessage",
    value: function showNotificationMessage() {
      var _this13 = this;

      vscode_1.window.showInformationMessage('A request has failed. See the output for more information.', 'Go to output').then(function () {
        _this13.outputChannel.show(true);
      });
    }
  }, {
    key: "logTrace",
    value: function logTrace(message, data) {
      this.traceOutputChannel.appendLine("[Trace - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.traceOutputChannel.appendLine(this.data2String(data));
      }
    }
  }, {
    key: "logObjectTrace",
    value: function logObjectTrace(data) {
      if (data.isLSPMessage && data.type) {
        this.traceOutputChannel.append("[LSP   - ".concat(new Date().toLocaleTimeString(), "] "));
      } else {
        this.traceOutputChannel.append("[Trace - ".concat(new Date().toLocaleTimeString(), "] "));
      }

      if (data) {
        this.traceOutputChannel.appendLine("".concat(JSON.stringify(data)));
      }
    }
  }, {
    key: "needsStart",
    value: function needsStart() {
      return this.state === ClientState.Initial || this.state === ClientState.Stopping || this.state === ClientState.Stopped;
    }
  }, {
    key: "needsStop",
    value: function needsStop() {
      return this.state === ClientState.Starting || this.state === ClientState.Running;
    }
  }, {
    key: "onReady",
    value: function onReady() {
      return this._onReady;
    }
  }, {
    key: "isConnectionActive",
    value: function isConnectionActive() {
      return this.state === ClientState.Running && !!this._resolvedConnection;
    }
  }, {
    key: "start",
    value: function start() {
      var _this14 = this;

      if (this._onReadyCallbacks.isUsed) {
        this._onReady = new Promise(function (resolve, reject) {
          _this14._onReadyCallbacks = new OnReady(resolve, reject);
        });
      }

      this._listeners = [];
      this._providers = []; // If we restart then the diagnostics collection is reused.

      if (!this._diagnostics) {
        this._diagnostics = this._clientOptions.diagnosticCollectionName ? vscode_1.languages.createDiagnosticCollection(this._clientOptions.diagnosticCollectionName) : vscode_1.languages.createDiagnosticCollection();
      }

      this.state = ClientState.Starting;
      this.resolveConnection().then(function (connection) {
        connection.onLogMessage(function (message) {
          switch (message.type) {
            case vscode_languageserver_protocol_1.MessageType.Error:
              _this14.error(message.message);

              break;

            case vscode_languageserver_protocol_1.MessageType.Warning:
              _this14.warn(message.message);

              break;

            case vscode_languageserver_protocol_1.MessageType.Info:
              _this14.info(message.message);

              break;

            default:
              _this14.outputChannel.appendLine(message.message);

          }
        });
        connection.onShowMessage(function (message) {
          switch (message.type) {
            case vscode_languageserver_protocol_1.MessageType.Error:
              vscode_1.window.showErrorMessage(message.message);
              break;

            case vscode_languageserver_protocol_1.MessageType.Warning:
              vscode_1.window.showWarningMessage(message.message);
              break;

            case vscode_languageserver_protocol_1.MessageType.Info:
              vscode_1.window.showInformationMessage(message.message);
              break;

            default:
              vscode_1.window.showInformationMessage(message.message);
          }
        });
        connection.onRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, function (params) {
          var messageFunc;

          switch (params.type) {
            case vscode_languageserver_protocol_1.MessageType.Error:
              messageFunc = vscode_1.window.showErrorMessage;
              break;

            case vscode_languageserver_protocol_1.MessageType.Warning:
              messageFunc = vscode_1.window.showWarningMessage;
              break;

            case vscode_languageserver_protocol_1.MessageType.Info:
              messageFunc = vscode_1.window.showInformationMessage;
              break;

            default:
              messageFunc = vscode_1.window.showInformationMessage;
          }

          var actions = params.actions || [];
          return messageFunc.apply(void 0, [params.message].concat(_toConsumableArray(actions)));
        });
        connection.onTelemetry(function (data) {
          _this14._telemetryEmitter.fire(data);
        });
        connection.listen(); // Error is handled in the initialize call.

        return _this14.initialize(connection);
      }).then(undefined, function (error) {
        _this14.state = ClientState.StartFailed;

        _this14._onReadyCallbacks.reject(error);

        _this14.error('Starting client failed', error);

        vscode_1.window.showErrorMessage("Couldn't start client ".concat(_this14._name));
      });
      return new vscode_1.Disposable(function () {
        if (_this14.needsStop()) {
          _this14.stop();
        }
      });
    }
  }, {
    key: "resolveConnection",
    value: function resolveConnection() {
      if (!this._connectionPromise) {
        this._connectionPromise = this.createConnection();
      }

      return this._connectionPromise;
    }
  }, {
    key: "initialize",
    value: function initialize(connection) {
      this.refreshTrace(connection, false);
      var initOption = this._clientOptions.initializationOptions;
      var rootPath = this._clientOptions.workspaceFolder ? this._clientOptions.workspaceFolder.uri.fsPath : this._clientGetRootPath();
      var initParams = {
        processId: process.pid,
        rootPath: rootPath ? rootPath : null,
        rootUri: rootPath ? this._c2p.asUri(vscode_1.Uri.file(rootPath)) : null,
        capabilities: this.computeClientCapabilities(),
        initializationOptions: Is.func(initOption) ? initOption() : initOption,
        trace: vscode_languageserver_protocol_1.Trace.toString(this._trace),
        workspaceFolders: null
      };
      this.fillInitializeParams(initParams);

      if (this._clientOptions.progressOnInitialization) {
        var token = UUID.generateUuid();
        var part = new progressPart_1.ProgressPart(connection, token);
        initParams.workDoneToken = token;
        return this.doInitialize(connection, initParams).then(function (result) {
          part.done();
          return result;
        }, function (error) {
          part.cancel();
          throw error;
        });
      } else {
        return this.doInitialize(connection, initParams);
      }
    }
  }, {
    key: "doInitialize",
    value: function doInitialize(connection, initParams) {
      var _this15 = this;

      return connection.initialize(initParams).then(function (result) {
        _this15._resolvedConnection = connection;
        _this15._initializeResult = result;
        _this15.state = ClientState.Running;
        var textDocumentSyncOptions = undefined;

        if (Is.number(result.capabilities.textDocumentSync)) {
          if (result.capabilities.textDocumentSync === vscode_languageserver_protocol_1.TextDocumentSyncKind.None) {
            textDocumentSyncOptions = {
              openClose: false,
              change: vscode_languageserver_protocol_1.TextDocumentSyncKind.None,
              save: undefined
            };
          } else {
            textDocumentSyncOptions = {
              openClose: true,
              change: result.capabilities.textDocumentSync,
              save: {
                includeText: false
              }
            };
          }
        } else if (result.capabilities.textDocumentSync !== void 0 && result.capabilities.textDocumentSync !== null) {
          textDocumentSyncOptions = result.capabilities.textDocumentSync;
        }

        _this15._capabilities = Object.assign({}, result.capabilities, {
          resolvedTextDocumentSync: textDocumentSyncOptions
        });
        connection.onDiagnostics(function (params) {
          return _this15.handleDiagnostics(params);
        });
        connection.onRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, function (params) {
          return _this15.handleRegistrationRequest(params);
        }); // See https://github.com/Microsoft/vscode-languageserver-node/issues/199

        connection.onRequest('client/registerFeature', function (params) {
          return _this15.handleRegistrationRequest(params);
        });
        connection.onRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, function (params) {
          return _this15.handleUnregistrationRequest(params);
        }); // See https://github.com/Microsoft/vscode-languageserver-node/issues/199

        connection.onRequest('client/unregisterFeature', function (params) {
          return _this15.handleUnregistrationRequest(params);
        });
        connection.onRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, function (params) {
          return _this15.handleApplyWorkspaceEdit(params);
        });
        connection.sendNotification(vscode_languageserver_protocol_1.InitializedNotification.type, {});

        _this15.hookFileEvents(connection);

        _this15.hookConfigurationChanged(connection);

        _this15.initializeFeatures(connection);

        _this15._onReadyCallbacks.resolve();

        return result;
      }).then(undefined, function (error) {
        if (_this15._clientOptions.initializationFailedHandler) {
          if (_this15._clientOptions.initializationFailedHandler(error)) {
            _this15.initialize(connection);
          } else {
            _this15.stop();

            _this15._onReadyCallbacks.reject(error);
          }
        } else if (error instanceof vscode_languageserver_protocol_1.ResponseError && error.data && error.data.retry) {
          vscode_1.window.showErrorMessage(error.message, {
            title: 'Retry',
            id: "retry"
          }).then(function (item) {
            if (item && item.id === 'retry') {
              _this15.initialize(connection);
            } else {
              _this15.stop();

              _this15._onReadyCallbacks.reject(error);
            }
          });
        } else {
          if (error && error.message) {
            vscode_1.window.showErrorMessage(error.message);
          }

          _this15.error('Server initialization failed.', error);

          _this15.stop();

          _this15._onReadyCallbacks.reject(error);
        }
      });
    }
  }, {
    key: "_clientGetRootPath",
    value: function _clientGetRootPath() {
      var folders = vscode_1.workspace.workspaceFolders;

      if (!folders || folders.length === 0) {
        return undefined;
      }

      var folder = folders[0];

      if (folder.uri.scheme === 'file') {
        return folder.uri.fsPath;
      }

      return undefined;
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this16 = this;

      this._initializeResult = undefined;

      if (!this._connectionPromise) {
        this.state = ClientState.Stopped;
        return Promise.resolve();
      }

      if (this.state === ClientState.Stopping && this._onStop) {
        return this._onStop;
      }

      this.state = ClientState.Stopping;
      this.cleanUp(false); // unhook listeners

      return this._onStop = this.resolveConnection().then(function (connection) {
        return connection.shutdown().then(function () {
          connection.exit();
          connection.dispose();
          _this16.state = ClientState.Stopped;

          _this16.cleanUpChannel();

          _this16._onStop = undefined;
          _this16._connectionPromise = undefined;
          _this16._resolvedConnection = undefined;
        });
      });
    }
  }, {
    key: "cleanUp",
    value: function cleanUp() {
      var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var diagnostics = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this._listeners) {
        this._listeners.forEach(function (listener) {
          return listener.dispose();
        });

        this._listeners = undefined;
      }

      if (this._providers) {
        this._providers.forEach(function (provider) {
          return provider.dispose();
        });

        this._providers = undefined;
      }

      if (this._syncedDocuments) {
        this._syncedDocuments.clear();
      }

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = this._dynamicFeatures.values()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var handler = _step10.value;
          handler.dispose();
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      if (channel) {
        this.cleanUpChannel();
      }

      if (diagnostics && this._diagnostics) {
        this._diagnostics.dispose();

        this._diagnostics = undefined;
      }
    }
  }, {
    key: "cleanUpChannel",
    value: function cleanUpChannel() {
      if (this._outputChannel && this._disposeOutputChannel) {
        this._outputChannel.dispose();

        this._outputChannel = undefined;
      }
    }
  }, {
    key: "notifyFileEvent",
    value: function notifyFileEvent(event) {
      var _this17 = this;

      this._fileEvents.push(event);

      this._fileEventDelayer.trigger(function () {
        _this17.onReady().then(function () {
          _this17.resolveConnection().then(function (connection) {
            if (_this17.isConnectionActive()) {
              _this17.forceDocumentSync();

              connection.didChangeWatchedFiles({
                changes: _this17._fileEvents
              });
            }

            _this17._fileEvents = [];
          });
        }, function (error) {
          _this17.error("Notify file events failed.", error);
        });
      });
    }
  }, {
    key: "forceDocumentSync",
    value: function forceDocumentSync() {
      this._dynamicFeatures.get(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type.method).forceDelivery();
    }
  }, {
    key: "handleDiagnostics",
    value: function handleDiagnostics(params) {
      var _this18 = this;

      if (!this._diagnostics) {
        return;
      }

      var uri = this._p2c.asUri(params.uri);

      var diagnostics = this._p2c.asDiagnostics(params.diagnostics);

      var middleware = this.clientOptions.middleware.handleDiagnostics;

      if (middleware) {
        middleware(uri, diagnostics, function (uri, diagnostics) {
          return _this18.setDiagnostics(uri, diagnostics);
        });
      } else {
        this.setDiagnostics(uri, diagnostics);
      }
    }
  }, {
    key: "setDiagnostics",
    value: function setDiagnostics(uri, diagnostics) {
      if (!this._diagnostics) {
        return;
      }

      this._diagnostics.set(uri, diagnostics);
    }
  }, {
    key: "createConnection",
    value: function createConnection() {
      var _this19 = this;

      var errorHandler = function errorHandler(error, message, count) {
        _this19.handleConnectionError(error, message, count);
      };

      var closeHandler = function closeHandler() {
        _this19.handleConnectionClosed();
      };

      return this.createMessageTransports(this._clientOptions.stdioEncoding || 'utf8').then(function (transports) {
        return _createConnection(transports.reader, transports.writer, errorHandler, closeHandler);
      });
    }
  }, {
    key: "handleConnectionClosed",
    value: function handleConnectionClosed() {
      // Check whether this is a normal shutdown in progress or the client stopped normally.
      if (this.state === ClientState.Stopping || this.state === ClientState.Stopped) {
        return;
      }

      try {
        if (this._resolvedConnection) {
          this._resolvedConnection.dispose();
        }
      } catch (error) {// Disposing a connection could fail if error cases.
      }

      var action = CloseAction.DoNotRestart;

      try {
        action = this._clientOptions.errorHandler.closed();
      } catch (error) {// Ignore errors coming from the error handler.
      }

      this._connectionPromise = undefined;
      this._resolvedConnection = undefined;

      if (action === CloseAction.DoNotRestart) {
        this.error('Connection to server got closed. Server will not be restarted.');
        this.state = ClientState.Stopped;
        this.cleanUp(false, true);
      } else if (action === CloseAction.Restart) {
        this.info('Connection to server got closed. Server will restart.');
        this.cleanUp(false, false);
        this.state = ClientState.Initial;
        this.start();
      }
    }
  }, {
    key: "handleConnectionError",
    value: function handleConnectionError(error, message, count) {
      var action = this._clientOptions.errorHandler.error(error, message, count);

      if (action === ErrorAction.Shutdown) {
        this.error('Connection to server is erroring. Shutting down server.');
        this.stop();
      }
    }
  }, {
    key: "hookConfigurationChanged",
    value: function hookConfigurationChanged(connection) {
      var _this20 = this;

      vscode_1.workspace.onDidChangeConfiguration(function () {
        _this20.refreshTrace(connection, true);
      });
    }
  }, {
    key: "refreshTrace",
    value: function refreshTrace(connection) {
      var sendNotification = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var config = vscode_1.workspace.getConfiguration(this._id);
      var trace = vscode_languageserver_protocol_1.Trace.Off;
      var traceFormat = vscode_languageserver_protocol_1.TraceFormat.Text;

      if (config) {
        var traceConfig = config.get('trace.server', 'off');

        if (typeof traceConfig === 'string') {
          trace = vscode_languageserver_protocol_1.Trace.fromString(traceConfig);
        } else {
          trace = vscode_languageserver_protocol_1.Trace.fromString(config.get('trace.server.verbosity', 'off'));
          traceFormat = vscode_languageserver_protocol_1.TraceFormat.fromString(config.get('trace.server.format', 'text'));
        }
      }

      this._trace = trace;
      this._traceFormat = traceFormat;
      connection.trace(this._trace, this._tracer, {
        sendNotification: sendNotification,
        traceFormat: this._traceFormat
      });
    }
  }, {
    key: "hookFileEvents",
    value: function hookFileEvents(_connection) {
      var fileEvents = this._clientOptions.synchronize.fileEvents;

      if (!fileEvents) {
        return;
      }

      var watchers;

      if (Is.array(fileEvents)) {
        watchers = fileEvents;
      } else {
        watchers = [fileEvents];
      }

      if (!watchers) {
        return;
      }

      this._dynamicFeatures.get(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type.method).registerRaw(UUID.generateUuid(), watchers);
    }
  }, {
    key: "registerFeatures",
    value: function registerFeatures(features) {
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = features[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var feature = _step11.value;
          this.registerFeature(feature);
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }
    }
  }, {
    key: "registerFeature",
    value: function registerFeature(feature) {
      this._features.push(feature);

      if (DynamicFeature.is(feature)) {
        var messages = feature.messages;

        if (Array.isArray(messages)) {
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = messages[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var message = _step12.value;

              this._method2Message.set(message.method, message);

              this._dynamicFeatures.set(message.method, feature);
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                _iterator12["return"]();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }
        } else {
          this._method2Message.set(messages.method, messages);

          this._dynamicFeatures.set(messages.method, feature);
        }
      }
    }
  }, {
    key: "registerBuiltinFeatures",
    value: function registerBuiltinFeatures() {
      var _this21 = this;

      this.registerFeature(new ConfigurationFeature(this));
      this.registerFeature(new DidOpenTextDocumentFeature(this, this._syncedDocuments));
      this.registerFeature(new DidChangeTextDocumentFeature(this));
      this.registerFeature(new WillSaveFeature(this));
      this.registerFeature(new WillSaveWaitUntilFeature(this));
      this.registerFeature(new DidSaveTextDocumentFeature(this));
      this.registerFeature(new DidCloseTextDocumentFeature(this, this._syncedDocuments));
      this.registerFeature(new FileSystemWatcherFeature(this, function (event) {
        return _this21.notifyFileEvent(event);
      }));
      this.registerFeature(new CompletionItemFeature(this));
      this.registerFeature(new HoverFeature(this));
      this.registerFeature(new SignatureHelpFeature(this));
      this.registerFeature(new DefinitionFeature(this));
      this.registerFeature(new ReferencesFeature(this));
      this.registerFeature(new DocumentHighlightFeature(this));
      this.registerFeature(new DocumentSymbolFeature(this));
      this.registerFeature(new WorkspaceSymbolFeature(this));
      this.registerFeature(new CodeActionFeature(this));
      this.registerFeature(new CodeLensFeature(this));
      this.registerFeature(new DocumentFormattingFeature(this));
      this.registerFeature(new DocumentRangeFormattingFeature(this));
      this.registerFeature(new DocumentOnTypeFormattingFeature(this));
      this.registerFeature(new RenameFeature(this));
      this.registerFeature(new DocumentLinkFeature(this));
      this.registerFeature(new ExecuteCommandFeature(this));
    }
  }, {
    key: "fillInitializeParams",
    value: function fillInitializeParams(params) {
      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = this._features[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var feature = _step13.value;

          if (Is.func(feature.fillInitializeParams)) {
            feature.fillInitializeParams(params);
          }
        }
      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
            _iterator13["return"]();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }
    }
  }, {
    key: "computeClientCapabilities",
    value: function computeClientCapabilities() {
      var result = {};
      ensure(result, 'workspace').applyEdit = true;
      var workspaceEdit = ensure(ensure(result, 'workspace'), 'workspaceEdit');
      workspaceEdit.documentChanges = true;
      workspaceEdit.resourceOperations = [vscode_languageserver_protocol_1.ResourceOperationKind.Create, vscode_languageserver_protocol_1.ResourceOperationKind.Rename, vscode_languageserver_protocol_1.ResourceOperationKind.Delete];
      workspaceEdit.failureHandling = vscode_languageserver_protocol_1.FailureHandlingKind.TextOnlyTransactional;
      var diagnostics = ensure(ensure(result, 'textDocument'), 'publishDiagnostics');
      diagnostics.relatedInformation = true;
      diagnostics.tagSupport = true;
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = this._features[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var feature = _step14.value;
          feature.fillClientCapabilities(result);
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
            _iterator14["return"]();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }

      return result;
    }
  }, {
    key: "initializeFeatures",
    value: function initializeFeatures(_connection) {
      var documentSelector = this._clientOptions.documentSelector;
      var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        for (var _iterator15 = this._features[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var feature = _step15.value;
          feature.initialize(this._capabilities, documentSelector);
        }
      } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
            _iterator15["return"]();
          }
        } finally {
          if (_didIteratorError15) {
            throw _iteratorError15;
          }
        }
      }
    }
  }, {
    key: "handleRegistrationRequest",
    value: function handleRegistrationRequest(params) {
      var _this22 = this;

      return new Promise(function (resolve, reject) {
        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = params.registrations[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var registration = _step16.value;

            var feature = _this22._dynamicFeatures.get(registration.method);

            if (!feature) {
              reject(new Error("No feature implementation for ".concat(registration.method, " found. Registration failed.")));
              return;
            }

            var options = registration.registerOptions || {};
            options.documentSelector = options.documentSelector || _this22._clientOptions.documentSelector;
            var data = {
              id: registration.id,
              registerOptions: options
            };
            feature.register(_this22._method2Message.get(registration.method), data);
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
              _iterator16["return"]();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }

        resolve();
      });
    }
  }, {
    key: "handleUnregistrationRequest",
    value: function handleUnregistrationRequest(params) {
      var _this23 = this;

      return new Promise(function (resolve, reject) {
        var _iteratorNormalCompletion17 = true;
        var _didIteratorError17 = false;
        var _iteratorError17 = undefined;

        try {
          for (var _iterator17 = params.unregisterations[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var unregistration = _step17.value;

            var feature = _this23._dynamicFeatures.get(unregistration.method);

            if (!feature) {
              reject(new Error("No feature implementation for ".concat(unregistration.method, " found. Unregistration failed.")));
              return;
            }

            feature.unregister(unregistration.id);
          }
        } catch (err) {
          _didIteratorError17 = true;
          _iteratorError17 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
              _iterator17["return"]();
            }
          } finally {
            if (_didIteratorError17) {
              throw _iteratorError17;
            }
          }
        }

        ;
        resolve();
      });
    }
  }, {
    key: "handleApplyWorkspaceEdit",
    value: function handleApplyWorkspaceEdit(params) {
      // This is some sort of workaround since the version check should be done by VS Code in the Workspace.applyEdit.
      // However doing it here adds some safety since the server can lag more behind then an extension.
      var workspaceEdit = params.edit;
      var openTextDocuments = new Map();
      vscode_1.workspace.textDocuments.forEach(function (document) {
        return openTextDocuments.set(document.uri.toString(), document);
      });
      var versionMismatch = false;

      if (workspaceEdit.documentChanges) {
        var _iteratorNormalCompletion18 = true;
        var _didIteratorError18 = false;
        var _iteratorError18 = undefined;

        try {
          for (var _iterator18 = workspaceEdit.documentChanges[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var change = _step18.value;

            if (vscode_languageserver_protocol_1.TextDocumentEdit.is(change) && change.textDocument.version && change.textDocument.version >= 0) {
              var textDocument = openTextDocuments.get(change.textDocument.uri);

              if (textDocument && textDocument.version !== change.textDocument.version) {
                versionMismatch = true;
                break;
              }
            }
          }
        } catch (err) {
          _didIteratorError18 = true;
          _iteratorError18 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
              _iterator18["return"]();
            }
          } finally {
            if (_didIteratorError18) {
              throw _iteratorError18;
            }
          }
        }
      }

      if (versionMismatch) {
        return Promise.resolve({
          applied: false
        });
      }

      return vscode_1.workspace.applyEdit(this._p2c.asWorkspaceEdit(params.edit)).then(function (value) {
        return {
          applied: value
        };
      });
    }
  }, {
    key: "logFailedRequest",
    value: function logFailedRequest(type, error) {
      // If we get a request cancel don't log anything.
      if (error instanceof vscode_languageserver_protocol_1.ResponseError && error.code === vscode_languageserver_protocol_1.ErrorCodes.RequestCancelled) {
        return;
      }

      this.error("Request ".concat(type.method, " failed."), error);
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(value) {
      var oldState = this.getPublicState();
      this._state = value;
      var newState = this.getPublicState();

      if (newState !== oldState) {
        this._stateChangeEmitter.fire({
          oldState: oldState,
          newState: newState
        });
      }
    }
  }, {
    key: "initializeResult",
    get: function get() {
      return this._initializeResult;
    }
  }, {
    key: "clientOptions",
    get: function get() {
      return this._clientOptions;
    }
  }, {
    key: "protocol2CodeConverter",
    get: function get() {
      return this._p2c;
    }
  }, {
    key: "code2ProtocolConverter",
    get: function get() {
      return this._c2p;
    }
  }, {
    key: "onTelemetry",
    get: function get() {
      return this._telemetryEmitter.event;
    }
  }, {
    key: "onDidChangeState",
    get: function get() {
      return this._stateChangeEmitter.event;
    }
  }, {
    key: "outputChannel",
    get: function get() {
      if (!this._outputChannel) {
        this._outputChannel = vscode_1.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name);
      }

      return this._outputChannel;
    }
  }, {
    key: "traceOutputChannel",
    get: function get() {
      if (this._traceOutputChannel) {
        return this._traceOutputChannel;
      }

      return this.outputChannel;
    }
  }, {
    key: "diagnostics",
    get: function get() {
      return this._diagnostics;
    }
  }, {
    key: "trace",
    set: function set(value) {
      var _this24 = this;

      this._trace = value;
      this.onReady().then(function () {
        _this24.resolveConnection().then(function (connection) {
          connection.trace(_this24._trace, _this24._tracer, {
            sendNotification: false,
            traceFormat: _this24._traceFormat
          });
        });
      }, function () {});
    }
  }]);

  return BaseLanguageClient;
}();

exports.BaseLanguageClient = BaseLanguageClient;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/codeConverter.js":
/*!****************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/codeConverter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var code = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var proto = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../../../node_modules/vscode-languageclient/lib/utils/is.js");

var protocolCompletionItem_1 = __webpack_require__(/*! ./protocolCompletionItem */ "../../../../node_modules/vscode-languageclient/lib/protocolCompletionItem.js");

var protocolCodeLens_1 = __webpack_require__(/*! ./protocolCodeLens */ "../../../../node_modules/vscode-languageclient/lib/protocolCodeLens.js");

var protocolDocumentLink_1 = __webpack_require__(/*! ./protocolDocumentLink */ "../../../../node_modules/vscode-languageclient/lib/protocolDocumentLink.js");

function createConverter(uriConverter) {
  var nullConverter = function nullConverter(value) {
    return value.toString();
  };

  var _uriConverter = uriConverter || nullConverter;

  function asUri(value) {
    return _uriConverter(value);
  }

  function asTextDocumentIdentifier(textDocument) {
    return {
      uri: _uriConverter(textDocument.uri)
    };
  }

  function asVersionedTextDocumentIdentifier(textDocument) {
    return {
      uri: _uriConverter(textDocument.uri),
      version: textDocument.version
    };
  }

  function asOpenTextDocumentParams(textDocument) {
    return {
      textDocument: {
        uri: _uriConverter(textDocument.uri),
        languageId: textDocument.languageId,
        version: textDocument.version,
        text: textDocument.getText()
      }
    };
  }

  function isTextDocumentChangeEvent(value) {
    var candidate = value;
    return !!candidate.document && !!candidate.contentChanges;
  }

  function isTextDocument(value) {
    var candidate = value;
    return !!candidate.uri && !!candidate.version;
  }

  function asChangeTextDocumentParams(arg) {
    if (isTextDocument(arg)) {
      var result = {
        textDocument: {
          uri: _uriConverter(arg.uri),
          version: arg.version
        },
        contentChanges: [{
          text: arg.getText()
        }]
      };
      return result;
    } else if (isTextDocumentChangeEvent(arg)) {
      var document = arg.document;
      var _result = {
        textDocument: {
          uri: _uriConverter(document.uri),
          version: document.version
        },
        contentChanges: arg.contentChanges.map(function (change) {
          var range = change.range;
          return {
            range: {
              start: {
                line: range.start.line,
                character: range.start.character
              },
              end: {
                line: range.end.line,
                character: range.end.character
              }
            },
            rangeLength: change.rangeLength,
            text: change.text
          };
        })
      };
      return _result;
    } else {
      throw Error('Unsupported text document change parameter');
    }
  }

  function asCloseTextDocumentParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  function asSaveTextDocumentParams(textDocument) {
    var includeContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var result = {
      textDocument: asVersionedTextDocumentIdentifier(textDocument)
    };

    if (includeContent) {
      result.text = textDocument.getText();
    }

    return result;
  }

  function asTextDocumentSaveReason(reason) {
    switch (reason) {
      case code.TextDocumentSaveReason.Manual:
        return proto.TextDocumentSaveReason.Manual;

      case code.TextDocumentSaveReason.AfterDelay:
        return proto.TextDocumentSaveReason.AfterDelay;

      case code.TextDocumentSaveReason.FocusOut:
        return proto.TextDocumentSaveReason.FocusOut;
    }

    return proto.TextDocumentSaveReason.Manual;
  }

  function asWillSaveTextDocumentParams(event) {
    return {
      textDocument: asTextDocumentIdentifier(event.document),
      reason: asTextDocumentSaveReason(event.reason)
    };
  }

  function asTextDocumentPositionParams(textDocument, position) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position)
    };
  }

  function asTriggerKind(triggerKind) {
    switch (triggerKind) {
      case code.CompletionTriggerKind.TriggerCharacter:
        return proto.CompletionTriggerKind.TriggerCharacter;

      case code.CompletionTriggerKind.TriggerForIncompleteCompletions:
        return proto.CompletionTriggerKind.TriggerForIncompleteCompletions;

      default:
        return proto.CompletionTriggerKind.Invoked;
    }
  }

  function asCompletionParams(textDocument, position, context) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: {
        triggerKind: asTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter
      }
    };
  }

  function asWorkerPosition(position) {
    return {
      line: position.line,
      character: position.character
    };
  }

  function asPosition(value) {
    if (value === void 0) {
      return undefined;
    } else if (value === null) {
      return null;
    }

    return {
      line: value.line,
      character: value.character
    };
  }

  function asPositions(value) {
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;
        result.push(asPosition(elem));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return result;
  }

  function asRange(value) {
    if (value === void 0 || value === null) {
      return value;
    }

    return {
      start: asPosition(value.start),
      end: asPosition(value.end)
    };
  }

  function asDiagnosticSeverity(value) {
    switch (value) {
      case code.DiagnosticSeverity.Error:
        return proto.DiagnosticSeverity.Error;

      case code.DiagnosticSeverity.Warning:
        return proto.DiagnosticSeverity.Warning;

      case code.DiagnosticSeverity.Information:
        return proto.DiagnosticSeverity.Information;

      case code.DiagnosticSeverity.Hint:
        return proto.DiagnosticSeverity.Hint;
    }
  }

  function asDiagnosticTags(tags) {
    if (!tags) {
      return undefined;
    }

    var result = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var tag = _step2.value;
        var converted = asDiagnosticTag(tag);

        if (converted !== undefined) {
          result.push(converted);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return result.length > 0 ? result : undefined;
  }

  function asDiagnosticTag(tag) {
    switch (tag) {
      case code.DiagnosticTag.Unnecessary:
        return proto.DiagnosticTag.Unnecessary;

      case code.DiagnosticTag.Deprecated:
        return proto.DiagnosticTag.Deprecated;

      default:
        return undefined;
    }
  }

  function asDiagnostic(item) {
    var result = proto.Diagnostic.create(asRange(item.range), item.message);

    if (Is.number(item.severity)) {
      result.severity = asDiagnosticSeverity(item.severity);
    }

    if (Is.number(item.code) || Is.string(item.code)) {
      result.code = item.code;
    }

    if (Array.isArray(item.tags)) {
      result.tags = asDiagnosticTags(item.tags);
    }

    ;

    if (item.source) {
      result.source = item.source;
    }

    return result;
  }

  function asDiagnostics(items) {
    if (items === void 0 || items === null) {
      return items;
    }

    return items.map(asDiagnostic);
  }

  function asDocumentation(format, documentation) {
    switch (format) {
      case '$string':
        return documentation;

      case proto.MarkupKind.PlainText:
        return {
          kind: format,
          value: documentation
        };

      case proto.MarkupKind.Markdown:
        return {
          kind: format,
          value: documentation.value
        };

      default:
        return "Unsupported Markup content received. Kind is: ".concat(format);
    }
  }

  function asCompletionItemKind(value, original) {
    if (original !== void 0) {
      return original;
    }

    return value + 1;
  }

  function asCompletionItem(item) {
    var result = {
      label: item.label
    };
    var protocolItem = item instanceof protocolCompletionItem_1["default"] ? item : undefined;

    if (item.detail) {
      result.detail = item.detail;
    } // We only send items back we created. So this can't be something else than
    // a string right now.


    if (item.documentation) {
      if (!protocolItem || protocolItem.documentationFormat === '$string') {
        result.documentation = item.documentation;
      } else {
        result.documentation = asDocumentation(protocolItem.documentationFormat, item.documentation);
      }
    }

    if (item.filterText) {
      result.filterText = item.filterText;
    }

    fillPrimaryInsertText(result, item);

    if (Is.number(item.kind)) {
      result.kind = asCompletionItemKind(item.kind, protocolItem && protocolItem.originalItemKind);
    }

    if (item.sortText) {
      result.sortText = item.sortText;
    }

    if (item.additionalTextEdits) {
      result.additionalTextEdits = asTextEdits(item.additionalTextEdits);
    }

    if (item.commitCharacters) {
      result.commitCharacters = item.commitCharacters.slice();
    }

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item.preselect === true || item.preselect === false) {
      result.preselect = item.preselect;
    }

    if (protocolItem) {
      if (protocolItem.data !== void 0) {
        result.data = protocolItem.data;
      }

      if (protocolItem.deprecated === true || protocolItem.deprecated === false) {
        result.deprecated = protocolItem.deprecated;
      }
    }

    return result;
  }

  function fillPrimaryInsertText(target, source) {
    var format = proto.InsertTextFormat.PlainText;
    var text;
    var range = undefined;

    if (source.textEdit) {
      text = source.textEdit.newText;
      range = asRange(source.textEdit.range);
    } else if (source.insertText instanceof code.SnippetString) {
      format = proto.InsertTextFormat.Snippet;
      text = source.insertText.value;
    } else {
      text = source.insertText;
    }

    if (source.range) {
      range = asRange(source.range);
    }

    target.insertTextFormat = format;

    if (source.fromEdit && text && range) {
      target.textEdit = {
        newText: text,
        range: range
      };
    } else {
      target.insertText = text;
    }
  }

  function asTextEdit(edit) {
    return {
      range: asRange(edit.range),
      newText: edit.newText
    };
  }

  function asTextEdits(edits) {
    if (edits === void 0 || edits === null) {
      return edits;
    }

    return edits.map(asTextEdit);
  }

  function asReferenceParams(textDocument, position, options) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: {
        includeDeclaration: options.includeDeclaration
      }
    };
  }

  function asCodeActionContext(context) {
    if (context === void 0 || context === null) {
      return context;
    }

    var only;

    if (context.only && Is.string(context.only.value)) {
      only = [context.only.value];
    }

    return proto.CodeActionContext.create(asDiagnostics(context.diagnostics), only);
  }

  function asCommand(item) {
    var result = proto.Command.create(item.title, item.command);

    if (item.arguments) {
      result.arguments = item.arguments;
    }

    return result;
  }

  function asCodeLens(item) {
    var result = proto.CodeLens.create(asRange(item.range));

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item instanceof protocolCodeLens_1["default"]) {
      if (item.data) {
        result.data = item.data;
      }

      ;
    }

    return result;
  }

  function asFormattingOptions(item) {
    return {
      tabSize: item.tabSize,
      insertSpaces: item.insertSpaces
    };
  }

  function asDocumentSymbolParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  function asCodeLensParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  function asDocumentLink(item) {
    var result = proto.DocumentLink.create(asRange(item.range));

    if (item.target) {
      result.target = asUri(item.target);
    }

    var protocolItem = item instanceof protocolDocumentLink_1["default"] ? item : undefined;

    if (protocolItem && protocolItem.data) {
      result.data = protocolItem.data;
    }

    return result;
  }

  function asDocumentLinkParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  return {
    asUri: asUri,
    asTextDocumentIdentifier: asTextDocumentIdentifier,
    asVersionedTextDocumentIdentifier: asVersionedTextDocumentIdentifier,
    asOpenTextDocumentParams: asOpenTextDocumentParams,
    asChangeTextDocumentParams: asChangeTextDocumentParams,
    asCloseTextDocumentParams: asCloseTextDocumentParams,
    asSaveTextDocumentParams: asSaveTextDocumentParams,
    asWillSaveTextDocumentParams: asWillSaveTextDocumentParams,
    asTextDocumentPositionParams: asTextDocumentPositionParams,
    asCompletionParams: asCompletionParams,
    asWorkerPosition: asWorkerPosition,
    asRange: asRange,
    asPosition: asPosition,
    asPositions: asPositions,
    asDiagnosticSeverity: asDiagnosticSeverity,
    asDiagnosticTag: asDiagnosticTag,
    asDiagnostic: asDiagnostic,
    asDiagnostics: asDiagnostics,
    asCompletionItem: asCompletionItem,
    asTextEdit: asTextEdit,
    asReferenceParams: asReferenceParams,
    asCodeActionContext: asCodeActionContext,
    asCommand: asCommand,
    asCodeLens: asCodeLens,
    asFormattingOptions: asFormattingOptions,
    asDocumentSymbolParams: asDocumentSymbolParams,
    asCodeLensParams: asCodeLensParams,
    asDocumentLink: asDocumentLink,
    asDocumentLinkParams: asDocumentLinkParams
  };
}

exports.createConverter = createConverter;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/colorProvider.js":
/*!****************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/colorProvider.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var ColorProviderFeature =
/*#__PURE__*/
function (_client_1$TextDocumen) {
  _inherits(ColorProviderFeature, _client_1$TextDocumen);

  function ColorProviderFeature(client) {
    _classCallCheck(this, ColorProviderFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColorProviderFeature).call(this, client, vscode_languageserver_protocol_1.DocumentColorRequest.type));
  }

  _createClass(ColorProviderFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'colorProvider').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.colorProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this = this;

      var client = this._client;

      var _provideColorPresentations = function provideColorPresentations(color, context, token) {
        var requestParams = {
          color: color,
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(context.document),
          range: client.code2ProtocolConverter.asRange(context.range)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, requestParams, token).then(_this.asColorPresentations.bind(_this), function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var _provideDocumentColors = function provideDocumentColors(document, token) {
        var requestParams = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, requestParams, token).then(_this.asColorInformations.bind(_this), function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerColorProvider(options.documentSelector, {
        provideColorPresentations: function provideColorPresentations(color, context, token) {
          return middleware.provideColorPresentations ? middleware.provideColorPresentations(color, context, token, _provideColorPresentations) : _provideColorPresentations(color, context, token);
        },
        provideDocumentColors: function provideDocumentColors(document, token) {
          return middleware.provideDocumentColors ? middleware.provideDocumentColors(document, token, _provideDocumentColors) : _provideDocumentColors(document, token);
        }
      });
    }
  }, {
    key: "asColor",
    value: function asColor(color) {
      return new vscode_1.Color(color.red, color.green, color.blue, color.alpha);
    }
  }, {
    key: "asColorInformations",
    value: function asColorInformations(colorInformation) {
      var _this2 = this;

      if (Array.isArray(colorInformation)) {
        return colorInformation.map(function (ci) {
          return new vscode_1.ColorInformation(_this2._client.protocol2CodeConverter.asRange(ci.range), _this2.asColor(ci.color));
        });
      }

      return [];
    }
  }, {
    key: "asColorPresentations",
    value: function asColorPresentations(colorPresentations) {
      var _this3 = this;

      if (Array.isArray(colorPresentations)) {
        return colorPresentations.map(function (cp) {
          var presentation = new vscode_1.ColorPresentation(cp.label);
          presentation.additionalTextEdits = _this3._client.protocol2CodeConverter.asTextEdits(cp.additionalTextEdits);
          presentation.textEdit = _this3._client.protocol2CodeConverter.asTextEdit(cp.textEdit);
          return presentation;
        });
      }

      return [];
    }
  }]);

  return ColorProviderFeature;
}(client_1.TextDocumentFeature);

exports.ColorProviderFeature = ColorProviderFeature;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/configuration.js":
/*!****************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/configuration.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var ConfigurationFeature =
/*#__PURE__*/
function () {
  function ConfigurationFeature(_client) {
    _classCallCheck(this, ConfigurationFeature);

    this._client = _client;
  }

  _createClass(ConfigurationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      capabilities.workspace = capabilities.workspace || {};
      capabilities.workspace.configuration = true;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var client = this._client;
      client.onRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, function (params, token) {
        var configuration = function configuration(params) {
          var result = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = params.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              var resource = item.scopeUri !== void 0 && item.scopeUri !== null ? _this._client.protocol2CodeConverter.asUri(item.scopeUri) : undefined;
              result.push(_this.getConfiguration(resource, item.section !== null ? item.section : undefined));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return result;
        };

        var middleware = client.clientOptions.middleware.workspace;
        return middleware && middleware.configuration ? middleware.configuration(params, token, configuration) : configuration(params, token);
      });
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration(resource, section) {
      var result = null;

      if (section) {
        var index = section.lastIndexOf('.');

        if (index === -1) {
          result = vscode_1.workspace.getConfiguration(undefined, resource).get(section);
        } else {
          var config = vscode_1.workspace.getConfiguration(section.substr(0, index), resource);

          if (config) {
            result = config.get(section.substr(index + 1));
          }
        }
      } else {
        var _config = vscode_1.workspace.getConfiguration(undefined, resource);

        result = {};

        for (var _i = 0, _Object$keys = Object.keys(_config); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (_config.has(key)) {
            result[key] = _config.get(key);
          }
        }
      }

      if (!result) {
        return null;
      }

      return result;
    }
  }]);

  return ConfigurationFeature;
}();

exports.ConfigurationFeature = ConfigurationFeature;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/declaration.js":
/*!**************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/declaration.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var DeclarationFeature =
/*#__PURE__*/
function (_client_1$TextDocumen) {
  _inherits(DeclarationFeature, _client_1$TextDocumen);

  function DeclarationFeature(client) {
    _classCallCheck(this, DeclarationFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(DeclarationFeature).call(this, client, vscode_languageserver_protocol_1.DeclarationRequest.type));
  }

  _createClass(DeclarationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var declarationSupport = ensure(ensure(capabilites, 'textDocument'), 'declaration');
      declarationSupport.dynamicRegistration = true;
      declarationSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.declarationProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideDeclaration = function provideDeclaration(document, position, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDeclarationResult, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerDeclarationProvider(options.documentSelector, {
        provideDeclaration: function provideDeclaration(document, position, token) {
          return middleware.provideDeclaration ? middleware.provideDeclaration(document, position, token, _provideDeclaration) : _provideDeclaration(document, position, token);
        }
      });
    }
  }]);

  return DeclarationFeature;
}(client_1.TextDocumentFeature);

exports.DeclarationFeature = DeclarationFeature;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/foldingRange.js":
/*!***************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/foldingRange.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var FoldingRangeFeature =
/*#__PURE__*/
function (_client_1$TextDocumen) {
  _inherits(FoldingRangeFeature, _client_1$TextDocumen);

  function FoldingRangeFeature(client) {
    _classCallCheck(this, FoldingRangeFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(FoldingRangeFeature).call(this, client, vscode_languageserver_protocol_1.FoldingRangeRequest.type));
  }

  _createClass(FoldingRangeFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var capability = ensure(ensure(capabilites, 'textDocument'), 'foldingRange');
      capability.dynamicRegistration = true;
      capability.rangeLimit = 5000;
      capability.lineFoldingOnly = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.foldingRangeProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this = this;

      var client = this._client;

      var _provideFoldingRanges = function provideFoldingRanges(document, _, token) {
        var requestParams = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document)
        };
        return client.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, requestParams, token).then(_this.asFoldingRanges.bind(_this), function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerFoldingRangeProvider(options.documentSelector, {
        provideFoldingRanges: function provideFoldingRanges(document, context, token) {
          return middleware.provideFoldingRanges ? middleware.provideFoldingRanges(document, context, token, _provideFoldingRanges) : _provideFoldingRanges(document, context, token);
        }
      });
    }
  }, {
    key: "asFoldingRangeKind",
    value: function asFoldingRangeKind(kind) {
      if (kind) {
        switch (kind) {
          case vscode_languageserver_protocol_1.FoldingRangeKind.Comment:
            return vscode_1.FoldingRangeKind.Comment;

          case vscode_languageserver_protocol_1.FoldingRangeKind.Imports:
            return vscode_1.FoldingRangeKind.Imports;

          case vscode_languageserver_protocol_1.FoldingRangeKind.Region:
            return vscode_1.FoldingRangeKind.Region;
        }
      }

      return void 0;
    }
  }, {
    key: "asFoldingRanges",
    value: function asFoldingRanges(foldingRanges) {
      var _this2 = this;

      if (Array.isArray(foldingRanges)) {
        return foldingRanges.map(function (r) {
          return new vscode_1.FoldingRange(r.startLine, r.endLine, _this2.asFoldingRangeKind(r.kind));
        });
      }

      return [];
    }
  }]);

  return FoldingRangeFeature;
}(client_1.TextDocumentFeature);

exports.FoldingRangeFeature = FoldingRangeFeature;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/implementation.js":
/*!*****************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/implementation.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var ImplementationFeature =
/*#__PURE__*/
function (_client_1$TextDocumen) {
  _inherits(ImplementationFeature, _client_1$TextDocumen);

  function ImplementationFeature(client) {
    _classCallCheck(this, ImplementationFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImplementationFeature).call(this, client, vscode_languageserver_protocol_1.ImplementationRequest.type));
  }

  _createClass(ImplementationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var implementationSupport = ensure(ensure(capabilites, 'textDocument'), 'implementation');
      implementationSupport.dynamicRegistration = true;
      implementationSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.implementationProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideImplementation = function provideImplementation(document, position, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDefinitionResult, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerImplementationProvider(options.documentSelector, {
        provideImplementation: function provideImplementation(document, position, token) {
          return middleware.provideImplementation ? middleware.provideImplementation(document, position, token, _provideImplementation) : _provideImplementation(document, position, token);
        }
      });
    }
  }]);

  return ImplementationFeature;
}(client_1.TextDocumentFeature);

exports.ImplementationFeature = ImplementationFeature;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/progressPart.js":
/*!***************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/progressPart.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../../../../node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../../../node_modules/vscode-languageclient/lib/utils/is.js");

var ProgressPart =
/*#__PURE__*/
function () {
  function ProgressPart(_client, _token) {
    var _this = this;

    _classCallCheck(this, ProgressPart);

    this._client = _client;
    this._token = _token;
    this._reported = 0;
    this._disposable = this._client.onProgress(vscode_languageserver_protocol_1.Proposed.WorkDoneProgress.type, this._token, function (value) {
      switch (value.kind) {
        case 'begin':
          _this.begin(value);

          break;

        case 'report':
          _this.report(value);

          break;

        case 'done':
          _this.done();

          break;
      }
    });
  }

  _createClass(ProgressPart, [{
    key: "begin",
    value: function begin(params) {
      var _this2 = this;

      var location = params.cancellable ? vscode_1.ProgressLocation.Notification : vscode_1.ProgressLocation.Window;
      vscode_1.window.withProgress({
        location: location,
        cancellable: params.cancellable,
        title: params.title
      }, function (progress, cancellationToken) {
        return __awaiter(_this2, void 0, void 0,
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee() {
          var _this3 = this;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this._progress = progress;
                  this._infinite = params.percentage === undefined;
                  this._cancellationToken = cancellationToken;

                  this._cancellationToken.onCancellationRequested(function () {
                    _this3._client.sendNotification(vscode_languageserver_protocol_1.Proposed.WorkDoneProgressCancelNotification.type, {
                      token: _this3._token
                    });
                  });

                  this.report(params);
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this3._resolve = resolve;
                    _this3._reject = reject;
                  }));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      });
    }
  }, {
    key: "report",
    value: function report(params) {
      if (this._infinite && Is.string(params.message)) {
        this._progress.report({
          message: params.message
        });
      } else if (Is.number(params.percentage)) {
        var percentage = Math.max(0, Math.min(params.percentage, 100));
        var delta = Math.max(0, percentage - this._reported);

        this._progress.report({
          message: params.message,
          increment: delta
        });

        this._reported += delta;
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._disposable) {
        this._disposable.dispose();

        this._disposable = undefined;
      }

      if (this._reject) {
        this._reject();

        this._resolve = undefined;
        this._reject = undefined;
      }
    }
  }, {
    key: "done",
    value: function done() {
      if (this._disposable) {
        this._disposable.dispose();

        this._disposable = undefined;
      }

      if (this._resolve) {
        this._resolve();

        this._resolve = undefined;
        this._reject = undefined;
      }
    }
  }]);

  return ProgressPart;
}();

exports.ProgressPart = ProgressPart;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/protocolCodeLens.js":
/*!*******************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/protocolCodeLens.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var code = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ProtocolCodeLens =
/*#__PURE__*/
function (_code$CodeLens) {
  _inherits(ProtocolCodeLens, _code$CodeLens);

  function ProtocolCodeLens(range) {
    _classCallCheck(this, ProtocolCodeLens);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProtocolCodeLens).call(this, range));
  }

  return ProtocolCodeLens;
}(code.CodeLens);

exports["default"] = ProtocolCodeLens;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/protocolCompletionItem.js":
/*!*************************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/protocolCompletionItem.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var code = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ProtocolCompletionItem =
/*#__PURE__*/
function (_code$CompletionItem) {
  _inherits(ProtocolCompletionItem, _code$CompletionItem);

  function ProtocolCompletionItem(label) {
    _classCallCheck(this, ProtocolCompletionItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProtocolCompletionItem).call(this, label));
  }

  return ProtocolCompletionItem;
}(code.CompletionItem);

exports["default"] = ProtocolCompletionItem;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/protocolConverter.js":
/*!********************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/protocolConverter.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var code = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ls = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../../../node_modules/vscode-languageclient/lib/utils/is.js");

var protocolCompletionItem_1 = __webpack_require__(/*! ./protocolCompletionItem */ "../../../../node_modules/vscode-languageclient/lib/protocolCompletionItem.js");

var protocolCodeLens_1 = __webpack_require__(/*! ./protocolCodeLens */ "../../../../node_modules/vscode-languageclient/lib/protocolCodeLens.js");

var protocolDocumentLink_1 = __webpack_require__(/*! ./protocolDocumentLink */ "../../../../node_modules/vscode-languageclient/lib/protocolDocumentLink.js");

var CodeBlock;

(function (CodeBlock) {
  function is(value) {
    var candidate = value;
    return candidate && Is.string(candidate.language) && Is.string(candidate.value);
  }

  CodeBlock.is = is;
})(CodeBlock || (CodeBlock = {}));

function createConverter(uriConverter) {
  var nullConverter = function nullConverter(value) {
    return code.Uri.parse(value);
  };

  var _uriConverter = uriConverter || nullConverter;

  function asUri(value) {
    return _uriConverter(value);
  }

  function asDiagnostics(diagnostics) {
    return diagnostics.map(asDiagnostic);
  }

  function asDiagnostic(diagnostic) {
    var result = new code.Diagnostic(asRange(diagnostic.range), diagnostic.message, asDiagnosticSeverity(diagnostic.severity));

    if (Is.number(diagnostic.code) || Is.string(diagnostic.code)) {
      result.code = diagnostic.code;
    }

    if (diagnostic.source) {
      result.source = diagnostic.source;
    }

    if (diagnostic.relatedInformation) {
      result.relatedInformation = asRelatedInformation(diagnostic.relatedInformation);
    }

    if (Array.isArray(diagnostic.tags)) {
      result.tags = asDiagnosticTags(diagnostic.tags);
    }

    return result;
  }

  function asRelatedInformation(relatedInformation) {
    return relatedInformation.map(asDiagnosticRelatedInformation);
  }

  function asDiagnosticRelatedInformation(information) {
    return new code.DiagnosticRelatedInformation(asLocation(information.location), information.message);
  }

  function asDiagnosticTags(tags) {
    if (!tags) {
      return undefined;
    }

    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tag = _step.value;
        var converted = asDiagnosticTag(tag);

        if (converted !== undefined) {
          result.push(converted);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return result.length > 0 ? result : undefined;
  }

  function asDiagnosticTag(tag) {
    switch (tag) {
      case ls.DiagnosticTag.Unnecessary:
        return code.DiagnosticTag.Unnecessary;

      case ls.DiagnosticTag.Deprecated:
        return code.DiagnosticTag.Deprecated;

      default:
        return undefined;
    }
  }

  function asPosition(value) {
    if (!value) {
      return undefined;
    }

    return new code.Position(value.line, value.character);
  }

  function asRange(value) {
    if (!value) {
      return undefined;
    }

    return new code.Range(asPosition(value.start), asPosition(value.end));
  }

  function asDiagnosticSeverity(value) {
    if (value === void 0 || value === null) {
      return code.DiagnosticSeverity.Error;
    }

    switch (value) {
      case ls.DiagnosticSeverity.Error:
        return code.DiagnosticSeverity.Error;

      case ls.DiagnosticSeverity.Warning:
        return code.DiagnosticSeverity.Warning;

      case ls.DiagnosticSeverity.Information:
        return code.DiagnosticSeverity.Information;

      case ls.DiagnosticSeverity.Hint:
        return code.DiagnosticSeverity.Hint;
    }

    return code.DiagnosticSeverity.Error;
  }

  function asHoverContent(value) {
    if (Is.string(value)) {
      return new code.MarkdownString(value);
    } else if (CodeBlock.is(value)) {
      var result = new code.MarkdownString();
      return result.appendCodeblock(value.value, value.language);
    } else if (Array.isArray(value)) {
      var _result = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;
          var item = new code.MarkdownString();

          if (CodeBlock.is(element)) {
            item.appendCodeblock(element.value, element.language);
          } else {
            item.appendMarkdown(element);
          }

          _result.push(item);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return _result;
    } else {
      var _result2;

      switch (value.kind) {
        case ls.MarkupKind.Markdown:
          return new code.MarkdownString(value.value);

        case ls.MarkupKind.PlainText:
          _result2 = new code.MarkdownString();

          _result2.appendText(value.value);

          return _result2;

        default:
          _result2 = new code.MarkdownString();

          _result2.appendText("Unsupported Markup content received. Kind is: ".concat(value.kind));

          return _result2;
      }
    }
  }

  function asDocumentation(value) {
    if (Is.string(value)) {
      return value;
    } else {
      switch (value.kind) {
        case ls.MarkupKind.Markdown:
          return new code.MarkdownString(value.value);

        case ls.MarkupKind.PlainText:
          return value.value;

        default:
          return "Unsupported Markup content received. Kind is: ".concat(value.kind);
      }
    }
  }

  function asHover(hover) {
    if (!hover) {
      return undefined;
    }

    return new code.Hover(asHoverContent(hover.contents), asRange(hover.range));
  }

  function asCompletionResult(result) {
    if (!result) {
      return undefined;
    }

    if (Array.isArray(result)) {
      var items = result;
      return items.map(asCompletionItem);
    }

    var list = result;
    return new code.CompletionList(list.items.map(asCompletionItem), list.isIncomplete);
  }

  function asCompletionItemKind(value) {
    // Protocol item kind is 1 based, codes item kind is zero based.
    if (ls.CompletionItemKind.Text <= value && value <= ls.CompletionItemKind.TypeParameter) {
      return [value - 1, undefined];
    }

    ;
    return [code.CompletionItemKind.Text, value];
  }

  function asCompletionItem(item) {
    var result = new protocolCompletionItem_1["default"](item.label);

    if (item.detail) {
      result.detail = item.detail;
    }

    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
      result.documentationFormat = Is.string(item.documentation) ? '$string' : item.documentation.kind;
    }

    ;

    if (item.filterText) {
      result.filterText = item.filterText;
    }

    var insertText = asCompletionInsertText(item);

    if (insertText) {
      result.insertText = insertText.text;
      result.range = insertText.range;
      result.fromEdit = insertText.fromEdit;
    }

    if (Is.number(item.kind)) {
      var _asCompletionItemKind = asCompletionItemKind(item.kind),
          _asCompletionItemKind2 = _slicedToArray(_asCompletionItemKind, 2),
          itemKind = _asCompletionItemKind2[0],
          original = _asCompletionItemKind2[1];

      result.kind = itemKind;

      if (original) {
        result.originalItemKind = original;
      }
    }

    if (item.sortText) {
      result.sortText = item.sortText;
    }

    if (item.additionalTextEdits) {
      result.additionalTextEdits = asTextEdits(item.additionalTextEdits);
    }

    if (Is.stringArray(item.commitCharacters)) {
      result.commitCharacters = item.commitCharacters.slice();
    }

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item.deprecated === true || item.deprecated === false) {
      result.deprecated = item.deprecated;
    }

    if (item.preselect === true || item.preselect === false) {
      result.preselect = item.preselect;
    }

    if (item.data !== void 0) {
      result.data = item.data;
    }

    return result;
  }

  function asCompletionInsertText(item) {
    if (item.textEdit) {
      if (item.insertTextFormat === ls.InsertTextFormat.Snippet) {
        return {
          text: new code.SnippetString(item.textEdit.newText),
          range: asRange(item.textEdit.range),
          fromEdit: true
        };
      } else {
        return {
          text: item.textEdit.newText,
          range: asRange(item.textEdit.range),
          fromEdit: true
        };
      }
    } else if (item.insertText) {
      if (item.insertTextFormat === ls.InsertTextFormat.Snippet) {
        return {
          text: new code.SnippetString(item.insertText),
          fromEdit: false
        };
      } else {
        return {
          text: item.insertText,
          fromEdit: false
        };
      }
    } else {
      return undefined;
    }
  }

  function asTextEdit(edit) {
    if (!edit) {
      return undefined;
    }

    return new code.TextEdit(asRange(edit.range), edit.newText);
  }

  function asTextEdits(items) {
    if (!items) {
      return undefined;
    }

    return items.map(asTextEdit);
  }

  function asSignatureHelp(item) {
    if (!item) {
      return undefined;
    }

    var result = new code.SignatureHelp();

    if (Is.number(item.activeSignature)) {
      result.activeSignature = item.activeSignature;
    } else {
      // activeSignature was optional in the past
      result.activeSignature = 0;
    }

    if (Is.number(item.activeParameter)) {
      result.activeParameter = item.activeParameter;
    } else {
      // activeParameter was optional in the past
      result.activeParameter = 0;
    }

    if (item.signatures) {
      result.signatures = asSignatureInformations(item.signatures);
    }

    return result;
  }

  function asSignatureInformations(items) {
    return items.map(asSignatureInformation);
  }

  function asSignatureInformation(item) {
    var result = new code.SignatureInformation(item.label);

    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
    }

    if (item.parameters) {
      result.parameters = asParameterInformations(item.parameters);
    }

    return result;
  }

  function asParameterInformations(item) {
    return item.map(asParameterInformation);
  }

  function asParameterInformation(item) {
    var result = new code.ParameterInformation(item.label);

    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
    }

    ;
    return result;
  }

  function asLocation(item) {
    if (!item) {
      return undefined;
    }

    return new code.Location(_uriConverter(item.uri), asRange(item.range));
  }

  function asDeclarationResult(item) {
    if (!item) {
      return undefined;
    }

    return asLocationResult(item);
  }

  function asDefinitionResult(item) {
    if (!item) {
      return undefined;
    }

    return asLocationResult(item);
  }

  function asLocationLink(item) {
    if (!item) {
      return undefined;
    }

    var result = {
      targetUri: _uriConverter(item.targetUri),
      targetRange: asRange(item.targetSelectionRange),
      originSelectionRange: asRange(item.originSelectionRange),
      targetSelectionRange: asRange(item.targetSelectionRange)
    };

    if (!result.targetSelectionRange) {
      throw new Error("targetSelectionRange must not be undefined or null");
    }

    return result;
  }

  function asLocationResult(item) {
    if (!item) {
      return undefined;
    }

    if (Is.array(item)) {
      if (item.length === 0) {
        return [];
      } else if (ls.LocationLink.is(item[0])) {
        var links = item;
        return links.map(function (link) {
          return asLocationLink(link);
        });
      } else {
        var locations = item;
        return locations.map(function (location) {
          return asLocation(location);
        });
      }
    } else if (ls.LocationLink.is(item)) {
      return [asLocationLink(item)];
    } else {
      return asLocation(item);
    }
  }

  function asReferences(values) {
    if (!values) {
      return undefined;
    }

    return values.map(function (location) {
      return asLocation(location);
    });
  }

  function asDocumentHighlights(values) {
    if (!values) {
      return undefined;
    }

    return values.map(asDocumentHighlight);
  }

  function asDocumentHighlight(item) {
    var result = new code.DocumentHighlight(asRange(item.range));

    if (Is.number(item.kind)) {
      result.kind = asDocumentHighlightKind(item.kind);
    }

    return result;
  }

  function asDocumentHighlightKind(item) {
    switch (item) {
      case ls.DocumentHighlightKind.Text:
        return code.DocumentHighlightKind.Text;

      case ls.DocumentHighlightKind.Read:
        return code.DocumentHighlightKind.Read;

      case ls.DocumentHighlightKind.Write:
        return code.DocumentHighlightKind.Write;
    }

    return code.DocumentHighlightKind.Text;
  }

  function asSymbolInformations(values, uri) {
    if (!values) {
      return undefined;
    }

    return values.map(function (information) {
      return asSymbolInformation(information, uri);
    });
  }

  function asSymbolKind(item) {
    if (item <= ls.SymbolKind.TypeParameter) {
      // Symbol kind is one based in the protocol and zero based in code.
      return item - 1;
    }

    return code.SymbolKind.Property;
  }

  function asSymbolInformation(item, uri) {
    // Symbol kind is one based in the protocol and zero based in code.
    var result = new code.SymbolInformation(item.name, asSymbolKind(item.kind), asRange(item.location.range), item.location.uri ? _uriConverter(item.location.uri) : uri);

    if (item.containerName) {
      result.containerName = item.containerName;
    }

    return result;
  }

  function asDocumentSymbols(values) {
    if (values === void 0 || values === null) {
      return undefined;
    }

    return values.map(asDocumentSymbol);
  }

  function asDocumentSymbol(value) {
    var result = new code.DocumentSymbol(value.name, value.detail || '', asSymbolKind(value.kind), asRange(value.range), asRange(value.selectionRange));

    if (value.children !== void 0 && value.children.length > 0) {
      var children = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = value.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var child = _step3.value;
          children.push(asDocumentSymbol(child));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      result.children = children;
    }

    return result;
  }

  function asCommand(item) {
    var result = {
      title: item.title,
      command: item.command
    };

    if (item.arguments) {
      result.arguments = item.arguments;
    }

    return result;
  }

  function asCommands(items) {
    if (!items) {
      return undefined;
    }

    return items.map(asCommand);
  }

  var kindMapping = new Map();
  kindMapping.set(ls.CodeActionKind.Empty, code.CodeActionKind.Empty);
  kindMapping.set(ls.CodeActionKind.QuickFix, code.CodeActionKind.QuickFix);
  kindMapping.set(ls.CodeActionKind.Refactor, code.CodeActionKind.Refactor);
  kindMapping.set(ls.CodeActionKind.RefactorExtract, code.CodeActionKind.RefactorExtract);
  kindMapping.set(ls.CodeActionKind.RefactorInline, code.CodeActionKind.RefactorInline);
  kindMapping.set(ls.CodeActionKind.RefactorRewrite, code.CodeActionKind.RefactorRewrite);
  kindMapping.set(ls.CodeActionKind.Source, code.CodeActionKind.Source);
  kindMapping.set(ls.CodeActionKind.SourceOrganizeImports, code.CodeActionKind.SourceOrganizeImports);

  function asCodeActionKind(item) {
    if (item === void 0 || item === null) {
      return undefined;
    }

    var result = kindMapping.get(item);

    if (result) {
      return result;
    }

    var parts = item.split('.');
    result = code.CodeActionKind.Empty;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = parts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var part = _step4.value;
        result = result.append(part);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return result;
  }

  function asCodeActionKinds(items) {
    if (items === void 0 || items === null) {
      return undefined;
    }

    return items.map(function (kind) {
      return asCodeActionKind(kind);
    });
  }

  function asCodeAction(item) {
    if (item === void 0 || item === null) {
      return undefined;
    }

    var result = new code.CodeAction(item.title);

    if (item.kind !== void 0) {
      result.kind = asCodeActionKind(item.kind);
    }

    if (item.diagnostics) {
      result.diagnostics = asDiagnostics(item.diagnostics);
    }

    if (item.edit) {
      result.edit = asWorkspaceEdit(item.edit);
    }

    if (item.command) {
      result.command = asCommand(item.command);
    }

    return result;
  }

  function asCodeLens(item) {
    if (!item) {
      return undefined;
    }

    var result = new protocolCodeLens_1["default"](asRange(item.range));

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item.data !== void 0 && item.data !== null) {
      result.data = item.data;
    }

    return result;
  }

  function asCodeLenses(items) {
    if (!items) {
      return undefined;
    }

    return items.map(function (codeLens) {
      return asCodeLens(codeLens);
    });
  }

  function asWorkspaceEdit(item) {
    if (!item) {
      return undefined;
    }

    var result = new code.WorkspaceEdit();

    if (item.documentChanges) {
      item.documentChanges.forEach(function (change) {
        if (ls.CreateFile.is(change)) {
          result.createFile(_uriConverter(change.uri), change.options);
        } else if (ls.RenameFile.is(change)) {
          result.renameFile(_uriConverter(change.oldUri), _uriConverter(change.newUri), change.options);
        } else if (ls.DeleteFile.is(change)) {
          result.deleteFile(_uriConverter(change.uri), change.options);
        } else if (ls.TextDocumentEdit.is(change)) {
          result.set(_uriConverter(change.textDocument.uri), asTextEdits(change.edits));
        } else {
          console.error("Unknown workspace edit change received:\n".concat(JSON.stringify(change, undefined, 4)));
        }
      });
    } else if (item.changes) {
      Object.keys(item.changes).forEach(function (key) {
        result.set(_uriConverter(key), asTextEdits(item.changes[key]));
      });
    }

    return result;
  }

  function asDocumentLink(item) {
    var range = asRange(item.range);
    var target = item.target ? asUri(item.target) : undefined; // target must be optional in DocumentLink

    var link = new protocolDocumentLink_1["default"](range, target);

    if (item.data !== void 0 && item.data !== null) {
      link.data = item.data;
    }

    return link;
  }

  function asDocumentLinks(items) {
    if (!items) {
      return undefined;
    }

    return items.map(asDocumentLink);
  }

  function asColor(color) {
    return new code.Color(color.red, color.green, color.blue, color.alpha);
  }

  function asColorInformation(ci) {
    return new code.ColorInformation(asRange(ci.range), asColor(ci.color));
  }

  function asColorInformations(colorInformation) {
    if (Array.isArray(colorInformation)) {
      return colorInformation.map(asColorInformation);
    }

    return undefined;
  }

  function asColorPresentation(cp) {
    var presentation = new code.ColorPresentation(cp.label);
    presentation.additionalTextEdits = asTextEdits(cp.additionalTextEdits);

    if (cp.textEdit) {
      presentation.textEdit = asTextEdit(cp.textEdit);
    }

    return presentation;
  }

  function asColorPresentations(colorPresentations) {
    if (Array.isArray(colorPresentations)) {
      return colorPresentations.map(asColorPresentation);
    }

    return undefined;
  }

  function asFoldingRangeKind(kind) {
    if (kind) {
      switch (kind) {
        case ls.FoldingRangeKind.Comment:
          return code.FoldingRangeKind.Comment;

        case ls.FoldingRangeKind.Imports:
          return code.FoldingRangeKind.Imports;

        case ls.FoldingRangeKind.Region:
          return code.FoldingRangeKind.Region;
      }
    }

    return void 0;
  }

  function asFoldingRange(r) {
    return new code.FoldingRange(r.startLine, r.endLine, asFoldingRangeKind(r.kind));
  }

  function asFoldingRanges(foldingRanges) {
    if (Array.isArray(foldingRanges)) {
      return foldingRanges.map(asFoldingRange);
    }

    return void 0;
  }

  function asSelectionRange(selectionRange) {
    return new code.SelectionRange(asRange(selectionRange.range), selectionRange.parent ? asSelectionRange(selectionRange.parent) : undefined);
  }

  function asSelectionRanges(selectionRanges) {
    if (!Array.isArray(selectionRanges)) {
      return [];
    }

    var result = [];
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = selectionRanges[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var range = _step5.value;
        result.push(asSelectionRange(range));
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return result;
  }

  return {
    asUri: asUri,
    asDiagnostics: asDiagnostics,
    asDiagnostic: asDiagnostic,
    asRange: asRange,
    asPosition: asPosition,
    asDiagnosticSeverity: asDiagnosticSeverity,
    asDiagnosticTag: asDiagnosticTag,
    asHover: asHover,
    asCompletionResult: asCompletionResult,
    asCompletionItem: asCompletionItem,
    asTextEdit: asTextEdit,
    asTextEdits: asTextEdits,
    asSignatureHelp: asSignatureHelp,
    asSignatureInformations: asSignatureInformations,
    asSignatureInformation: asSignatureInformation,
    asParameterInformations: asParameterInformations,
    asParameterInformation: asParameterInformation,
    asDeclarationResult: asDeclarationResult,
    asDefinitionResult: asDefinitionResult,
    asLocation: asLocation,
    asReferences: asReferences,
    asDocumentHighlights: asDocumentHighlights,
    asDocumentHighlight: asDocumentHighlight,
    asDocumentHighlightKind: asDocumentHighlightKind,
    asSymbolKind: asSymbolKind,
    asSymbolInformations: asSymbolInformations,
    asSymbolInformation: asSymbolInformation,
    asDocumentSymbols: asDocumentSymbols,
    asDocumentSymbol: asDocumentSymbol,
    asCommand: asCommand,
    asCommands: asCommands,
    asCodeAction: asCodeAction,
    asCodeActionKind: asCodeActionKind,
    asCodeActionKinds: asCodeActionKinds,
    asCodeLens: asCodeLens,
    asCodeLenses: asCodeLenses,
    asWorkspaceEdit: asWorkspaceEdit,
    asDocumentLink: asDocumentLink,
    asDocumentLinks: asDocumentLinks,
    asFoldingRangeKind: asFoldingRangeKind,
    asFoldingRange: asFoldingRange,
    asFoldingRanges: asFoldingRanges,
    asColor: asColor,
    asColorInformation: asColorInformation,
    asColorInformations: asColorInformations,
    asColorPresentation: asColorPresentation,
    asColorPresentations: asColorPresentations,
    asSelectionRange: asSelectionRange,
    asSelectionRanges: asSelectionRanges
  };
}

exports.createConverter = createConverter;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/protocolDocumentLink.js":
/*!***********************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/protocolDocumentLink.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var code = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ProtocolDocumentLink =
/*#__PURE__*/
function (_code$DocumentLink) {
  _inherits(ProtocolDocumentLink, _code$DocumentLink);

  function ProtocolDocumentLink(range, target) {
    _classCallCheck(this, ProtocolDocumentLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProtocolDocumentLink).call(this, range, target));
  }

  return ProtocolDocumentLink;
}(code.DocumentLink);

exports["default"] = ProtocolDocumentLink;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/typeDefinition.js":
/*!*****************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/typeDefinition.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var TypeDefinitionFeature =
/*#__PURE__*/
function (_client_1$TextDocumen) {
  _inherits(TypeDefinitionFeature, _client_1$TextDocumen);

  function TypeDefinitionFeature(client) {
    _classCallCheck(this, TypeDefinitionFeature);

    return _possibleConstructorReturn(this, _getPrototypeOf(TypeDefinitionFeature).call(this, client, vscode_languageserver_protocol_1.TypeDefinitionRequest.type));
  }

  _createClass(TypeDefinitionFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'typeDefinition').dynamicRegistration = true;
      var typeDefinitionSupport = ensure(ensure(capabilites, 'textDocument'), 'typeDefinition');
      typeDefinitionSupport.dynamicRegistration = true;
      typeDefinitionSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.typeDefinitionProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var client = this._client;

      var _provideTypeDefinition = function provideTypeDefinition(document, position, token) {
        return client.sendRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDefinitionResult, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, error);
          return Promise.resolve(null);
        });
      };

      var middleware = client.clientOptions.middleware;
      return vscode_1.languages.registerTypeDefinitionProvider(options.documentSelector, {
        provideTypeDefinition: function provideTypeDefinition(document, position, token) {
          return middleware.provideTypeDefinition ? middleware.provideTypeDefinition(document, position, token, _provideTypeDefinition) : _provideTypeDefinition(document, position, token);
        }
      });
    }
  }]);

  return TypeDefinitionFeature;
}(client_1.TextDocumentFeature);

exports.TypeDefinitionFeature = TypeDefinitionFeature;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/utils/async.js":
/*!**************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/utils/async.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Delayer =
/*#__PURE__*/
function () {
  function Delayer(defaultDelay) {
    _classCallCheck(this, Delayer);

    this.defaultDelay = defaultDelay;
    this.timeout = undefined;
    this.completionPromise = undefined;
    this.onSuccess = undefined;
    this.task = undefined;
  }

  _createClass(Delayer, [{
    key: "trigger",
    value: function trigger(task) {
      var _this = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultDelay;
      this.task = task;

      if (delay >= 0) {
        this.cancelTimeout();
      }

      if (!this.completionPromise) {
        this.completionPromise = new Promise(function (resolve) {
          _this.onSuccess = resolve;
        }).then(function () {
          _this.completionPromise = undefined;
          _this.onSuccess = undefined;

          var result = _this.task();

          _this.task = undefined;
          return result;
        });
      }

      if (delay >= 0 || this.timeout === void 0) {
        this.timeout = setTimeout(function () {
          _this.timeout = undefined;

          _this.onSuccess(undefined);
        }, delay >= 0 ? delay : this.defaultDelay);
      }

      return this.completionPromise;
    }
  }, {
    key: "forceDelivery",
    value: function forceDelivery() {
      if (!this.completionPromise) {
        return undefined;
      }

      this.cancelTimeout();
      var result = this.task();
      this.completionPromise = undefined;
      this.onSuccess = undefined;
      this.task = undefined;
      return result;
    }
  }, {
    key: "isTriggered",
    value: function isTriggered() {
      return this.timeout !== void 0;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.cancelTimeout();
      this.completionPromise = undefined;
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      if (this.timeout !== void 0) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
    }
  }]);

  return Delayer;
}();

exports.Delayer = Delayer;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/utils/is.js":
/*!***********************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/utils/is.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _boolean(value) {
  return value === true || value === false;
}

exports["boolean"] = _boolean;

function string(value) {
  return typeof value === 'string' || value instanceof String;
}

exports.string = string;

function number(value) {
  return typeof value === 'number' || value instanceof Number;
}

exports.number = number;

function error(value) {
  return value instanceof Error;
}

exports.error = error;

function func(value) {
  return typeof value === 'function';
}

exports.func = func;

function array(value) {
  return Array.isArray(value);
}

exports.array = array;

function stringArray(value) {
  return array(value) && value.every(function (elem) {
    return string(elem);
  });
}

exports.stringArray = stringArray;

function typedArray(value, check) {
  return Array.isArray(value) && value.every(check);
}

exports.typedArray = typedArray;

function thenable(value) {
  return value && func(value.then);
}

exports.thenable = thenable;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/utils/uuid.js":
/*!*************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/utils/uuid.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ValueUUID =
/*#__PURE__*/
function () {
  function ValueUUID(_value) {
    _classCallCheck(this, ValueUUID);

    this._value = _value; // empty
  }

  _createClass(ValueUUID, [{
    key: "asHex",
    value: function asHex() {
      return this._value;
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return this.asHex() === other.asHex();
    }
  }]);

  return ValueUUID;
}();

var V4UUID =
/*#__PURE__*/
function (_ValueUUID) {
  _inherits(V4UUID, _ValueUUID);

  function V4UUID() {
    _classCallCheck(this, V4UUID);

    return _possibleConstructorReturn(this, _getPrototypeOf(V4UUID).call(this, [V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', '4', V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', V4UUID._oneOf(V4UUID._timeHighBits), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex()].join('')));
  }

  _createClass(V4UUID, null, [{
    key: "_oneOf",
    value: function _oneOf(array) {
      return array[Math.floor(array.length * Math.random())];
    }
  }, {
    key: "_randomHex",
    value: function _randomHex() {
      return V4UUID._oneOf(V4UUID._chars);
    }
  }]);

  return V4UUID;
}(ValueUUID);

V4UUID._chars = ['0', '1', '2', '3', '4', '5', '6', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
V4UUID._timeHighBits = ['8', '9', 'a', 'b'];
/**
 * An empty UUID that contains only zeros.
 */

exports.empty = new ValueUUID('00000000-0000-0000-0000-000000000000');

function v4() {
  return new V4UUID();
}

exports.v4 = v4;
var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isUUID(value) {
  return _UUIDPattern.test(value);
}

exports.isUUID = isUUID;
/**
 * Parses a UUID that is of the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
 * @param value A uuid string.
 */

function parse(value) {
  if (!isUUID(value)) {
    throw new Error('invalid uuid');
  }

  return new ValueUUID(value);
}

exports.parse = parse;

function generateUuid() {
  return v4().asHex();
}

exports.generateUuid = generateUuid;

/***/ }),

/***/ "../../../../node_modules/vscode-languageclient/lib/workspaceFolders.js":
/*!*******************************************************************************************!*\
  !*** /home/nicholas/Documents/node_modules/vscode-languageclient/lib/workspaceFolders.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var UUID = __webpack_require__(/*! ./utils/uuid */ "../../../../node_modules/vscode-languageclient/lib/utils/uuid.js");

var vscode_1 = __webpack_require__(/*! vscode */ "../../../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../../../node_modules/vscode-languageserver-protocol/lib/main.js");

function access(target, key) {
  if (target === void 0) {
    return undefined;
  }

  return target[key];
}

var WorkspaceFoldersFeature =
/*#__PURE__*/
function () {
  function WorkspaceFoldersFeature(_client) {
    _classCallCheck(this, WorkspaceFoldersFeature);

    this._client = _client;
    this._listeners = new Map();
  }

  _createClass(WorkspaceFoldersFeature, [{
    key: "fillInitializeParams",
    value: function fillInitializeParams(params) {
      var _this = this;

      var folders = vscode_1.workspace.workspaceFolders;

      if (folders === void 0) {
        params.workspaceFolders = null;
      } else {
        params.workspaceFolders = folders.map(function (folder) {
          return _this.asProtocol(folder);
        });
      }
    }
  }, {
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      capabilities.workspace = capabilities.workspace || {};
      capabilities.workspace.workspaceFolders = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities) {
      var _this2 = this;

      var client = this._client;
      client.onRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type, function (token) {
        var workspaceFolders = function workspaceFolders() {
          var folders = vscode_1.workspace.workspaceFolders;

          if (folders === void 0) {
            return null;
          }

          var result = folders.map(function (folder) {
            return _this2.asProtocol(folder);
          });
          return result;
        };

        var middleware = client.clientOptions.middleware.workspace;
        return middleware && middleware.workspaceFolders ? middleware.workspaceFolders(token, workspaceFolders) : workspaceFolders(token);
      });
      var value = access(access(access(capabilities, 'workspace'), 'workspaceFolders'), 'changeNotifications');
      var id;

      if (typeof value === 'string') {
        id = value;
      } else if (value === true) {
        id = UUID.generateUuid();
      }

      if (id) {
        this.register(this.messages, {
          id: id,
          registerOptions: undefined
        });
      }
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      var _this3 = this;

      var id = data.id;
      var client = this._client;
      var disposable = vscode_1.workspace.onDidChangeWorkspaceFolders(function (event) {
        var didChangeWorkspaceFolders = function didChangeWorkspaceFolders(event) {
          var params = {
            event: {
              added: event.added.map(function (folder) {
                return _this3.asProtocol(folder);
              }),
              removed: event.removed.map(function (folder) {
                return _this3.asProtocol(folder);
              })
            }
          };

          _this3._client.sendNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, params);
        };

        var middleware = client.clientOptions.middleware.workspace;
        middleware && middleware.didChangeWorkspaceFolders ? middleware.didChangeWorkspaceFolders(event, didChangeWorkspaceFolders) : didChangeWorkspaceFolders(event);
      });

      this._listeners.set(id, disposable);
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposable = this._listeners.get(id);

      if (disposable === void 0) {
        return;
      }

      this._listeners["delete"](id);

      disposable.dispose();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._listeners.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var disposable = _step.value;
          disposable.dispose();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._listeners.clear();
    }
  }, {
    key: "asProtocol",
    value: function asProtocol(workspaceFolder) {
      if (workspaceFolder === void 0) {
        return null;
      }

      return {
        uri: this._client.code2ProtocolConverter.asUri(workspaceFolder.uri),
        name: workspaceFolder.name
      };
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type;
    }
  }]);

  return WorkspaceFoldersFeature;
}();

exports.WorkspaceFoldersFeature = WorkspaceFoldersFeature;

/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map