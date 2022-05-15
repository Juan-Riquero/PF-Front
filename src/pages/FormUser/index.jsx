import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';


export default function App() {
  const { register, handleSubmit, formState: { errors }, formState } = useForm({ mode: "onChange", });
  // const { register, handleSubmit, formState: { errors } , reset, watch,formState } = useForm({mode: "onChange",});

  const onSubmit = data => console.log(data);

  return (
    <section className={styles.main_createUser}>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario}>
            <fieldset className={styles.formulario__fieldset}>
              <legend className={styles.formulario__legend}><h1>Create Account</h1></legend>
              <div className={styles.formulario__contenedorCampos}>
                <div className={styles.formulario__contenedorCampos__campo}>
                  <input type="text"
                    className={styles.formulario__campo__inputTexto}
                    placeholder="Full Name"
                    {...register("FullName", {
                      required: true,
                      maxLength: 100,
                      pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{5,150}$/
                    })
                    }
                  />
                  {errors.FullName?.type === "required" && <p className={styles.leyenda}>Full Name is required</p>}
                  {errors.FullName?.type === "maxLength" && <p className={styles.leyenda}>Full Name must be less than 100 characters</p>}
                  {errors.FullName?.type === "pattern" && <p className={styles.leyenda}>Full Name must be alphabetic and must contain at least 5 characters</p>}
                </div>

                <div className={styles.formulario__contenedorCampos__campo}>
                  <input
                    className={styles.formulario__campo__inputTexto}
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      maxLength: 100,
                      pattern: /^\S+@\S+$/i
                    })
                    }
                  />
                  {errors.Email?.type === "required" && <p className={styles.leyenda}>Email is required</p>}
                  {errors.Email?.type === "pattern" && <p className={styles.leyenda}>Email is invalid</p>}
                  {errors.Email?.type === "maxLength" && <p className={styles.leyenda}>Email is too long</p>}
                </div>

                <div className={styles.formulario__contenedorCampos__campo}>
                  <input type="password"
                    className={styles.formulario__campo__inputTexto}
                    placeholder="Password"
                    {...register("Password", {
                      required: true,
                      maxLength: 20,
                      // Contraseña debe de tener al menos un numero, una letra en minuscula, una mayuscula y un caracter especial.
                      // No pueden aparecer espacios en blanco. de 8 a 20 caracteres.
                      pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*@#$%^&+=])(?=\S+$).{8,20}$/
                    })
                    }
                  />
                  {errors.Password?.type === "required" && <p className={styles.leyenda}>Password is required</p>}
                  {errors.Password?.type === "pattern" && <p className={styles.leyenda}>Password must have at least one number, one lowercase and one uppercase letter, one special character and no spaces</p>}
                  {errors.Password?.type === "maxLength" && <p className={styles.leyenda}>Password must be between 8 and 20 characters</p>}
                </div>

                <div className={styles.formulario__contenedorCampos__campo}>
                  <input
                    type="checkbox"
                    className={styles.input_checkBox}
                    placeholder="termsAndConditions"
                    {...register("termsAndConditions", {
                      required: true
                    })
                    }
                  />
                  <label>I agree with Terms and Privacy</label>
                  {errors.termsAndConditions?.type === "required" && <p className={styles.leyenda}>You must accept the terms and privacy</p>}
                </div>
              </div>

              <div className={styles.contenedorBotones}>
                <button type="submit" className={styles.contenedorBotones__boton}>SIGN UP</button>
                <button onClick={() => console.log(errors)} className={styles.contenedorBotones__boton}>
                  Sign Un with Google
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className={styles.rightBox}>
          <div className={styles.x}>
            <h2>HENRYS</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

