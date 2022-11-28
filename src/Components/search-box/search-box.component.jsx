import {Component} from "react";
import './search-box.component.css'
class SearchBox extends Component{
    render(){
        const {onChangeHandler} = this.props;
        return(
            <input className={`search-box ${this.props.className}`} type="search" placeholder={this.props.placeholder} onChange={onChangeHandler}></input>
        )
    }
}
export default SearchBox