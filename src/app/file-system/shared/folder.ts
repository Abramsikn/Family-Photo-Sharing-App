export class Folder {
    name: string;
    owner?: string;
    files?: [{                /* Array */
        displayName: string;
        uid: string;
    }];
    subFolders?: [{          /* Array */
        name: string;
        uid: string;
    }];
} 