import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Dynamic Data</h1>
          <p className="py-6">Estamos orientados a conseguir la mejor planificacion y rendimiento en tu cultivo.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo</span>
              </label>
              <input type="text" placeholder="micorreo@gmail.com" className="input input-bordered input-primary" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input type="password" placeholder="micontraseña1324" className="input input-bordered input-primary" />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <Link href="/dashboard" className="btn btn-primary">Entrar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
