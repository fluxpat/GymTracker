import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';
import AddExercise from './AddExercise';

class DynamicMoviesList extends Component {
    constructor(){
        super();
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 },
            ],
            showOscarAwarded: false // <== add
        }
    }
    
    toggleMovies = () => {
        this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
    }

    deleteMovieHandler = (movieIndex) => {
        const moviesCopy = [...this.state.movies];
        moviesCopy.splice(movieIndex, 1);
        this.setState({
            movies: moviesCopy
        })
    }

    // filteredMovies;

    addMovieHandler = () => {
        const moviesCopy = [...this.state.movies];
        moviesCopy.push({ title: 'Harry Potter', director: 'Patrick Cho', hasOscars: false });
        this.setState({
            movies: moviesCopy
        })
    }

    addMovieHandler = () => {
        const moviesCopy = [...this.state.movies];
        moviesCopy.push({ title: 'Harry Potter', director: 'Patrick Cho', hasOscars: false });
        this.setState({
            movies: moviesCopy
        })
    }

    addExerciseHandler = (theExercise) => {
        const moviesCopy = [...this.state.movies];
        moviesCopy.push(theExercise);
        this.setState({
            movies: moviesCopy
        })
    }

    render() {
        console.log(this.state.movies);

        const {showOscarAwarded} = this.state;
 
        this.filteredMovies = this.state.movies.filter(theMovie => 
            theMovie.hasOscars === showOscarAwarded);

        return (
            <div>
                <AddExercise addExercise={this.addExerciseHandler} />

                {
                    this.filteredMovies.map((oneMovie, index) => {
                        return <ImprovedCard key={index} {...oneMovie} 
                        clickToDelete={() => this.deleteMovieHandler(index)} 
                        clickToAdd={() => this.addMovieHandler()}
                        />
                    })
                }       

                {/* {this.state.movies.map((el, index) => 
                    <ImprovedCard {...el} key={index} 
                    clickToDelete={() => this.deleteMovieHandler(index)}
                    clickToAdd={() => this.addMovieHandler()}
                    />
                )} */}

                <button onClick={() => this.toggleMovies() }>
                    {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
                </button>
            </div>
        )
    }
}

export default DynamicMoviesList;