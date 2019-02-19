const inquirer = require('inquirer');
var moment = require('moment');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [{
            type: "list",
            name:"mainMenuChoice",
            message: "Please choose from an option below:",
            choices: [
                "Add new contact",
                "Get Date",
                "Exit"
            ]
        }
     ];
     this.contacts = [];
    }

    main(){
        console.log('Welcome to AddressBloc!');
        inquirer.prompt(this.mainMenuQuestions).then((response) =>{
            switch(response.mainMenuChoice){
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit();
                    break;
                case "Get Date":
                     this.getDate();
                     break;
                default:
                    console.log("Invalid Input");
                    this.main();  
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    clear(){
        console.log("\x1Bc");
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }
    getDate(){
       var time = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
       console.log(time);
    }

    exit(){
        console.log("Thank you for using AddressBloc!");
        process.exit();
    }

    getContactCount(){
        return this.contacts.length;
    }

    remindMe(){
        return "Learning is a life-long pursuit";
    }   
}