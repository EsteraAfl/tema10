import React, {Component} from 'react'
import Square from './Square'

export default class Board extends Component {
	constructor(props) {
		super(props)

		this.state = {
			squares: Array(9).fill(null),
			isXTurn: true,
			win: '',
			check: true
		}
	}

	onSquareClick(index) {
		if (this.state.check) {
		const squares = [...this.state.squares];
		squares[index] = this.state.isXTurn ? 'X' : '0'
		this.setState({
			squares,
			isXTurn: !this.state.isXTurn
		})
		if (squares[0] == squares[1] && squares[1] == squares[2] && squares[0] != null) {
			this.setState({ win: `${squares[0]} won!`})
			this.setState({ check: false});
		}
		if (squares[3] == squares[4] && squares[4] == squares[5] && squares[3] != null) {
			this.setState({ win: `${squares[3]} won!`})
			this.setState({ check: false});
		}
		if (squares[6] == squares[7] && squares[7] == squares[8] && squares[6] != null) {
			this.setState({ win: `${squares[6]} won!`})
			this.setState({ check: false});
		}
		if (squares[0] == squares[3] && squares[3] == squares[6] && squares[0] != null) {
			this.setState({ win: `${squares[0]} won!`})
			this.setState({ check: false});
		}
		if (squares[1] == squares[4] && squares[4] == squares[7] && squares[2] != null) {
			this.setState({ win: `${squares[1]} won!`})
			this.setState({ check: false});
		}
		if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != null) {
			this.setState({ win: `${squares[2]} won!`})
			this.setState({ check: false});
		}
		if (squares[0] == squares[4] && squares[4] == squares[8] && squares[0] != null) {
			this.setState({ win: `${squares[0]} won!`})
			this.setState({ check: false});
		}
		if (squares[2] == squares[4] && squares[4] == squares[6] && squares[2] != null) {
			this.setState({ win: `${squares[2]} won!`})
			this.setState({ check: false});
			
		}
	}
	}

	render() {
		return <div className="board">
			{
				this.state.squares.map( 
					(value, index) => <Square key={index}
					value={value}
					onSquareClick={() => this.onSquareClick(index)}
				/>)
			}
			{this.state.win}
		</div>
	}
}
