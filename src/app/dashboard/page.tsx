import Link from "next/link"

const AdminDashboard = () => {
    let a = []
    for (let i = 0; i < 100; i++) {
        a[i] = `${i}`
    }

    return (
        <div className='h-screen flex flex-col gap-8 p-8'>
            <div className="navbar bg-neutral rounded-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Respuestas</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li>
                            <Link href='/formularios'>Formularios</Link>
                        </li>
                        <li>
                            <Link href='/' className='btn btn-sm btn-error'>Deslogearse</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 22</button>
                <button className="join-item btn">»</button>
            </div>
            <div className="overflow-x-auto overflow-y-auto flex-grow">
                <table className="table bg-neutral">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Tipo Formulario</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Generar Reporte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {a.map((e) => (
                            <tr key={e}>
                                <td>
                                    Servicios
                                </td>
                                <td>
                                    Santiago Fierro
                                </td>
                                <td>
                                    santiago.fierro4@gmail.com
                                </td>
                                <td><span className="badge badge-primary badge-md">Usuarios</span></td>
                                <th>
                                    <Link href={`/dashboard/formulario/${e}`} className="btn btn-success btn-xs">Ver</Link>
                                </th>
                                <th>
                                    <button className="btn btn-secondary btn-xs">Generar</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminDashboard