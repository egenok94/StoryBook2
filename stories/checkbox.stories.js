import React from 'react'

import { Checkbox } from '../Components/Checkbox'

export default {
    title: "Example/Checkbox",
    component: Checkbox,
}

export const withLable = (args) => <Checkbox {...args} />

withLable.args = {
    label: 'Checkbox',
    isChecked: true,
    id: 'my-checkbox',
}