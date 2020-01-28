import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const TheiaExtensionRemoveDebugCommand = {
    id: 'TheiaExtensionRemoveDebug.command',
    label: "Shows a message"
};

@injectable()
export class TheiaExtensionRemoveDebugCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TheiaExtensionRemoveDebugCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class TheiaExtensionRemoveDebugMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TheiaExtensionRemoveDebugCommand.id,
            label: 'Say Hello'
        });
    }
}
