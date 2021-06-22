import { Component } from 'react'
import ItemList from './components/ItemList'
import './App.css';

export default class App extends Component {

  state = {
    items: []
  }

  // The reason for the funky fetch:
  /*
    I noticed I had to use an optional argument for the fetch method, being {mode: 'cors'}
    in order to get a response from the server.  I noticed that if I re-loaded the page, sometimes I 
    wouldn't get any response.  Through testing, I found if I hit the API from my computer once with
    no-cors, I could change the option back to cors, then get a response.
  */
  funkyFetch = () => {
    fetch("http://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json", { mode: 'no-cors' })
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data.groups })
      })
      .catch(error => console.log(error.message))

    if (this.state.items.length < 1) {
      fetch("http://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json", { mode: 'cors' })
        .then(res => res.json())
        .then(data => {
          this.setState({ items: data.groups })
        })
        .catch(error => console.log(error.message))
    }
  }

  componentDidMount() {
    this.funkyFetch()
  }

  render() {
    return (
      <div className="App">
        {/* <Header></Header> */}
        {this.state.items[0] !== undefined ?
          <ItemList items={this.state.items}></ItemList> :
          <p style={{ textAlign: 'center' }}> {`Loading...`} </p>}
        {/* <Footer></Footer> */}
      </div>
    )
  }
}