import React , {Component} from 'react';
import Cardlist from '../components/cardlist';
import Searchbox from '../components/searchbox';
import './app.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer  from '../components/footer';
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users=> this.setState({robots : users})); 
    }
    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>LOADING........</h1> 
        }
        else{
    return(
        <div className='tc'>
            <h1>ROBOFRIENDS</h1>
            <Searchbox searchChange = {this.onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <Cardlist robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            <Footer/>
        </div>
    );
        }
    }
}
export default App;