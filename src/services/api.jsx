import axios from "axios";

const BASE_URL = "http://192.168.1.6"
const axisosInstance =axios.create({baseURL:BASE_URL})

// Login Authentication method
export const getAuthentication = async(data)=>{
     try {
        console.log(data)
     } catch (error) {
        console.log(error)
     }
}

// Forgot method
export const sendResetOtp=async(data)=>{
    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// Otp verification 
export const Otp_verification=async(data)=>{
    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// New Application
export const New_application = async (data) => {
    try {
        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }
        return {status:200}
    } catch (error) {
        console.log(error);
    }
}

export const Generate_otp=async(data,type)=>{
    try {

       if(type=="Phonenumber"){
        console.log(data,type)
        return {OtpID:917417247}
       }
       else{
        console.log(data,type)
        return {OtpID:91111111}
       }
       
    } catch (error) {
        console.log(error);
    }
}

export const Verify_otp=async(data)=>{
    try {
        console.log(data)
     } catch (error) {
         console.log(error);
     }
}


export const FetchNewOrders=async()=>{
    try {
       const respones = true;

       if(respones){
        return [
            {
               "Id": "51715",
               "address": "#3-77, MG Street, Puttur, Andhra Pradesh - 517583",
               "item": "5 items ~ ₹1,099.99",
               "progress": 40,
               "timestamp": "Received 15 min ago",
             },
             {
                "Id": "51720",
                "address": "#3-77, MG Street, Puttur, Andhra Pradesh - 517583",
                "item": "5 items ~ ₹1,099.99",
                "progress": 40,
                "timestamp": "Received 15 min ago",
              }
           ]
       }
       
     } catch (error) {
         console.log(error);
     }
}


export const Apporved_orders=async()=>{
    try {
       const respones = true;

       if(respones){
        return    [
              {
                "Id": "51712",
                "address": "#1-169, Indian bank Street, G.D.nellore, Chittoor, Andhra Pradesh - 517125",
                "item": "2 items ~ ₹399.84",
                "timestamp": "Received 2 min ago"
              },
              {
                "Id": "51714",
                "address": "#5-111, Temple Road, Chittoor, Andhra Pradesh - 517002",
                "item": "3 items ~ ₹789.56",
                "timestamp": "Received 10 min ago"
              },
              {
                "Id": "51716",
                "address": "#10-18, Market Road, Kuppam, Andhra Pradesh - 517425",
                "item": "4 items ~ ₹699.50",
                "timestamp": "Received 20 min ago"
              },
              {
                "Id": "51718",
                "address": "#10-18, Market Road, Kuppam, Andhra Pradesh - 517425",
                "item": "4 items ~ ₹699.50",
                "timestamp": "Received 20 min ago"
              },
            ]
       }
       
     } catch (error) {
         console.log(error);
     }
}


export const fetchorderbyid=(data)=>{
    try {
        if(data){
            return [ {
                "Id": "51712",
                "address": "#5-111, Temple Road, Chittoor, Andhra Pradesh - 517002",
                "item": "3 items ~ ₹789.56",
                "status":"approved",
                "timestamp": "Received 10 min ago"
              }]
            // return []
        }
        else{
            return null
        }
    } catch (error) {
        console.log(error)
    }
}


export const getnextorders=(PageNumber)=>{
    try {
        if(PageNumber==0){
         return    [
               {
                 "Id": "51712",
                 "address": "#1-169, Indian bank Street, G.D.nellore, Chittoor, Andhra Pradesh - 517125",
                 "item": "2 items ~ ₹399.84",
                 "timestamp": "Received 2 min ago"
               },
               {
                 "Id": "51714",
                 "address": "#5-111, Temple Road, Chittoor, Andhra Pradesh - 517002",
                 "item": "3 items ~ ₹789.56",
                 "timestamp": "Received 10 min ago"
               },
               {
                 "Id": "51716",
                 "address": "#10-18, Market Road, Kuppam, Andhra Pradesh - 517425",
                 "item": "4 items ~ ₹699.50",
                 "timestamp": "Received 20 min ago"
               },
             ]
        }
        else{
            return {status:404,data:"Reached End"}
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const GetOrderById = (id) => {
    const orders = [
        {
            "OrderID": "32132751712",
            "Status": 1,
            "itemcount": 2,
            "GrandPrice": 399.84,
            "Preparationtime": "1800 - 2100",
           "PreparationStarted": "2024-12-23T10:30:56",      
            "DeliveryBoyStatus": "Assigned",
            "itemList": [
                {
                    "type": "veg",
                    "Dishname": "Paneer Butter Masala",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 130
                },
                {
                    "type": "veg",
                    "Dishname": "Butter naan",
                    "DishCategory": "Main Course",
                    "Quantity": 7,
                    "EachPrice": 20
                },
                {
                    "type": "veg",
                    "Dishname": "Paneer Butter Masala",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 130
                },
                {
                    "type": "veg",
                    "Dishname": "Butter naan",
                    "DishCategory": "Main Course",
                    "Quantity": 7,
                    "EachPrice": 20
                }
                , {
                    "type": "veg",
                    "Dishname": "Paneer Butter Masala",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 130
                },
                {
                    "type": "veg",
                    "Dishname": "Butter naan",
                    "DishCategory": "Main Course",
                    "Quantity": 7,
                    "EachPrice": 20
                },
                {
                    "type": "veg",
                    "Dishname": "Paneer Butter Masala",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 130
                },
                {
                    "type": "veg",
                    "Dishname": "Butter naan",
                    "DishCategory": "Main Course",
                    "Quantity": 7,
                    "EachPrice": 20
                }
                , {
                    "type": "veg",
                    "Dishname": "Paneer Butter Masala",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 130
                },
                {
                    "type": "veg",
                    "Dishname": "Butter naan",
                    "DishCategory": "Main Course",
                    "Quantity": 7,
                    "EachPrice": 20
                }

            ]
        },
        {
            "OrderID": "32132751714",
            "Status": 1,
            "itemcount": 3,
            "GrandPrice": 789.56,
            "Preparationtime": "1800 - 2100",
            "PreparationStarted": "2024-12-23T13:55:56", 
            "DeliveryBoyStatus": "Assigned",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Chicken Biryani",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 250
                },
                {
                    "type": "veg",
                    "Dishname": "Paneer Tikka",
                    "DishCategory": "Starter",
                    "Quantity": 2,
                    "EachPrice": 150
                },
                {
                    "type": "veg",
                    "Dishname": "Gulab Jamun",
                    "DishCategory": "Dessert",
                    "Quantity": 4,
                    "EachPrice": 20
                }
            ]
        },
        {
            "OrderID": "32132751716",
            "Status": 2,
            "itemcount": 4,
            "GrandPrice": 699.50,
            "Preparationtime": "1800 - 2100",
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                },
                {
                    "type": "veg",
                    "Dishname": "Spring Rolls",
                    "DishCategory": "Starter",
                    "Quantity": 5,
                    "EachPrice": 20
                },
                
            ]
        },
        {
            "OrderID": "32132751715",
            "Status": 0,
            "itemcount": 4,
            "GrandPrice": 699.50,
            "Preparationtime": "1500 - 2500",
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                },
                {
                    "type": "veg",
                    "Dishname": "Spring Rolls",
                    "DishCategory": "Starter",
                    "Quantity": 5,
                    "EachPrice": 20
                }
            ]
        },
        {
            "OrderID": "32132751720",
            "Status": 0,
            "itemcount": 4,
            "GrandPrice": 699.50,
            "Preparationtime": "1500 - 500",
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                },
                {
                    "type": "veg",
                    "Dishname": "Spring Rolls",
                    "DishCategory": "Starter",
                    "Quantity": 5,
                    "EachPrice": 20
                }
            ]
        },
        {
            "OrderID": "32132751718",
            "Status": 3,
            "itemcount": 4,
            "GrandPrice": 699.50,
            "Preparationtime": "1500 - 1800",
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                },
                {
                    "type": "veg",
                    "Dishname": "Spring Rolls",
                    "DishCategory": "Starter",
                    "Quantity": 5,
                    "EachPrice": 20
                },
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                },
                {
                    "type": "veg",
                    "Dishname": "Spring Rolls",
                    "DishCategory": "Starter",
                    "Quantity": 5,
                    "EachPrice": 20
                }
                ,
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                },
                {
                    "type": "veg",
                    "Dishname": "Spring Rolls",
                    "DishCategory": "Starter",
                    "Quantity": 5,
                    "EachPrice": 20
                }
            ]
        },
        {
            "OrderID": "32132783717",
            "Status": 0,
            "itemcount": 4,
            "Preparationtime": "1800 - 2100",
            "PreparationStarted": "2024-12-24T16:25:56", 
            "TableDetails":{
                "FloorNo": 1,
                "SeatNumber":'B-S1,S2,S3',
                "TotalGuest": 8,
                "Items": 12,
                "Date_timestamp": "2024-12-24",
                "InTiming": "09:00",
                "OutTiming": "10:00",
                "CustomerArrivedIn": 8
            },
            "CustomerDetails":{
                "Name":"Karthikeyan",
                "PhoneNumber":"+91-6301457870",
                "EmailID":"amariyappan.karthikeyan@gmail.com"
            },
            "GrandPrice": 699.50,
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                }
            ]
        },
        {
            "OrderID": "32132783718",
            "Status": 1,
            "itemcount": 4,
            "Preparationtime": "1800 - 2100",
            "PreparationStarted": "2024-12-24T16:25:56", 
            "TableDetails":{
                "FloorNo": 1,
                "SeatNumber":'B-S1,S2,S3',
                "TotalGuest": 8,
                "Items": 12,
                "Date_timestamp": "2024-12-24",
                "InTiming": "09:00",
                "OutTiming": "10:00",
                "CustomerArrivedIn": 8
            },
            "CustomerDetails":{
                "Name":"Karthikeyan",
                "PhoneNumber":"+91-6301457870",
                "EmailID":"amariyappan.karthikeyan@gmail.com"
            },
            "GrandPrice": 699.50,
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                }
            ]
        },
        {
            "OrderID": "32132783719",
            "Status": 2,
            "itemcount": 4,
            "Preparationtime": "1800 - 2100",
            "PreparationStarted": "2024-12-24T16:25:56", 
            "TableDetails":{
                "FloorNo": 1,
                "SeatNumber":'B-S1,S2,S3',
                "TotalGuest": 8,
                "Items": 12,
                "Date_timestamp": "2024-12-24",
                "InTiming": "09:00",
                "OutTiming": "10:00",
                "CustomerArrivedIn": 8
            },
            "CustomerDetails":{
                "Name":"Karthikeyan",
                "PhoneNumber":"+91-6301457870",
                "EmailID":"amariyappan.karthikeyan@gmail.com"
            },
            "GrandPrice": 699.50,
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                }
            ]
        },
        {
            "OrderID": "32132783720",
            "Status": 3,
            "itemcount": 4,
            "Preparationtime": "1800 - 2100",
            "PreparationStarted": "2024-12-24T16:25:56", 
            "TableDetails":{
                "FloorNo": 1,
                "SeatNumber":'B-S1,S2,S3',
                "TotalGuest": 8,
                "Items": 12,
                "Date_timestamp": "2024-12-24",
                "InTiming": "09:00",
                "OutTiming": "10:00",
                "CustomerArrivedIn": 8
            },
            "CustomerDetails":{
                "Name":"Karthikeyan",
                "PhoneNumber":"+91-6301457870",
                "EmailID":"amariyappan.karthikeyan@gmail.com"
            },
            "GrandPrice": 699.50,
            "DeliveryBoyStatus": "Delivered",
            "itemList": [
                {
                    "type": "non-veg",
                    "Dishname": "Mutton Curry",
                    "DishCategory": "Main Course",
                    "Quantity": 1,
                    "EachPrice": 300
                },
                {
                    "type": "veg",
                    "Dishname": "Veg Fried Rice",
                    "DishCategory": "Main Course",
                    "Quantity": 2,
                    "EachPrice": 120
                }
            ]
        }
    ];

    return orders.find(order => order.OrderID.endsWith(id)) || null;
};



