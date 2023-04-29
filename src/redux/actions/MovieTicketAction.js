import { DAT_GHE, HUY_GHE, MUA_VE } from "../types/MovieTicketType"

export const datGheAction = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}

export const huyGheAction = (soGhe) => {
    return {
        type: HUY_GHE,
        soGhe
    }
}

export const muaVeAction = () => {
    return {
        type: MUA_VE,
    }
}