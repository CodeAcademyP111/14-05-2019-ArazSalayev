class Car {
    constructor(mark, model, year, color, engine, max_speed, fuel_type, tank_size, passengers_count, instant_fuel, serfiyat) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.max_speed = max_speed;
        this.color = color;
        this.engine = engine;
        this.fuel_type = fuel_type;
        this.passengers_count = passengers_count;
        this.tank_size = tank_size;
        this.instant_fuel = instant_fuel;
        this.serfiyat = serfiyat;
       
    }
    end_fuel(km) {
        var endFuel = this.instant_fuel - this.serfiyat * km / 100;
        if (endFuel > 0) {
            console.log("gede biler")
        }
        else {
            console.log("gede bilmez")
        }

    }
    zapravka(lt){
        var remain_fuel=this.tank_size-(this.instant_fuel + lt);
        var overflow_fuel=(this.instant_fuel+lt)-this.tank_size;
        
        if(this.instant_fuel + lt < this.tank_size){
            alert("bakiniz tam dolmayib ve bakinizda " +remain_fuel + " litr bow yer var")
        }
        else if(this.instant_fuel + lt == this.tank_size){
            alert("bakiniz tam dolub")
        }
        else{
            alert("bakiniz tam dolub ve  " + overflow_fuel + " lt dashib")
        }
    }
}

var m_5 = new Car("Bmw", "M5", 2015, "black", "4.4", "280 km/h", "benzin", 75, "5", 40, 12);

m_5.zapravka(35);
m_5.end_fuel(5);
