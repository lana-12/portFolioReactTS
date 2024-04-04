import React from 'react';


const SoftSkills = () => {
    return (
        <>
        <section className=' container-fluid'>
            <div className="row ">

                <div className='col boxService'>

                    <div className="serviceIcon">
                        <i className="display-5 bi bi-hourglass "></i>
                        <h3 className="fs-5 mt-2 fw-light">Patience et persévérance</h3>
                    </div>

                    <div className="serviceIcon">
                        <i className="display-5 bi bi-person-fill "></i>
                        <i className="display-5 bi bi-person-fill "></i>
                        <h3 className="fs-5 mt-2 fw-light">Travail en collaboration et esprit d'équipe</h3>
                    </div>

                    <div className="serviceIcon">
                        <i className="display-5 bi bi-list-task "></i>
                        <h3 className="fs-5 mt-2 fw-light">Capacité d'adaptation et organisation</h3>
                    </div>

                    <div className="serviceIcon">
                        <i className="display-5 bi bi-book "></i>
                        <h3 className="fs-5 mt-2 fw-light">Curiosité et soif d'apprendre</h3>
                    </div>
                </div>
            </div>

        </section>
        </>
    );
}

export default SoftSkills;