import { injectable } from 'inversify';
import { MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';
import { DebugMenus } from '@theia/debug/lib/browser/debug-frontend-application-contribution'

@injectable
    ()
export class RemoveSubmenuMenuContribution implements MenuContribution {
    public registerMenus(menus: MenuModelRegistry): void {
        // Help

        menus.unregisterMenuAction(DebugMenus.DEBUG.slice(-1)[0])
    }
}