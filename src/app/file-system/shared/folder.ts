export class Folder {
    name: string;
    owner: string;
    file: [{                /* Array */
        displayName: string;
        uid: string;
    }];
    subFolders: [{          /* Array */
        name: string;
        uid: string;
    }];
}