/**
 * Generated using theia-extension-generator
 */

import { Test123CommandContribution, Test123MenuContribution } from './test123-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(Test123CommandContribution);
    bind(MenuContribution).to(Test123MenuContribution);
    
});
