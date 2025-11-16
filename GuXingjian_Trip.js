console.log("Welcome to Trip.com. How may I help you?");

module.exports = {
    description : "This is Trip.com's function",
    
    //The simulated database
    hotels: [
        { id: 1, name: "Hotel Boss", country: "Singapore",  rating: 8.3 },
        { id: 2, name: "Mercure ICON Singapore City Centre", country: "Singapore",  rating: 8.8 },
        { id: 3, name: "Twin Towers Hotel", country: "Thailand",  rating: 8.6 },
        { id: 4, name: "Hotel Chalet Shanghai", country: "China",  rating: 9.5 },
    ],
    rooms:[
        {id: "407", hotel:  "Hotel Boss", people:2, status:"A"},
        {id: "408", hotel:  "Hotel Boss", people:2, status:"O"},
        {id: "409", hotel:  "Hotel Boss", people:2, status:"M"},
        {id: "1201", hotel:  "Twin Towers Hotel", people:4, status:"A"},
        {id: "1302", hotel:  "Twin Towers Hotel", people:6, status:"O"},
        {id: "1304", hotel:  "Twin Towers Hotel", people:6, status:"M"},
        {id: "1305", hotel:  "Hotel Chalet Shanghai", people:2, status:"A"},
    ],
    bookRecords:[
    ],

    //Function 1: Search for hotels according to the name and country provided by user.
    SearchHotel: function(na, co){
        var name = na.toUpperCase();
        var country = co.toUpperCase();
        var result = [];

        for (var i = 0; i < this.hotels.length; i++){
            if (this.hotels[i].name.toUpperCase().includes(name) && this.hotels[i].country.toUpperCase().includes(country)){
                result[result.length] = this.hotels[i];
            }
        }
        
        return(result);
    },

    //Function2: Search for all rooms in a hotel
    SearchRoom: function(ho){
        if(ho != ""){
            var hotel = ho.toUpperCase();
            var result = [];

            for (var i = 0; i < this.rooms.length; i++){
                if (this.rooms[i].hotel.toUpperCase().includes(hotel)){
                    result[result.length] = this.rooms[i];
                }
            }

            return(result);
        }else{
            return("Please enter the hotel name.")
        }
    },

    //Function3: Display all hotels with their rooms and apply filters
    DisplayHotelsWithRooms: function(filters = {}){
        var result = [];
        
        
        var filteredHotels = this.hotels;
        
        if(filters.country){
            var filterCountry = filters.country.toUpperCase();
            filteredHotels = filteredHotels.filter(hotel => 
                hotel.country.toUpperCase().includes(filterCountry)
            );
        }
        
        if(filters.minRating){
            filteredHotels = filteredHotels.filter(hotel => 
                hotel.rating >= filters.minRating
            );
        }
        
        
        for(var i = 0; i < filteredHotels.length; i++){
            var hotel = filteredHotels[i];
            var hotelRooms = [];
            
            
            for(var j = 0; j < this.rooms.length; j++){
                if(this.rooms[j].hotel === hotel.name){
                    var room = this.rooms[j];
                    
                   
                    var includeRoom = true;
                    
                    if(filters.status && room.status !== filters.status){
                        includeRoom = false;
                    }
                    
                    if(filters.minPeople && room.people < filters.minPeople){
                        includeRoom = false;
                    }
                    
                    if(filters.maxPeople && room.people > filters.maxPeople){
                        includeRoom = false;
                    }
                    
                    if(includeRoom){
                        hotelRooms.push(room);
                    }
                }
            }
            
            result.push({
                hotel: hotel,
                rooms: hotelRooms,
                totalRooms: hotelRooms.length
            });
        }
        
        return result;
    },

    //Function4: Book a room from a hotel.
    BookRoom: function(ho, id, da){
         if(ho != "" && id != "" && da != ""){
            var hotel = ho.toUpperCase();
            var roomid = id.toUpperCase();
            var date = da;

            var found = false;

            for (var i = 0; i < this.rooms.length; i++){
                if (this.rooms[i].hotel.toUpperCase() == hotel && this.rooms[i].id.toUpperCase() == roomid && this.rooms[i].status == "A"){
                    this.bookRecords[this.bookRecords.length] = {
                        hotel: this.rooms[i].hotel,
                        roomid: this.rooms[i].id,
                        date: date
                    };
                    this.rooms[i].status = "O";
                    found = true;
                    break;
                }
            }

            if(found){
                return("Booking success. You may now view your booking records.")
            }else{
                return("Your booking is not success. You may try again later.")
            }
        }else{
            return("Please provide the hotel name, room id, and the date of booking.")
        }
    },

    //Function5: View all booking records
    ViewBookRecords: function(){
        return(this.bookRecords)
    },

    //Function6: Cancel a booking
    CancelBooking: function(ho, id){
        if(this.bookRecords.length == 0){
            return("There is no booking records.")
        }else if(ho != "" && id != ""){
            var hotel = ho.toUpperCase();
            var roomid = id.toUpperCase();
            
            for (var i = 0; i < this.bookRecords.length; i++){
                if (this.bookRecords[i].hotel.toUpperCase() == hotel && this.bookRecords[i].roomid.toUpperCase() == roomid){
                    this.bookRecords.splice(i, 1);
                    
                   
                    for (var j = 0; j < this.rooms.length; j++){
                        if (this.rooms[j].hotel.toUpperCase() == hotel && this.rooms[j].id.toUpperCase() == roomid && this.rooms[j].status == "O"){
                            this.rooms[j].status = "A";
                        }
                    }
                    return("Cancel booking success.");
                }
            }
            return("Booking record not found.");
        }else{
            return("Please provide the hotel name and room id.")
        }
    },

    //Function7: Insert a new room to a hotel
    InsertRoom: function(ho, id, peo){
        if(ho != "" && id != "" && peo != ""){
            var hotel = ho;
            var roomid = id.toUpperCase();
            var people = parseInt(peo);
            
            // Check if hotel exists
            var hotelExists = false;
            for(var i = 0; i < this.hotels.length; i++){
                if(this.hotels[i].name.toUpperCase() === hotel.toUpperCase()){
                    hotelExists = true;
                    hotel = this.hotels[i].name; // Use the exact hotel name from database
                    break;
                }
            }
            
            if(!hotelExists){
                return("Hotel not found. Please enter a valid hotel name.");
            }
            
            
            for(var j = 0; j < this.rooms.length; j++){
                if(this.rooms[j].hotel.toUpperCase() === hotel.toUpperCase() && this.rooms[j].id.toUpperCase() === roomid){
                    return("Room already exists in this hotel.");
                }
            }
            
            
            this.rooms[this.rooms.length] = {
                id: roomid,
                hotel: hotel,
                people: people,
                status: "A"
            };
            
            return("Room " + roomid + " has been successfully added to " + hotel + ".");
        }else{
            return("Please provide the hotel name, room id, and number of people.");
        }
    },

    //Function8: Delete a room from a hotel
    DeleteRoom: function(ho, id){
        if(ho != "" && id != ""){
            var hotel = ho.toUpperCase();
            var roomid = id.toUpperCase();
            
           
            for(var i = 0; i < this.rooms.length; i++){
                if(this.rooms[i].hotel.toUpperCase() === hotel && this.rooms[i].id.toUpperCase() === roomid){
                    if(this.rooms[i].status === "O"){
                        return("Cannot delete room. Room is currently occupied.");
                    }
                    
                    
                    this.rooms.splice(i, 1);
                    return("Room " + roomid + " has been successfully deleted from " + ho + ".");
                }
            }
            
            return("Room not found in the specified hotel.");
        }else{
            return("Please provide the hotel name and room id.");
        }
    },

    //Function9: Switch a room's status between "A" (Available) and "M" (Maintenance)
    SwitchRoomStatus: function(ho, id, newStatus){
        if(ho != "" && id != "" && newStatus != ""){
            var hotel = ho.toUpperCase();
            var roomid = id.toUpperCase();
            var status = newStatus.toUpperCase();
            
            if(status !== "A" && status !== "M"){
                return("Invalid status. Please use 'A' (Available) or 'M' (Maintenance).");
            }
            
            for(var i = 0; i < this.rooms.length; i++){
                if(this.rooms[i].hotel.toUpperCase() === hotel && this.rooms[i].id.toUpperCase() === roomid){
                    if(this.rooms[i].status === "O"){
                        return("Cannot change status. Room is currently occupied.");
                    }
                    
                    var oldStatus = this.rooms[i].status;
                    this.rooms[i].status = status;
                    
                    var statusName = status === "A" ? "Available" : "Maintenance";
                    return("Room " + roomid + " status has been changed to " + statusName + ".");
                }
            }
            
            return("Room not found in the specified hotel.");
        }else{
            return("Please provide the hotel name, room id, and new status (A or M).");
        }
    }
};

console.log("Trip.com module loaded successfully!");
