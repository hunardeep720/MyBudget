import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export const loadDatabase = async () =>{
    const dbName = 'MyBudgetDatabase.db';
    const dbAsset = require('./MyBudgetDatabase.db');
    const dbUrl = Asset.fromModule(dbAsset).uri;
    const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
    console.log(dbUrl);

    const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
    if (!fileInfo.exists){
        await FileSystem.makeDirectoryAsync(
            `${FileSystem.documentDirectory}SQLite`,
            {intermediates:true}
        );
        await FileSystem.downloadAsync(dbUrl,dbFilePath);
        console.log("database has been extracted succesfully");
    } else(
        console.log('there is a problem in wxtracting database')
    )
}