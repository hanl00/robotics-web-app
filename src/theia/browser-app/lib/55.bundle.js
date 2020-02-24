(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict-resolver.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict-resolver.js ***!
  \*************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var MergeConflictResolver = /** @class */ (function () {
    function MergeConflictResolver() {
        var _this = this;
        this.acceptCurrent = {
            execute: function (args) { return _this.doAcceptCurrent(args); }
        };
        this.acceptIncoming = {
            execute: function (args) { return _this.doAcceptIncoming(args); }
        };
        this.acceptBoth = {
            execute: function (args) { return _this.doAcceptBoth(args); }
        };
    }
    MergeConflictResolver.prototype.doAcceptCurrent = function (argument) {
        this.doAccept(argument, function (textOfRange, conflict) {
            return textOfRange(conflict.current.content);
        });
    };
    MergeConflictResolver.prototype.doAcceptIncoming = function (argument) {
        this.doAccept(argument, function (textOfRange, conflict) {
            return textOfRange(conflict.incoming.content);
        });
    };
    MergeConflictResolver.prototype.doAcceptBoth = function (argument) {
        this.doAccept(argument, function (textOfRange, conflict) {
            var currentText = textOfRange(conflict.current.content);
            var incomingText = textOfRange(conflict.incoming.content);
            return currentText + "\n" + incomingText;
        });
    };
    MergeConflictResolver.prototype.doAccept = function (argument, newTextFn) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, conflict, editorWidget, newText;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = argument.uri, conflict = argument.conflict;
                        return [4 /*yield*/, this.editorManager.getByUri(new uri_1.default(uri))];
                    case 1:
                        editorWidget = _a.sent();
                        if (!editorWidget) {
                            return [2 /*return*/];
                        }
                        newText = newTextFn(function (range) { return _this.getTextRange(range, editorWidget.editor.document); }, conflict);
                        editorWidget.editor.executeEdits([browser_1.TextEdit.replace(conflict.total, newText)]);
                        return [2 /*return*/];
                }
            });
        });
    };
    MergeConflictResolver.prototype.getTextRange = function (range, document) {
        if (!range) {
            return '';
        }
        var start = document.offsetAt(range.start);
        var end = document.offsetAt(range.end);
        var text = document.getText().substring(start, end);
        return text;
    };
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], MergeConflictResolver.prototype, "editorManager", void 0);
    MergeConflictResolver = __decorate([
        inversify_1.injectable()
    ], MergeConflictResolver);
    return MergeConflictResolver;
}());
exports.MergeConflictResolver = MergeConflictResolver;


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict.js ***!
  \****************************************************************************/
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
var MergeConflictsCommands;
(function (MergeConflictsCommands) {
    MergeConflictsCommands.MERGE_CONFLICT_PREFIX = 'Merge Conflict';
    MergeConflictsCommands.AcceptCurrent = {
        id: 'merge-conflicts:accept.current',
        category: MergeConflictsCommands.MERGE_CONFLICT_PREFIX,
        label: 'Accept Current Change'
    };
    MergeConflictsCommands.AcceptIncoming = {
        id: 'merge-conflicts:accept.incoming',
        category: MergeConflictsCommands.MERGE_CONFLICT_PREFIX,
        label: 'Accept Incoming Change'
    };
    MergeConflictsCommands.AcceptBoth = {
        id: 'merge-conflicts:accept.both',
        category: MergeConflictsCommands.MERGE_CONFLICT_PREFIX,
        label: 'Accept Both Changes'
    };
})(MergeConflictsCommands = exports.MergeConflictsCommands || (exports.MergeConflictsCommands = {}));


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-code-lense-provider.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-code-lense-provider.js ***!
  \*************************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var merge_conflicts_provider_1 = __webpack_require__(/*! ./merge-conflicts-provider */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-provider.js");
var merge_conflict_1 = __webpack_require__(/*! ./merge-conflict */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict.js");
var MergeConflictsCodeLensProvider = /** @class */ (function () {
    function MergeConflictsCodeLensProvider() {
    }
    MergeConflictsCodeLensProvider.prototype.provideCodeLenses = function (params, token) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, mergeConflicts, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = params.textDocument.uri;
                        return [4 /*yield*/, this.mergeConflictsProvider.get(uri)];
                    case 1:
                        mergeConflicts = _a.sent();
                        result = [];
                        if (mergeConflicts) {
                            mergeConflicts.forEach(function (mergeConflict) { return result.push.apply(result, __spread(_this.toCodeLense(uri, mergeConflict))); });
                        }
                        return [2 /*return*/, Promise.resolve(result)];
                }
            });
        });
    };
    MergeConflictsCodeLensProvider.prototype.toCodeLense = function (uri, conflict) {
        var e_1, _a;
        var result = [];
        try {
            for (var _b = __values([merge_conflict_1.MergeConflictsCommands.AcceptCurrent, merge_conflict_1.MergeConflictsCommands.AcceptIncoming, merge_conflict_1.MergeConflictsCommands.AcceptBoth]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cmd = _c.value;
                result.push({
                    command: {
                        command: cmd.id,
                        title: cmd.label || '',
                        arguments: [{ uri: uri, conflict: conflict }]
                    },
                    range: conflict.current.marker
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    __decorate([
        inversify_1.inject(merge_conflicts_provider_1.MergeConflictsProvider),
        __metadata("design:type", merge_conflicts_provider_1.MergeConflictsProvider)
    ], MergeConflictsCodeLensProvider.prototype, "mergeConflictsProvider", void 0);
    MergeConflictsCodeLensProvider = __decorate([
        inversify_1.injectable()
    ], MergeConflictsCodeLensProvider);
    return MergeConflictsCodeLensProvider;
}());
exports.MergeConflictsCodeLensProvider = MergeConflictsCodeLensProvider;


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-decorations.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-decorations.js ***!
  \*****************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var MergeConflictsDecorations = /** @class */ (function (_super) {
    __extends(MergeConflictsDecorations, _super);
    function MergeConflictsDecorations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeConflictsDecorations_1 = MergeConflictsDecorations;
    MergeConflictsDecorations.prototype.decorate = function (params) {
        var e_1, _a, e_2, _b;
        var mergeConflicts = params.mergeConflicts;
        var newDecorations = [];
        try {
            for (var mergeConflicts_1 = __values(mergeConflicts), mergeConflicts_1_1 = mergeConflicts_1.next(); !mergeConflicts_1_1.done; mergeConflicts_1_1 = mergeConflicts_1.next()) {
                var mergeConflict = mergeConflicts_1_1.value;
                newDecorations.push({ range: mergeConflict.current.marker, options: MergeConflictsDecorations_1.Options.CurrentMarker });
                if (mergeConflict.current.content) {
                    newDecorations.push({ range: mergeConflict.current.content, options: MergeConflictsDecorations_1.Options.CurrentContent });
                }
                newDecorations.push({ range: mergeConflict.incoming.marker, options: MergeConflictsDecorations_1.Options.IncomingMarker });
                if (mergeConflict.incoming.content) {
                    newDecorations.push({ range: mergeConflict.incoming.content, options: MergeConflictsDecorations_1.Options.IncomingContent });
                }
                try {
                    for (var _c = (e_2 = void 0, __values(mergeConflict.bases)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var base = _d.value;
                        if (base.marker) {
                            newDecorations.push({ range: base.marker, options: MergeConflictsDecorations_1.Options.BaseMarker });
                        }
                        if (base.content) {
                            newDecorations.push({ range: base.content, options: MergeConflictsDecorations_1.Options.BaseContent });
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (mergeConflicts_1_1 && !mergeConflicts_1_1.done && (_a = mergeConflicts_1.return)) _a.call(mergeConflicts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.setDecorations(params.editor, newDecorations);
    };
    var MergeConflictsDecorations_1;
    MergeConflictsDecorations = MergeConflictsDecorations_1 = __decorate([
        inversify_1.injectable()
    ], MergeConflictsDecorations);
    return MergeConflictsDecorations;
}(browser_1.EditorDecorator));
exports.MergeConflictsDecorations = MergeConflictsDecorations;
(function (MergeConflictsDecorations) {
    MergeConflictsDecorations.Options = {
        CurrentMarker: {
            isWholeLine: true,
            className: 'merge-conflict-current-marker'
        },
        CurrentContent: {
            isWholeLine: true,
            className: 'merge-conflict-current-content',
            overviewRuler: {
                position: browser_1.OverviewRulerLane.Full,
                color: 'editorOverviewRuler.currentContentForeground',
            }
        },
        BaseMarker: {
            isWholeLine: true,
            className: 'merge-conflict-base-marker'
        },
        BaseContent: {
            isWholeLine: true,
            className: 'merge-conflict-base-content',
            overviewRuler: {
                position: browser_1.OverviewRulerLane.Full,
                color: 'editorOverviewRuler.commonContentForeground',
            }
        },
        IncomingMarker: {
            isWholeLine: true,
            className: 'merge-conflict-incoming-marker'
        },
        IncomingContent: {
            isWholeLine: true,
            className: 'merge-conflict-incoming-content',
            overviewRuler: {
                position: browser_1.OverviewRulerLane.Full,
                color: 'editorOverviewRuler.incomingContentForeground',
            }
        },
    };
})(MergeConflictsDecorations = exports.MergeConflictsDecorations || (exports.MergeConflictsDecorations = {}));
exports.MergeConflictsDecorations = MergeConflictsDecorations;


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-frontend-contribution.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-frontend-contribution.js ***!
  \***************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var merge_conflicts_code_lense_provider_1 = __webpack_require__(/*! ./merge-conflicts-code-lense-provider */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-code-lense-provider.js");
var merge_conflict_resolver_1 = __webpack_require__(/*! ./merge-conflict-resolver */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict-resolver.js");
var merge_conflict_1 = __webpack_require__(/*! ./merge-conflict */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict.js");
var merge_conflicts_provider_1 = __webpack_require__(/*! ./merge-conflicts-provider */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-provider.js");
var merge_conflicts_decorations_1 = __webpack_require__(/*! ./merge-conflicts-decorations */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-decorations.js");
var MergeConflictsFrontendContribution = /** @class */ (function () {
    function MergeConflictsFrontendContribution() {
    }
    MergeConflictsFrontendContribution.prototype.onStart = function (app) {
        var _this = this;
        if (this.languages.registerCodeLensProvider) {
            this.languages.registerCodeLensProvider([{ pattern: '**/*' }], this.mergeConflictsCodeLensProvider);
        }
        this.mergeConflictsProvider.onDidUpdate(function (params) { return _this.decorator.decorate(params); });
    };
    MergeConflictsFrontendContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand({ id: merge_conflict_1.MergeConflictsCommands.AcceptCurrent.id }, this.mergeConflictResolver.acceptCurrent);
        registry.registerCommand({ id: merge_conflict_1.MergeConflictsCommands.AcceptIncoming.id }, this.mergeConflictResolver.acceptIncoming);
        registry.registerCommand({ id: merge_conflict_1.MergeConflictsCommands.AcceptBoth.id }, this.mergeConflictResolver.acceptBoth);
    };
    __decorate([
        inversify_1.inject(browser_1.Languages),
        __metadata("design:type", Object)
    ], MergeConflictsFrontendContribution.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_code_lense_provider_1.MergeConflictsCodeLensProvider),
        __metadata("design:type", merge_conflicts_code_lense_provider_1.MergeConflictsCodeLensProvider)
    ], MergeConflictsFrontendContribution.prototype, "mergeConflictsCodeLensProvider", void 0);
    __decorate([
        inversify_1.inject(merge_conflict_resolver_1.MergeConflictResolver),
        __metadata("design:type", merge_conflict_resolver_1.MergeConflictResolver)
    ], MergeConflictsFrontendContribution.prototype, "mergeConflictResolver", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_decorations_1.MergeConflictsDecorations),
        __metadata("design:type", merge_conflicts_decorations_1.MergeConflictsDecorations)
    ], MergeConflictsFrontendContribution.prototype, "decorator", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_provider_1.MergeConflictsProvider),
        __metadata("design:type", merge_conflicts_provider_1.MergeConflictsProvider)
    ], MergeConflictsFrontendContribution.prototype, "mergeConflictsProvider", void 0);
    MergeConflictsFrontendContribution = __decorate([
        inversify_1.injectable()
    ], MergeConflictsFrontendContribution);
    return MergeConflictsFrontendContribution;
}());
exports.MergeConflictsFrontendContribution = MergeConflictsFrontendContribution;


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-frontend-module.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-frontend-module.js ***!
  \*********************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var merge_conflicts_frontend_contribution_1 = __webpack_require__(/*! ./merge-conflicts-frontend-contribution */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-frontend-contribution.js");
var merge_conflicts_code_lense_provider_1 = __webpack_require__(/*! ./merge-conflicts-code-lense-provider */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-code-lense-provider.js");
var merge_conflicts_parser_1 = __webpack_require__(/*! ./merge-conflicts-parser */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-parser.js");
var merge_conflict_resolver_1 = __webpack_require__(/*! ./merge-conflict-resolver */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflict-resolver.js");
var merge_conflicts_provider_1 = __webpack_require__(/*! ./merge-conflicts-provider */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-provider.js");
var merge_conflicts_decorations_1 = __webpack_require__(/*! ./merge-conflicts-decorations */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-decorations.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/merge-conflicts/src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(merge_conflicts_parser_1.MergeConflictsParser).toSelf().inSingletonScope();
    bind(merge_conflict_resolver_1.MergeConflictResolver).toSelf().inSingletonScope();
    bind(merge_conflicts_code_lense_provider_1.MergeConflictsCodeLensProvider).toSelf().inSingletonScope();
    bind(merge_conflicts_decorations_1.MergeConflictsDecorations).toSelf().inSingletonScope();
    bind(merge_conflicts_frontend_contribution_1.MergeConflictsFrontendContribution).toSelf().inSingletonScope();
    bind(merge_conflicts_provider_1.MergeConflictsProvider).toSelf().inSingletonScope();
    [common_1.CommandContribution, browser_1.FrontendApplicationContribution].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(merge_conflicts_frontend_contribution_1.MergeConflictsFrontendContribution);
    });
});


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-parser.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-parser.js ***!
  \************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var MergeConflictsParser = /** @class */ (function () {
    function MergeConflictsParser() {
        this.init();
    }
    MergeConflictsParser_1 = MergeConflictsParser;
    MergeConflictsParser.prototype.parse = function (input) {
        var context = new MergeConflictsParser_1.Context();
        this.parser.reset(context);
        for (var number = 0; number < input.lineCount; number++) {
            this.parser.read({ number: number, content: input.getLine(number) });
        }
        return context.all;
    };
    MergeConflictsParser.prototype.init = function () {
        var _this = this;
        var parser = this.parser = new MergeConflictsParser_1.StateMachine(new MergeConflictsParser_1.Context());
        // states
        var start = parser.addState('start');
        var currentMarker = parser.addState('current-marker');
        var currentContent = parser.addState('current-content');
        var baseMarker = parser.addState('base-marker');
        var baseContent = parser.addState('base-content');
        var separator = parser.addState('separator');
        var incomingContent = parser.addState('incoming-content');
        var incomingMarker = parser.addState('incoming-marker');
        var push = parser.addState('push');
        // conditions / triggers
        var createStartsWithCondition = function (char) {
            var re = new RegExp("^" + char + "{7}");
            return function (input) {
                if (input.length < 7) {
                    return false;
                }
                return re.test(input);
            };
        };
        var startsWithLt = createStartsWithCondition('<');
        var startsWithEq = createStartsWithCondition('=');
        var startsWithGt = createStartsWithCondition('>');
        var startsWithPp = createStartsWithCondition('\\|');
        var any = function () { return true; };
        // transitions
        start.to(currentMarker, startsWithLt);
        start.to(start, any);
        currentMarker.to(currentMarker, startsWithLt);
        currentMarker.to(separator, startsWithEq);
        currentMarker.to(baseMarker, startsWithPp);
        currentMarker.to(currentContent, any);
        currentContent.to(currentMarker, startsWithLt);
        currentContent.to(separator, startsWithEq);
        currentContent.to(baseMarker, startsWithPp);
        currentContent.to(start, startsWithGt);
        currentContent.to(currentContent, any);
        baseMarker.to(currentMarker, startsWithLt);
        baseMarker.to(baseMarker, startsWithPp);
        baseMarker.to(separator, startsWithEq);
        baseMarker.to(baseContent, any);
        baseContent.to(currentMarker, startsWithLt);
        baseContent.to(separator, startsWithEq);
        baseContent.to(baseMarker, startsWithPp);
        baseContent.to(baseContent, any);
        separator.to(currentMarker, startsWithLt);
        separator.to(start, startsWithEq);
        separator.to(incomingMarker, startsWithGt);
        separator.to(incomingContent, any);
        incomingContent.to(start, startsWithEq);
        incomingContent.to(currentMarker, startsWithLt);
        incomingContent.to(incomingMarker, startsWithGt);
        incomingContent.to(incomingContent, any);
        incomingMarker.to(push);
        push.to(start);
        // actions
        currentMarker.onEnter = function (input, ctx) {
            ctx.new = new MergeConflictsParser_1.Context().new;
            ctx.new.current.marker = _this.lineToRange(input);
        };
        currentContent.onEnter = function (input, ctx) {
            var current = ctx.new.current;
            current.content = _this.addLineToRange(input, current.content);
        };
        baseMarker.onEnter = function (input, ctx) {
            ctx.new.bases.push({ marker: _this.lineToRange(input) });
        };
        baseContent.onEnter = function (input, ctx) {
            var base = ctx.new.bases.slice(-1)[0];
            base.content = _this.addLineToRange(input, base.content);
        };
        incomingContent.onEnter = function (input, ctx) {
            var incoming = ctx.new.incoming;
            incoming.content = _this.addLineToRange(input, incoming.content);
        };
        incomingMarker.onEnter = function (input, ctx) {
            var markerRange = _this.lineToRange(input);
            ctx.new.incoming.marker = markerRange;
            ctx.new.total = {
                start: ctx.new.current.marker.start,
                end: markerRange.end
            };
        };
        push.onEnter = function (input, ctx) {
            ctx.all.push(ctx.new);
        };
    };
    MergeConflictsParser.prototype.lineToRange = function (line) {
        return {
            start: { line: line.number, character: 0 },
            end: { line: line.number, character: line.content.length },
        };
    };
    MergeConflictsParser.prototype.addLineToRange = function (line, range) {
        if (!range) {
            return this.lineToRange(line);
        }
        range.end = { line: line.number, character: line.content.length };
        return range;
    };
    var MergeConflictsParser_1;
    MergeConflictsParser = MergeConflictsParser_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MergeConflictsParser);
    return MergeConflictsParser;
}());
exports.MergeConflictsParser = MergeConflictsParser;
(function (MergeConflictsParser) {
    var Context = /** @class */ (function () {
        function Context() {
            this.new = {
                current: {},
                incoming: {},
                bases: []
            };
            this.all = [];
        }
        return Context;
    }());
    MergeConflictsParser.Context = Context;
    var StateMachine = /** @class */ (function () {
        function StateMachine(context) {
            this.context = context;
            this.states = [];
        }
        StateMachine.prototype.reset = function (context) {
            this.current = this.states[0];
            this.context = context;
        };
        StateMachine.prototype.read = function (line) {
            var next = this.current.findNext(line, this.context);
            while (next) {
                if (next.onEnter) {
                    next.onEnter(line, this.context);
                }
                if (next.immediateNext) {
                    this.current = next;
                    next = next.immediateNext;
                }
                else {
                    break;
                }
            }
            if (!next) {
                throw new Error("Missing transition from (" + this.current.id + ") for input: L." + line.number + " > " + line.content);
            }
            this.current = next;
        };
        StateMachine.prototype.addState = function (id) {
            var state = new State(id);
            this.states.push(state);
            if (!this.current) {
                this.current = state;
            }
            return state;
        };
        return StateMachine;
    }());
    MergeConflictsParser.StateMachine = StateMachine;
    var State = /** @class */ (function () {
        function State(id) {
            this.id = id;
            this.conditionalNext = [];
        }
        State.prototype.findNext = function (line, context) {
            var e_1, _a;
            try {
                for (var _b = __values(this.conditionalNext), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var candidate = _c.value;
                    if (candidate.condition(line.content)) {
                        return candidate.to;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return undefined;
        };
        State.prototype.to = function (next, condition) {
            if (condition) {
                this.immediateNext = undefined;
                this.conditionalNext.push({ to: next, condition: condition });
            }
            else {
                this.immediateNext = next;
            }
        };
        return State;
    }());
    MergeConflictsParser.State = State;
})(MergeConflictsParser = exports.MergeConflictsParser || (exports.MergeConflictsParser = {}));
exports.MergeConflictsParser = MergeConflictsParser;


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-provider.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-provider.js ***!
  \**************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var merge_conflicts_parser_1 = __webpack_require__(/*! ./merge-conflicts-parser */ "../node_modules/@theia/merge-conflicts/lib/browser/merge-conflicts-parser.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
var MergeConflictsProvider = /** @class */ (function () {
    function MergeConflictsProvider() {
        this.onDidUpdateEmitter = new core_1.Emitter();
        this.onDidUpdate = this.onDidUpdateEmitter.event;
        this.values = new Map();
        this.valueTimeouts = new Map();
    }
    MergeConflictsProvider.prototype.initialize = function () {
        var _this = this;
        this.editorManager.onCreated(function (w) { return _this.handleNewEditor(w); });
    };
    MergeConflictsProvider.prototype.get = function (uri) {
        return this.values.get(uri) || Promise.resolve(undefined);
    };
    MergeConflictsProvider.prototype.handleNewEditor = function (editorWidget) {
        var _this = this;
        var editor = editorWidget.editor;
        var uri = editor.uri;
        if (uri.scheme !== 'file') {
            return;
        }
        var debouncedUpdate = debounce(function () { return _this.updateMergeConflicts(editor); }, 200, { leading: true });
        var disposable = editor.onDocumentContentChanged(function () { return debouncedUpdate(); });
        editorWidget.disposed.connect(function () { return disposable.dispose(); });
        debouncedUpdate();
    };
    MergeConflictsProvider.prototype.updateMergeConflicts = function (editor) {
        var _this = this;
        var uri = editor.uri.toString();
        if (this.valueTimeouts.has(uri)) {
            window.clearTimeout(this.valueTimeouts.get(uri));
        }
        var deferred = new promise_util_1.Deferred();
        this.values.set(uri, deferred.promise);
        window.setTimeout(function () {
            var mergeConflicts = _this.computeMergeConflicts(editor);
            _this.onDidUpdateEmitter.fire({ editor: editor, mergeConflicts: mergeConflicts });
            deferred.resolve(mergeConflicts);
        }, 50);
        this.valueTimeouts.set(uri, window.setTimeout(function () {
            _this.values.delete(uri);
        }, 1000));
    };
    MergeConflictsProvider.prototype.computeMergeConflicts = function (editor) {
        var document = editor.document;
        var input = {
            lineCount: document.lineCount,
            getLine: function (number) { return document.getLineContent(number + 1); },
        };
        return this.mergeConflictParser.parse(input);
    };
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], MergeConflictsProvider.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(merge_conflicts_parser_1.MergeConflictsParser),
        __metadata("design:type", merge_conflicts_parser_1.MergeConflictsParser)
    ], MergeConflictsProvider.prototype, "mergeConflictParser", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MergeConflictsProvider.prototype, "initialize", null);
    MergeConflictsProvider = __decorate([
        inversify_1.injectable()
    ], MergeConflictsProvider);
    return MergeConflictsProvider;
}());
exports.MergeConflictsProvider = MergeConflictsProvider;


/***/ }),

/***/ "../node_modules/@theia/merge-conflicts/src/browser/style/index.css":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/merge-conflicts/src/browser/style/index.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/merge-conflicts/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/merge-conflicts/src/browser/style/index.css":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/merge-conflicts/src/browser/style/index.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.merge-conflict-current-marker {\n     background-color: var(--theia-merge-currentHeaderBackground);\n}\n\n.merge-conflict-current-content {\n     background-color: var(--theia-merge-currentContentBackground);\n}\n\n.merge-conflict-base-marker {\n    background-color: var(--theia-merge-commonHeaderBackground);\n}\n\n.merge-conflict-base-content {\n    background-color: var(--theia-merge-commonContentBackground);\n}\n\n.merge-conflict-incoming-marker {\n    background-color: var(--theia-merge-incomingHeaderBackground);\n}\n\n.merge-conflict-incoming-content {\n    background-color: var(--theia-merge-incomingContentBackground);\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=55.bundle.js.map