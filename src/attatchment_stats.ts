import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ILogger } from "../types/models/spt/utils/ILogger";
import { Arrays } from "./arrays";

export class AttatchmentStats {

    constructor(private logger: ILogger, private tables: IDatabaseTables, private modConf, private arrays: Arrays) { }

    private itemDB = this.tables.templates.items;


    public loadAttStats() {

        const parentArray = this.arrays.modParentIDs;

        // for (let i in this.itemDB) {
        //     let serverItem = this.itemDB[i];



        // }
        // this.logger.info(""+this.itemDB["57adff4f24597737f373b6e6"]._props.Zooms[0][0]);
        if (this.modConf.logEverything == true) {
            this.logger.info("Attatchment Stats Loaded");
        }
    }
}