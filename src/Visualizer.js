import React from 'react';
import Navbar from './Navbar'

export default class Vizualizer extends React.Component {
    constructor() {
        super()
        this.state = {
            array: []
        }
        this.bubbleSort = this.bubbleSort.bind(this)
        this.makeArray = this.makeArray.bind(this)
    }

    componentDidMount() {
        this.makeArray()
    }

    bubbleSort() {
        let bars = document.getElementsByClassName('value')
        let { array } = this.state
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j + 1]
                    array[j + 1] = array[j]
                    array[j] = temp
                    setTimeout(() => {
                        bars[j + 1].style.height = `${array[j]}px`
                        // bars[j + 1].style.backgroundColor = 'red'
                        bars[j].style.height = `${temp}px`
                        // bars[j].style.backgroundColor = 'red'
                    }, i * 50)
                }
            }
        }
    }

    makeArray(num) {
        const array = [];
        for (let i = 0; i < 200; i++) {
            array.push(randomize(1, 600))
        }
        this.setState({ array })
    }

    render() {
        return (
            <div>
                <Navbar onClick={this.bubbleSort} makeArray={this.makeArray}></Navbar>
                <div className='container'>
                    {this.state.array.map((value, idx) => {
                        value = value + 5
                        return (
                            <div
                                className='value'
                                key={idx}
                                style={{ height: `${value}px` }}
                            >
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}