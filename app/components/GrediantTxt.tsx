import React from 'react'
import GradientText from '@/components/GradientText'
interface props {
    ClassName?: string;
    text: string;
    span?: string;
}

function GrediantTxt({ ClassName, text,span }: props) {
    return (

        <GradientText
            colors={["#32dea1", "#1e956a", "#1e956a", "#32dea1", "#32dea1"]}
            animationSpeed={3}
            showBorder={false}
            className={ClassName}
        >
             <span className='text-black'>{span}</span> {text}
        </GradientText>

    )
}




export default GrediantTxt
