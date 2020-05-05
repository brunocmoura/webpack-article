export default class ITableElement {
    
    constructor() {
        this._field = '';
    }
    
    build(value){
        throw new Error('Method not implemented.');
    }

    create(){
        return this._field;
    }
}