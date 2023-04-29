import { DAT_GHE, HUY_GHE, MUA_VE } from "../types/MovieTicketType"

const stateDefault = {
    danhSachGheDangDat: []
}

const MovieTicketReducer = (state = stateDefault, action) => {
    let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]

    switch (action.type) {
        case DAT_GHE: {
            
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if(index !== -1) {
                danhSachGheDangDatUpdate.splice(index,1)
            } else {
                danhSachGheDangDatUpdate.push(action.ghe)
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate

            return {...state}
        }

        case HUY_GHE: {
            
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)

            if(index !== -1) {
                danhSachGheDangDatUpdate.splice(index,1)
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate

            return {...state}
        }

        case MUA_VE: {
            for (let i = 0; i < danhSachGheDangDatUpdate.length; i++) {
                danhSachGheDangDatUpdate[i].gia = 0;
                danhSachGheDangDatUpdate[i].daDat = true;
            }
            state.danhSachGheDangDat = []

            return {...state}
        }

    
        default:
            return {...state}
    }
}

export default MovieTicketReducer