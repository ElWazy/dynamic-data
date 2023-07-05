import AnalysisDetails from '@/components/forms/AnalysisDetails'
import BudgetControl from '@/components/forms/BudgetControl'
import CertificationsAndDocumentation from '@/components/forms/CertificationsAndDocumentation'
import CostCenter from '@/components/forms/CostCenter'
import FieldNotebook from '@/components/forms/FieldNotebook'
import MonthlyDataReport from '@/components/forms/MonthlyDataReport'
import TraceabilityTable from '@/components/forms/TraceabilityTable'
import Link from 'next/link'

const FormsSite = () => {
    return (
        <div className='h-screen flex flex-col gap-8 p-8'>
            <div className="navbar bg-neutral rounded-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Formularios</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li>
                            <Link href='/' className='btn btn-sm btn-error'>Deslogearse</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='overflow-y-auto flex-grow flex flex-col gap-8 md:flex-row md:justify-center'>
                <ul className="menu menu-vertical bg-base-200 max-w-sm rounded-box h-fit ">
                    <li><a>Control de presupuesto</a></li>
                    <li><a>Certificaciones y documentación</a></li>
                    <li><a>Centro de costos</a></li>
                    <li><a>Cuaderno de campo</a></li>
                    <li><a>Detalle de analisis</a></li>
                    <li><a>Reporte mensual de datos</a></li>
                    <li><a>Tabla de trazabilidad</a></li>
                </ul>
                <div className='flex flex-row justify-center'>
                    <TraceabilityTable />
                </div>
            </div>
        </div>
    )
}

export default FormsSite