import Link from "next/link"

const MonthlyDataReport = () => {
    return (
        <div className='card bg-neutral w-full max-w-sm h-fit'>
            <div className="card-body">
                <div className='card-title'>
                    Reporte mensual de datos
                </div>
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
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Correo</span>
                    </label>
                    <input type="text" placeholder="micorreo@gmail.com" className="input input-bordered input-primary" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Correo</span>
                    </label>
                    <input type="text" placeholder="micorreo@gmail.com" className="input input-bordered input-primary" />
                </div>
                <div className="form-control mt-6">
                    <Link href="/dashboard" className="btn btn-primary">Entrar</Link>
                </div>
            </div>
        </div>
    )
}

export default MonthlyDataReport