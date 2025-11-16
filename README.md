# GuXingjian_Trip.js - Hotel and Room Management Module

This is a Node.js module for managing hotels and rooms, inspired by Trip.com. It provides functionality for searching hotels, managing room bookings, and performing administrative tasks on hotel rooms.

## Module Description

This module simulates a hotel booking system with the following features:
- Search for hotels by name and country
- Search for rooms in specific hotels
- Display hotels with rooms and apply various filters
- Book and cancel room reservations
- Add, delete, and manage room status
- View booking records

## Setup

1. Clone or download this repository to your local machine.

2. Ensure you have Node.js installed on your system. You can check by running:
   \`\`\`
   node --version
   \`\`\`

3. No additional npm packages are required for this module.

4. The module file is named `GuXingjian_Trip.js` (or `Trip.js`).

## Usage

To use this module in your application, require it in your JavaScript file:

\`\`\`javascript
const tripModule = require('./Trip.js');
\`\`\`

## Available Functions

### Function 1: SearchHotel(name, country)

Searches for hotels based on name and country.

**Parameters:**
- `name` (String): Hotel name or partial name to search for
- `country` (String): Country name or partial country name

**Returns:** Array of hotel objects matching the search criteria

**Example:**
\`\`\`javascript
var result = tripModule.SearchHotel("Hotel", "Singapore");
console.log(JSON.stringify(result, null, 2));
\`\`\`

---

### Function 2: SearchRoom(hotelName)

Searches for all rooms in a specific hotel.

**Parameters:**
- `hotelName` (String): Name of the hotel

**Returns:** Array of room objects in the specified hotel

**Example:**
\`\`\`javascript
var rooms = tripModule.SearchRoom("Hotel Boss");
console.log(JSON.stringify(rooms, null, 2));
\`\`\`

---

### Function 3: DisplayHotelsWithRooms(filters)

Displays all hotels with their rooms and applies optional filters.

**Parameters:**
- `filters` (Object): Optional filter object with the following properties:
  - `country` (String): Filter by country
  - `minRating` (Number): Minimum hotel rating
  - `status` (String): Room status ("A" = Available, "O" = Occupied, "M" = Maintenance)
  - `minPeople` (Number): Minimum people capacity
  - `maxPeople` (Number): Maximum people capacity

**Returns:** Array of objects containing hotel information and filtered rooms

**Example:**
\`\`\`javascript
var display = tripModule.DisplayHotelsWithRooms({ 
    country: "Singapore", 
    status: "A" 
});
console.log(JSON.stringify(display, null, 2));
\`\`\`

---

### Function 4: BookRoom(hotelName, roomId, date)

Books a room in a hotel for a specific date.

**Parameters:**
- `hotelName` (String): Name of the hotel
- `roomId` (String): Room ID to book
- `date` (String): Booking date (format: "YYYY-MM-DD")

**Returns:** String message indicating booking success or failure

**Example:**
\`\`\`javascript
var booking = tripModule.BookRoom("Hotel Boss", "407", "2024-01-15");
console.log(booking);
\`\`\`

---

### Function 5: ViewBookRecords()

Displays all booking records.

**Parameters:** None

**Returns:** Array of all booking records

**Example:**
\`\`\`javascript
var records = tripModule.ViewBookRecords();
console.log(JSON.stringify(records, null, 2));
\`\`\`

---

### Function 6: CancelBooking(hotelName, roomId)

Cancels a booking and changes room status back to available.

**Parameters:**
- `hotelName` (String): Name of the hotel
- `roomId` (String): Room ID to cancel

**Returns:** String message indicating cancellation success or failure

**Example:**
\`\`\`javascript
var cancel = tripModule.CancelBooking("Hotel Boss", "407");
console.log(cancel);
\`\`\`

---

### Function 7: InsertRoom(hotelName, roomId, people)

Adds a new room to an existing hotel.

**Parameters:**
- `hotelName` (String): Name of the hotel
- `roomId` (String): New room ID
- `people` (String/Number): Maximum number of people the room can accommodate

**Returns:** String message indicating insertion success or failure

**Example:**
\`\`\`javascript
var insertRoom = tripModule.InsertRoom("Hotel Boss", "410", "4");
console.log(insertRoom);
\`\`\`

---

### Function 8: DeleteRoom(hotelName, roomId)

Deletes a room from a hotel (cannot delete occupied rooms).

**Parameters:**
- `hotelName` (String): Name of the hotel
- `roomId` (String): Room ID to delete

**Returns:** String message indicating deletion success or failure

**Example:**
\`\`\`javascript
var deleteRoom = tripModule.DeleteRoom("Twin Towers Hotel", "1304");
console.log(deleteRoom);
\`\`\`

---

### Function 9: SwitchRoomStatus(hotelName, roomId, newStatus)

Changes a room's status between Available (A) and Maintenance (M). Cannot change status of occupied rooms.

**Parameters:**
- `hotelName` (String): Name of the hotel
- `roomId` (String): Room ID to update
- `newStatus` (String): New status ("A" = Available, "M" = Maintenance)

**Returns:** String message indicating status change success or failure

**Example:**
\`\`\`javascript
var switchStatus = tripModule.SwitchRoomStatus("Hotel Boss", "409", "A");
console.log(switchStatus);
\`\`\`

---

## Room Status Codes

- **A** - Available: Room is available for booking
- **O** - Occupied: Room is currently booked
- **M** - Maintenance: Room is under maintenance and unavailable

## Running the Test Application

To test all functions, run the provided `app.js` file:

\`\`\`
node app.js
\`\`\`

This will execute one test for each function and display the results in the console.

## Data Structure

The module uses arrays to simulate a database with the following structure:

**Hotels:**
\`\`\`javascript
{ id: Number, name: String, country: String, rating: Number }
\`\`\`

**Rooms:**
\`\`\`javascript
{ id: String, hotel: String, people: Number, status: String }
\`\`\`

**Booking Records:**
\`\`\`javascript
{ hotel: String, roomid: String, date: String }
\`\`\`

## References

- Trip.com - https://www.trip.com/
- GitHub Documentation - Basic Writing and Formatting Syntax: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
- Node.js Module Documentation: https://nodejs.org/api/modules.html

## Author

Gu Xingjian

## License

This project is created for educational purposes as part of EGL301 Assignment 1.
