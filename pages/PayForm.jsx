import React from "react";
import Link from "next/link";
import Head from "next/head";
import Style from "../styles/PayForm.module.css";

const FormPay = () => {
  return (
    <>
      <Head>
        <title>Metodo de pago</title>
        <meta
          name="description"
          content="Landing page"
        />
        <link rel='icon' href='/fav.png' />
      </Head>

    <form className={Style.Form}>
        <div className={Style.ContainerForm}>
            <div className={Style.ContainerMethodPay}>
                <div className={Style.Flex1}>
                    <p className={Style.TitleMethodPay}>Metodo de pago</p>
                    <p className={Style.indicators}>Seleccione el metodo</p>
                    <select className={Style.MethodPay}>
                        <option>Visa</option>
                        <option>Mastercard</option>
                        <option>American Express</option>
                    </select>
                    <p className={Style.indicators}>Fecha de caducidad</p>
                    <div>
                        <select className={Style.DayDate}>
                            <option>- -</option>
                        </select>
                        <select className={Style.YearDate}>
                            <option>- - - -</option>
                        </select>
                    </div>
                    <p className={Style.TitleTypePlan}>Tipo de plan</p>
                    <p className={Style.indicators}>Plan</p>
                    <select className={Style.Plan}>
                        <option>Simple / 0 USD</option>
                        <option>Pro / 5 USD</option>
                        <option>Avanzado / 50 USD</option>
                    </select>
                    <Link href='/#plans'>
                    <button className={Style.ButtonCancel}>Cancelar</button>
                    </Link>
                </div>
                <div className={Style.Flex2}>
                    <p className={Style.indicators}>Numero de tarjeta</p>
                    <input className={Style.NumCount}/>
                    <p className={Style.indicators}>Codigo de seguridad</p>
                    <input maxLength='3' className={Style.CodeSecurity}/>
                    <div className={Style.ContainerTotal}>
                        <div className={Style.Total}>
                            <p className={Style.TitleTotal}>Total</p>
                            <p className={Style.PriceTotal}>$5 USD</p>
                        </div>
                    </div>
                    <Link href='/Confirm'>
                    <button className={Style.ButtonContinue}>Continuar</button>
                    </Link>
                </div>
            </div>
            <div>
                <p className={Style.TitleInfo}>Informacion de facturacion</p>
                <div className={Style.ContainerInfo}>
                    <div>
                        <p className={Style.indicatorsInfo}>Nombre</p>
                        <input type='text' className={Style.InputsInfo}/>
                        <p className={Style.indicatorsInfo}>Direccion de facturacion</p>
                        <input type='text' className={Style.InputsInfo}/>
                        <p className={Style.indicatorsInfo}>Correo electronico</p>
                        <input type='text' className={Style.InputsInfo}/>
                        <div className={Style.ContainerInfoAdition}>
                            <p className={Style.indicatorsInfo}>Pais</p>
                            <input type='text' className={Style.InputsInfo}/>
                        </div>
                    </div>
                    <div>
                        <p className={Style.indicatorsInfo}>Apellido</p>
                        <input type='text' className={Style.InputsInfo}/>
                        <p className={Style.indicatorsInfo}>Localidad</p>
                        <input type='text' className={Style.InputsInfo}/>
                        <p className={Style.indicatorsInfo}>Codigo postal o zip</p>
                        <input type='number' className={Style.InputsInfo}/>
                        <div className={Style.ContainerInfoAdition}>
                            <p className={Style.indicatorsInfo}>Telefono</p>
                            <input type='tel' className={Style.InputsInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </form>
    </>
);
};

export default FormPay;
