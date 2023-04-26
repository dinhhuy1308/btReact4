import React, { Component } from 'react'
import { huyGheAction } from '../../redux/actions/MovieTicketAction';
import {connect} from 'react-redux'

class ChairInfo extends Component {
	render() {
		return (
			<div className='text-left '>
				<h2 className='text-center '>
					<span>DANH SÁCH GHẾ BẠN CHỌN</span>
				</h2>
				<div>
					<span className="gheDuocChon mr-2"></span>
					<span>Số ghế đặt </span>
				</div>
				<div className='my-3'>
					<span className="gheDangChon mr-2"></span>
					<span>Số ghế đang chọn </span>
				</div>
				<div>
					<span className="gheChuaChon mr-2"></span>
					<span>Số ghế đặt </span>

				</div>
				<table className='table mt-5 text-white text-center' border={2}>
					<thead>
						<tr>
							<th>Số ghế</th>
							<th>Giá tiền</th>
							<th>?</th>
						</tr>
					</thead>
					<tbody style={{ color: 'rgb(109, 238, 109)' }}>
						{this.props.danhSachGheDangDat.map((gheDangDat,index) => {
							return <tr key={index}>
								<td>{gheDangDat.soGhe}</td>
								<td>{gheDangDat.gia.toLocaleString()} VNĐ</td>
								<td>
									<button onClick={()=>{
										this.props.huyGhe(gheDangDat.soGhe)
									}} className='cancel'>X</button>
								</td>
							</tr>
						}) }
					</tbody>
					<tfoot>
						<tr>
							<td>Tổng tiền:</td>
							<td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat)=>{
								return  tongTien += gheDangDat.gia
							},0).toLocaleString()} VNĐ</td>
						</tr>
					</tfoot>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		danhSachGheDangDat: state.MovieTicketReducer.danhSachGheDangDat
	}
}

const mapDispatchToProps = dispatch => {
	return {
		huyGhe: (soGhe) => {
			dispatch(huyGheAction(soGhe))
		}
	}
}




export default connect (mapStateToProps,mapDispatchToProps)(ChairInfo)
