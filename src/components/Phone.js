import React, { Component } from 'react'
import '../stylesheets/main.scss'
class Phone extends Component {
    render () {
        return (
            <div>
                 <span className='fa fa-phone fa-lg'></span>
                 &nbsp;
                 <span className='fa fa-whatsapp fa-lg'></span>
                 <b>&nbsp;&nbsp;+7(702)361-61-67</b>
                 <br/>
                 
            </div>
        )
    }
}

export default Phone