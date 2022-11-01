import {Component} from "react";

class Clock extends Component {
    constructor(props) {
        super(props);

        const date = new Date();

        this.state = {
            hour : date.getHours(),
            minute : date.getMinutes(),
            second : date.getSeconds(),
            period : date.getHours() >= 12 ? 'PM' : 'AM'
        };
    }

    componentDidMount() {
        this.updateTime()
    }

    updateTime = () => {
        this.myInterval = setInterval(() => {

            //update the time period base on hour
            if (this.state.hour >= 12){
                this.setState({
                    period : 'PM'
                })
            } else {
                this.setState({
                    period : 'AM'
                })
            }

            //update hour/minute/second
            if (this.state.hour >= 24) {
                this.setState({
                        hour : 0,
                        minute : 0,
                        second : 0
                    }
                )
            } else if (this.state.minute >= 60){
                this.setState(prevState => ({
                        hour : prevState.hour + 1,
                        minute : 0,
                        second : 0
                    }
                ))
            } else if (this.state.second >= 60){
                this.setState(prevState => ({
                        minute : prevState.minute + 1,
                        second : 0
                    }
                ))
            } else {
                this.setState(prevState => ({
                    second: prevState.second + 1
                }))
            }
        }, 1000)
    }

    //update hour base on input
    updateHour(evt) {
        const hour = evt.target.value;

        this.setState({
            hour : hour
        })
    }

    //update minute base on input
    updateMinute(evt) {
        const minute = evt.target.value;

        this.setState({
            minute : minute
        })
    }

    //update second base on input
    updateSecond(evt) {
        const second = evt.target.value;

        this.setState({
            second : second
        })
    }

    render() {
        return (
            <div className = "Clock">
                <p>London Clock</p>

                <input style={{width : "20px"}} value={this.state.hour} onChange={evt => this.updateHour(evt)}></input>

                :

                <input style={{width : "20px"}} value={this.state.minute} onChange={evt => this.updateMinute(evt)}></input>

                :

                <input style={{width : "20px"}} value={this.state.second} onChange={evt => this.updateSecond(evt)}></input>

                <b>  {this.state.period}</b>
            </div>
        )
    }

}

export default Clock