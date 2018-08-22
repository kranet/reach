import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
    render() {
        return (
            <div>deez nutz!{this.props.name}</div>
        )
    }
}


    ReactDOM.render(<HelloWorld name="r tastyz"/>, document.getElementById('container'));