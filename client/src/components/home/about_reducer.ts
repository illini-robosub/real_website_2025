import {dropdown_content_style_open} from "./about_inline_style.ts";
import {dropdown_content_style_close} from "./about_inline_style.ts";
import {plus_rotate_90} from "./about_inline_style.ts";
import {plus_rotate_0} from "./about_inline_style.ts"

export const initialState = {
    software: dropdown_content_style_close,
    electrical: dropdown_content_style_close,
    mechanical: dropdown_content_style_close,
    software_infrastructure: dropdown_content_style_close,
    software_btn: plus_rotate_0,
    electrical_btn: plus_rotate_0,
    mechanical_btn: plus_rotate_0,
    software_infrastructure_btn: plus_rotate_0
}

export function reducer(_: any, action: {type: number}) {
    switch (action.type) {
        case 1:
            return {
                software: dropdown_content_style_open,
                electrical: dropdown_content_style_close,
                mechanical: dropdown_content_style_close,
                software_infrastructure: dropdown_content_style_close,
                software_btn: plus_rotate_90,
                electrical_btn: plus_rotate_0,
                mechanical_btn: plus_rotate_0,
                software_infrastructure_btn: plus_rotate_0
            }
        case 2:
            return {
                software: dropdown_content_style_close,
                electrical: dropdown_content_style_open,
                mechanical: dropdown_content_style_close,
                software_infrastructure: dropdown_content_style_close,
                software_btn: plus_rotate_0,
                electrical_btn: plus_rotate_90,
                mechanical_btn: plus_rotate_0,
                software_infrastructure_btn: plus_rotate_0
            }
        case 3:
            return {
                software: dropdown_content_style_close,
                electrical: dropdown_content_style_close,
                mechanical: dropdown_content_style_open,
                software_infrastructure: dropdown_content_style_close,
                software_btn: plus_rotate_0,
                electrical_btn: plus_rotate_0,
                mechanical_btn: plus_rotate_90,
                software_infrastructure_btn: plus_rotate_0
            }
        case 4:
            return {
                software: dropdown_content_style_close,
                electrical: dropdown_content_style_close,
                mechanical: dropdown_content_style_close,
                software_infrastructure: dropdown_content_style_open,
                software_btn: plus_rotate_0,
                electrical_btn: plus_rotate_0,
                mechanical_btn: plus_rotate_0,
                software_infrastructure_btn: plus_rotate_90
            }
        case 5:
            return {
                software: dropdown_content_style_close,
                electrical: dropdown_content_style_close,
                mechanical: dropdown_content_style_close,
                software_infrastructure: dropdown_content_style_close,
                software_btn: plus_rotate_0,
                electrical_btn: plus_rotate_0,
                mechanical_btn: plus_rotate_0,
                software_infrastructure_btn: plus_rotate_0
            }
        default :
            return {
                software: dropdown_content_style_close,
                electrical: dropdown_content_style_close,
                mechanical: dropdown_content_style_close,
                software_infrastructure: dropdown_content_style_close,
                software_btn: plus_rotate_0,
                electrical_btn: plus_rotate_0,
                mechanical_btn: plus_rotate_0,
                software_infrastructure_btn: plus_rotate_0
            }
    }
}
