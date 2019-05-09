//todo: add: tested,condition,last use,checkout....
const inventory = {
    "VMA320":{
        name:"ANALOGUE TEMPERATURE SENSOR MODULE",
        brand:"velleman",
        quantity:2,
        quantitySold:2,
        price:6.99,
        location:"D2_7_1",
        purchasedFrom:"Micro center"
    },
    "VMA314":{
        name:"PIR MOTION SENSOR",
        brand:"velleman",
        quantity:1,
        price:6.99,
        location:"D2_7_1",
        purchasedFrom:"Micro center"
    },
    "VMA300":{
        name:"3x4 MATRIX MEMBRANE KEYPAD",
        brand:"velleman",
        quantity:1,
        price:4.99,
        location:"D2_7_2",
        purchasedFrom:"Micro center"
    },
    "2C5VRELAY":{
        name:"2 Channel 5V RELAY",
        brand:"inland",
        part:"2C5VRELAY",
        quantity:2,
        quantitySold:1,
        price:3.99,
        location:"D2_7_3",
        purchasedFrom:"Micro center"
    },
    "VMA402":{
        name:"LM2577 DC-DC VOLTAGE STEP-UP (BOOST) MODULE",
        brand:"velleman",
        quantity:1,
        part:"LM2577",
        price:11.99,
        location:"D2_7_1",
        purchasedFrom:"Micro center"
    },
    "VMA317":{
        name:"1838 IR INFRARED 37.9 KHZ RECEIVER",
        brand:"velleman",
        quantity:1,
        quantitySold:2,
        price:5.99,
        location:"D2_7_1",
        purchasedFrom:"Micro center"
    },
    "KDIODE1":{
        name:"Velleman K/DIODE1 Diodes Set (120pcs)",
        brand:"velleman",
        quantity:1,
        quantitySold:1,
        part:"K/DIODE1",
        location:"D2_7_4",
        purchasedFrom:"Micro center"
    },
    "KCAP2":{
        name:"Velleman 120 Piece Electrolytic Capacitor Assortment",
        brand:"velleman",
        quantity:1,
        quantitySold:1,
        part:"K/CAP2",
        location:"D2_6_4",
        purchasedFrom:"Micro center"
    },
    "422600":{
        name:"FTDI Adapter USB Controller",
        brand:"inland",
        quantity:3,
        quantitySold:1,
        part:"FTDI BASIC USB",
        price:7.99,
        location:"D2_1_1",
    },
    "OSEPP-IRR-01":{
        name:"OSEPP™ IR Receiver Module - NO-PINS",
        brand:"OSEPP",
        quantity:1,
        quantitySold:1,
        part:"OSEPP-IRR-01",
        price:7.99,
        location:"D2_1_2",
        purchasedFrom:"Amazon"
    },
    "840611":{
        name:"Industrias Lorenzo Concave Button - Silver Chrome",
        brand:"Industrias Lorenzo",
        quantity:1,
        quantitySold:1,
        part:"444444476746",
        price:5.99,
        location:"D2_3_1",
        purchasedFrom:"Micro center"
    },
    "840629":{
        name:"Industrias Lorenzo 1-Player Concave Button - Black",
        brand:"Industrias Lorenzo",
        quantity:1,
        quantitySold:1,
        part:"444444476753",
        price:4.99,
        location:"D2_3_2",
        purchasedFrom:"Micro center"
    },
    "415141":{
        name:"Micro Center 16GB microSDHC Class 10 Flash Memory Card",
        brand:"Industrias Lorenzo",
        quantity:1,
        quantitySold:1,
        part:"444444476753",
        price:2.99,
        location:"D2_1_4",
        purchasedFrom:"Micro center"
    },
    "BIGLEDS":{
        name:"Big Red Blue Yellow Orange LEDS",
        quantity:12,
        location:"D2_1_7",
        purchasedFrom:"Micro center"
    },
    "422659":{
        name:"Raspberry Pi Zero W",
        brand:"Industrias Lorenzo",
        quantity:1,
        quantitySold:1,
        part:"444444476753",
        price:4,
        location:"D2_6_3",
        purchasedFrom:"Micro center"
    },
    "Type-C-to-USB-3-Adapter ":{
        name:"USB-C Adapter Type-C to USB 3.0 Adapter",
        brand:"Google",
        quantity:2,
        quantitySold:1,
        location:"D2_1_5",
        purchasedFrom:"Google store"
    },
    "872911":{
        name:"150g Micro Switch - Heavy Touch",
        brand:"Zippy",
        quantity:5,
        quantitySold:1,
        part:"10345020",
        price:1.29,
        location:"D2_5_1",
        purchasedFrom:"Micro center"
    },
    "ls-00041":{
        name:"High Torque Electric Motor (6V)",
        brand:"OSEPP",
        quantity:1,
        quantitySold:1,
        part:"375-LS-00041",
        price:24.95,
        location:"D2_6_1",
        purchasedFrom:"Micro center"
    },
    "SENSEHAT":{
        name:"RASPBERRYPI-SENSEHAT -  Raspberry Pi Sense HAT with Orientation, Pressure, Humidity and Temperature Sensors",
        brand:"RASPBERRY-PI",
        quantity:1,
        quantitySold:1,
        part:"\t49Y7569",
        price:30.00,
        location:"D2_6_2",
    },
    "X000ZQREBX":{
        name:"AIRSUNNY three Legs 5 pairs Infrared Diode LED IR Emission and Receiver",
        brand:"AIRSUNNY",
        quantity:5,
        quantitySold:5,
        part:"OSEPP-IRR-01",
        price:7.99,
        location:"D2_1_2",
    },
    "422253":{
        name:"Keyes Arduino Pro Mini Board 5V",
        brand:"Inland",
        type:"PRO MINI 5V",
        price:3.99,

        items:[
            {
                quantity:4,
                type:"With pin",
                location:"D2_2_1"
            },
            {
                quantity:1,
                type:"Without pin",
                location:"D2_2_1"
            },

        ]
    },
    "VMA303":{
        name:"SOIL MOISTURE SENSOR + WATER LEVEL SENSOR",
        brand:"velleman",
        price:5.99,
        items:[
            {
                name:"WATER SENSOR",
                location:"D2_7_2",
            },
            {
                name:"MOISTURE SENSOR",
                location:"D2_7_2",
            }
        ]
    }
}
export default inventory
