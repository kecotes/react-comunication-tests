import React from 'react'
import { sharingInformationService } from '../../services/sharing-information.service'

function Component1() {
    const handleClick = () => {
        sharingInformationService.setSubject(true);
    }

    const handleClickNo = () => {
        sharingInformationService.setSubject(false);
    }

    return (
        <>
            <div><button onClick={handleClick}>Enviar information</button></div>
            <div><button onClick={handleClickNo}>No Enviar information</button></div>
        </>
    )
}

export default Component1;