export const hotelDetails =()=>{
    return [
        {
            "Opening_time":"04:00",
            "Closing_time":"23:00",
        }
    ]
}


// Dine order initial details
export const getDineOrderslist = (date, time) => {
    console.log(date, time);

    const orders = [
        {
            "Id": "783717",
            "FloorNo": 1,
            "SeatNumber":'B-S1,S2,S3',
            "TotalGuest": 8,
            "Items": 12,
            "Date_timestamp": "2024-12-24",
            "InTiming": "09:00",
            "OutTiming": "10:00",
            "CustomerArrivedIn": 8
        },
        {
            "Id": "783718",
            "FloorNo": 3,
            "SeatNumber":'T-S1',
            "TotalGuest": 4,
            "Items": 5,
            "Date_timestamp": "2024-12-24",
            "InTiming": "09:00",
            "OutTiming": "09:30",
            "CustomerArrivedIn": 10
        },
        {
            "Id": "783719",
            "FloorNo": 1,
            "SeatNumber":'B-S1,S2,S3',
            "TotalGuest": 1,
            "Items": 12,
            "Date_timestamp": "2024-12-24",
            "InTiming": "10:30",
            "OutTiming": "11:00",
            "CustomerArrivedIn": 15
        },
        {
            "Id": "783720",
            "FloorNo": 1,
            "SeatNumber":'B-S1,S2,S3',
            "TotalGuest": 1,
            "Items": 12,
            "Date_timestamp": "2024-12-24",
            "InTiming": "10:30",
            "OutTiming": "11:00",
            "CustomerArrivedIn": 15
        }
    ];

    return orders
};

export const menudetails = () => {
    return {
      "Starters": [
        {
          "id": 1,
          "name": "Crispy Corn",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 2,
          "name": "Veg Manchurian",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 3,
          "name": "Chicken Lollipop",
          "stock": "off",
          "type": "Non-Veg"
        },
        {
          "id": 4,
          "name": "Tandoori Paneer Tikka",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 5,
          "name": "Prawn Tempura",
          "stock": "off",
          "type": "Non-Veg"
        }
      ],
      "Main Course": [
        {
          "id": 6,
          "name": "Paneer Butter Masala",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 7,
          "name": "Butter Chicken",
          "stock": "on",
          "type": "Non-Veg"
        },
        {
          "id": 8,
          "name": "Dal Makhani",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 9,
          "name": "Mutton Rogan Josh",
          "stock": "off",
          "type": "Non-Veg"
        },
        {
          "id": 10,
          "name": "Mix Veg Curry",
          "stock": "on",
          "type": "Veg"
        }
      ],
      "Meals": [
        {
          "id": 11,
          "name": "South Indian Thali",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 12,
          "name": "North Indian Thali",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 13,
          "name": "Mini Meal Box",
          "stock": "off",
          "type": "Veg"
        },
        {
          "id": 14,
          "name": "Rajma Chawal Combo",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 15,
          "name": "Fish Curry Meal",
          "stock": "off",
          "type": "Non-Veg"
        }
      ],
      "Combos": [
        {
          "id": 16,
          "name": "Burger and Fries Combo",
          "stock": "on",
          "type": "Non-Veg"
        },
        {
          "id": 17,
          "name": "Pasta and Garlic Bread",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 18,
          "name": "Pizza and Coke",
          "stock": "off",
          "type": "Veg"
        },
        {
          "id": 19,
          "name": "Rice and Curry Combo",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 20,
          "name": "Kebab Platter",
          "stock": "off",
          "type": "Non-Veg"
        }
      ],
      "Curries": [
        {
          "id": 21,
          "name": "Kadai Paneer",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 22,
          "name": "Chicken Chettinad",
          "stock": "on",
          "type": "Non-Veg"
        },
        {
          "id": 23,
          "name": "Malai Kofta",
          "stock": "off",
          "type": "Veg"
        },
        {
          "id": 24,
          "name": "Palak Paneer",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 25,
          "name": "Egg Curry",
          "stock": "on",
          "type": "Non-Veg"
        }
      ],
      "Biryanis": [
        {
          "id": 26,
          "name": "Hyderabadi Chicken Biryani",
          "stock": "on",
          "type": "Non-Veg"
        },
        {
          "id": 27,
          "name": "Veg Dum Biryani",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 28,
          "name": "Mutton Biryani",
          "stock": "off",
          "type": "Non-Veg"
        },
        {
          "id": 29,
          "name": "Prawns Biryani",
          "stock": "on",
          "type": "Non-Veg"
        },
        {
          "id": 30,
          "name": "Egg Biryani",
          "stock": "off",
          "type": "Non-Veg"
        }
      ],
      "Quick Bite": [
        {
          "id": 31,
          "name": "Samosa",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 32,
          "name": "Sandwich",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 33,
          "name": "Spring Rolls",
          "stock": "off",
          "type": "Veg"
        },
        {
          "id": 34,
          "name": "French Fries",
          "stock": "on",
          "type": "Veg"
        },
        {
          "id": 35,
          "name": "Onion Rings",
          "stock": "off",
          "type": "Veg"
        }
      ]
    };
  };
  

