import React, { Component, Fragment } from 'react';
import StyledFooter from '../styled/StyledFooter';
import StyledHeader from '../styled/StyledHeader';
import StyledHeaderTitle from '../styled/StyledHeaderTitle';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll';
import StyledLargeButton from '../styled/StyledLargeButton';
import StyledLoader from '../styled/StyledLoader';
import Movie from './Movie';
import HelpMenuContainer from '../containers/HelpMenuContainer';


class Movies extends Component {
    
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return (
            <Fragment>
                <StyledHeader>
                    <HelpMenuContainer/>
                    <StyledHeaderTitle>
                        The Movie Recommeder
                    </StyledHeaderTitle>
                    <FontAwesomeIcon icon="search" />
                </StyledHeader>
                <StyledHorizontalScroll>
                    {this.props.loading ?
                        <StyledLoader/> :
                        this.props.movies.map(movie => (
                            <Movie
                                key={movie.id}
                                name={movie.name}
                                poster={movie.poster}
                                duration={movie.duration}
                                year={movie.year}
                            />
                        ))
                    }
                </StyledHorizontalScroll>
                <StyledFooter>
                    <StyledLargeButton>
                        Get Recommended Movies
                    </StyledLargeButton>
                </StyledFooter>
            </Fragment>
        );
    }
}

export default Movies;