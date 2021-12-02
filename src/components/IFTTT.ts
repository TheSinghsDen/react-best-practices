import React from 'react'

interface IFTT_Type {
    conditions: [],
    components: []
}

const IFTTT = ({ conditions, components }: IFTT_Type):React.FC => {
    const conditions_length = conditions.length
    const components_length = components.length

    if (conditions_length == 0 || components_length == 0) {
        console.log("IFTTT Error: Incompleter condition or component array")
        return null
    }

    if (conditions_length !== components_length) {
        console.log("IFTTT Error: The number of conditions do not match the number of provided components")
        return null
    }
    for (let i = 0; i < conditions_length; i++){
        if (conditions[i]) {
            return () => components[i]
        }
    }
    
}

export default IFTTT

