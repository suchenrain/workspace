import { IUtility } from "./utility.interface";
import { Utility } from "./utility";

export class UtilityFactory {

    static utility: IUtility = new Utility();
    /** 
     * generate an unique universal identifier
     * @method 
     * @returns string
    */
    static uuid() {
        return this.utility.uuid();
    }
}