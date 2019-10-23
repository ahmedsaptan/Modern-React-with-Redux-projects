import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {

    state = {
        images: []
    }
    onSeacrhSubmit = async (term) => {
        try {
            const cars = await unsplash.get(`/search/photos`, {
                params: { query: term }
            })

            console.log(cars)
            this.setState({ images: cars.data.results })
        }
        catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSeacrhSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App