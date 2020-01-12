import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super();
        this.state = {
            // in real project, data list is empty at the beginning, through fetch to update the state
            robots: [],
            searchField: ''
        }
    }
    // since below hook has been added, and once the state has been updated, the render() runs again; In this case, the robots list goes
    // from an empty array to a robot's list. And the virtual DOM notices there's a difference, and repaints the web browser to include
    // the robots. So the execution order is
    // constructor >> render() >> componentDidMount() >> render()
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    };

    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().indexOf(searchField.toLowerCase()) > -1
            // return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
            // Below if function is to show "Loading" when long time fetching from the web to get the data;

        return (!robots.length) ?
            <h1>Loading</h1> :
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>

                    {/*In React, one thing is called "children", and below <CardList/> is the children of <Scroll></Scroll>*/}
                    {/*"Scroll" can use "children" as a way to render its children*/}
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
    }
}

export default App