export const tablelisted = async() =>{
  return {
    "Floor ~ 1": [
      {
        "2 Seater": [
          {
            "id": 1,
            "TableNo": "T1/S1",
            "Seater": 2,
            "Available": true
          },
          {
            "id": 2,
            "TableNo": "T2/S1",
            "Seater": 2,
            "Available": false
          }
        ]
      },
      {
        "4 Seater": [
          {
            "id": 3,
            "TableNo": "T3/S1",
            "Seater": 4,
            "Available": true
          },
          {
            "id": 4,
            "TableNo": "T4/S1",
            "Seater": 4,
            "Available": false
          }
        ]
      },
      {
        "8 Seater": [
          {
            "id": 5,
            "TableNo": "T5/S1",
            "Seater": 8,
            "Available": true
          },
          {
            "id": 6,
            "TableNo": "T6/S1",
            "Seater": 8,
            "Available": false
          }
        ]
      }
    ],
    "Floor ~ 2": [
      {
        "2 Seater": [
          {
            "id": 7,
            "TableNo": "T1/S2",
            "Seater": 2,
            "Available": true
          },
          {
            "id": 8,
            "TableNo": "T2/S2",
            "Seater": 2,
            "Available": true
          }
        ]
      },
      {
        "4 Seater": [
          {
            "id": 9,
            "TableNo": "T3/S2",
            "Seater": 4,
            "Available": false
          },
          {
            "id": 10,
            "TableNo": "T4/S2",
            "Seater": 4,
            "Available": true
          }
        ]
      },
      {
        "8 Seater": [
          {
            "id": 11,
            "TableNo": "T5/S2",
            "Seater": 8,
            "Available": true
          },
          {
            "id": 12,
            "TableNo": "T6/S2",
            "Seater": 8,
            "Available": false
          }
        ]
      }
    ],
    "Floor ~ 3": [
      {
        "2 Seater": [
          {
            "id": 13,
            "TableNo": "T1/S3",
            "Seater": 2,
            "Available": false
          },
          {
            "id": 14,
            "TableNo": "T2/S3",
            "Seater": 2,
            "Available": true
          }
        ]
      },
      {
        "4 Seater": [
          {
            "id": 15,
            "TableNo": "T3/S3",
            "Seater": 4,
            "Available": true
          },
          {
            "id": 16,
            "TableNo": "T4/S3",
            "Seater": 4,
            "Available": true
          }
        ]
      },
      {
        "8 Seater": [
          {
            "id": 17,
            "TableNo": "T5/S3",
            "Seater": 8,
            "Available": false
          },
          {
            "id": 18,
            "TableNo": "T6/S3",
            "Seater": 8,
            "Available": true
          }
        ]
      }
    ]
  }
  
}


