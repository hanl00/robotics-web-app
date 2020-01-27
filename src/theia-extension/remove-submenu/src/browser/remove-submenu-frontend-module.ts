/**
 * Generated using theia-extension-generator
 */

import { RemoveSubmenuCommandContribution, RemoveSubmenuMenuContribution } from './remove-submenu-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(RemoveSubmenuCommandContribution);
    bind(MenuContribution).to(RemoveSubmenuMenuContribution);
    
});
