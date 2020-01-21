import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const Test123Command = {
    id: 'Test123.command',
    label: "Shows a message"
};

@injectable()
export class Test123CommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(Test123Command, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class Test123MenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: Test123Command.id,
            label: 'Say Hello'
        });
    }
}
