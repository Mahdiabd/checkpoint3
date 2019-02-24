import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
			<div className="box">
				<center>{this.props.name}</center>
				<p>{this.props.des}</p>
				<button>savoir plus</button>
                <img src={this.props.img} className="" alt="" />
                
			</div>
            
		);
	}
}

export default Box;