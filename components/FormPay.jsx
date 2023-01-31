import React from "react";
import Style from "../styles/FormPay.module.css";

const FormPay = () => (
    <form>
        <div className={Style.ContainerForm}>
            <div className={Style.ContainerMethodPay}>
                <div>
                    <p className={Style.TitleMethodPay}>Metodo de pago</p>
                    <p className={Style.indicators}>Seleccione el metodo</p>
                    <select className={Style.MethodPay}>
                        <option>Opcion 1</option>
                        <option>Opcion 1</option>
                        <option>Opcion 1</option>
                        <option>Opcion 1</option>
                    </select>
                    <p className={Style.indicators}>Fecha de caducidad</p>
                    <div>
                        <input className={Style.DayDate}/>
                        <input className={Style.YearDate}/>
                    </div>
                    <p className={Style.TitleTypePlan}>Tipo de plan</p>
                    <p className={Style.indicators}>Plan</p>
                    <select className={Style.Plan}>
                        <option>Opcion 1</option>
                        <option>Opcion 1</option>
                        <option>Opcion 1</option>
                        <option>Opcion 1</option>
                    </select>
                    <button className={Style.ButtonCancel}>Cancelar</button>
                </div>
            </div>
            <div>
                <div>
                    <p>Informacion de facturacion</p>
                </div>
            </div>
        </div>
    </form>
)

export default FormPay
