export default class Player {
    readonly id: string
    readonly user: any
    constructor(id: string, user: any) {
        this.id = id;
        this.user = user;
    }
}