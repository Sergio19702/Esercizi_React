import { Component } from "react";

class ImageComponent extends Component {
    render(){
        return <img src={this.props.imgName} alt={this.props.imgAlt} />
    }
}
export default ImageComponent;