export const bankapi=()=>{
  return  [
    {
      "name": "State Bank of India",
      "logo_url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/2560px-State_Bank_of_India_logo.svg.png"
    },
    {
      "name": "HDFC Bank",
      "logo_url": "https://www.shutterstock.com/image-vector/hdfc-bank-logo-vector-indian-260nw-2351748935.jpg"
    },
    {
      "name": "ICICI Bank",
      "logo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png"
    },
    {
      "name": "Axis Bank",
      "logo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png"
    },
    {
      "name": "Punjab National Bank",
      "logo_url": "https://static.vecteezy.com/system/resources/previews/019/909/650/non_2x/punjab-national-bank-transparent-pnb-free-free-png.png"
    },
    {
      "name": "Bank of Baroda",
      "logo_url": "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-logo.jpg"
    },
    {
      "name": "Kotak Mahindra Bank",
      "logo_url": "https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png"
    },
    {
      "name": "Canara Bank",
      "logo_url": "https://i.pinimg.com/originals/0e/17/ea/0e17eaf90cfd6de3c7aa52437a2b7ee4.png"
    },
    {
      "name": "Union Bank of India",
      "logo_url": "https://cdn.freebiesupply.com/logos/large/2x/union-bank-of-india-logo-png-transparent.png"
    },
    {
      "name": "IndusInd Bank",
      "logo_url": "https://www.indusind.com/content/dam/indusind-platform-images/mediabrand/IndusIndBankJPEGlogo.jpg"
    }
  ]  
}


export const  registered_Bank_details = ()=>{
  return [
    {
      ID:100123,
      BankName:"ICIC Bank",
      BankURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png",
      AccountNo:"65458555565",
      IFSCCode:"IDIG0011001",
      HolderName:"John",
      Primary:true
    },
    {
      ID:1002910,
      BankName:"AXIS Bank",
      BankURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png",
      AccountNo:"65458555565",
      IFSCCode:"IDIG00110013",
      HolderName:"Jack",
      Primary:false
    }
  ]
}