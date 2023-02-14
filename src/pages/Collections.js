import { StyledGallery } from "../components/Gallery/Galery.style"

import { StyledCard } from "../components/Card/Card.style"

export function Collections({setIsOpen, className}) {


    

    return(
        
            <div  className={className} id='landing-wraper'>
                <div style={{height: '100%'}}>
                    <StyledGallery/>
                </div>
                
                <StyledCard setIsOpen={setIsOpen}/>
            </div>
        
    )
}