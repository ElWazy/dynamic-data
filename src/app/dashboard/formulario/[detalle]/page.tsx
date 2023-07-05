import Link from 'next/link'
import React from 'react'

const DetailForm = () => {
  return (
    <div className='h-screen flex flex-col gap-8 p-8'>
      <div className="navbar bg-neutral rounded-lg">
        <div className="flex-1">
          <Link href='/dashboard' className="btn btn-ghost normal-case text-xl">Detalle</Link>
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
      <div className="overflow-x-auto overflow-y-auto flex-grow flex justify-center">
        <div className='card bg-neutral w-full max-w-sm h-fit'>
          <div className="card-body">
            <div className='card-title mb-4'>
              <h1 className='text-3xl'>Centro de costo</h1>
            </div>
            <div className='mb-4'>
              <h2 className='text-2xl font-bold mb-2'>Información</h2>
              <p>Santiago Fierro</p>
              <p>santiago.fierro4@gmail.com</p>
              <p>Enviado el {new Date().toLocaleString()}</p>
            </div>
            <div className='mb-4'>
              <h2 className='text-2xl font-bold mb-2'>Datos ingresados</h2>
              <p><span className='font-bold'>Certificaciones:</span> Cisco</p>
              <p><span className='font-bold'>Documentación:</span> ITIL</p>
              <p><span className='font-bold'>Modulo reportes:</span> 00233</p>
              <p><span className='font-bold'>Trazabilidad:</span> 46%</p>
              <p><span className='font-bold'>Reclamos:</span> Ninguno porque la plataforma funciona como los dioses 😎</p>
            </div>
            <Link href='/dashboard' className='btn btn-secondary btn-sm'>Generar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailForm