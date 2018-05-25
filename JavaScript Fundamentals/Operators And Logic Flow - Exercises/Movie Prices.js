// Write a JS function that calculates the prices of certain movies for certain days

function tickets(movieTitle, day) {
    let movies = movieTitle.ToLowerCase();
    //Turning the input into lower case, so that I avoid any character casing mistakes
    if (movies === "the godfather") {
        switch (day) {
            case "monday":
                return 12;
                break;
            case "tuesday":
                return 10;
                break;
            case "wednesday":
                return 15;
                break;
            case "thursday":
                return 12.50
                break;
            case 'friday':
                return 15;
                break;
            case "saturday":
                return 25;
                break;
            case "sunday":
                return 30;
                break;
                default : return "error";

        } 
    } else if (movies === "schindler's list")  {
        switch (day) {
            case "monday":
                return 8.50;
                break;
            case "tuesday":
                return 8.50;
                break;
            case "wednesday":
                return 8.50;
                break;
            case "thursday":
                return 8.50
                break;
            case 'friday':
                return 8.50;
                break;
            case "saturday":
                return 15;
                break;
            case "sunday":
                return 15;
                break;
                default : return "error";

        }  
    } else if(movies === "casablanca") {
        switch (day) {
            case "monday":
                return 8;
                break;
            case "tuesday":
                return 8;
                break;
            case "wednesday":
                return 8;
                break;
            case "thursday":
                return "12.50"
                break;
            case 'friday':
                return 8;
                break;
            case "saturday":
                return 10;
                break;
            case "sunday":
                return 10;
                break;
                default : return "error";

        } 
    } else if (movies === "the wizard of oz") {
        switch (day) {
            case "monday":
                return 10;
                break;
            case "tuesday":
                return 10;
                break;
            case "wednesday":
                return 10;
                break;
            case "thursday":
                return 10
                break;
            case 'friday':
                return 10;
                break;
            case "saturday":
                return 15;
                break;
            case "sunday":
                return 15;
                break;
                default : return "error";

        } 
    } else {
        return "error";
    }
}