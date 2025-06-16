export const initialState = {
    hero_image : '../../../sub_diagonal_blank.png',
    hero_header : 'Creators',
    hero_bt1 : 'filled',
    hero_bt2 : 'unfilled',
    hero_bt3 : 'unfilled'
}

export function reducer(_: any, action: {type: number}) {
    switch (action.type) {
        case 1:
            return {
                hero_image : '../../../sub_diagonal_blank.png',
                hero_header : 'Creators',
                hero_bt1 : 'filled',
                hero_bt2 : 'unfilled',
                hero_bt3 : 'unfilled'
            };
        case 2:
            return {
                hero_image : '../../../sub_side_blank.png',
                hero_header : 'Innovators',
                hero_bt1 : 'unfilled',
                hero_bt2 : 'filled',
                hero_bt3 : 'unfilled'
            };
        case 3:
            return {
                hero_image : '../../../sub_front_blank.png',
                hero_header : 'Designers',
                hero_bt1 : 'unfilled',
                hero_bt2 : 'unfilled',
                hero_bt3 : 'filled'
            }
        default :
            return {
                hero_image : '../../../sub_front_blank.png',
                hero_header : 'Innovators',
                hero_bt1 : 'unfilled',
                hero_bt2 : 'unfilled',
                hero_bt3 : 'filled'
            }
    }
}
