import Link from "next/link";
import React from "react";
import Style from "../styles/PayForm.module.css";

function FormPay(){

    function NextMobile(e){
        e.preventDefault()
        const Slider = document.querySelector('#Slider');
        const Range = document.querySelector('#range');
        const Paso2 = document.querySelector('#paso2');
        Range.value = 50
        Paso2.style.background = '#6F1AB6';
        Slider.style.marginLeft = '-40%';
    }
    
    function NextMobile2(e){
        e.preventDefault()
        const Slider = document.querySelector('#Slider');
        const Range = document.querySelector('#range');
        const Paso3 = document.querySelector('#paso3');
        Range.value = 100
        Paso3.style.background = '#6F1AB6';
        Slider.style.marginLeft = '-71.8%';
    }

    return(
        <form className={Style.Form} id='form'>
        <div className={Style.ContainerForm}>
            <div className={Style.Range}>
                <div className={Style.ContainerPaso1} id="paso1">
                    <p>Paso 1</p>
                    <span className={Style.Paso1FormMobile}></span>
                </div>
                <div className={Style.ContainerPaso2}>
                    <p>Paso 2</p>
                    <span className={Style.PasosFormMobile} id="paso2"></span>
                </div>
                <div className={Style.ContainerPaso3}>
                    <p>Paso 3</p>
                    <span className={Style.PasosFormMobile} id="paso3"></span>
                </div>
                <input type='range' id='range' value='0' className={Style.InputRange}/>
            </div>
            <div className={Style.ContainerSlider}>
                <div className={Style.ContainerMethodPay} id="Slider">
                    <div className={Style.Flex1}>
                        <p className={Style.TitleMethodPay}>Metodo de pago</p>
                        <p className={Style.indicators}>Seleccione el metodo</p>
                        <select required className={Style.MethodPay}>
                            <option>Visa</option>
                            <option>Mastercard</option>
                            <option>American Express</option>
                        </select>
                        <div>
                            <p className={Style.indicator2}>Numero de tarjeta</p>
                            <input required type='text' className={Style.NumCount2}/>
                            <div className={Style.ContainerIndicatorsMobile}>
                                <p className={Style.indicatorDate}>Fecha de caducidad</p>
                                <p className={Style.indicatorCodeSecurity}>Codigo de securidad</p>
                            </div>
                        </div>
                        <div className={Style.MobileExpirationDate}>
                            <select required className={Style.DayDate}>
                                <option>- -</option>
                            </select>
                            <select required className={Style.YearDate}>
                                <option>- - - -</option>
                            </select>
                            <input required maxLength='3' className={Style.CodeSecurity2}/>
                        </div>
                        <p className={Style.TitleTypePlan}>Tipo de plan</p>
                        <p className={Style.indicators}>Plan</p>
                        <select required className={Style.Plan}>
                            <option>Simple / 0 USD</option>
                            <option>Pro / 5 USD</option>
                            <option>Avanzado / 50 USD</option>
                        </select>
                        <button className={Style.ButtonCancel}>Cancelar</button>
                    </div>
                    <div className={Style.Flex2}>
                        <p className={Style.indicatorsmobile}>Numero de tarjeta</p>
                        <input required className={Style.NumCount}/>
                        <p className={Style.indicatorsmobile}>Codigo de seguridad</p>
                        <input required maxLength='3' type='text' className={Style.CodeSecurity}/>
                        <div className={Style.ContainerTotal}>
                            <div className={Style.Total}>
                                <p className={Style.TitleTotal}>Total</p>
                                <p className={Style.PriceTotal}>$5 USD</p>
                            </div>
                        </div>
                        <div className={Style.ContainerButtons}>
                            <Link href='/' className={Style.ButtonCancel2}>Cancelar</Link>
                            <Link href='/Confirm' className={Style.ButtonContinue} >Continuar</Link>
                            <button className={Style.ButtonContinueMobile} onClick={NextMobile}>Continuar</button>
                        </div>
                    </div>
                </div>
                <div className={Style.Billing}>
                    <p className={Style.TitleInfo}>Informacion de facturacion</p>
                    <div className={Style.ContainerInfo}>
                        <div>
                            <div className={Style.ContainerInfo1}>
                                <div className={Style.Info1}>
                                    <p className={Style.indicatorsInfo}>Nombre</p>
                                    <input required type='text' className={Style.InputsInfo}/>
                                </div>
                                <div className={Style.Info2}>
                                    <p className={Style.indicatorsInfo}>Apellido</p>
                                    <input required type='text' className={Style.InputsInfo}/>
                                </div>
                            </div>
                            <div className={Style.ContainerInfo2}>
                                <div className={Style.Info1Mobile}>
                                    <p className={Style.indicatorsInfo}>Direccion de facturacion</p>
                                    <input required type='text' className={Style.InputsInfomobile}/>
                                </div>
                                <div className={Style.Info2Mobile}>
                                    <p className={Style.indicatorsInfo}>Correo electronico</p>
                                    <input required type='email' className={Style.InputsInfomobile}/>
                                </div>
                            </div>
                            <div className={Style.ContainerInfo1}>
                                <div className={Style.Info1}>
                                    <p className={Style.indicatorsInfo}>Localidad</p>
                                    <input required type='text' className={Style.InputsInfo}/>
                                </div>
                                <div className={Style.Info2}>
                                    <p className={Style.CodePostalMobile}>Codigo postal o zip</p>
                                    <p className={Style.CodePostalMobile2}>Codigo postal</p>
                                    <input required type='text' className={Style.InputsInfo}/>
                                </div>
                            </div>
                            <div className={Style.ContainerInfo1}>
                                <div className={Style.ContainerInfoAdition}>
                                    <p className={Style.indicatorsInfo}>Pais</p>
                                    <input required type='text' className={Style.InputsInfo}/>
                                </div>
                                <div className={Style.ContainerInfoAdition}>
                                    <p className={Style.indicatorsInfo}>Telefono</p>
                                    <input required type='tel' className={Style.InputsInfo}/>
                                </div>
                            </div>
                            <div className={Style.ContainerButtonsInfo}>
                                <Link href='/' className={Style.ButtonCancel2}>Cancelar</Link>
                                <button className={Style.ButtonContinue2} onClick={NextMobile2}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.DataUser}>
                    <h1 className={Style.TitleConfirmData}>Confirmar datos</h1>
                    <div className={Style.ContainerConfirm}>
                        <p className={Style.ConfirmData}>Nombre: </p>
                        <p className={Style.ConfirmData}>Apellido: </p>
                        <p className={Style.ConfirmData}>Direccion de facturacion: </p>
                        <p className={Style.ConfirmData}>Correo electronico: </p>
                        <p className={Style.ConfirmData}>Localidad: </p>
                        <p className={Style.ConfirmData}>Codigo postal/zip: </p>
                        <p className={Style.ConfirmData}>Pais: </p>
                        <p className={Style.ConfirmData}>Telefono:</p>
                    </div>
                    <div className={Style.Flex2}>
                        <p className={Style.indicatorsmobile}>Numero de tarjeta</p>
                        <input required className={Style.NumCount}/>
                        <p className={Style.indicatorsmobile}>Codigo de seguridad</p>
                        <input required maxLength='3' className={Style.CodeSecurity}/>
                        <div className={Style.ContainerTotal}>
                            <div className={Style.Total}>
                                <p className={Style.TitleTotal}>Total</p>
                                <p className={Style.PriceTotal}>$5 USD</p>
                            </div>
                        </div>
                        <div className={Style.ContainerButtonsConfirm}>
                            <Link href='/' className={Style.ButtonCancel2}>Cancelar</Link>
                            <Link href='/Confirm' className={Style.ButtonContinueMobile}>Finalizar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    )
};

export default FormPay;
