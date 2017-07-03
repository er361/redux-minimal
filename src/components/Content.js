import React, { Component } from 'react'

class Content extends Component {
    render () {
        return (
            <div className='middleContent'>
                <h1 className='header'>Архитектурное проектирование</h1>
                <ul className='content'>
                    <li>жилые здания(котеджи,многоэтажки)</li>
                    <li>общественные здания(школы, офисы)</li>
                    <li>бизнес центры</li>
                    <li>автомойки</li>
                </ul>
            </div>
        )
    }
}

export default Content