import { injectable } from 'inversify';
import { MenuContribution, MenuModelRegistry } from '@theia/core/lib/common';

@injectable
    ()
export class RemovalContribution implements MenuContribution {
    public registerMenus(menus: MenuModelRegistry): void {
        // Help

        menus.unregisterMenuAction(DebugMenus.DEBUG.slice(-1)[0])
    }
}