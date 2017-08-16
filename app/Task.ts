

export class Task {
     sum: number=0;
 
 
    constructor (public imag: string ,public description: string,
        public price : number,public  selected: boolean ,public count:number) {
    }

    toString () {
        return `Task, description: ${this.description}, price: ${this.price}.`
    }

    toString2 () {
        return ` description: ${this.description}, price: ${this.price},
        count: ${this.count} , total : ${this.count*this.price}.`
    }

    toStringdes () {
        return ` ${this.description}`
    }

    toStringprice () {
        
        return `${this.price}`
    }

    toStringNum () {
        return ` ${this.count}`
    }
    toStringTot () {
        
        return `  ${this.count*this.price}`
    }
    
    getSum(){
        
        return  this.sum
    }
        getimg(imag : string){
            this.imag=imag;
        }
        setSelected(sel: boolean){
            this.selected=sel;
            this.count++;
            this.sum+=this.price;
            
        }  
        
}

