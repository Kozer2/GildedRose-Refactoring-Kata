const maxQuality = 50;
const minQuality = 0;
// class to create items with name, sell by date, and quality
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
// class that creates an array where items will be stored
export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    //Method for updating item quality
    updateQuality() {
        var conjured = 'Conjured';
        var ragnaros = 'Sulfuras, Hand of Ragnaros';
        var cheese = 'Aged Brie';
        var concertPass = 'Backstage passes to a TAFKAL80ETC concert';

        this.items.forEach(item => {
            if(item.name == cheese){
                cheesyFunction(item);
            }

            else if(item.name == ragnaros){
                sulfurasHand(item);
            }

            else if(item.name == concertPass){
               backstagePass(item);
            }

            else{
              normalThing(item);
            }
        })
        return this.items;
    } 
}// end class

function cheesyFunction(item){
    if(item.quality < maxQuality){
        item.quality += 1;
        item.sellIn -= 1;
    }
    if(item.sellIn <= 0){
        item.quality += 1;
    }
    return ; 
}

function sulfurasHand(item){
    item.quality = 80;
    return ;
}

function backstagePass(item){
    const day1 = 10;
    const day2 = 5;

    if (item.quality < maxQuality){
        item.quality += 1;
        item.sellIn -= 1;
        if (item.sellIn <= day1){
        item.quality += 1;
        }
        if(item.sellIn <= day2){
            item.quality += 1;
        }
    }
    if(item.sellIn <= 0){
        item.quality = 0;
    }
    return ;
}

function normalThing(item){
    
    item.sellIn -= 1;
    item.quality -= 1;

    if(item.sellIn < 0){
        item.quality -= 1;
    }
    if(item.quality < 0){
        item.quality = 0;
    }
    return ;
}
