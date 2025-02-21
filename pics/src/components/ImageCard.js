import React from "react";


class ImageCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = { spans: 0 }
        this.imageRef = React.createRef();

    }

    componentDidMount() {
        const height = this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const h = this.imageRef.current.clientHeight;
        const spans = Math.ceil(h / 10)
        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}


export default ImageCard;