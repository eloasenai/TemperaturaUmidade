import React from 'react'

const Header = ({isConnected, lastUpdate}) => {

const formatTime = (date) => {
    if(!date) return "--;--;--";
    return date.tolocaleTimeString("pt-BR");
}
  return (
    <div className='mb-5'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <div className='text-center flex-grow-2'>
            <h1 className='display-4 text-gradient mb-3 fw-bold'>
<i className='bi bi-microchip text-primary'>Monitor IoT</i>
</h1>
<p className='lead mb-0 opacity-75'>Temperatura e umidade em tempo real</p>
    </div>
    <Button className='btn btn-outline-secondary btn-lg rounded-circle p-3 theme-toggle' onclick={toggleTheme} title={""}>
<i className='bi bi-sun'></i>
    </Button>
    </div>
     </div>
  )
}

export default Header
