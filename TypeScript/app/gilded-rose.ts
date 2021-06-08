// create 2 global variables for the min and max quality of an items as they can never go above max or below the min, unless it is a legendary items
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
        // create my variables for specific items to prevent needing to write them out multiple times
        var conjured = 'Conjured';
        var ragnaros = 'Sulfuras, Hand of Ragnaros';
        var cheese = 'Aged Brie';
        var concertPass = 'Backstage passes to a TAFKAL80ETC concert';

        // using a forEach loop I am going to look at each item and send it to the needed helper function relating to that item
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
            
            else if(item.name.indexOf(conjured) > -1){
                conjuredFunction(item);
            }

            else{
              normalThing(item);
            }
        })
        return this.items;
    } 
}// end class

// this function relates to the aged brie item, it increases the quality of the brie as the sellIn date goes down
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

// this is the function for the hand of Ragnaros, it sets the quality to 80, as the item never degrades
function sulfurasHand(item){
    item.quality = 80;
    return ;
}

// this is the function for the backstage passes, I create 2 variables here for the amount of days remaining for when the tickets start to 
// increase in quality more than 1
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
// this function is for items that do not fall under a specical item category. I degrade the sellIn by 1 and the quality by 1,
// unless it is passed its sellIn date, in that case quality goes down by 2
function normalThing(item){
    item.sellIn -= 1;
    item.quality -= 1;

    if(item.sellIn < 0){
        item.quality -= 1;
    }
    if(item.quality < minQuality){
        item.quality = 0;
    }
    return ;
}

// this function handles the conjured items, it decreases their quality by 2 normally, or by 4 if their sellIn date passes.
function conjuredFunction(item){
    item.sellIn -= 1;
    item.quality -= 2;

    if(item.sellIn < 0){
        item.quality -= 2;
    }

    if(item.quality < minQuality){
        item.quality = 0;
    }
    return ;
}
