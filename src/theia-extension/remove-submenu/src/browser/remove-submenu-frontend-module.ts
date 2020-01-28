/**
 * Generated using theia-extension-generator
 */

import { RemoveSubmenuMenuContribution } from './remove-submenu-contribution';
import { MenuContribution } from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here

    bind(MenuContribution).to(RemoveSubmenuMenuContribution);
    
});
