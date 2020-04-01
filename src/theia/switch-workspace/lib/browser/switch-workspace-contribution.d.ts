import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { FrontendApplication, FrontendApplicationContribution } from "@theia/core/lib/browser/frontend-application";
import { WorkspaceService } from "@theia/workspace/lib/browser/workspace-service";
import { FileSystem } from '@theia/filesystem/lib/common';
export declare const SwitchWorkspaceCommand: {
    id: string;
    label: string;
};
export declare class SwitchWorkspaceCommandContribution implements CommandContribution {
    private readonly messageService;
    constructor(messageService: MessageService);
    registerCommands(registry: CommandRegistry): void;
}
export declare class SwitchWorkspaceMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
export declare class SwitchWorkspaceFrontendContribution implements FrontendApplicationContribution {
    protected readonly fileSystem: FileSystem;
    protected readonly workspaceService: WorkspaceService;
    constructor(fileSystem: FileSystem, workspaceService: WorkspaceService);
    protected switchWorkspace(event: any): Promise<void>;
    protected callback(event: any): void;
    onStart(app: FrontendApplication): void;
}
//# sourceMappingURL=switch-workspace-contribution.d.ts.map