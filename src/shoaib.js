import React, {Component} from 'react';
import Button from '@material-ui/core/Button'

class Shoaib extends Component {

    render() {
        let header = <h1>Muhammad Shoaib Manzoor</h1>;
        
        let myDiv = <div>
          {header}
          <Button variant="contained" color="primary" onClick={this.handleClick}>
              Go to Article
          </Button>
        </div>
        return (
            myDiv
        ); 
    }

    handleClick() {
        window.location.assign('https://www.economist.com/graphic-detail/2020/04/11/why-a-study-showing-that-covid-19-is-everywhere-is-good-news');
    }
}
export default Shoaib;