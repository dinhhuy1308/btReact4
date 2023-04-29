import React, { Component, Fragment } from 'react'
import './BookingTicket.css'
import ChairInfo from './ChairInfo'
import data from '../../data/data.json'
import Chair from './Chair'
import { connect } from 'react-redux'
import { muaVeAction } from '../../redux/actions/MovieTicketAction';


class BookingTicket extends Component {
    renderHangGhe = () => {
        return data.map((hangGhe, index) => {
            return (
                <Fragment key={index}>
                    <Chair hangGhe={hangGhe} soHangGhe={index} />
                </Fragment>
            )
        })
    }

    render() {
        return (
            <div className='bookingMovie'>
                <div className="row">
                    <div className="col-8 text-center">
                        <h2 className='text-center' style={{ color: 'orange' }}>ĐẶT VÉ XEM PHIM</h2>
                        <p className='text-white'>Màn Hình</p>
                        <div className='table' style={{ marginLeft: '15%' }}>
                                    {this.renderHangGhe()}
                        </div>
                    </div>
                    <div className="col-4 text-white">
                        <ChairInfo />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		muaVe: () => {
			dispatch(muaVeAction())
		}
	}
}

export default connect (null,mapDispatchToProps)(BookingTicket)
