import React from 'react'

function BarChar({data}) {
    return (
        Object.keys(data).map((item, index) => (
            <div className="barChart" key={index}>
                <div className="barChart__bar">
                    <div className="barChart__bar-text"> 
                        <p>{item}</p>
                    </div>
                    <div style={{width:`calc(${data[item]}% * 0.8)`}} className="barChart__bar-width"><div style={{animation: `fromLeftSimple 1s ${(index / 10)+0.5}s linear both`}} className="barChart__bar-width-div"></div></div>
                </div>
                <div className="barChart__percent">
                    <p>{data[item]}%</p>
                </div>
            </div>
        ))
    )
}

export default BarChar
