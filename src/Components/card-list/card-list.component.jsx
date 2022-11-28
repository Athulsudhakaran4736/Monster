import {Component} from "react";
import './card-list.component.css'
import Cards from "../cards/cards.component";
class CardList extends Component{
    render(){
        
        const {monsters} = this.props;
        return(
            
            <div className="card-list">
                {
                    monsters.map ((monster)=>{
                        
                        return(
                        <Cards monster ={monster}/>
                      )
                    })
                }
                 
            </div>
        )
    }
}
export default CardList