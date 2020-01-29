import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState({employees: _employees})
    })
    .catch(err => console.log(err))
  }
  render(){
  return (
    // <div className="App container">
    //   <h1>Sogeti Employee Directory</h1>
    //   <div className="row" >
    //   {this.state.employees.map((employee, index) => {
    //     return (
    //       <div key={index} className="media col-12 mb-4 p-3 dir-entry ">
    //         <img src={employee.image} className="mr-3 dir-image" alt="..."/>
    //         <div className="media-body" >
    //           <h4 className="mt-0" >{employee.name}</h4>
    //           <h6 className="mt-0" >{employee.location}</h6>
    //         </div>
    //       </div>
    //     )
    //   })}
    // </div>
    // </div>
    <div id="carouselExampleCaptions" className="carousel slide dir-carousel" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.ebayimg.com/images/g/pHYAAOSwqn1eGM1H/s-l640.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  ) 
}
}

export default App;
