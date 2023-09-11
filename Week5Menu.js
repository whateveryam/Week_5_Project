// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.


// Movies and characters in those movies 


class Character {
    constructor (name, actor) {
        this.name = name; 
        this.actor = actor;
    }

    describe() {
        return `${this.name} was played by ${this.actor}. `;
     }
}

class Movie {
    constructor (name) {
        this.name = name;
        this.characters = [];
    }
    addCharacter (character) {
        if (character instanceof Movie) {
            this.characters.push(character);
        } else {
            throw new Error (`You can only add instance of Character, duh. Argument is not a character: ${character}`);
        }
    }

    describe() {
        return `${this.name} has ${this.characters.length} characters`;
    }
}

class Menu {
    constructor () {
        this.movies = [];
        this.selectedMovie = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createMovie();
                    break;
                case '2':
                    this.viewMovie();
                    break;
                case '3':
                    this.deleteMovie();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('See ya');
    }
    showMainMenuOptions() {
        return prompt(` 
        0) Exit
        1) Create a new Movie :)
        2) View a Movie
        3) Delete a Movie :(
        `)
    }

showMovieMenuOptions(movieInfo) {
    return prompt (`
    0) Back
    1) Create Character
    2) Delete Character
    -----------------------
    ${movieInfo}
    `);
}

    createMovie() {
        let name = prompt ('Enter a movie title...if you dare')
        this.movies.push(new Movie(name));
    }

    viewMovie() {
        let index = prompt('Enter the index RIGHT NOW');
        if (index > -1 && index < this.movies.length) {
            this.selectedMovie = this.movies[index];
            let description = 'Movie Name: ' + this.selectedMovie.name + '\n';
            
            for(let i=0; i < this.selectedMovie.characters.length; i++) {
                description += i + ' ) ' + this.selectedMovie.characters[i].name
                 + ' - ' + this.selectedMovie.characters[i].actor + '\n';
            }

            let selection = this.showMovieMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCharacter();
                    break;
                case '2':
                    this.deleteCharacter();
                    break;
            }
        }
    }

    deleteMovie() {
        let index = prompt('Enter the index of the Movie to delete. :(');
        if (index > -1 && index < this.teams.length) {
            this.movies.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();





// I basically had to go back and rewrite my
// whole code because I got my curly braces all messed up and literally could not fix it. 
// But the code above looks pretty beautiful if I do say myself. And I do. 

// Okay, but actually, it might not be working properly since the menu doesn't come back up???



   
//     showMovieMenuOptions(movieInfo) {
//     return prompt (`
//     0) Back
//     1) Add a new character
//     2) Delete a character
//     -------------
//     ${movienInfo}
//     `);
// }

// createMovie() {
//     let name = prompt ('Enter name for new Movie :)');
//     this.movies.push(new Movie(name));
// }


// //THIS IS CONFUSING.......
// viewMovie () {
// let index = prompt ('Enter the index of the Movie you want to view');
// if (index > -1 && index < this.movies[index]) {
//     this.selectedMovie = this.movies[index];
//     let description ='Movie Name: ' + this.selectedMovie.name + '/n'; 
//     description += ' ' + this.selectedMovie.describe() + '/n' }
// for (let i= 0; i < this.selectedMovie.characters.length; i++) {
//     description += i + ' )' + this.selectedMovie.characters[i].describe() + '/n';
// }
// let section1= this.showMovieMenuOptions (description);
//     switch (selection1) {
//         case '1' :
//         this.createCharacter();
//         break;
//         case '2' :
//         this.deleteCharacter();

//     }
// }

// ///I need assistance with the code above. It is not completed but I am depleated LOLOLOL *sweating*

// deleteMovie() {
//     let index = prompt('Enter the index of the movie you want to KILL....just kidding. What movie do you want to delete?');
//     if (index> -1 && index < this.movies.length) {
//         this.movies.splice(index, 1);
//     }
// }