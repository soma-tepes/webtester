import React from 'react'

const LabelManualBasic = ({handleChange,changeText,handlePrint,componentRefs,waterMark}) => {
  return (
    <>
                        <div>
                            <article>
                                <span>Add Text </span>
                                <form onSubmit={handleChange} >
                                    <input className="inputPrinter" maxlength="9" type="text" value={changeText} onChange={handleChange} placeholder="Max 8 Character" />
                                </form>
                                <button onClick={handlePrint[18]}>Imprimir</button>
                            </article>
                        </div>


                        <div className="containerTicketSubTemplate" onClick={handlePrint[17]}>
                            <div className="contanerText">
                                <div className={`areaImprimir3  ${changeText && changeText.length >= 7 ? "len7" : "lent6"}`}
                                    ref={componentRefs[17]}>
                                    {changeText && changeText}
                                </div>

                                {waterMark}
                            </div>

                        </div>
                    </>
  )
}

export default LabelManualBasic