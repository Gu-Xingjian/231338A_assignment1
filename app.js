const tripModule = require('./Trip.js');

console.log("Starting the trip.com application");
console.log("Description:", tripModule.description);
console.log("\n");

//Function1: Search for hotels
console.log("======================")
console.log("Function 1: Search Hotel");
console.log("======================")
var result1 = tripModule.SearchHotel("Hotel", "Singapore");
console.log(JSON.stringify(result1, null, 2));
console.log("\n");

//Function2: Search for rooms in a hotel
console.log("======================")
console.log("Function 2: Search Rooms");
console.log("======================")
var rooms = tripModule.SearchRoom("Hotel Boss");
console.log(JSON.stringify(rooms, null, 2));
console.log("\n");

//Function3: Display hotels with their rooms (with filters)
console.log("======================")
console.log("Function 3: Display Hotels with Rooms and Filters");
console.log("======================")
var display = tripModule.DisplayHotelsWithRooms({ country: "Singapore", status: "A" });
console.log(JSON.stringify(display, null, 2));
console.log("\n");

//Function4: Book a room
console.log("======================")
console.log("Function 4: Book Room");
console.log("======================")
var booking = tripModule.BookRoom("Hotel Boss", "407", "2024-01-15");
console.log(booking);
console.log("\n");

//Function5: View all booking records
console.log("======================")
console.log("Function 5: View Booking Records");
console.log("======================")
var records = tripModule.ViewBookRecords();
console.log(JSON.stringify(records, null, 2));
console.log("\n");

//Function6: Cancel a booking
console.log("======================")
console.log("Function 6: Cancel Booking");
console.log("======================")
var cancel = tripModule.CancelBooking("Hotel Boss", "407");
console.log(cancel);
console.log("\n");

//Function7: Insert a new room to a hotel
console.log("======================")
console.log("Function 7: Insert New Room");
console.log("======================")
var insertRoom = tripModule.InsertRoom("Hotel Boss", "410", "4");
console.log(insertRoom);
console.log("\n");

//Function8: Delete a room from a hotel
console.log("======================")
console.log("Function 8: Delete Room");
console.log("======================")
var deleteRoom = tripModule.DeleteRoom("Twin Towers Hotel", "1304");
console.log(deleteRoom);
console.log("\n");

//Function9: Switch a room's status
console.log("======================")
console.log("Function 9: Switch Room Status");
console.log("======================")
var switchStatus = tripModule.SwitchRoomStatus("Hotel Boss", "409", "A");
console.log(switchStatus);
console.log("\n");

console.log("Application testing completed!");
