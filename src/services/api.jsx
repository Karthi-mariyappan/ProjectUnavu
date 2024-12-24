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

