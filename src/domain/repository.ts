import AsyncStorage from "@react-native-async-storage/async-storage";

export class Repository {

    private readonly storageKey = "@storage_state";

    constructor(private setStore: (store: any) => void) {
        AsyncStorage.getItem(this.storageKey).then(json => {
            if (json) setStore(JSON.parse(json));
        });
    }

    public async persist(newStore: any) {
        this.setStore(newStore);
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(newStore));
    }

}

export default (setStore: (store: any) => void) => {
    return new Repository(setStore);
}