import { Component } from 'react';
import { render } from 'react-dom';
import { SkiDayCount } from './skiDayCount';
import { SkiDayList } from './skiDayList';
import { AddDayForm } from './addDayForm';
import { Menu } from './menu';

export class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            allSkiDays: [
                {
				resort: "Squaw Valley",
				date: "2016-01-02",
				powder: true,
				backcountry: false
			}
            ]
        };
        this.addDay = this.addDay.bind(this);
    };
    countDays(filter) {
        const { allSkiDays } = this.state;
        return allSkiDays.filter(
            (day) => (filter) ? day[filter] : day
        ).length;
    };
    addDay (newDay) {
        console.log('triggering add date');
        console.log('resort', newDay.resort);
        console.log('date', newDay.date);
        console.log('powder', newDay.powder);
        console.log('backcountry', newDay.backcountry);
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        });
    }
    render () {
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/add-day") ?
                <AddDayForm addDay={this.addDay}/> : (this.props.location.pathname === "/") ?
                <SkiDayCount total={this.countDays()}
                            powder={this.countDays("powder")}
                            backcountry={this.countDays("backcountry")}/> :
                            <SkiDayList days={this.state.allSkiDays} filterExp={this.props.params.filterExp}/> 
                }
            </div>
        )
    };
}